import {createTheme} from 'newskit';

const theme = createTheme({
  name: 'newskit-font-crop-config',
  overrides: {
    fonts: {
      fontFamily010: {
        fontFamily: '"Times New Roman", Times, serif',
        // fontMetrics approach
        fontMetrics: {
          400: {
            capHeight: 1434,
            ascent: 1980,
            descent: -572,
            lineGap: 0,
            unitsPerEm: 2048,
          },
          700: {
            capHeight: 1534,
            ascent: 1780,
            descent: -472,
            lineGap: 0,
            unitsPerEm: 2148,
          },
          // 

          // cropConfig Approach 
          cropConfig: {
            top: 8,
            bottom: 10,
          },
          cropAdjustments: {
            '{{fonts.fontSize020}}': {
              top: 1.2,
            },
          },
          // 
        },
      },
    },
  }
});
