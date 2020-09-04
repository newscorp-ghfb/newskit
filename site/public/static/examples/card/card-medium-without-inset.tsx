const cardMediumTags = () => (
  <Stack flow={Flow.HorizontalCenter} space={cardActionsSpace}>
    <Tag
      size={TagSize.Small}
      href="/"
      overrides={{stylePreset: 'cardTag', typographyPreset: cardTagMediumTypographyPreset}}
    >
      News
    </Tag>
    <Tag
      size={TagSize.Small}
      href="/"
      overrides={{stylePreset: 'cardTag', typographyPreset: cardTagMediumTypographyPreset}}
    >
      Sport
    </Tag>
  </Stack>
);

export const CardMediumWithoutInset = () => (
  <Grid>
    <Cell xs={6}>
      <ThemeProvider theme={myCustomCardTheme}>
        <Card
          href="https://newskit.co.uk/"
          media={{
            src: '/static/placeholder-3x2.png',
            alt: 'Card Media',
          }}
          actions={cardMediumTags}
          overrides={{
            stylePreset: 'cardContainer',
          }}
        >
          <Block overrides={{spaceStack: cardLabelSpaceStack}}>
            <Flag
              overrides={{
                paddingPreset: 'spaceInset000Squish',
                stylePreset: 'cardLabel',
                typographyPreset: cardLabelMediumTypographyPreset,
              }}
            >
              <Picture />
              IMAGE
            </Flag>
          </Block>

          <Block
            overrides={{
              spaceStack: cardTeaserHeadlineSpaceStack,
            }}
          >
            <Headline
              kickerText="CROWDS HEAD"
              overrides={{
                heading: {
                  stylePreset: 'cardTeaserHeadline',
                  typographyPreset: cardTeaserHeadlineMediumTypographyPreset,
                },
                kicker: {
                  spaceInline: cardTeaserKickerSpaceInline,
                  stylePreset: 'cardTeaserKicker',
                  typographyPreset: cardTeaserKickerMediumTypographyPreset,
                },
              }}
            >
              outdoors as bank holiday temps soar above 20 degrees
            </Headline>
          </Block>

          <Block
            overrides={{
              spaceStack: cardTeaserLeadSpaceStack,
            }}
          >
            <TextBlock
              overrides={{
                stylePreset: 'cardTeaserLead',
                typographyPreset: cardTeaserLeadMediumTypographyPreset,
              }}
            >
              The bank holiday weekend has seen some mixed weather, but as the
              sun emerged, many in the UK took the opportunity to make the most
              of the lockdown easing.
            </TextBlock>
          </Block>
        </Card>
      </ThemeProvider>
    </Cell>
  </Grid>
);
