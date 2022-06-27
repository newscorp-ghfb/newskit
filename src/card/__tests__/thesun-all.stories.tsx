import * as React from 'react';
import {Card} from '..';
import {Grid, Cell, Visible} from '../../grid';
import {Stack} from '../../stack';
import {Headline} from '../../headline';
import {TextBlock} from '../../text-block';
import {Block} from '../../block';
import {styled} from '../../utils/style';
import {getMediaQueryFromTheme} from '../../utils/responsive-helpers';
import {AlignSelfValues, StackChild} from '../../stack-child';
import {Divider} from '../../divider';
import {TitleBar} from '../../title-bar';
import {Button} from '../../button';
import {Image} from '../../image';
import {GridLayout, GridLayoutItem} from './gridlayout';
import {GridCard, GridTeaser} from './grid-card';

export default {
  title: 'NewsKit Light/the-sun-all',
  component: () => 'None',
};

const cardTeaserLeadInset = 'space010';

const cardTeaserHeadline = {
  xs: 'space040',
  sm: 'space040',
  md: 'space045',
  lg: 'space050',
};

// Typography Presets
const cardTypographyPresets: {[index: string]: string} = {
  cardTeaserHeadlineLarge: 'editorialHeadline050',
  cardTeaserHeadlineMedium: 'editorialHeadline030',
  cardTeaserHeadlineSmall: 'editorialHeadline010',

  cardTeaserLeadLarge: 'editorialParagraph030',
  cardTeaserLeadMedium: 'editorialParagraph020',
  cardTeaserLeadSmall: 'editorialParagraph010',

  cardLabelLarge: 'utilityLabel020',
  cardLabelMedium: 'utilityLabel010',
  cardLabelSmall: 'utilityLabel010',

  cardTagLarge: 'utilityLabel020',
  cardTagMedium: 'utilityLabel010',
  cardTagSmall: 'utilityLabel010',
};

const LargeItemBody = styled.div`
  min-height: 92px;
`;

const LargeItem = () => (
  <>
    <Card
      layout="vertical"
      media={{
        src: '/placeholder-3x2.png',
        alt: 'Card Media',
      }}
    >
      <LargeItemBody>
        <Block spaceStack={cardTeaserHeadline}>
          <Headline kickerText="SHORT">
            title of the card describing the main content
          </Headline>
        </Block>
        <Block spaceStack={cardTeaserLeadInset}>
          <TextBlock
            stylePreset="cardTeaserLead"
            typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
          >
            A short paragraph description of the article, outlining the main
            story and focus.
          </TextBlock>
        </Block>
      </LargeItemBody>
    </Card>
  </>
);
const SmallItem = () => (
  <>
    <Card
      layout="horizontal"
      media={{
        src: '/placeholder-3x2.png',
        alt: 'Card Media',
      }}
      overrides={{
        horizontalRatio: '1:1',
      }}
    >
      <Headline
        kickerText="SHORT"
        overrides={{
          typographyPreset: 'editorialHeadline010',
        }}
      >
        title of the card describing the main content
      </Headline>
    </Card>
  </>
);

const FixWidth = styled.div`
  margin: 0 auto;
  max-width: 420px;

  ${getMediaQueryFromTheme('md', 'lg')} {
    max-width: 620px;
  }

  ${getMediaQueryFromTheme('lg')} {
    max-width: 932px;
  }
`;

export const StoryTheSun = () => (
  <FixWidth>
    <Grid>
      <Cell xs="full-width" lg={8}>
        <LargeItem />
      </Cell>
      <Cell xs="full-width" lg={4}>
        <GridLayout
          rowGap={{xs: '10px', md: '20px', lg: '0'}}
          columnGap={{md: '20px'}}
          columns={{xs: '1fr', md: '1fr 1fr', lg: '1fr'}}
          justifyContent={{lg: 'stretch'}}
          alignContent={{lg: 'space-between'}}
          overrides={{height: '100%'}}
        >
          <SmallItem />
          <Visible sm lg>
            <Divider />
          </Visible>

          <SmallItem />

          <Visible sm lg>
            <Divider />
          </Visible>

          <SmallItem />

          <Visible sm lg>
            <Divider />
          </Visible>

          <SmallItem />
        </GridLayout>
      </Cell>
    </Grid>
  </FixWidth>
);

const BlockLayoutSpace = () => (
  <>
    <Block spaceStack="space050" />
    <Divider />
    <Block spaceStack="space050" />
  </>
);

type NewsType = {
  title: string;
  teaser: string;
  image: string;
  href: string;
};

