// Pre-configured authentic NDMA CAP XML Feeds representing major hazard alerts across India

export const SAMPLE_CYCLONE_CAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<alert xmlns="urn:oasis:names:tc:emergency:cap:1.2">
  <identifier>NDMA-IN-2026-CY-084</identifier>
  <sender>ndma.imd.gov.in</sender>
  <sent>2026-11-05T08:30:00+05:30</sent>
  <status>Actual</status>
  <msgType>Alert</msgType>
  <scope>Public</scope>
  <info>
    <category>Met</category>
    <event>Very Severe Cyclonic Storm 'Varuna'</event>
    <urgency>Immediate</urgency>
    <severity>Extreme</severity>
    <certainty>Observed</certainty>
    <headline>RED ALERT: Very Severe Cyclonic Storm Landfall within 12 Hours Along Odisha-Andhra Coast</headline>
    <description>Cyclonic Storm 'Varuna' centered over west-central Bay of Bengal moving north-northwestwards with sustained wind speeds of 135-145 kmph gusting to 160 kmph. Extreme rainfall (above 210mm) expected in coastal Odisha and north coastal Andhra Pradesh. Storm surge of 2.5-3.0m likely to inundate low lying areas.</description>
    <instruction>Total suspension of fishing operations. Immediate evacuation of population living within 5km of coastline to designated Multipurpose Cyclone Shelters. Keep mobile phones charged, maintain 48 hours dry food and water. Do not venture outdoors during landfall eye calm.</instruction>
    <senderName>National Disaster Management Authority (NDMA) &amp; IMD Cyclone Warning Division</senderName>
    <area>
      <areaDesc>Coastal Districts of Puri, Jagatsinghpur, Kendrapara, Ganjam (Odisha) and Srikakulam (Andhra Pradesh)</areaDesc>
      <!-- CAP Polygon coordinate pairs: lat,lon lat,lon -->
      <polygon>18.15,83.90 18.60,84.40 19.30,85.10 19.85,85.85 20.25,86.60 19.80,86.90 19.10,85.90 18.20,84.95 17.80,83.70 18.15,83.90</polygon>
    </area>
  </info>
</alert>`;

export const SAMPLE_FLOOD_CAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<alert xmlns="urn:oasis:names:tc:emergency:cap:1.2">
  <identifier>NDMA-IN-2026-FL-119</identifier>
  <sender>cwc.ndma.gov.in</sender>
  <sent>2026-11-05T09:15:00+05:30</sent>
  <status>Actual</status>
  <msgType>Alert</msgType>
  <scope>Public</scope>
  <info>
    <category>Met</category>
    <event>Severe Riverine Inundation &amp; Flash Flood</event>
    <urgency>Immediate</urgency>
    <severity>Extreme</severity>
    <certainty>Observed</certainty>
    <headline>RED ALERT: River Brahmaputra Flowing in Extreme Flood Situation Exceeding Danger Mark by 1.85m</headline>
    <description>Central Water Commission hydrological station at Nematighat and Guwahati reports Brahmaputra river discharging at 42,000 m3/s following continuous cloudbursts in upper catchment. Embankments breached in Kamrup and Barpeta. 85% of Kaziranga National Park inundated. Critical threat to human settlements.</description>
    <instruction>Move livestock and families to elevated flood shelters and highland embankments. Follow SDRF and NDRF rescue boat directives. Avoid wading in fast-flowing flood waters. Boil or chlorinate all drinking water.</instruction>
    <senderName>Central Water Commission &amp; Assam State Disaster Management Authority (ASDMA)</senderName>
    <area>
      <areaDesc>Brahmaputra Floodplains: Kamrup, Morigaon, Nagaon, Golaghat, Majuli, and Barpeta Districts</areaDesc>
      <polygon>26.10,91.30 26.35,91.80 26.50,92.60 26.70,93.40 26.95,94.20 26.65,94.30 26.30,93.10 26.05,92.10 25.90,91.40 26.10,91.30</polygon>
    </area>
  </info>
</alert>`;

