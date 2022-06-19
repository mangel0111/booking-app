enum Sizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
  extraLarge = 'extraLarge',
}

interface Spaicing {
  spaceAuto: string;
  space0: string;
  space2: string;
  space4: string;
  space6: string;
  space8: string;
  space10: string;
  space12: string;
  space16: string;
  space20: string;
  space24: string;
  space40: string;
  space55: string;
  space60: string;
}

interface Radius {
  rounded: string;
}

export interface IThemeProps {
  primaryColor: string;
  onPrimaryColor: string;
  secondaryColor: string;
  onSecondaryColor: string;
  tertiaryColor: string;
  onTertiaryColor: string;
  borderOnTertiaryColor: string;
  borderLineColor: string;
  borderLineActiveColor: string;
  fontColor: string;
  fontAltColor: string;
  primaryFontFamily: string;
  altFontFamily: string;
  fontSizes: {
    [key in Sizes]: string;
  };
  spacing: Spaicing;
  radius: Radius;
}

export const theme: IThemeProps = {
  primaryColor: '#fff',
  onPrimaryColor: '#1d1d1d',
  secondaryColor: '#fcc346',
  onSecondaryColor: '#0e0e0e',
  tertiaryColor: '#f7ddd1',
  onTertiaryColor: ' #1d1d1d',
  borderOnTertiaryColor: '#e8d1c6',
  borderLineColor: '#f3f3f3',
  borderLineActiveColor: '#fcc346',
  fontColor: '#0e0e0e',
  fontAltColor: '#57575a',
  primaryFontFamily: `'HalyardDisplay', 'Open Sans', 'Helvetica Neue', sans-serif`,
  altFontFamily: `"DomaineDisplayNarrow", "Times New Roman", serif`,
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '24px',
    extraLarge: '48px',
  },
  spacing: {
    spaceAuto: 'auto',
    space0: '0px',
    space2: '2px',
    space4: '4px',
    space6: '6px',
    space8: '8px',
    space10: '10px',
    space12: '12px',
    space16: '16px',
    space20: '20px',
    space24: '24px',
    space40: '40px',
    space55: '55px',
    space60: '60px',
  },
  radius: {
    rounded: '50%',
  },
};

export enum DeviceSize {
  MOBILE = 460,
  TABLET = 900,
  DESKTOP = 1200,
}

export const ScreenSize = {
  mobile: `${DeviceSize.MOBILE}px`,
  tablet: `${DeviceSize.TABLET}px`,
  desktop: `${DeviceSize.DESKTOP}px`,
};

export const device = {
  mobile: `(max-width: ${ScreenSize.mobile}) and (max-device-width: ${ScreenSize.mobile})`,
  tablet: `(max-width: ${ScreenSize.tablet}) and (max-device-width: ${ScreenSize.tablet})`,
  desktop: `(min-width: ${ScreenSize.desktop})`,
};
