import * as React from 'react';
import {styled} from '../../utils/style';
import {Grid, Cell} from '..';

const BorderedBox = styled.div`
  border: solid 1px red;
`;

const Content = styled.div`
  background: silver;
  text-align: center;
  padding: 20px 10px;
  box-sizing: border-box;
  border: solid 1px black;
`;

export default {
  name: 'grid',
  children: [
    {
      name: 'grid',
      type: 'story',
      component: () => (
        <React.Fragment>
          <BorderedBox>
            <Grid>
              <Cell>
                <Content>1</Content>
              </Cell>
              <Cell>
                <Content>2</Content>
              </Cell>
              <Cell>
                <Content>3</Content>
              </Cell>
              <Cell>
                <Content>4</Content>
              </Cell>
              <Cell>
                <Content>5</Content>
              </Cell>
              <Cell>
                <Content>6</Content>
              </Cell>
              <Cell>
                <Content>7</Content>
              </Cell>
              <Cell>
                <Content>8</Content>
              </Cell>
              <Cell>
                <Content>9</Content>
              </Cell>
              <Cell>
                <Content>10</Content>
              </Cell>
              <Cell>
                <Content>11</Content>
              </Cell>
              <Cell>
                <Content>12</Content>
              </Cell>
            </Grid>
          </BorderedBox>
          <BorderedBox>
            <Grid>
              <Cell smHidden md={2}>
                <Content>
                  1, 2 - Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </Content>
              </Cell>
              <Cell sm={4} md={1}>
                <Content>3 - Lorem ipsum dolor sit amet.</Content>
              </Cell>
              <Cell sm={2} md={3}>
                <Content>
                  4, 5, 6 - Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </Content>
              </Cell>
              <Cell sm={2} md={3}>
                <Content>
                  7, 8, 9 - Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </Content>
              </Cell>
              <Cell sm={4} md={1}>
                <Content>10 - Lorem ipsum dolor sit amet.</Content>
              </Cell>
              <Cell smHidden md={2}>
                <Content>
                  11, 12 - Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </Content>
              </Cell>
            </Grid>
          </BorderedBox>
          <BorderedBox>
            <Grid>
              <Cell xs={12} sm={6} md={3} lg={2}>
                <Content>
                  1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nunc nisl, lobortis ac volutpat vitae, tempus nec
                  diam. Morbi ornare, magna a dignissim dignissim, lectus lacus
                  hendrerit lectus, quis accumsan est nulla eget lacus.
                </Content>
              </Cell>
              <Cell xs={12} sm={6} md={3} lg={2}>
                <Content>
                  2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nunc nisl, lobortis ac volutpat vitae, tempus nec
                  diam. Morbi ornare, magna a dignissim dignissim, lectus lacus
                  hendrerit lectus, quis accumsan est nulla eget lacus.
                </Content>
              </Cell>
              <Cell xs={12} sm={6} md={3} lg={2}>
                <Content>
                  3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nunc nisl, lobortis ac volutpat vitae, tempus nec
                  diam. Morbi ornare, magna a dignissim dignissim, lectus lacus
                  hendrerit lectus, quis accumsan est nulla eget lacus.
                </Content>
              </Cell>
              <Cell xs={12} sm={6} md={3} lg={2}>
                <Content>
                  4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nunc nisl, lobortis ac volutpat vitae, tempus nec
                  diam. Morbi ornare, magna a dignissim dignissim, lectus lacus
                  hendrerit lectus, quis accumsan est nulla eget lacus.
                </Content>
              </Cell>
              <Cell xs={12} sm={6} md={3} lg={2}>
                <Content>
                  5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nunc nisl, lobortis ac volutpat vitae, tempus nec
                  diam. Morbi ornare, magna a dignissim dignissim, lectus lacus
                  hendrerit lectus, quis accumsan est nulla eget lacus.
                </Content>
              </Cell>
              <Cell xs={12} sm={6} md={3} lg={2}>
                <Content>
                  6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nunc nisl, lobortis ac volutpat vitae, tempus nec
                  diam. Morbi ornare, magna a dignissim dignissim, lectus lacus
                  hendrerit lectus, quis accumsan est nulla eget lacus.
                </Content>
              </Cell>
            </Grid>
          </BorderedBox>

          <BorderedBox>
            <Grid
              xsColumnGutter="space000"
              smColumnGutter="space010"
              mdColumnGutter="space010"
              lgColumnGutter="space020"
            >
              <Cell xs={4}>
                <Content>
                  1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nunc nisl, lobortis ac volutpat vitae, tempus nec
                  diam. Morbi ornare, magna a dignissim dignissim, lectus lacus
                  hendrerit lectus, quis accumsan est nulla eget lacus.
                </Content>
              </Cell>
              <Cell xs={4}>
                <Content>
                  1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nunc nisl, lobortis ac volutpat vitae, tempus nec
                  diam. Morbi ornare, magna a dignissim dignissim, lectus lacus
                  hendrerit lectus, quis accumsan est nulla eget lacus.
                </Content>
              </Cell>
              <Cell xs={4}>
                <Content>
                  1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nunc nisl, lobortis ac volutpat vitae, tempus nec
                  diam. Morbi ornare, magna a dignissim dignissim, lectus lacus
                  hendrerit lectus, quis accumsan est nulla eget lacus.
                </Content>
              </Cell>
            </Grid>
          </BorderedBox>

          <BorderedBox>
            <Grid xsColumnGutter="space080">
              <Cell xs={4}>
                <Content>
                  <Grid xsColumnGutter="space000" xsMargin="space000">
                    <Cell xs={3}>
                      <BorderedBox>inner 1</BorderedBox>
                    </Cell>
                    <Cell xs={3}>
                      <BorderedBox>inner 2</BorderedBox>
                    </Cell>
                    <Cell xs={3}>
                      <BorderedBox>inner 3</BorderedBox>
                    </Cell>
                    <Cell xs={3}>
                      <BorderedBox>inner 4</BorderedBox>
                    </Cell>
                  </Grid>
                </Content>
              </Cell>
              <Cell xs={4}>
                <Content>
                  <Grid xsColumnGutter="space010">
                    <Cell xs={3}>
                      <BorderedBox>inner 1</BorderedBox>
                    </Cell>
                    <Cell xs={3}>
                      <BorderedBox>inner 2</BorderedBox>
                    </Cell>
                    <Cell xs={3}>
                      <BorderedBox>inner 3</BorderedBox>
                    </Cell>
                    <Cell xs={3}>
                      <BorderedBox>inner 4</BorderedBox>
                    </Cell>
                  </Grid>
                </Content>
              </Cell>
              <Cell xs={4}>
                <Content>
                  <Grid xsColumnGutter="space030">
                    <Cell xs={3}>
                      <BorderedBox>inner 1</BorderedBox>
                    </Cell>
                    <Cell xs={3}>
                      <BorderedBox>inner 2</BorderedBox>
                    </Cell>
                    <Cell xs={3}>
                      <BorderedBox>inner 3</BorderedBox>
                    </Cell>
                    <Cell xs={3}>
                      <BorderedBox>inner 4</BorderedBox>
                    </Cell>
                  </Grid>
                </Content>
              </Cell>
            </Grid>
          </BorderedBox>

          <BorderedBox>
            <Grid>
              <Cell xs={3} xsOrder={4} smOrder={3} mdOrder={2} lgOrder={1}>
                <Content>1 1 1 1 1 1 1 1 1 1</Content>
              </Cell>
              <Cell xs={3} xsOrder={1} smOrder={4} mdOrder={3} lgOrder={2}>
                <Content>2 2 2 2 2 2 2 2 2 2</Content>
              </Cell>
              <Cell xs={3} xsOrder={2} smOrder={1} mdOrder={4} lgOrder={3}>
                <Content>3 3 3 3 3 3 3 3 3 3</Content>
              </Cell>
              <Cell xs={3} xsOrder={3} smOrder={2} mdOrder={1} lgOrder={4}>
                <Content>4 4 4 4 4 4 4 4 4 4</Content>
              </Cell>
            </Grid>
          </BorderedBox>

          <BorderedBox>
            <Grid>
              <Cell xs={1} sm={2} xsOffset={2} smOffset={1}>
                <Content>1</Content>
              </Cell>
              <Cell xs={1} xsOffset={2}>
                <Content>2</Content>
              </Cell>
              <Cell xs={1} sm={2} xsOffset={2} smOffset={1}>
                <Content>3</Content>
              </Cell>
              <Cell xs={1} xsOffset={2}>
                <Content>4</Content>
              </Cell>
            </Grid>
          </BorderedBox>

          <BorderedBox>
            <Grid
              xsColumnGutter="space000"
              xsRowGutter="space000"
              xsMargin="space000"
            >
              <Cell xs={6}>
                <Content>Lorem</Content>
              </Cell>
              <Cell xs={6}>
                <Content>ipsum</Content>
              </Cell>
              <Cell xs={6}>
                <Content>dolar</Content>
              </Cell>
              <Cell xs={6}>
                <Content>sit amet</Content>
              </Cell>
            </Grid>
          </BorderedBox>
        </React.Fragment>
      ),
    },
  ],
};
