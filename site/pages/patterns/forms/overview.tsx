import React from 'react';
import {Link} from '../../../components/link';
import {MediaList} from '../../../components/media-list';
import {LayoutProps} from '../../../components/layout';
import {PatternPageTemplate} from '../../../templates/pattern-page-template/pattern-page-template';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../../components/content-structure';
import {ComponentPageCell} from '../../../components/layout-cells';
import {Illustration} from '../../../components/illustrations/illustration-loader';
import {StyledHeading} from '../../../utils/styled';

const featureCardOverrides = {
  title: {
    typographyPreset: 'editorialHeadline030',
  },
  description: {
    typographyPreset: 'editorialParagraph020',
  },
};

const FORMS_PATTERN_CARDS = [
  {
    media: () => (
      <Illustration path="patterns/forms/overview/why-use/consistency" />
    ),
    title: 'Consistency',
    description:
      'All our brands have some form of data capture. Aligning our approach means there is one source of truth when building forms and capturing customer information. ',
    stylePrefix: 'featureCard',
    overrides: featureCardOverrides,
  },
  {
    media: () => (
      <Illustration path="patterns/forms/overview/why-use/ease-of-use" />
    ),
    title: 'Ease of use',
    description:
      'Customer data is only useful if it’s accurate. If we make our forms straightforward, it’s more likely our users will complete the form successfully.',
    stylePrefix: 'featureCard',
    overrides: featureCardOverrides,
  },
  {
    media: () => (
      <Illustration path="patterns/forms/overview/why-use/best-practice" />
    ),
    title: 'Best practice',
    description:
      'Digital forms have been around for decades. We can rely on proven industry best practice and shared learning to supplement our own research.',
    stylePrefix: 'featureCard',
    overrides: featureCardOverrides,
  },
];

const Overview = (layoutProps: LayoutProps) => (
  <PatternPageTemplate
    headTags={{
      title: 'Forms overview',
      description: 'Forms are used to collect customer’s data.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Patterns',
      name: 'Forms overview',
      hero: {
        illustration: 'patterns/forms/overview/hero',
      },
      introduction: `Forms are used to collect customer’s data.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="capture the moment">
        <ContentPrimary
          headline={
            <>
              Capture the moment <StyledHeading>(with data)</StyledHeading>
            </>
          }
          description={
            <>
              Using <Link href="/components/form/">Form</Link> components
              increases cohesion and avoids duplication of effort. Everyone
              benefits from shared best practice, research, and development.
              <br />
              <br />
              This guide outlines best practices to follow when creating a Form
              and highlights the relevant NewsKit components. Following shared
              best practices ensures the best possible experience for our
              customers.
            </>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="why use the forms pattern">
        <ContentPrimary
          id="why-use-forms-pattern"
          toc="Why use the Forms pattern"
          headline="Why use the Forms pattern?"
        >
          <MediaList
            layout="3-span"
            cardType="feature"
            cards={FORMS_PATTERN_CARDS}
          />
        </ContentPrimary>
        <ContentSecondary
          headline="When should forms be used?"
          description="Forms should be used to capture information from customers based on clear business requirements/benefits. The data captured in Forms allows us to serve the customer or user."
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="help improve this page">
        <ContentPrimary
          id="help-improve-this-page"
          toc="Help improve this page"
          headline={<StyledHeading>Help improve this page</StyledHeading>}
          description={
            <>
              To help make sure this page is as useful as it can be, relevant
              and kept up to date with industry best practices, please get in
              touch to share your research findings, and contribute to this
              page.
              <br />
              <br />
              <Link
                href="https://github.com/newscorp-ghfb/newskit/issues/new/choose"
                target="_blank"
              >
                Propose a change or contribution by suggesting a feature
                request.
              </Link>
            </>
          }
          showSeparator
        />
      </ContentSection>
    </ComponentPageCell>
  </PatternPageTemplate>
);

export default Overview;
