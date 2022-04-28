import * as React from 'react';
import {
  getMediaQueryFromTheme,
  styled,
  Devices,
  getDeviceQueryFromTheme,
  css,
  getSpacingCssFromTheme,
  getStylePresetFromTheme,
  Block,
  Visible,
  getColorCssFromTheme,
} from 'newskit';
import {Overlay} from '../overlay';
import {SidebarNav} from './sidebar-navigation';
import {ThemeSwitch} from '../theme-switch';
import {GitHubLaunch} from '../menu-collapsible/menu-collapsible';

interface SidebarProps {
  sidebarOpen: boolean;
  handleSidebarClick: () => void;
  hideSidebar?: boolean;
  toggleTheme: () => void;
  themeMode: string;
}
interface SidebarWrapperProps {
  open: boolean;
  hideSidebar?: boolean;
}

const SidebarWrapper = styled.div<SidebarWrapperProps>`
  width: 100%;
  ${getSpacingCssFromTheme('paddingRight', 'space050')};
  position: fixed;
  overflow: auto;
  bottom: 0;
  top: 0;
  left: 0;
  z-index: 3;
  transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 300ms;
  ${getSpacingCssFromTheme('paddingTop', 'space020')};
  ${getSpacingCssFromTheme('marginTop', 'space080')};
  ${getStylePresetFromTheme('sidebar')};
  ${getColorCssFromTheme('background', 'interface030')};
  ${getMediaQueryFromTheme('lg')} {
    width: 276px;
    display: ${({hideSidebar}) => hideSidebar && 'none'};
    ${getSpacingCssFromTheme('marginTop', 'space100')};
    transform: translateX(0);
    overflow: hidden;
    &:hover {
      overflow: auto;
    }
  }

  ${getDeviceQueryFromTheme(
    [Devices.iPadPro],
    css`
      overflow: auto;
    `,
  )};
`;

// const IconWrapper = styled.div`
//   align-self: center;
// `;

const Sidebar: React.FC<SidebarProps> = ({
  sidebarOpen,
  toggleTheme,
  themeMode,
  handleSidebarClick,
  hideSidebar,
}) => (
  <>
    <SidebarWrapper
      open={sidebarOpen}
      data-testid="sidebar"
      role="complementary"
      hideSidebar={hideSidebar}
    >
      <Block spaceInset="space010" />

      <SidebarNav />
      <Visible xs sm md>
        <Block spaceStack="space050" />
        <GitHubLaunch href="https://github.com/newscorp-ghfb/newskit" />
        <Block spaceStack="space040" />
        <ThemeSwitch toggle={toggleTheme} themeMode={themeMode} textTheme />
      </Visible>
    </SidebarWrapper>

    <Overlay
      open={sidebarOpen}
      handleSidebarClick={handleSidebarClick}
      zIndex={2}
      lockScroll={sidebarOpen}
      hideAtBreakpoint="lg"
    />
  </>
);

export default Sidebar;
