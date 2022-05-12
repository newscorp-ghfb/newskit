import * as React from 'react';
import {FlagProps, GridLayout, H2, IconButton, styled} from 'newskit';
import {IconFilledLight, IconFilledDark} from './icons';

interface ThemeSwitchProps {
  toggle: () => void;
  themeMode: string;
  textTheme?: boolean;
}
const StyledAnchor = styled.a`
  text-decoration: none;
`;
export const ThemeSwitch: React.FC<
  ThemeSwitchProps & {size?: FlagProps['size']}
> = ({size, toggle, themeMode, textTheme}) => {
  const isDark = () => themeMode === 'dark';

  return textTheme ? (
    <>
      <StyledAnchor onClick={toggle}>
        <GridLayout columns="1fr 30px">
          <H2 overrides={{typographyPreset: 'utilityLabel030'}}>
            {`${isDark() ? 'Light' : 'Dark'}  Theme`} {textTheme}
          </H2>
          <IconButton
            size={size}
            eventContext={{
              currentThemeMode: themeMode,
            }}
            eventOriginator="theme-switch-button"
            data-testid="theme-switch-button"
            onClick={toggle}
            title={`${isDark() ? 'Disable' : 'Enable'} Dark Theme`}
            aria-label={`${isDark() ? 'Disable' : 'Enable'} Dark Theme`}
            aria-pressed={isDark() ? 'true' : 'false'}
            overrides={{
              stylePreset: 'buttonLightDarkToggle',
            }}
          >
            {isDark() ? (
              <IconFilledLight overrides={{size: 'iconSize010'}} />
            ) : (
              <IconFilledDark overrides={{size: 'iconSize010'}} />
            )}
          </IconButton>
        </GridLayout>
      </StyledAnchor>
    </>
  ) : (
    <IconButton
      size={size}
      eventContext={{
        currentThemeMode: themeMode,
      }}
      eventOriginator="theme-switch-button"
      data-testid="theme-switch-button"
      onClick={toggle}
      title={`${isDark() ? 'Disable' : 'Enable'} Dark Theme`}
      aria-label={`${isDark() ? 'Disable' : 'Enable'} Dark Theme`}
      aria-pressed={isDark() ? 'true' : 'false'}
      overrides={{
        stylePreset: 'buttonLightDarkToggle',
      }}
    >
      {isDark() ? (
        <IconFilledLight overrides={{size: 'iconSize010'}} />
      ) : (
        <IconFilledDark overrides={{size: 'iconSize010'}} />
      )}
    </IconButton>
  );
};
