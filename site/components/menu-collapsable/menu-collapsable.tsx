import React, {useEffect, useState} from 'react';
import {
  Block,
  Divider,
  Flow,
  H2,
  IconOutlinedLaunch,
  Menu,
  MenuGroup,
  MenuItem,
  Stack,
} from 'newskit';
import {ThemeSwitch} from '../theme-switch';
import {IconExpandLess, IconExpandMore} from '../icons';
import {MenuCollapsable} from './menu-styled';

type NavProps = {
  title: string;
  id: string;
  description?: string;
  page?: boolean;
};

type SubNavProps = {
  subNav?: NavProps[];
};

type SubNavItemProps = NavProps & SubNavProps;

export const MenuNav = ({
  path,
  toggleTheme,
  themeMode,
  menu,
}: {
  path: string;
  toggleTheme: () => void;
  themeMode: string;
  menu: SubNavItemProps[];
}) => {
  const [openPanelIds, setOpenPanelIds] = useState<Array<number>>([]);
  useEffect(() => {
    const index = menu.findIndex(obj => path.includes(obj.id)) || 0;
    setOpenPanelIds([index]);
  }, []);

  const createMenuItem = (list: SubNavItemProps[]) => (
    <>
      {list &&
        list.map(({title, id, subNav, page}) => (
          <>
            {page ? (
              <>
                <MenuItem
                  href={id}
                  overrides={{
                    typographyPreset: 'utilityButton020',
                    spaceInset: 'space030',
                    stylePreset: 'sidebarNavItem',
                  }}
                  selected={path.includes(id)}
                  size="small"
                  className={path.includes(id) ? 'selected' : undefined}
                >
                  {title}
                </MenuItem>
              </>
            ) : (
              <>
                <MenuGroup
                  title={title}
                  overrides={{
                    title: {
                      typographyPreset: 'utilityButton030',
                      stylePreset: 'inkContrast',
                      spaceInset: 'space030',
                      spaceInline: 'space040',
                    },
                  }}
                >
                  {subNav && createMenuItem(subNav)}
                </MenuGroup>
              </>
            )}
          </>
        ))}
    </>
  );
  return (
    <Menu
      aria-label="menu"
      vertical
      size="small"
      align="start"
      overrides={{spaceInline: 'space000'}}
    >
      {menu.map(({title, subNav}, index) => (
        <MenuCollapsable
          className={openPanelIds.includes(index) ? 'expanded' : 'collapsed'}
        >
          <H2
            overrides={{typographyPreset: 'utilityHeading020'}}
            onClick={() =>
              openPanelIds.includes(index)
                ? setOpenPanelIds([])
                : setOpenPanelIds([index])
            }
          >
            <Stack
              flow={Flow.HorizontalCenter}
              stackDistribution="space-between"
            >
              <span>{title}</span>

              {openPanelIds.includes(index) ? (
                <IconExpandLess />
              ) : (
                <IconExpandMore />
              )}
            </Stack>
          </H2>
          {subNav && createMenuItem(subNav)}
        </MenuCollapsable>
      ))}
      <Block spaceStack="space050" />
      <Divider />
      <Block spaceStack="space050" />
      <Stack flow={Flow.HorizontalStretch} stackDistribution="space-between">
        <H2 overrides={{typographyPreset: 'utilityLabel030'}}>Github</H2>
        <IconOutlinedLaunch overrides={{size: 'iconSize020'}} />
      </Stack>
      <Block spaceStack="space050" />
      <Stack flow={Flow.HorizontalCenter} stackDistribution="space-between">
        <H2 overrides={{typographyPreset: 'utilityLabel030'}}>Dark theme</H2>
        <ThemeSwitch toggle={toggleTheme} themeMode={themeMode} />
      </Stack>
    </Menu>
  );
};
