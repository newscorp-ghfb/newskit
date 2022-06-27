import React from 'react';
import {Block, BlockProps} from '../..';
import {
  getResponsiveSize,
  handleResponsiveProp,
  MQ,
  styled,
} from '../../utils/style';
/*
TYPES
*/
const GRID_DEFAULT_PROPS = {
  rowGap: undefined,
  columnGap: undefined,
  columns: undefined,
  rows: undefined,
  justifyContent: undefined,
  alignContent: undefined,
  justifyItems: undefined,
  alignItems: undefined,
  areas: undefined,
  inline: false,
};

export type GridLayoutProps = {
  rowGap?: MQ<string>;
  columnGap?: MQ<string>;
  rows?: MQ<string>;
  columns?: MQ<string>;
  justifyContent?: MQ<string>;
  alignContent?: MQ<string>;
  justifyItems?: MQ<string>;
  alignItems?: MQ<string>;
  areas?: MQ<string>;
  inline?: MQ<boolean>;
  children?: React.ReactNode | GridLayoutRenderProps;
  overrides?: {
    width?: MQ<string>;
    minWidth?: MQ<string>;
    maxWidth?: MQ<string>;
    height?: MQ<string>;
    minHeight?: MQ<string>;
    maxHeight?: MQ<string>;
  };
};

export type GridLayoutItemProps = BlockProps & {
  area?: string;
  justifySelf?: MQ<string>;
  alignSelf?: MQ<string>;
};

export type AreasMap = {
  [componentName: string]: React.FC<GridLayoutItemProps>;
};

export type GridLayoutRenderProps = (areas: AreasMap) => React.ReactNode;

/*
STYLED COMPONENTS
*/
const StyledGridLayout = styled.div<GridLayoutProps>`
  ${handleResponsiveProp({inline: GRID_DEFAULT_PROPS.inline}, ({inline}) => ({
    display: inline ? 'inline-grid' : 'grid',
  }))}

  ${handleResponsiveProp(
    {rowGap: GRID_DEFAULT_PROPS.rowGap},
    ({rowGap}, {theme}) => ({
      rowGap: rowGap && (theme.spacePresets[rowGap] || rowGap),
    }),
  )}
  ${handleResponsiveProp(
    {columnGap: GRID_DEFAULT_PROPS.columnGap},
    ({columnGap}, {theme}) => ({
      columnGap: columnGap && (theme.spacePresets[columnGap] || columnGap),
    }),
  )}
  ${handleResponsiveProp(
    {columns: GRID_DEFAULT_PROPS.columns},
    ({columns}) => ({
      gridTemplateColumns: columns,
    }),
  )}
  ${handleResponsiveProp({rows: GRID_DEFAULT_PROPS.rows}, ({rows}) => ({
    gridTemplateRows: rows,
  }))}

  ${handleResponsiveProp({areas: GRID_DEFAULT_PROPS.areas}, ({areas}) => ({
    gridTemplateAreas: areas,
  }))};

  ${handleResponsiveProp(
    {justifyContent: GRID_DEFAULT_PROPS.justifyContent},
    ({justifyContent}) => ({
      justifyContent,
    }),
  )}

  ${handleResponsiveProp(
    {alignContent: GRID_DEFAULT_PROPS.alignContent},
    ({alignContent}) => ({
      alignContent,
    }),
  )}
  ${handleResponsiveProp(
    {justifyItems: GRID_DEFAULT_PROPS.justifyItems},
    ({justifyItems}) => ({
      justifyItems,
    }),
  )}

  ${handleResponsiveProp(
    {alignItems: GRID_DEFAULT_PROPS.alignItems},
    ({alignItems}) => ({
      alignItems,
    }),
  )}
  
  ${getResponsiveSize('width', 'gridLayout', '', 'width')};
  ${getResponsiveSize('minWidth', 'gridLayout', '', 'minWidth')};
  ${getResponsiveSize('maxWidth', 'gridLayout', '', 'maxWidth')};
  ${getResponsiveSize('height', 'gridLayout', '', 'height')};
  ${getResponsiveSize('minHeight', 'gridLayout', '', 'minHeight')};
  ${getResponsiveSize('maxHeight', 'gridLayout', '', 'maxHeight')};
`;

/*
HELPERS
*/
const capitalize = (s: string) => {
  if (typeof s !== 'string') return '';
  return s.replace(/^./, firstLetter => firstLetter.toUpperCase());
};

const extractAreas = (ariaString: string) =>
  ariaString
    // @ts-ignore
    .replaceAll('\n', '')
    // @ts-ignore
    .replaceAll('"', '')
    .replace(/  +/g, ' ')
    .trim()
    .split(' ');

// @ts-ignore
const uniq = (array: string[]) => [...new Set(array)];

const filterInvalidAreas = (areaName: string): boolean =>
  areaName !== '.' && Boolean(areaName);

const getAreasList = (areas: MQ<string>): string[] => {
  if (typeof areas === 'string') {
    return uniq(extractAreas(areas));
  }
  if (typeof areas === 'object') {
    const list = Object.values(areas).reduce((acc, val) => {
      const filtered = extractAreas(val);
      // @ts-ignore
      acc.push(...filtered);
      return acc;
    }, []);

    return uniq(list).filter(filterInvalidAreas);
  }

  return [];
};

/*
EXPORTED COMPONENTS
*/
export const GridLayoutItem = styled(Block)<GridLayoutItemProps>`
  grid-area: ${props => props.area};

  ${handleResponsiveProp({justifySelf: undefined}, ({justifySelf}) => ({
    justifySelf,
  }))}
  ${handleResponsiveProp({alignSelf: undefined}, ({alignSelf}) => ({
    alignSelf,
  }))}
`;

export const GridLayout = ({children, ...props}: GridLayoutProps) => {
  const {areas} = props;

  const areasNames = getAreasList(areas || '');
  const Areas = {} as AreasMap;

  const isFunctionWithAreas =
    typeof children === 'function' && areasNames.length > 0;

  if (isFunctionWithAreas) {
    areasNames.forEach(area => {
      const componentName = capitalize(area);
      console.log({componentName});
      Areas[componentName] = (itemProps: GridLayoutItemProps) => (
        <GridLayoutItem area={area} {...itemProps} />
      );
    });
  }

  return (
    <StyledGridLayout {...props}>
      {isFunctionWithAreas ? children(Areas) : children}
    </StyledGridLayout>
  );
};