const news: NewsType[] = [
  {
    title: 'Zayn Malik appears on plus size dating app.',
    teaser:
      'HEART-throb Zayn Malik has signed up to a plus-size dating website that promises to match users with “big beautiful women”. It comes after the former One Direction singer split with slim supermodel Gigi Hadid.',
    image:
      'https://www.thesun.co.uk/wp-content/uploads/2022/01/aj-zayn-love-comp.jpg?strip=all&w=620&h=413&crop=1',
    href:
      'https://www.thesun.co.uk/tvandshowbiz/17292904/zayn-malik-plus-size-dating/',
  },
  {
    title: 'Boris Johnson must apologise to the nation',
    teaser: '',
    image:
      'https://www.thesun.co.uk/wp-content/uploads/2022/01/3c71f19f-6a26-4f44-a910-fa1521614c03.jpg?strip=all&w=150&h=100&crop=1',
    href: 'https://www.thesun.co.uk/news/17294525/boris-johnson-party-apology/',
  },
  {
    title: 'Get £40 in free bets for the Africa Cup',
    teaser: '',
    image:
      'https://www.thesun.co.uk/wp-content/uploads/2022/01/DD-BETTING-PADDY-POWER-odds-JAN-07.jpg?strip=all&w=150&h=100&crop=1',
    href:
      'https://www.thesun.co.uk/sport/betting-tips/17249522/afcon-2022-free-bets-paddy-power/',
  },
  {
    title: "Lily plans Sadie's birthday party ",
    teaser: '',
    image:
      'https://www.thesun.co.uk/wp-content/uploads/2022/01/image-2-6.png?strip=all&w=150&h=100&crop=1',
    href:
      'https://www.thesun.co.uk/dear-deidre/17264661/sadie-suspicious-lily-plans-with-mark/',
  },
  {
    title: 'My wife said go elsewhere for sex',
    teaser: '',
    image:
      'https://www.thesun.co.uk/wp-content/uploads/2022/01/DEIDRE-LEAD-Man-of-53-who-is-married-but-wife-has-given-up-on-sex-so-he-signed-up-to-a-sugar-daddy-dating-site.jpg?strip=all&w=150&h=100&crop=1',
    href:
      'https://www.thesun.co.uk/dear-deidre/17287490/one-three-lovers-pregnant/',
  },
];

type ImageType = {
  src: string;
};

const imageGallery: ImageType[] = [
  {src: 'http://placekitten.com/g/200/200'},
  {src: 'http://placekitten.com/g/200/200'},
  {src: 'http://placekitten.com/g/200/200'},
  {src: 'http://placekitten.com/g/200/200'},
];

const CardLarge = ({title = '', teaser = '', image = '', href = ''}) => (
  <>
    <Card
      layout="vertical"
      href={href}
      media={{
        src: image,
        alt: 'Card Media',
      }}
    >
      <LargeItemBody>
        <Block spaceStack={cardTeaserHeadline}>
          <Headline kickerText="KICKER">{title}</Headline>
        </Block>
        <Block spaceStack={cardTeaserLeadInset}>
          <TextBlock
            stylePreset="cardTeaserLead"
            typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
          >
            {teaser}
          </TextBlock>
        </Block>
      </LargeItemBody>
    </Card>
  </>
);

const CardSmall = ({title = '', image = '', href = ''}) => (
  <>
    <Card
      layout="horizontal"
      href={href}
      media={{
        src: image,
        alt: 'Card Media',
      }}
      overrides={{
        horizontalRatio: '1:1',
      }}
    >
      <Headline
        kickerText="KICKER"
        overrides={{
          typographyPreset: 'editorialHeadline010',
        }}
      >
        {title}
      </Headline>
    </Card>
  </>
);

const SectionHeader = ({title, href}: {title: string; href: string}) => {
  const button = () => <Button href={href}>Read more</Button>;

  return (
    <TitleBar actionItem={href ? button : undefined}>
      <GridLayout columnGap="space030" columns="auto 1fr" alignItems="center">
        <span>{title}</span>
        <Divider />
      </GridLayout>
    </TitleBar>
  );
};

const SectionBody = styled.div``;

const SectionFooter = ({href}: {href: string}) =>
  href ? (
    <Visible xs>
      <Stack flow="vertical-center" spaceInline="space030">
        <StackChild alignSelf={AlignSelfValues.Stretch}>
          <Divider />
        </StackChild>

        <Button href={href}>Read more</Button>

        <StackChild alignSelf={AlignSelfValues.Stretch}>
          <Divider />
        </StackChild>
      </Stack>
    </Visible>
  ) : null;

