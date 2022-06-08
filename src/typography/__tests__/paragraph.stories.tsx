import * as React from 'react';
import {createTheme, ThemeProvider} from '../../theme';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {P, Sub, Sup} from '../index';

const myCustomTheme = createTheme({
  name: 'my-custom-paragraph-theme',
  overrides: {
    stylePresets: {
      paragraphCustom: {
        base: {
          color: '{{colors.blue060}}',
        },
      },
      dropCapCustom: {
        base: {
          color: '{{colors.blue060}}',
        },
      },
    },
  },
});

const bodyString =
  'Telling the stories that matter, seeding ideas and stirring emotion. Capturing moments, meaning and magic. Making sense of the world. On the shoulders of giants, in the thick of it, behind the scenes and fighting the good fight. Long form and rapid-fire, pragmatic and poetic, comical and critical.';

export default {
  title: 'NewsKit Light/typography/paragraph',
  component: () => 'None',
};

export const StoryParagraph = () => (
  <>
    <StorybookHeading>Paragraph</StorybookHeading>
    <StorybookSubHeading>default</StorybookSubHeading>
    <P>{bodyString}</P>
    <br />
    <StorybookSubHeading>with drop cap</StorybookSubHeading>
    <P dropCap>
      This being Black History Month, last week was Politicians In Search Of An
      Eye-Catching Race-Related Policy Week. Both Theresa May and Jeremy Corbyn
      had their own announcement, each seemingly benign and right-on, each
      actually destructive and wrong-headed. This being Black History Month,
      last week was Politicians In Search Of An Eye-Catching Race-Related Policy
      Week.
    </P>
    <br />
    <StorybookSubHeading>with Sup and Sub elements</StorybookSubHeading>
    <P>
      Paragraph component containing a <Sub>subscript element</Sub> and a{' '}
      <Sup>superscript element</Sup>
    </P>
  </>
);
StoryParagraph.storyName = 'paragraph';

export const StoryParagraphWithOverrides = () => (
  <>
    <StorybookHeading>Paragraph with overrides</StorybookHeading>
    <StorybookSubHeading>on paragraph</StorybookSubHeading>
    <br />
    <ThemeProvider theme={myCustomTheme}>
      <P
        overrides={{
          stylePreset: 'paragraphCustom',
          typographyPreset: 'editorialHeadline020',
        }}
      >
        This being Black History Month, last week was Politicians In Search Of
        An Eye-Catching Race-Related Policy Week. Both Theresa May and Jeremy
        Corbyn had their own announcement, each seemingly benign and right-on,
        each actually destructive and wrong-headed.
      </P>
      <StorybookSubHeading>on drop cap</StorybookSubHeading>
      <br />
      <P
        dropCap
        overrides={{
          dropCap: {
            stylePreset: 'dropCapCustom',
            typographyPreset: 'editorialHeadline070',
            space: 'space030',
          },
        }}
      >
        This being Black History Month, last week was Politicians In Search Of
        An Eye-Catching Race-Related Policy Week. Both Theresa May and Jeremy
        Corbyn had their own announcement, each seemingly benign and right-on,
        each actually destructive and wrong-headed.
      </P>
    </ThemeProvider>
  </>
);
StoryParagraphWithOverrides.storyName = 'paragraph-with-overrides';

export const StoryParagraphWithLogicalProps = () => {
  const logicalPropsOverrides = {
    marginBlock: 'space060',
    marginInline: 'space080',
    paddingBlock: 'space060',
    paddingInline: 'space080',
  };

  return (
    <>
      <StorybookHeading>Paragraph with logical props</StorybookHeading>
      <StorybookSubHeading>on paragraph</StorybookSubHeading>
      <br />
      <ThemeProvider theme={myCustomTheme}>
        <P overrides={logicalPropsOverrides}>
          This being Black History Month, last week was Politicians In Search Of
          An Eye-Catching Race-Related Policy Week. Both Theresa May and Jeremy
          Corbyn had their own announcement, each seemingly benign and right-on,
          each actually destructive and wrong-headed.
        </P>
        <StorybookSubHeading>on drop cap</StorybookSubHeading>
        <br />
        <P dropCap overrides={logicalPropsOverrides}>
          This being Black History Month, last week was Politicians In Search Of
          An Eye-Catching Race-Related Policy Week. Both Theresa May and Jeremy
          Corbyn had their own announcement, each seemingly benign and right-on,
          each actually destructive and wrong-headed.
        </P>
        <StorybookSubHeading>on Sub and Sup elements</StorybookSubHeading>
        <br />
        <P overrides={logicalPropsOverrides}>
          Paragraph component containing a <Sub>subscript element</Sub> and a{' '}
          <Sup>superscript element</Sup>
        </P>
      </ThemeProvider>
    </>
  );
};
StoryParagraphWithLogicalProps.storyName = 'paragraph-with-logical-props';
