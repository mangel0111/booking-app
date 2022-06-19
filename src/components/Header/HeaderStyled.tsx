import { device, ScreenSize } from 'src/utilities/theme';
import styled from 'styled-components';

export const HeaderMain = styled.header`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.borderLineColor};
`;

export const HeaderContainer = styled.nav`
  display: flex;
  width: 100%;
  margin: ${({ theme }) =>
    `${theme.spacing.space0} ${theme.spacing.spaceAuto}`};
  height: 50px;

  @media ${device.desktop} {
    max-width: ${ScreenSize.desktop};
  }
`;

export const HeaderLinksContainer = styled.ul`
  display: flex;
  margin: ${({ theme }) => `${theme.spacing.space0} ${theme.spacing.space20}`};

  @media ${device.mobile} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

interface IHeaderLinkItem {
  isCurrent?: boolean;
}

export const HeaderLinkItem = styled.li<IHeaderLinkItem>`
  margin: ${({ theme }) =>
    `${theme.spacing.spaceAuto} ${theme.spacing.space10}`};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.fontAltColor};
  list-style: none;
  min-width: 55px;
  padding: ${({ theme }) => theme.spacing.space16};
  text-align: center;
  cursor: pointer;

  ${({ isCurrent, theme }) =>
    isCurrent &&
    `
    border-bottom: 2px solid ${theme.borderLineActiveColor};
    color: ${theme.fontColor};
  `}

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.borderLineActiveColor}80;
  }
`;

export const HeaderActions = styled(HeaderLinksContainer)`
  margin-left: auto;
`;

export const HeaderActionItem = styled(HeaderLinkItem)`
  color: ${({ theme }) => theme.fontColor};
`;

export const HeaderLogoContainer = styled.div`
  width: 100%;
  display: flex;

  img {
    width: 200px;
    height: 20px;
    margin: ${({ theme }) => theme.spacing.spaceAuto};
  }
`;
