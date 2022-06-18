import { device } from 'src/utilities/theme';
import styled from 'styled-components';

export const HeaderMain = styled.header`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.borderLineColor};
`;

export const HeaderContainer = styled.nav`
  display: flex;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: 0 auto;
  height: 50px;
`;

export const HeaderLinksContainer = styled.ul`
  display: flex;
  margin: 0 20px;

  @media ${device.mobile} {
    display: none;
  }
`;

interface IHeaderLinkItem {
  isCurrent?: boolean;
}

export const HeaderLinkItem = styled.li<IHeaderLinkItem>`
  margin: auto 10px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.fontAltColor};
  list-style: none;
  min-width: 55px;
  padding: 16px;
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
    margin: auto;
  }
`;
