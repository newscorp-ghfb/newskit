import React from 'react';
import { Block } from 'newskit*';
import { GuidePageTemplate } from 'templates/guide-page-template/guide-page-template';
import { RelatedComponentsSection } from '../../../templates/template-sections';
import { ComponentPageCell } from '../../../components/layout-cells';
import { LayoutProps } from '../../../components/layout';
import { Illustration, getIllustrationComponent } from '../../../components/illustrations/illustration-loader';
import { Link } from '../../../components/link';
import { MediaItem, MediaList } from '../../../components/media-list';
import { ContentSection, ContentPrimary } from '../../../components/content-structure';

const featureCardoverrides = {
    title: {
        typographyPreset: 'editorialHeadline030',
    },
    description: {
        typographyPreset: 'editorialParagraph020',
    },
};
const { title, description } = featureCardoverrides;

const PRINCIPLE_CARDS = [
    {
        media: {
            src: 'static/theming/foundations/contextual-colours.svg',
            alt: '',
        },
        title: 'Design made easy',
        description:
            'NewsKit makes it simple to design experiences that are not only aesthetically pleasing, but that are fully responsive, promote accessibility and align to the components in code. NewsKit allows designers to free up time to concentrate on the important stuff - like the end user experience!',
        stylePrefix: 'featureCard',
        overrides: {
            title,
            description,
        },
    },
    {
        media: {
            src: 'static/theming/foundations/expressive-colours.svg',
            alt: '',
        },
        title: 'Complete flexibility',
        description:
            <>
                NewsKit is fully customisable, with the flexibility to apply a single brand, or sub-brands style, with an extensive <Link overrides={{ stylePreset: 'inkInverse' }} href="https://www.figma.com/file/oSjjLxC27fa6Jh6AHM7ja9/NK-NewsKit-Theme?node-id=1%3A393">theming system</Link>. Additionally the Figma components have a range of variants and layer options to allow for further cutomisation.</>,
        stylePrefix: 'featureCard',
        overrides: {
            title,
            description,
        },
    },
] as MediaItem[];

