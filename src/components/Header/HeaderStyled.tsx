import { device } from 'src/utilities/theme';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.borderLineColor};
`;

export const HeaderLinksContainer = styled.nav`
  display: flex;
  margin: 0 20px;

  @media ${device.mobile} {
    display: none;
  }
`;

interface IHeaderLinkItem {
  isCurrent?: boolean;
}

export const HeaderLinkItem = styled.div<IHeaderLinkItem>`
  margin: auto 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.fontAltColor};
  ${({ isCurrent, theme }) =>
    isCurrent &&
    `
    border-bottom: 2px solid ${theme.borderLineActiveColor};
    padding: 18px;
    color: ${theme.fontColor};
  `}
`;

export const HeaderActions = styled(HeaderLinksContainer)`
  margin-left: auto;
`;

export const HeaderActionItem = styled(HeaderLinkItem)`
  color: ${({ theme }) => theme.fontColor};
`;

export const HeaderLogo = styled.div`
  width: 100%;
  display: flex;

  img {
    width: 200px;
    height: 20px;
    margin: auto;
  }
`;
