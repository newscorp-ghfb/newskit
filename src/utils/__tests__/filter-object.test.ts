import {
  filterObject,
  rejectObject,
  filterOutFalsyProperties,
} from '../filter-object';

interface Target {
  a: string;
  b: boolean;
  c: number;
}

describe('filter object helper', () => {
  describe('rejectObject', () => {
    let target: Partial<Target>;
    beforeEach(() => {
      target = Object.freeze({
        a: 'test',
        b: true,
        c: 235,
      });
    });

    test('returns original object if no omit keys are set', () => {
      expect(rejectObject(target)).toEqual(target);
    });

    test('returns original object if omit keys are not present', () => {
      expect(rejectObject(target, ['d'] as any)).toEqual(target);
    });

    test('returns { a: "test", b: true } if c is omitted', () => {
      expect(rejectObject(target, ['c'])).toEqual({
        a: 'test',
        b: true,
      });
    });

    test('returns { b: true } if c & a is omitted', () => {
      expect(rejectObject(target, ['c', 'a'])).toEqual({
        b: true,
      });
    });
  });

  describe('filterObject', () => {
    let target: Partial<Target>;
    beforeEach(() => {
      target = Object.freeze({
        a: 'test',
        b: true,
        c: 235,
      });
    });

    test('returns original object if no filter keys are set', () => {
      expect(filterObject(target)).toEqual({});
    });

    test('returns original object if filter keys are not present', () => {
      expect(filterObject(target, ['d'] as any)).toEqual({});
    });

    test('returns { c: 235 } if c is filtered', () => {
      expect(filterObject(target, ['c'])).toEqual({
        c: 235,
      });
    });

    test(`returns { a: 'test', c: 235 } if c & a is filtered`, () => {
      expect(filterObject(target, ['c', 'a'])).toEqual({
        a: 'test',
        c: 235,
      });
    });
  });

  describe('filterOutFalsyProperties', () => {
    test('removes the invalid entries from an object, keeps the valid', () => {
      const target = {
        a: 'test',
        b: true,
        c: undefined,
      };
      const result = {
        a: 'test',
        b: true,
      };

      expect(filterOutFalsyProperties(target)).toEqual(result);
    });

    test('removes all values if all the entries are invalid', () => {
      const target = {
        a: '',
        b: null,
        c: undefined,
        d: 0,
      };

      expect(filterOutFalsyProperties(target)).toEqual({});
    });

    test('keeps all values if all of the entries are valid', () => {
      const target = {
        a: 'test',
        b: 1,
        c: true,
        d: {},
        e: [],
      };

      expect(filterOutFalsyProperties(target)).toEqual(target);
    });
  });
});
