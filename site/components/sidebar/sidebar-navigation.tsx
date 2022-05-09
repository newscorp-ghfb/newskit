import React, {useEffect, useRef} from 'react';
import {useRouter} from 'next/router';
import {
  Block,
  getSpacingCssFromTheme,
  Label,
  Menu,
  MenuDivider,
  styled,
} from 'newskit';
import routes from '../../routes';
import {Visible} from '../../../src/grid/visibility';
import {MenuNavCollapsible} from '../menu-collapsible/menu-collapsible';
import {PageLinkProps, SiteMenuItemProps, SubNavProps} from './types';
import {DesktopNavigationDivider, Indicator, MenuItemStyled} from './styled';

const StyledLabel = styled(Label)`
  ${getSpacingCssFromTheme('marginLeft', 'space060')};
`;

const PageMenuLinks: React.FC<PageLinkProps> = ({
  page,
  active,
  href,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && ref && ref.current) {
      ref.current.scrollIntoView({block: 'center'});
    }
  });

  return (
    <MenuItemStyled
      href={href}
      data-testid={page}
      $selected={active}
      overrides={{
        // tier 1
        // add minHeight to make sure indicator and container remain same height
        minHeight: '40px',
      }}
      size="small"
    >
      <div ref={ref}>{children}</div>
    </MenuItemStyled>
  );
};
export const SiteMenuItem: React.FC<SiteMenuItemProps> = ({menuItemList}) => {
  const path = useRouter()?.pathname || '';

  return (
    <>
      {menuItemList &&
        menuItemList.map(({title, id, page, subNav}) => (
          <React.Fragment key={id}>
            {page ? (
              <>
                {title.includes('Overview') ||
                title.includes('Getting started') ? (
                  <Block spaceStack="space060" />
                ) : (
                  <>
                    <Indicator
                      className={path.includes(id) ? 'selected' : undefined}
                      id={id}
                    />
                    <PageMenuLinks active={path.includes(id)} href={id}>
                      <Label
                        overrides={{
                          stylePreset: 'interactivePrimary030',
                          typographyPreset: 'utilityButton020',
                          spaceStack: 'space000',
                          marginInline: 'space040',
                        }}
                      >
                        {title}
                      </Label>
                    </PageMenuLinks>
                  </>
                )}
              </>
            ) : (
              <>
                {/* I cant get the first item in the array
              as this returns each title individually  */}
                {title === 'Foundation' ||
                title === 'Actions & Inputs' ||
                title === 'Design' ? undefined : (
                  <DesktopNavigationDivider>
                    <MenuDivider />
                  </DesktopNavigationDivider>
                )}
                <StyledLabel
                  // title={title}
                  overrides={{
                    typographyPreset: 'utilityHeading030',
                    stylePreset: 'sidebarHeader',
                  }}
                >
                  {title}
                </StyledLabel>
                <SiteMenuItem menuItemList={subNav as SubNavProps} />
                {/* added this cause last item needs space */}
                <Block spaceStack="space045" />
              </>
            )}
          </React.Fragment>
        ))}
    </>
  );
};

const MenuNavDesktop = () => {
  const path = useRouter()?.pathname || '';
  const currentRoute = path.match(/\/[A-z\d-]*/g);
  const currentSection =
    currentRoute && routes.filter(({id}) => id === currentRoute[0]);

  return (
    <>
      <Menu
        aria-label="menu"
        vertical
        size="small"
        align="start"
        overrides={{spaceInline: 'space000'}}
      >
        {currentSection &&
          currentSection.map(({subNav}) => (
            // <div id='isthisit' key={title}>
            <SiteMenuItem menuItemList={subNav} />
            // </div>
          ))}
      </Menu>
    </>
  );
};

export const SidebarNav = () => {
  const path = useRouter().pathname;

  return (
    <>
      <Visible xs sm md>
        <MenuNavCollapsible path={path} menu={routes} />
      </Visible>
      <Visible lg xl>
        <MenuNavDesktop />
      </Visible>
    </>
  );
};
