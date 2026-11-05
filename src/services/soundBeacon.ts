// Audio synthesizer for International Morse Code SOS Distress Beacon: ... --- ...
class SoundBeaconService {
  private audioCtx: AudioContext | null = null;
  private isPlaying = false;
  private loopTimeout: number | null = null;

  private initAudio() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  // Play a single tone at frequency (Hz) for duration (ms)
  private playTone(freq: number, durationMs: number): Promise<void> {
    return new Promise((resolve) => {
      if (!this.audioCtx || !this.isPlaying) {
        return resolve();
      }

      try {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'square'; // Piercing buzzer tone
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

        // Anti-click attack and decay envelope
        gain.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.4, this.audioCtx.currentTime + 0.02);
        gain.gain.setValueAtTime(0.4, this.audioCtx.currentTime + (durationMs / 1000) - 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + (durationMs / 1000));

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start();
        osc.stop(this.audioCtx.currentTime + (durationMs / 1000));

        setTimeout(resolve, durationMs);
      } catch (err) {
        console.error('Audio synthesis error:', err);
        resolve();
      }
    });
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((r) => setTimeout(r, ms));
  }

  // Plays one SOS sequence: 3 dots (120ms), 3 dashes (360ms), 3 dots (120ms)
  async playSosSequence(onPulse?: (isOn: boolean) => void): Promise<void> {
    const dotDuration = 140;
    const dashDuration = 380;
    const symbolGap = 100;
    const letterGap = 280;
    const freq = 880; // High piercing pitch (A5)

    const doPulse = async (duration: number) => {
      if (!this.isPlaying) return;
      onPulse?.(true);
      await this.playTone(freq, duration);
      onPulse?.(false);
      await this.sleep(symbolGap);
    };

    // S: ...
    for (let i = 0; i < 3 && this.isPlaying; i++) {
      await doPulse(dotDuration);
    }
    await this.sleep(letterGap);

    // O: ---
    for (let i = 0; i < 3 && this.isPlaying; i++) {
      await doPulse(dashDuration);
    }
    await this.sleep(letterGap);

    // S: ...
    for (let i = 0; i < 3 && this.isPlaying; i++) {
      await doPulse(dotDuration);
    }
  }

  start(onPulse?: (isOn: boolean) => void) {
    this.initAudio();
    this.isPlaying = true;

    const runLoop = async () => {
      while (this.isPlaying) {
        await this.playSosSequence(onPulse);
        if (this.isPlaying) {
          // 1.5s pause between repeated SOS distress bursts
          await this.sleep(1500);
        }
      }
    };

    runLoop();
  }

  stop() {
    this.isPlaying = false;
    if (this.loopTimeout) {
      clearTimeout(this.loopTimeout);
      this.loopTimeout = null;
    }
  }

  getIsActive(): boolean {
    return this.isPlaying;
  }
}

export const soundBeacon = new SoundBeaconService();

