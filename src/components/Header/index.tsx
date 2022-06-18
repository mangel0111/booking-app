import { FC } from 'react';
import { BiSearch } from 'react-icons/bi';
import Menu from 'src/components/Menu';
import logo from '../../logo.svg';
import {
  HeaderActionItem,
  HeaderActions,
  HeaderContainer,
  HeaderLinkItem,
  HeaderLinksContainer,
  HeaderLogoContainer,
  HeaderMain,
} from './HeaderStyled';

const Header: FC = () => {
  return (
    <HeaderMain>
      <HeaderContainer data-testid="header-container">
        <Menu />
        <HeaderLinksContainer data-testid="header-links">
          <HeaderLinkItem isCurrent>HOME</HeaderLinkItem>
          <HeaderLinkItem>HOSTS</HeaderLinkItem>
        </HeaderLinksContainer>
        <HeaderLogoContainer>
          <img
            src={logo}
            data-testid="header-logo"
            className="App-logo"
            alt="logo"
          />
        </HeaderLogoContainer>
        <HeaderActions data-testid="header-actions">
          <HeaderActionItem data-testid="header-link-needs-help">
            Need help?
          </HeaderActionItem>
          <HeaderActionItem data-testid="header-link-login">
            Login
          </HeaderActionItem>
          <HeaderActionItem>
            <BiSearch data-testid="header-link-search" />
          </HeaderActionItem>
        </HeaderActions>
      </HeaderContainer>
    </HeaderMain>
  );
};

export default Header;
