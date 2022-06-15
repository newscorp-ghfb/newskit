import * as React from 'react';
import {Placement} from '@floating-ui/react-dom-interactions';
import {useRef, useState} from 'react';
import {Button, ButtonSize} from '../../button';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {styled} from '../../utils';
import {Popover} from '../popover';
import {IconFilledInfo} from '../../icons';
import {IconButton} from '../../icon-button';
import {FallbackBehaviourType} from '../../base-floating-element';
import {GridLayout} from '../../grid-layout';
import {createTheme, ThemeProvider} from '../../theme';

const getPlacementPosition = (placement: Placement) => {
  const [side, alignment = 'center'] = placement.split('-');
  let alignItems;
  let justifyContent;
  if (side === 'top') {
    alignItems = 'end';
    justifyContent = alignment;
  } else if (side === 'bottom') {
    alignItems = 'start';
    justifyContent = alignment;
  } else if (side === 'left') {
    justifyContent = 'end';
    alignItems = alignment;
  } else {
    justifyContent = 'start';
    alignItems = alignment;
  }
  return {display: 'flex', alignItems, justifyContent};
};

const placements: Placement[] = [
  'top-start',
  'top',
  'top-end',
  'bottom-start',
  'bottom',
  'bottom-end',
  'right-start',
  'right',
  'right-end',
  'left-start',
  'left',
  'left-end',
];

export default {
  title: 'NewsKit Light/popover',
  component: () => 'None',
};

const StyledContainer = styled.div`
  border: 1px solid red;
  background-color: #f7f7f7;
  height: 125px;
  width: 200px;
  padding: 5px;
`;

export const StoryPopoverDefault = () => (
  <>
    <div>
      <StorybookSubHeading>String content</StorybookSubHeading>
      <StyledContainer style={getPlacementPosition('top')}>
        <Popover content="Popover content">
          <IconButton
            size={ButtonSize.Small}
            overrides={{stylePreset: 'iconButtonOutlinedPrimary'}}
          >
            <IconFilledInfo />
          </IconButton>
        </Popover>
      </StyledContainer>
    </div>
    <div>
      <StorybookSubHeading>HTML content</StorybookSubHeading>
      <StyledContainer style={getPlacementPosition('top')}>
        <Popover content={<Button size="small">Click me</Button>}>
          <IconButton
            size={ButtonSize.Small}
            overrides={{stylePreset: 'iconButtonOutlinedPrimary'}}
          >
            <IconFilledInfo />
          </IconButton>
        </Popover>
      </StyledContainer>
    </div>
    <GridLayout columns={{xs: 'repeat(3, minmax(0, 1fr))'}}>
      <div>
        <StorybookSubHeading>Default distance</StorybookSubHeading>
        <StyledContainer style={getPlacementPosition('top')}>
          <Popover content="Popover content">
            <IconButton
              size={ButtonSize.Small}
              overrides={{stylePreset: 'iconButtonOutlinedPrimary'}}
            >
              <IconFilledInfo />
            </IconButton>
          </Popover>
        </StyledContainer>
      </div>
      <div>
        <StorybookSubHeading>Increased distance</StorybookSubHeading>
        <StyledContainer style={getPlacementPosition('top')}>
          <Popover content="Popover content" overrides={{distance: 'space070'}}>
            <IconButton
              size={ButtonSize.Small}
              overrides={{stylePreset: 'iconButtonOutlinedPrimary'}}
            >
              <IconFilledInfo />
            </IconButton>
          </Popover>
        </StyledContainer>
      </div>
      <div>
        <StorybookSubHeading>Decreased distance</StorybookSubHeading>
        <StyledContainer style={getPlacementPosition('top')}>
          <Popover content="Popover content" overrides={{distance: 'space030'}}>
            <IconButton
              size={ButtonSize.Small}
              overrides={{stylePreset: 'iconButtonOutlinedPrimary'}}
            >
              <IconFilledInfo />
            </IconButton>
          </Popover>
        </StyledContainer>
      </div>
    </GridLayout>
  </>
);
StoryPopoverDefault.storyName = 'popover-default';

export const StoryPopoverPositions = () => (
  <GridLayout columns={{xs: 'repeat(3, minmax(0, 1fr))'}}>
    {placements.map(placement => (
      <div key={placement}>
        <StorybookSubHeading>Popover - {placement}</StorybookSubHeading>
        <StyledContainer style={getPlacementPosition(placement)}>
          <Popover content="Popover content" placement={placement}>
            <IconButton
              size={ButtonSize.Small}
              overrides={{stylePreset: 'iconButtonOutlinedPrimary'}}
            >
              <IconFilledInfo />
            </IconButton>
          </Popover>
        </StyledContainer>
      </div>
    ))}
  </GridLayout>
);
StoryPopoverPositions.storyName = 'popover-positions';

