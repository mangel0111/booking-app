enum Sizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
  extraLarge = 'extraLarge',
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
};

const size = {
  mobile: '460px',
  tablet: '768px',
  desktop: '2560px',
};

export const device = {
  mobile: `(max-width: ${size.mobile}) and (max-device-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};
