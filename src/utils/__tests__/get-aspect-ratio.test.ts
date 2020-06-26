import {getAspectRatioStyles} from '../get-aspect-ratio';

describe('getAspectRatioStyles', () => {
  test('return default empty values', () => {
    expect(getAspectRatioStyles({})).toEqual({});
  });

  test('return string height and width values as is', () => {
    expect(
      getAspectRatioStyles({
        height: 'auto',
        width: 'auto',
      }),
    ).toEqual({
      height: 'auto',
      width: 'auto',
    });
  });

  test('return numbered height and width value with px unit', () => {
    expect(
      getAspectRatioStyles({
        height: '100',
        width: '100',
      }),
    ).toEqual({
      paddingTop: '100%',
      height: '100px',
      width: '100px',
    });
  });

  test('return px height and width with correct paddingTop ratio', () => {
    expect(
      getAspectRatioStyles({
        height: '100px',
        width: '200px',
      }),
    ).toEqual({
      paddingTop: '200%',
      height: '100px',
      width: '200px',
    });
  });

  test('return % height and width with correct paddingTop ratio', () => {
    expect(
      getAspectRatioStyles({
        height: '100%',
        width: '200%',
      }),
    ).toEqual({
      paddingTop: '200%',
      height: '100%',
      width: '200%',
    });
  });
});