export default (layoutProps: LayoutProps) => (
    <GuidePageTemplate
        headTags={{
            title: 'Design overview | Newskit design system',
            description:
                'NewsKit has everything you need to efficiently build scalable digital products, including Figma toolkits such as web UI components, theme libraries, plugins, and guidance.',
        }}
        layoutProps={layoutProps}
        pageIntroduction={{
            type: 'Guides',
            name: 'Design overview',
            hero: {
                illustration: 'foundations/style-presets/hero',
            },
            introduction: `NewsKit has everything you need to efficiently build scalable digital products, including Figma toolkits such as web UI components, theme libraries, plugins, and guidance.`,
        }}
        featureCard={{
            title: 'Need help?',
            description:
                'Can’t find what you’re looking for?',
            href: '/foundations/presets/typography-presets/',
        }}
    >

        <ComponentPageCell>
            <ContentSection sectionName="why?">
                <ContentPrimary
                    id="why?"
                    toc="Why?"
                    headline="Why use NewsKit for design?"
                    description="Systems thinking is at the core of digital product design. NewsKit improves design consistency and developer efficiency across teams with considered, reusable solutions, and shared best practices. The result is more robust products and more time for innovation."
                    showSeparator
                >
                    <MediaList layout="2-span" cardType='feature' cards={PRINCIPLE_CARDS} />
                </ContentPrimary>
            </ContentSection>
        </ComponentPageCell>

        <ComponentPageCell>
            <ContentSection sectionName="What’s included?">
                <ContentPrimary
                    id="whats-included?"
                    toc="What’s included?"
                    headline="What’s included?"
                    description="NewsKit provides shared Figma libraries to assist the product design process, these include:"
                    showSeparator
                >
                    <MediaList
                        layout="1-span"
                        cardsLayout="horizontal"
                        cards={[
                            {
                                title: 'Theme library',
                                description:
                                    <>
                                        An advanced full-featured theming system containing brand styles that can be used and synced across files, including palettes and colours, typography, shadows and grids.
                                        <Block spaceStack="space050" />
                                        <Link href="https://www.figma.com/file/oSjjLxC27fa6Jh6AHM7ja9/NK-NewsKit-Theme?node-id=1%3A393">
                                            View theme library in Figma
                                        </Link>
                                    </>,
                                media: getIllustrationComponent('foundations/iconography/appearance'),
                            },
                            {
                                title: 'Web components library',
                                description: (
                                    <>
                                        A collection of high-quality responsive components that can be themed to align to any brand.
                                        <Block spaceStack="space050" />
                                        <Link href="https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/NK-Web-Components?node-id=1%3A393">
                                            View Web components library in Figma
                                        </Link>
                                    </>
                                ),
                                media: getIllustrationComponent('foundations/iconography/colours'),
                            },
                            {
                                title: 'Icon library',
                                description: (
                                    <>
                                        An extensive set of categorised icons that contain both filled and outlined styles, which can be customised or added to as required. The icon libraries in the design system use <Link href="https://fonts.google.com/icons">
                                            Material Icons</Link>.
                                        <Block spaceStack="space050" />
                                        <Link href="https://www.figma.com/file/jHs7EB68a57xVA3NKmMbgy/NK-Icons?node-id=1%3A12626">
                                            View Icon library in Figma
                                        </Link>
                                    </>
                                ),
                                media: getIllustrationComponent('foundations/iconography/size'),
                            },
                            {
                                title: 'Utilities library',
                                description: (
                                    <>
                                        A host of utility components to aid in the speed and consistency of design deliverables and to improve workflow, including annotations, cursors, device mockups, accessibility labelling, and more.
                                        <Block spaceStack="space050" />
                                        <Link
                                            href="https://www.figma.com/file/Q3OTJ4RZWJGTCaWuS8sWsL/NK-Utilities?node-id=0%3A1"
                                        >
                                            View Utilities library in Figma
                                        </Link>
                                    </>
                                ),
                                media: getIllustrationComponent('foundations/iconography/structure'),
                            },
                        ]}
                    />
                </ContentPrimary>
            </ContentSection>
        </ComponentPageCell>

        <ComponentPageCell>
            <ContentSection sectionName="architecture">
                <ContentPrimary
                    id="architecture"
                    toc="Architecture"
                    headline="NewsKit Figma library architecture"
                    description="Below is an example of how it is recommended to link Figma libraries to get the best out of the NewsKit Design System. This ensures that whenever the NewsKit Design System is updated, designs utilising this can automatically receive updates and enables contributing to the NewsKit Design System."
                    showSeparator
                >
                    <Block stylePreset="imageRoundedMedium">
                        <Illustration path="foundations/iconography/overview" />
                    </Block>
                </ContentPrimary>
            </ContentSection>
        </ComponentPageCell>

        <ComponentPageCell>
            <ContentSection sectionName="plugins">
                <ContentPrimary
                    id="plugins"
                    toc="Plugins"
                    headline="Custom Figma plugins"
                    description="NewsKit provides custom Figma plugins to improve the design process workflow, these include:"
                    showSeparator
                >
                    <MediaList
                        layout="1-span"
                        cardsLayout="horizontal"
                        cards={[
                            {
                                title: 'Theme Swapper plugin',
                                description:
                                    <>
                                        A Figma plugin that provides functionality to change themes across UI components and elements. For example, switching between light and dark themes, sub-themes, or different visual fidelities.
                                        <Block spaceStack="space050" />
                                        <Link href="https://www.figma.com/file/Q3OTJ4RZWJGTCaWuS8sWsL/NK-Utilities?node-id=0%3A1">
                                            View Theme Swapper Figma plugin
                                        </Link>
                                    </>,
                                media: getIllustrationComponent('foundations/iconography/appearance'),
                            },
                            {
                                title: 'Text Crop plugin',
                                description: (
                                    <>
                                        A Figma plugin that removes the whitespace around text boxes, removing extra leading (space) above and below your text. This ensures consistent and predictable layout designs.
                                        <Block spaceStack="space050" />
                                        <Link href="https://www.figma.com/community/plugin/951930713294228024/Text-Crop">
                                            View Text Crop Figma plugin
                                        </Link>
                                    </>
                                ),
                                media: getIllustrationComponent('foundations/iconography/colours'),
                            },
                            {
                                title: 'Theme Exporter plugin',
                                description: (
                                    <>
                                        A Figma plugin that provides functionality to export NewsKit design tokens in JSON format from Figma styles to use with the NewsKit codebase.
                                        <Block spaceStack="space050" />
                                        <Link href="https://www.figma.com/community/plugin/934126878505200119/NK---Theme-Exporter">
                                            View Theme Exporter Figma plugin
                                        </Link>
                                    </>
                                ),
                                media: getIllustrationComponent('foundations/iconography/size'),
                            },
                        ]}
                    />
                </ContentPrimary>
            </ContentSection>
        </ComponentPageCell>

        <ComponentPageCell>
            <ContentSection sectionName="templates">
                <ContentPrimary
                    id="templates"
                    toc="Templates"
                    headline="Project template files"
                    description="NewsKit provides template Figma files to kickstart design processes, helping to develop a consistent workflow, these include:"
                    showSeparator
                >
                    <MediaList
                        layout="1-span"
                        cardsLayout="horizontal"
                        cards={[
                            {
                                title: 'UX project template file',
                                description:
                                    <>
                                        A Figma file that provides a template structure for UX-focused projects. This template includes personas, user journeys, competitor analysis, and more.
                                        <Block spaceStack="space050" />
                                        <Link href="https://www.figma.com/file/iH4aqnno7MHwUMUW1QUr4S/%5BProduct%2FBrand-Name%5D-UX-project-template?node-id=0%3A1">
                                            View the UX project template file in Figma
                                        </Link>
                                    </>,
                                media: getIllustrationComponent('foundations/iconography/appearance'),
                            },
                            {
                                title: 'UI project template file',
                                description: (
                                    <>
                                        A Figma file that provides a template structure for UI-focused projects. This template includes a playground, prototype, handoff, and more.
                                        <Block spaceStack="space050" />
                                        <Link href="https://www.figma.com/file/BnIKQwut4dqqrfghSlsRV1/%5BProduct%2FBrand-Name%5D-UI-project-template?node-id=0%3A1">
                                            View the UI project template file in Figma
                                        </Link>
                                    </>
                                ),
                                media: getIllustrationComponent('foundations/iconography/colours'),
                            },
                        ]}
                    />
                </ContentPrimary>
            </ContentSection>
        </ComponentPageCell>

        <ComponentPageCell>
            <ContentSection sectionName="guidance">
                <ContentPrimary
                    id="guidance"
                    toc="Guidance"
                    headline="Guidance"
                    description="NewsKit provides comprehensive documentation and guidelines covering a variety of areas for a better understanding of how to get the best out of the NewsKit design system, these include:"
                    showSeparator
                >
                    <MediaList
                        layout="1-span"
                        cardsLayout="horizontal"
                        cards={[
                            {
                                title: 'NewsKit Components guidance',
                                description:
                                    <>
                                        Guidance for all NewsKit web components. This includes details on the anatomy, variants, usage, and more.
                                        <Block spaceStack="space050" />
                                        <Link href="https://www.newskit.co.uk/components/overview/">
                                            View NewsKit Components guidance                            </Link>
                                    </>,
                                media: getIllustrationComponent('foundations/iconography/appearance'),
                            },
                            {
                                title: 'NewsKit Patterns guidance',
                                description: (
                                    <>
                                        Guidance for solving common user problems in a consistent, considered way. For example, best practices for onboarding to a product or feature.
                                        <Block spaceStack="space050" />
                                        <Link href="https://www.newskit.co.uk/patterns/overview/">
                                            View NewsKit Patterns guidance
                                        </Link>
                                    </>
                                ),
                                media: getIllustrationComponent('foundations/iconography/colours'),
                            },
                            {
                                title: 'NewsKit Accessibility guidance',
                                description: (
                                    <>
                                        Guidance for designing inclusive experiences.
                                        <Block spaceStack="space050" />
                                        <Link href="/foundations/colours#css-w5wzt1">
                                            View NewsKit Accessibility guidance
                                        </Link>
                                    </>
                                ),
                                media: getIllustrationComponent('foundations/iconography/colours'),
                            },
                            {
                                title: 'NewsKit Handoff guidance',
                                description: (
                                    <>
                                        Guidance on how to communicate a design to the product team for engineers to build.
                                        <Block spaceStack="space050" />
                                        <Link href="https://www.figma.com/proto/kXCrh9MHKAJ878KE2dQOz8/Handoff-Guides---for-engineers-%26-designers?page-id=1%3A544&node-id=275%3A21221&viewport=350%2C48%2C0.13&scaling=min-zoom&starting-point-node-id=275%3A21221&show-proto-sidebar=1&hide-ui=1">
                                            View NewsKit Handoff guidance
                                        </Link>
                                    </>
                                ),
                                media: getIllustrationComponent('foundations/iconography/colours'),
                            },
                        ]}
                    />
                </ContentPrimary>
            </ContentSection>
        </ComponentPageCell>

        <RelatedComponentsSection
            title="What’s next?"
            id="whats-next?"
            toc="What’s next?"
            introduction="Icons have the following defining characteristics."
            related={['Design Overview']}
        >
        </RelatedComponentsSection>

    </GuidePageTemplate>
);
