// Embedded GeoJSON dataset of India national outline & key topographical relief zones for offline rendering
export const INDIA_BASEMAP_GEOJSON: GeoJSON.FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    // 1. India Mainland Landmass
    {
      type: 'Feature',
      properties: { name: 'India Mainland', type: 'country', elevation: 'base' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [74.8, 37.0], [77.5, 35.8], [78.9, 34.5], [80.3, 31.8], [81.5, 30.5],
            [88.2, 27.9], [89.1, 27.3], [92.0, 27.9], [97.2, 28.5], [96.2, 26.8],
            [95.0, 24.2], [93.0, 24.0], [91.8, 22.4], [89.2, 21.8], [87.2, 21.6],
            [85.8, 19.9], [83.2, 17.8], [80.4, 13.2], [79.9, 10.4], [77.6, 8.2],
            [76.4, 9.9], [74.9, 13.1], [73.9, 15.5], [72.9, 19.1], [72.7, 21.3],
            [69.1, 22.4], [68.6, 23.9], [70.6, 24.6], [71.1, 26.9], [74.1, 30.6],
            [74.9, 32.6], [74.8, 37.0]
          ]
        ]
      }
    },
    // 2. The Great Himalayan Arc (High Alpine Snow & Glacier Topography: >3,500m)
    {
      type: 'Feature',
      properties: { name: 'The Great Himalayan Arc', type: 'terrain_himalaya', elevation: 'high_alpine' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [74.5, 36.5], [76.8, 35.8], [78.5, 34.2], [80.2, 31.5], [82.5, 30.0],
            [88.0, 28.0], [92.5, 28.2], [96.5, 28.8], [95.8, 27.5], [92.0, 27.0],
            [88.0, 26.8], [81.5, 29.2], [79.0, 30.8], [76.2, 32.5], [74.5, 34.8],
            [74.5, 36.5]
          ]
        ]
      }
    },
    // 3. Indo-Gangetic Alluvial Flood Plains (River Basins: <200m)
    {
      type: 'Feature',
      properties: { name: 'Indo-Gangetic Flood Basin', type: 'terrain_plains', elevation: 'lowland' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [74.5, 30.5], [77.2, 29.8], [80.5, 28.0], [84.5, 26.8], [88.0, 25.5],
            [89.5, 24.0], [88.5, 22.5], [85.5, 24.5], [81.5, 25.2], [77.5, 26.8],
            [75.0, 28.5], [74.5, 30.5]
          ]
        ]
      }
    },
    // 4. Thar Desert Sand Sheet (Western Arid Zone)
    {
      type: 'Feature',
      properties: { name: 'Thar Desert Dune Belt', type: 'terrain_desert', elevation: 'arid_plateau' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [70.0, 28.5], [73.5, 29.0], [74.0, 26.5], [72.5, 24.8], [70.5, 24.5],
            [69.5, 26.0], [70.0, 28.5]
          ]
        ]
      }
    },
    // 5. Deccan Traps & Central Highland Plateau (Basalt Plateau: 400m-900m)
    {
      type: 'Feature',
      properties: { name: 'Deccan Plateau', type: 'terrain_plateau', elevation: 'tableland' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [74.0, 21.5], [78.5, 22.0], [81.0, 20.5], [80.0, 15.5], [77.5, 13.5],
            [75.0, 14.5], [73.8, 17.5], [74.0, 21.5]
          ]
        ]
      }
    },
    // 6. Western Ghats Escarpment (Heavy Orographics & Landslide Hazard Ridge)
    {
      type: 'Feature',
      properties: { name: 'Western Ghats Escarpment', type: 'terrain_ghats', elevation: 'montane_ridge' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [73.3, 20.5], [74.2, 19.5], [74.8, 16.5], [75.5, 14.0], [76.8, 11.5],
            [77.3, 9.0], [77.6, 8.4], [77.0, 8.8], [76.2, 10.5], [74.5, 13.5],
            [73.5, 17.0], [73.0, 19.5], [73.3, 20.5]
          ]
        ]
      }
    },
    // 7. Brahmaputra Valley & River Basin
    {
      type: 'Feature',
      properties: { name: 'Brahmaputra Valley Basin', type: 'terrain_river_valley', elevation: 'fluvial_basin' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [89.8, 26.1], [92.0, 26.5], [94.5, 27.2], [95.8, 27.8],
            [95.0, 26.8], [93.2, 26.0], [90.5, 25.8], [89.8, 26.1]
          ]
        ]
      }
    },
    // 8. Andaman & Nicobar Archipelago (Island Territory)
    {
      type: 'Feature',
      properties: { name: 'Andaman & Nicobar Islands', type: 'island', elevation: 'coastal' },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          // North/Middle/South Andaman
          [
            [[92.7, 13.5], [93.0, 13.5], [93.0, 11.5], [92.6, 11.5], [92.7, 13.5]]
          ],
          // Great Nicobar
          [
            [[93.6, 7.3], [94.0, 7.3], [94.0, 6.7], [93.7, 6.7], [93.6, 7.3]]
          ]
        ]
      }
    },
    // 9. Lakshadweep Coral Atolls
    {
      type: 'Feature',
      properties: { name: 'Lakshadweep Islands', type: 'island', elevation: 'atoll' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [72.5, 11.2], [73.0, 11.2], [73.0, 10.0], [72.5, 10.0], [72.5, 11.2]
          ]
        ]
      }
    }
  ]
};