export const SAMPLE_LANDSLIDE_CAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<alert xmlns="urn:oasis:names:tc:emergency:cap:1.2">
  <identifier>NDMA-IN-2026-LS-042</identifier>
  <sender>gsi.hp-sdma.gov.in</sender>
  <sent>2026-11-05T07:45:00+05:30</sent>
  <status>Actual</status>
  <msgType>Alert</msgType>
  <scope>Public</scope>
  <info>
    <category>Geo</category>
    <event>High-Risk Landslide &amp; Debris Flow Alert</event>
    <urgency>Expected</urgency>
    <severity>Severe</severity>
    <certainty>Likely</certainty>
    <headline>ORANGE ALERT: Active Landslide Threat Along Beas River Corridor (NH-3 &amp; NH-305)</headline>
    <description>Geological Survey of India landslide early warning system indicates slope saturation index exceeding 92% in Mandi and Kullu valleys. Multiple debris flows and rockfall reported near Pandoh Dam and Aut Tunnel. River Beas swelling rapidly.</description>
    <instruction>Vehicular traffic on NH-3 restricted to emergency services only. Residents in unstable slope settlements advised to relocate to designated government schools/community halls. Do not stay inside hillside structures exhibiting fresh drywall cracks.</instruction>
    <senderName>Himachal Pradesh State Disaster Management Authority (HPSDMA)</senderName>
    <area>
      <areaDesc>Kullu, Mandi, Aut, and Pandoh Sector (Himachal Pradesh)</areaDesc>
      <polygon>31.60,76.85 31.95,77.05 32.25,77.20 32.10,77.40 31.75,77.25 31.55,77.00 31.60,76.85</polygon>
    </area>
  </info>
</alert>`;

export const SAMPLE_HEATWAVE_CAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<alert xmlns="urn:oasis:names:tc:emergency:cap:1.2">
  <identifier>NDMA-IN-2026-HW-205</identifier>
  <sender>imd.rajasthan.gov.in</sender>
  <sent>2026-11-05T06:00:00+05:30</sent>
  <status>Actual</status>
  <msgType>Alert</msgType>
  <scope>Public</scope>
  <info>
    <category>Met</category>
    <event>Severe Heat Wave (Loo Condition)</event>
    <urgency>Expected</urgency>
    <severity>Severe</severity>
    <certainty>Observed</certainty>
    <headline>ORANGE ALERT: Severe Heat Wave with Maximum Temperatures Exceeding 48.5°C</headline>
    <description>Persistent dry westerly winds causing severe heat wave conditions over western Rajasthan districts. High risk of heat strokes, severe dehydration, and heat exhaustion among outdoor workers, infants, and senior citizens.</description>
    <instruction>Avoid direct sunlight exposure between 11:00 AM and 04:00 PM. Drink plenty of ORS, Lemon water, or butter milk even if not thirsty. Keep livestock under shaded shelters with constant water supply.</instruction>
    <senderName>IMD Meteorological Centre Jaipur &amp; Rajasthan SDMA</senderName>
    <area>
      <areaDesc>Thar Desert Corridor: Barmer, Jaisalmer, Bikaner, and Jodhpur Districts</areaDesc>
      <polygon>25.60,71.20 26.80,70.50 28.00,71.50 28.20,73.00 27.10,73.20 25.80,72.40 25.60,71.20</polygon>
    </area>
  </info>
</alert>`;

export const SAMPLE_MUMBAI_SURGE_XML = `<?xml version="1.0" encoding="UTF-8"?>
<alert xmlns="urn:oasis:names:tc:emergency:cap:1.2">
  <identifier>NDMA-IN-2026-URB-071</identifier>
  <sender>mcgm.disastermgmt.gov.in</sender>
  <sent>2026-11-05T10:00:00+05:30</sent>
  <status>Actual</status>
  <msgType>Alert</msgType>
  <scope>Public</scope>
  <info>
    <category>Safety</category>
    <event>High Spring Astronomical Tide &amp; Flash Flood</event>
    <urgency>Expected</urgency>
    <severity>Moderate</severity>
    <certainty>Likely</certainty>
    <headline>YELLOW ALERT: 4.87m Astronomical High Tide Coinciding with Intense Rain Squalls</headline>
    <description>Municipal Corporation of Greater Mumbai (MCGM) warns of potential sea water backflow and severe waterlogging in low-lying chronic flood spots (Hindmata, Gandhi Market, Milan Subway, Kurla) during peak tide hours (13:45 IST).</description>
    <instruction>Stay away from promenade seafronts (Marine Drive, Bandstand, Worli Sea Face, Juhu). Citizen vehicles should avoid underpasses and waterlogged roads. Keep emergency helpline 1916 on speed dial.</instruction>
    <senderName>Brihanmumbai Municipal Corporation (BMC) Disaster Management Cell</senderName>
    <area>
      <areaDesc>Mumbai Island City, Suburban Coastline, and Thane Creek Area</areaDesc>
      <!-- CAP Circle: lat,lon radius_km -->
      <circle>19.0760,72.8777 35.0</circle>
    </area>
  </info>
</alert>`;

export const ALL_SAMPLE_CAP_FEEDS = [
  SAMPLE_CYCLONE_CAP_XML,
  SAMPLE_FLOOD_CAP_XML,
  SAMPLE_LANDSLIDE_CAP_XML,
  SAMPLE_HEATWAVE_CAP_XML,
  SAMPLE_MUMBAI_SURGE_XML
];

