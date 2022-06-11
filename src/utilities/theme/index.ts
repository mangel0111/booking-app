export interface IThemeProps {
  primaryColor: string;
  secondaryColor: string;
  onSecondaryColor: string;
  borderLineColor: string;
  borderLineActiveColor: string;
  fontColor: string;
  fontAltColor: string;
}

export const theme: IThemeProps = {
  primaryColor: '#ff',
  secondaryColor: '#fcc346',
  onSecondaryColor: '#0e0e0e',
  borderLineColor: '#f3f3f3',
  borderLineActiveColor: '#fcc346',
  fontColor: '#0e0e0e',
  fontAltColor: '#7e7e81',
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
