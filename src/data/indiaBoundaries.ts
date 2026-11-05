// Embedded GeoJSON dataset of India national outline & key regions for 100% offline basemap rendering
export const INDIA_BASEMAP_GEOJSON: GeoJSON.FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: 'India Mainland', type: 'country' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [74.8, 36.8], [77.5, 35.5], [78.9, 34.3], [79.5, 31.5], [81.0, 30.2],
            [88.1, 27.8], [89.0, 27.2], [92.0, 27.8], [97.0, 28.2], [96.0, 26.5],
            [94.5, 24.0], [92.5, 23.8], [91.5, 22.2], [89.0, 21.6], [87.0, 21.5],
            [85.5, 19.8], [83.0, 17.7], [80.3, 13.1], [79.8, 10.3], [77.5, 8.1],
            [76.3, 9.8], [74.8, 13.0], [73.8, 15.4], [72.8, 19.0], [72.6, 21.2],
            [69.0, 22.3], [68.5, 23.8], [70.5, 24.5], [71.0, 26.8], [74.0, 30.5],
            [74.8, 32.5], [74.8, 36.8]
          ]
        ]
      }
    },
    {
      type: 'Feature',
      properties: { name: 'Odisha & Andhra Coastal Belt', type: 'region' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [82.0, 16.5], [84.0, 18.0], [85.5, 19.5], [87.0, 21.5],
            [85.8, 22.0], [83.5, 20.0], [81.5, 17.5], [82.0, 16.5]
          ]
        ]
      }
    },
    {
      type: 'Feature',
      properties: { name: 'Assam Brahmaputra Valley', type: 'region' },
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
    {
      type: 'Feature',
      properties: { name: 'Himalayan Ridge (Himachal/Uttarakhand)', type: 'region' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [76.2, 32.8], [77.8, 32.5], [79.2, 31.0], [80.5, 30.0],
            [79.8, 29.5], [78.2, 30.5], [76.8, 31.5], [76.2, 32.8]
          ]
        ]
      }
    }
  ]
};

