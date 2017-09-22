export default {
  id: 'zd',
  title: 'Zoning Districts',
  sql: ['SELECT * FROM (SELECT *, LEFT(zonedist, 2) as primaryzone FROM support_zoning_zd) a'],
  type: 'carto',
  layers: [
    {
      layer: {
        id: 'zd-fill',
        type: 'fill',
        source: 'zd',
        'source-layer': 'layer0',
        paint: {
          'fill-color': {
            property: 'primaryzone',
            type: 'categorical',
            stops: [
              ['BP', '#666666'],
              ['C1', '#ffa89c'],
              ['C2', '#ff9086'],
              ['C3', '#ff786f'],
              ['C4', '#ff6059'],
              ['C5', '#ff4843'],
              ['C6', '#ff302d'],
              ['C7', '#ff1816'],
              ['C8', '#ff0000'],
              ['M1', '#f3b7fb'],
              ['M2', '#eb8dfb'],
              ['M3', '#e362fb'],
              ['PA', '#78D271'],
              ['R1', '#f6f4b1'],
              ['R2', '#f6f49e'],
              ['R3', '#f5f58b'],
              ['R4', '#f5f578'],
              ['R5', '#f4f565'],
              ['R6', '#f4f551'],
              ['R7', '#f3f63e'],
              ['R8', '#f3f62b'],
              ['R9', '#f2f618'],
            ],
          },
          'fill-opacity': 0.3,
          'fill-antialias': true,
        },
      },
      highlightable: true,
      tooltipTemplate: '{{zonedist}}',
    },
    {
      layer: {
        id: 'zd-lines',
        type: 'line',
        source: 'zoning',
        'source-layer': 'layer0',
        paint: {
          'line-opacity': {
            stops: [
              [12, 0],
              [13, 0.2],
            ],
          },
          'line-width': {
            stops: [
              [13, 1],
              [14, 3],
            ],
          },
        },
      },
      before: 'waterway-label',
    },
    {
      layer: {
        id: 'zd_labels',
        source: 'zoning',
        type: 'symbol',
        'source-layer': 'layer0',
        paint: {
          'text-color': '#626262',
          'text-halo-color': '#FFFFFF',
          'text-halo-width': 2,
          'text-halo-blur': 2,
          'text-opacity': {
            stops: [
              [
                12,
                0,
              ],
              [
                13,
                1,
              ],
            ],
          },
        },
        layout: {
          'symbol-placement': 'point',
          'text-field': '{zonedist}',
          'text-size': {
            stops: [
              [
                10,
                8,
              ],
              [
                14,
                16,
              ],
            ],
          },
        },
      },
      before: 'waterway-label',
    },
  ],
  filters: [],
};
