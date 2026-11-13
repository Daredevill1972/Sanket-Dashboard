import { CapAlert } from '../types/cap';

export interface VoiceAdvisoryState {
  isSpeaking: boolean;
  currentAlertIndex: number;
  totalAlerts: number;
  stateName: string;
}

type StateListener = (state: VoiceAdvisoryState) => void;

class VoiceAdvisoryService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private listeners: Set<StateListener> = new Set();
  private state: VoiceAdvisoryState = {
    isSpeaking: false,
    currentAlertIndex: 0,
    totalAlerts: 0,
    stateName: ''
  };

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      // Preload browser speech voices
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => {
          this.getVoices();
        };
      }
    }
  }

  private notify() {
    this.listeners.forEach((listener) => listener({ ...this.state }));
  }

  public subscribe(listener: StateListener): () => void {
    this.listeners.add(listener);
    listener({ ...this.state });
    return () => {
      this.listeners.delete(listener);
    };
  }

  public getState(): VoiceAdvisoryState {
    return { ...this.state };
  }

  private getVoices(): SpeechSynthesisVoice[] {
    if (!this.synth) return [];
    return this.synth.getVoices();
  }

  private pickVoice(lang: 'en' | 'hi'): SpeechSynthesisVoice | null {
    const voices = this.getVoices();
    if (lang === 'hi') {
      const hiVoice = voices.find((v) => v.lang.startsWith('hi') || v.name.toLowerCase().includes('hindi'));
      if (hiVoice) return hiVoice;
    }

    // English Indian or standard English voice
    const enInVoice = voices.find(
      (v) => v.lang === 'en-IN' || v.name.toLowerCase().includes('india')
    );
    if (enInVoice) return enInVoice;

    const enVoice = voices.find((v) => v.lang.startsWith('en'));
    return enVoice || voices[0] || null;
  }

  /**
   * Broadcasts a multi-lingual spoken voice advisory for the selected state and active alerts
   */
  public speakAlerts(stateName: string, alerts: CapAlert[], lang: 'en' | 'hi' = 'en'): void {
    if (!this.synth) {
      console.warn('SpeechSynthesis is not supported in this browser.');
      return;
    }

    // Stop any existing speech synthesis
    this.stop();

    if (!alerts || alerts.length === 0) {
      const noAlertsMsg =
        lang === 'hi'
          ? `वर्तमान में ${stateName} के लिए कोई सक्रिय आपदा चेतावनी नहीं है। स्थिति सामान्य है।`
          : `Currently there are no active disaster alerts for ${stateName}. Region status is normal.`;
      const utterance = new SpeechSynthesisUtterance(noAlertsMsg);
      const voice = this.pickVoice(lang);
      if (voice) utterance.voice = voice;
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      this.synth.speak(utterance);
      return;
    }

    // Construct structured, clear emergency voice broadcast message
    let broadcastText = '';
    if (lang === 'hi') {
      broadcastText = `सावधान। ${stateName} के लिए राष्ट्रीय आपदा प्रबंधन प्राधिकरण आपातकालीन चेतावनी प्रसारण। कुल ${alerts.length} सक्रिय चेतावनियां हैं। `;
      alerts.slice(0, 3).forEach((a, idx) => {
        broadcastText += `चेतावनी नंबर ${idx + 1}: ${a.info.event}। ${a.info.headline}। `;
        if (a.info.instruction) {
          broadcastText += `सार्वजनिक निर्देश: ${a.info.instruction}। `;
        }
      });
      broadcastText += `सुरक्षित स्थानों पर रहें और स्थानीय प्रशासन के निर्देशों का पालन करें।`;
    } else {
      broadcastText = `Attention. National Disaster Management Emergency Broadcast for ${stateName}. There are ${alerts.length} active warning${alerts.length > 1 ? 's' : ''}. `;
      alerts.slice(0, 3).forEach((a, idx) => {
        broadcastText += `Warning ${idx + 1}: ${a.info.event}. ${a.info.headline}. `;
        if (a.info.instruction) {
          broadcastText += `Directive: ${a.info.instruction}. `;
        }
      });
      broadcastText += `Stay in reinforced shelters and follow emergency advisories.`;
    }

    const utterance = new SpeechSynthesisUtterance(broadcastText);
    const voice = this.pickVoice(lang);
    if (voice) utterance.voice = voice;
    utterance.rate = 0.95; // Slightly slower for emergency broadcast clarity
    utterance.pitch = 1.05;

    this.currentUtterance = utterance;
    this.state = {
      isSpeaking: true,
      currentAlertIndex: 1,
      totalAlerts: alerts.length,
      stateName
    };
    this.notify();

    utterance.onend = () => {
      this.state.isSpeaking = false;
      this.notify();
    };

    utterance.onerror = (e) => {
      console.warn('Voice advisory playback error:', e);
      this.state.isSpeaking = false;
      this.notify();
    };

    this.synth.speak(utterance);
  }

  public stop(): void {
    if (this.synth) {
      this.synth.cancel();
    }
    this.state.isSpeaking = false;
    this.notify();
  }
}

export const voiceAdvisoryService = new VoiceAdvisoryService();

