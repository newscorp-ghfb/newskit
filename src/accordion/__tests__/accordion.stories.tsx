import * as React from 'react';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Accordion} from '../accordion';
import {TextBlock} from '../../text-block';
import {
  IconFilledAccountBalance,
  IconFilledExpandLess,
  IconFilledExpandMore,
} from '../../icons';
import {createTheme, ThemeProvider} from '../../theme';

const myCustomAccordionTheme = createTheme({
  name: 'my-custom-accordion-theme',
  overrides: {
    stylePresets: {
      accordionHeaderCustom: {
        base: {
          backgroundColor: '#81D2DA',
          color: 'black',
          borderStyle: 'none none solid none',
          borderColor: 'blue',
          borderWidth: '{{borders.borderWidth020}}',
        },
        hover: {
          backgroundColor: 'pink',
          color: 'red',
        },
        disabled: {
          backgroundColor: 'interactiveDisabled010',
          color: 'inkNonEssential',
        },
      },
      accordionDividerCustom: {
        base: {
          borderColor: 'yellow',
          borderWidth: '{{borders.borderWidth020}}',
          borderStyle: 'solid',
        },
      },
      accordionPanelCustom: {
        base: {
          borderStyle: 'none none dotted none',
          borderColor: 'purple',
          borderWidth: '{{borders.borderWidth020}}',
        },
      },
    },
  },
});

export default {
  title: 'NewsKit Light/accordion',
  component: () => 'None',
};

export const StoryAccordion = () => (
  <>
    <StorybookHeading>Accordion</StorybookHeading>
    <StorybookSubHeading>Expanded</StorybookSubHeading>
    <Accordion
      header="Header"
      label="Label"
      expanded
      startEnhancer={
        <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
      }
      indicatorIcon={
        <IconFilledExpandMore
          overrides={{
            size: 'iconSize020',
          }}
        />
      }
    >
      <TextBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </TextBlock>
    </Accordion>
    <br />
    <br />
    <StorybookSubHeading>Collapsed</StorybookSubHeading>
    <Accordion
      header="Header"
      label="Label"
      startEnhancer={
        <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
      }
      indicatorIcon={
        <IconFilledExpandLess
          overrides={{
            size: 'iconSize020',
          }}
        />
      }
    >
      <TextBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </TextBlock>
    </Accordion>
    <br />
    <br />
    <StorybookSubHeading>Disabled</StorybookSubHeading>
    <Accordion
      header="Header"
      disabled
      label="Label"
      startEnhancer={
        <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
      }
      indicatorIcon={
        <IconFilledExpandMore
          overrides={{
            size: 'iconSize020',
          }}
        />
      }
    >
      <TextBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </TextBlock>
    </Accordion>
    <br />
    <StorybookSubHeading>HeaderText & IndicatorIcon</StorybookSubHeading>
    <div>
      <Accordion
        headingAs="h4"
        header="Header"
        indicatorIcon={
          <IconFilledExpandLess
            overrides={{
              size: 'iconSize020',
            }}
          />
        }
      >
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </TextBlock>
      </Accordion>
      <Accordion
        header="Header"
        indicatorIcon={
          <IconFilledExpandLess
            overrides={{
              size: 'iconSize020',
            }}
          />
        }
      />
    </div>
  </>
);
StoryAccordion.storyName = 'accordion';

export const StoryAccordionOverrides = () => (
  <>
    <StorybookHeading>Accordion</StorybookHeading>
    <StorybookSubHeading>Overrides</StorybookSubHeading>
    <ThemeProvider theme={myCustomAccordionTheme}>
      <Accordion
        header="Header"
        label="Label"
        expanded
        startEnhancer={
          <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
        }
        indicatorIcon={
          <IconFilledExpandMore
            overrides={{
              size: 'iconSize020',
            }}
          />
        }
        overrides={{
          header: {
            minWidth: 'sizing050',
            minHeight: 'sizing060',
            stylePreset: 'accordionHeaderCustom',
            typographyPreset: 'utilityButton020',
            spaceInline: 'space030',
            indicatorIcon: {
              stylePreset: 'inkPositive',
            },
            indicatorLabel: {
              stylePreset: 'inkPositive',
              typographyPreset: 'utilityButton020',
            },
            startEnhancer: {
              stylePreset: 'inkPositive',
            },
          },
          panel: {
            stylePreset: 'accordionPanelCustom',
          },
          divider: {
            stylePreset: 'accordionDividerCustom',
          },
        }}
      >
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </TextBlock>
      </Accordion>
    </ThemeProvider>
  </>
);

StoryAccordionOverrides.storyName = 'accordion-with-overrides';