const myCustomTheme = createTheme({
  name: 'my-custom-theme',
  overrides: {
    stylePresets: {
      popoverCustom: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.red080}}',
          boxShadow: '{{shadows.shadow050}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
        },
      },
      popoverPointerCustom: {
        base: {
          backgroundColor: '{{colors.red020}}',
          borderStyle: 'solid',
          borderColor:
            '{{colors.transparent}} {{colors.red080}} {{colors.red080}} {{colors.transparent}}',
        },
      },
      popoverPanelCustom: {
        base: {
          backgroundColor: '{{colors.red020}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkInverse}}',
        },
      },
    },
  },
});

export const StoryPopoverStyleOverrides = () => (
  <ThemeProvider theme={myCustomTheme}>
    <div>
      <StorybookSubHeading>Popover - style overrides</StorybookSubHeading>
      <StyledContainer style={getPlacementPosition('top')}>
        <Popover
          content="Popover content"
          overrides={{
            stylePreset: 'popoverCustom',
            pointer: {
              stylePreset: 'popoverPointerCustom',
            },
            panel: {
              stylePreset: 'popoverPanelCustom',
            },
          }}
        >
          <IconButton
            size={ButtonSize.Small}
            overrides={{stylePreset: 'iconButtonOutlinedPrimary'}}
          >
            <IconFilledInfo />
          </IconButton>
        </Popover>
      </StyledContainer>
    </div>
  </ThemeProvider>
);
StoryPopoverStyleOverrides.storyName = 'popover-style-overrides';

const StyledScrollParent = styled(StyledContainer)`
  max-height: 125px;
  max-width: 200px;
  overflow: scroll;
`;

const StyledScrollChild = styled.div<{visualTest?: boolean}>`
  height: 175px;
  width: 400px;
  ${({visualTest = false}) =>
    visualTest
      ? {}
      : {
          paddingTop: '95px',
          paddingLeft: '115px',
        }}
`;

const PopoverWithBoundary = ({
  fallbackBehaviour,
  visualTest,
}: {
  fallbackBehaviour: FallbackBehaviourType[];
  visualTest?: boolean;
}) => {
  const boundaryRef = useRef<HTMLDivElement>(null);

  // need to force a state update because useRef does not
  const [, setX] = useState(false);
  setTimeout(() => setX(true), 0);

  return (
    <>
      <StorybookSubHeading>
        Fallback behaviour: {`${fallbackBehaviour.join(', ')}`}
      </StorybookSubHeading>
      <StyledScrollParent ref={boundaryRef}>
        <StyledScrollChild visualTest={visualTest}>
          <Popover
            open={visualTest}
            fallbackBehaviour={fallbackBehaviour}
            content="Popover content"
            placement="top"
            boundary={boundaryRef.current || undefined}
          >
            <IconButton
              size={ButtonSize.Small}
              overrides={{stylePreset: 'iconButtonOutlinedPrimary'}}
            >
              <IconFilledInfo />
            </IconButton>
          </Popover>
        </StyledScrollChild>
      </StyledScrollParent>
    </>
  );
};

export const StoryPopoverBehaviours = () => (
  <>
    <PopoverWithBoundary fallbackBehaviour={['flip']} />
    <PopoverWithBoundary fallbackBehaviour={['shift']} />
    <PopoverWithBoundary fallbackBehaviour={['flip', 'shift']} />
  </>
);
StoryPopoverBehaviours.storyName = 'popover-behaviours';

export const StoryPopoverPositionsVisualTest = () => (
  <GridLayout columns={{xs: 'repeat(3, minmax(0, 1fr))'}}>
    {placements.map(placement => (
      <div key={placement}>
        <StorybookSubHeading>Popover - {placement}</StorybookSubHeading>
        <StyledContainer style={getPlacementPosition(placement)}>
          <Popover open content="Popover content" placement={placement}>
            <IconButton
              size={ButtonSize.Small}
              overrides={{stylePreset: 'iconButtonOutlinedPrimary'}}
            >
              <IconFilledInfo />
            </IconButton>
          </Popover>
        </StyledContainer>
      </div>
    ))}
  </GridLayout>
);
StoryPopoverPositionsVisualTest.storyName = 'popover-positions-visual-test';

export const StoryPopoverBehavioursVisualTest = () => (
  <>
    <PopoverWithBoundary visualTest fallbackBehaviour={['flip']} />
    <PopoverWithBoundary visualTest fallbackBehaviour={['shift']} />
    <PopoverWithBoundary visualTest fallbackBehaviour={['flip', 'shift']} />
  </>
);
StoryPopoverBehavioursVisualTest.storyName = 'popover-behaviours-visual-test';