const Section = ({
  children,
  href,
  title,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) => (
  <section>
    <SectionHeader title={title} href={href} />
    <SectionBody>{children}</SectionBody>
    <SectionFooter href={href} />
  </section>
);

/*

LAYOUT COMPONENTS

*/
// 1 large item, 4 small items in a grid
const BlockLayout1L4S = ({
  placeholders = [],
}: {
  placeholders: React.ReactNode[];
}) => {
  const [large, small1, small2, small3, small4] = placeholders;
  return (
    <GridLayout
      columns={{lg: '2fr 1fr'}}
      rowGap="space050"
      columnGap="space050"
    >
      {large}

      <GridLayout
        rowGap={{xs: '10px', md: '10px', lg: '0'}}
        columnGap={{md: '20px'}}
        columns={{xs: '1fr', md: '1fr 1fr', lg: '1fr'}}
        justifyContent={{lg: 'stretch'}}
        alignContent={{lg: 'space-between'}}
        overrides={{height: '100%'}}
      >
        {small1}

        <Visible sm lg>
          <Divider />
        </Visible>

        {small2}

        <Visible sm lg>
          <Divider />
        </Visible>

        {small3}

        <Visible sm lg>
          <Divider />
        </Visible>

        {small4}
      </GridLayout>
    </GridLayout>
  );
};

// 4 horizontal items
const BlockLayout4H = ({
  placeholders = [],
}: {
  placeholders: React.ReactNode[];
}) => {
  const [ph1, ph2, ph3, ph4] = placeholders;
  return (
    <GridLayout
      columns={{xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr'}}
      rowGap="space050"
      columnGap="space050"
    >
      {ph1}
      {ph2}
      {ph3}
      {ph4}
    </GridLayout>
  );
};

// 3 horizontal items
const BlockLayout3H = ({
  placeholders = [],
}: {
  placeholders: React.ReactNode[];
}) => {
  const [ph1, ph2, ph3] = placeholders;
  return (
    <GridLayout
      areas={{
        xs: `
         "A"
         "B"
         "C"
         `,
        md: ` 
          "A B"
          "A C"
        `,
        lg: `
          "A B C"
    `,
      }}
      rowGap={{xs: 'space010', md: 'space040'}}
      columnGap={{md: 'space050', lg: 'space050'}}
    >
      {Arias => (
        <>
          <Arias.A>{ph1}</Arias.A>
          <Arias.B>{ph2}</Arias.B>
          <Arias.C>{ph3}</Arias.C>
        </>
      )}
    </GridLayout>
  );
};

/*

BLOCK LAYOUT COMPONENTS

*/
const BlockLayoutTeaserVariant1 = ({data = []}: {data: NewsType[]}) => {
  const items = [CardLarge, CardSmall, CardSmall, CardSmall, CardSmall];

  const itemsWithData = items.map((Component, index) => (
    <Component {...data[index]} />
  ));

  return <BlockLayout1L4S placeholders={itemsWithData} />;
};

const BlockLayoutTeaserVariant2 = ({data = []}: {data: NewsType[]}) => {
  const items = [CardSmall, CardSmall, CardSmall, CardSmall];

  const itemsWithData = items.map((Component, index) => (
    <Component {...data[index]} />
  ));

  return <BlockLayout4H placeholders={itemsWithData} />;
};

const BlockLayoutTeaserVariant3 = ({data = []}: {data: NewsType[]}) => {
  const items = [CardLarge, CardLarge, CardLarge, CardLarge];

  const itemsWithData = items.map((Component, index) => (
    <Component {...data[index]} />
  ));

  return <BlockLayout4H placeholders={itemsWithData} />;
};

const BlockLayoutTeaserVariant4 = ({data = []}: {data: ImageType[]}) => {
  const items = [Image, Image, Image, Image];

  const itemsWithData = items.map((Component, index) => (
    <Component {...data[index]} />
  ));

  return <BlockLayout4H placeholders={itemsWithData} />;
};

const BlockLayoutTeaserVariant5 = ({data = []}: {data: NewsType[]}) => {
  const items = [CardSmall, CardSmall, CardSmall];

  const itemsWithData = items.map((Component, index) => (
    <Component {...data[index]} />
  ));

  return <BlockLayout3H placeholders={itemsWithData} />;
};

const BlockLayoutTeaser = ({
  data,
  variant,
}: {
  data: NewsType[] | ImageType[];
  variant: string;
}) => {
  // eslint-disable-next-line default-case
  switch (variant) {
    case 'variant-1':
      return <BlockLayoutTeaserVariant1 data={data as NewsType[]} />;

    case 'variant-2':
      return <BlockLayoutTeaserVariant2 data={data as NewsType[]} />;

    case 'variant-3':
      return <BlockLayoutTeaserVariant3 data={data as NewsType[]} />;

    case 'variant-4':
      return <BlockLayoutTeaserVariant4 data={data as ImageType[]} />;

    case 'variant-5':
      return <BlockLayoutTeaserVariant5 data={data as NewsType[]} />;
  }

  return <p>no correct variant</p>;
};

export const StoryTheSunFull = () => (
  <>
    <Section title="Heading here" href="/?sport">
      <BlockLayoutTeaser variant="variant-1" data={news} />

      <BlockLayoutSpace />

      <BlockLayoutTeaser variant="variant-2" data={news} />
    </Section>

    <Section title="Sport" href="/?sport">
      <BlockLayoutTeaser variant="variant-3" data={news} />

      <BlockLayoutSpace />

      <BlockLayoutTeaser variant="variant-5" data={news} />
    </Section>

    <Section title="Gallery" href="/?sport">
      <BlockLayoutTeaser variant="variant-4" data={imageGallery} />
    </Section>
  </>
);

const GridBox = styled.div`
  padding: 10px;
  border: 1px solid orange;
`;

const placeholders = [1, 2, 3, 4, 5].map(i => (
  <GridBox>{i} placeholder</GridBox>
));

export const StoryTheSunLayouts = () => (
  <>
    <Headline>Layout 1</Headline>
    <br />
    <BlockLayout1L4S placeholders={placeholders} />
    <br />
    <br />
    <Divider />
    <br />
    <br />
    <Headline>Layout 2</Headline>
    <br />
    <BlockLayout4H placeholders={placeholders} />
    <br />
    <br />
    <Divider />
    <br />
    <br />
    <Headline>Layout 3</Headline>
    <br />
    <BlockLayout3H placeholders={placeholders} />
  </>
);

export const GridStory = () => (
  <>
    <GridLayout
      columns={{md: '1fr 1fr', lg: '1fr {{sizing040}} 1fr 1fr'}}
      rowGap={{xs: 'space010', md: 'space040'}}
      columnGap={{md: 'space030', lg: 'space050'}}
    >
      <GridBox>1</GridBox>
      <GridBox>2</GridBox>
      <GridBox>3</GridBox>
      <GridBox>4</GridBox>
    </GridLayout>
    <br />
    <br />
    <br />
    <Divider />
    <br />
    <br />
    <br />
    <GridLayout
      areas={{
        xs: `
         "A"
         "B"
         "C"
         "D"
         "E"
         `,
        md: ` 
          "A A"
          "B C"
          "D E"`,
        lg: `
          "A B"
          "A C"
          "A D"
          "A E"  
    `,
      }}
      rowGap={{xs: 'space010', md: 'space040'}}
      columnGap={{md: 'space030', lg: 'space050'}}
    >
      <GridLayoutItem area="A">
        <GridBox>A</GridBox>
      </GridLayoutItem>
      <GridLayoutItem area="B">
        <GridBox>B</GridBox>
      </GridLayoutItem>
      <GridLayoutItem area="C">
        <GridBox>C</GridBox>
      </GridLayoutItem>
      <GridLayoutItem area="D">
        <GridBox>D</GridBox>
      </GridLayoutItem>
      <GridLayoutItem area="E">
        <GridBox>E</GridBox>
      </GridLayoutItem>
    </GridLayout>

    <br />
    <br />
    <br />
    <Divider />
    <br />
    <br />
    <br />

    <GridLayout
      areas={{
        xs: `
         "A"
         "B"
         "C"
         "D"
         "E"
         `,
        md: ` 
          "A A"
          "B C"
          "D E"`,
        lg: `
          "A B"
          "A C"
          "A D"
          "A E"  
    `,
      }}
      rowGap={{xs: 'space010', md: 'space040'}}
      columnGap={{md: 'space030', lg: 'space050'}}
    >
      {Arias => (
        <>
          <Arias.A>
            <GridBox>A</GridBox>
          </Arias.A>
          <Arias.B>
            <GridBox>B</GridBox>
          </Arias.B>
          <Arias.C>
            <GridBox>C</GridBox>
          </Arias.C>
          <Arias.D>
            <GridBox>D</GridBox>
          </Arias.D>
          <Arias.E>
            <GridBox>E</GridBox>
          </Arias.E>
        </>
      )}
    </GridLayout>
  </>
);

export const MinMaxRepeaat = () => {
  const boxes = Array.from(Array(20)).map((_, i) => <GridBox>{i} box</GridBox>);
  return (
    <>
      <h1>MinMan and Repeat</h1>
      <GridLayout
        columns="repeat(4, minmax(100px, 200px))"
        columnGap="20px"
        rowGap="20px"
      >
        {boxes}
      </GridLayout>
    </>
  );
};

export const CardWithGrid = () => (
  <>
    <GridCard
      href="#"
      image="https://www.thesun.co.uk/wp-content/uploads/2022/01/aj-zayn-love-comp.jpg?strip=all&w=620&h=413&crop=1"
      title="Rochelle Humes on why Marvin can’t get enough of her pregnancy curves"
      teaser="When asked about his trips as a royal around the Commonwealth, Harry told the Armchair Expert… podcast"
    />
    <Block spaceStack="100px" />
    <hr />
    <Block spaceStack="100px" />

    <GridTeaser
      image="https://www.thesun.co.uk/wp-content/uploads/2022/01/aj-zayn-love-comp.jpg?strip=all&w=620&h=413&crop=1"
      title="Rochelle Humes on why Marvin can’t get enough of her pregnancy curves"
      teaser="When asked about his trips as a royal around the Commonwealth, Harry told the Armchair Expert… podcast"
    />
  </>
);

export const GridComparison = () => (
  <>
    <Grid xsMargin="space000" xsColumnGutter="space050">
      <Cell xs={4}>
        <GridBox>4</GridBox>
      </Cell>
      <Cell xs={4}>
        <GridBox>4</GridBox>
      </Cell>
      <Cell xs={4}>
        <GridBox>4</GridBox>
      </Cell>
    </Grid>
    <GridLayout columns="4fr 4fr 4fr" columnGap="space050">
      <GridBox>4</GridBox>
      <GridBox>4</GridBox>
      <GridBox>4</GridBox>
    </GridLayout>
    <hr />
    <Grid xsMargin="space000" xsColumnGutter="space050">
      <Cell xs={8}>
        <GridBox>8</GridBox>
      </Cell>
      <Cell xs={4}>
        <GridBox>4</GridBox>
      </Cell>
    </Grid>
    <GridLayout columns="8fr 4fr" columnGap="space050">
      <GridBox>8</GridBox>
      <GridBox>4</GridBox>
    </GridLayout>
    <hr />
    <Grid xsMargin="space000" xsColumnGutter="space050">
      <Cell xs={2}>
        <GridBox>2</GridBox>
      </Cell>
      <Cell xs={6}>
        <GridBox>6</GridBox>
      </Cell>
      <Cell xs={4}>
        <GridBox>4</GridBox>
      </Cell>
    </Grid>
    <GridLayout columns="2fr 6fr 4fr" columnGap="space050">
      <GridBox>2</GridBox>
      <GridBox>6</GridBox>
      <GridBox>2</GridBox>
    </GridLayout>
    <hr />
    <Grid xsMargin="space000" xsColumnGutter="space050">
      <Cell xs={2}>
        <GridBox>2</GridBox>
      </Cell>
      <Cell xs={8}>
        <GridBox>8</GridBox>
      </Cell>
      <Cell xs={2}>
        <GridBox>2</GridBox>
      </Cell>
    </Grid>
    <GridLayout columns="2fr 8fr 2fr" columnGap="space050">
      <GridBox>2</GridBox>
      <GridBox>8</GridBox>
      <GridBox>2</GridBox>
    </GridLayout>
  </>
);

export const TheTimesStory = () => {
  const md = `
    "leftTop      div1 right"
    "leftDiv      div1 div2"
    "leftBottom   div1 middle"
  `;

  const lg = `
    "leftTop      div1  middle div2 right"
    "leftDiv      div1  middle div2 right"
    "leftBottom   div1  middle div2 right"
  `;

  return (
    <GridLayout
      columns="1fr auto 200px auto 1fr"
      columnGap="space020"
      rowGap="space020"
      areas={{md, lg}}
    >
      {Areas => (
        <>
          <Areas.LeftTop>
            <GridCard />
          </Areas.LeftTop>
          <Areas.LeftDiv>
            <Divider />
          </Areas.LeftDiv>
          <Areas.LeftBottom>
            <GridCard />
          </Areas.LeftBottom>
          <Areas.Div1>
            <Divider vertical />
          </Areas.Div1>
          <Areas.Middle>
            <GridCard />
          </Areas.Middle>
          <Areas.Div2>
            <Divider vertical={{md: false, lg: true}} />
          </Areas.Div2>
          <Areas.Right>
            <GridCard />
          </Areas.Right>
        </>
      )}
    </GridLayout>
  );
};
