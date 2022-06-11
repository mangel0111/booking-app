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
  HeaderLogo,
} from './HeaderStyled';

const Header: FC = () => {
  return (
    <HeaderContainer>
      <Menu />
      <HeaderLinksContainer>
        <HeaderLinkItem isCurrent>HOME</HeaderLinkItem>
        <HeaderLinkItem>HOSTS</HeaderLinkItem>
      </HeaderLinksContainer>
      <HeaderLogo>
        <img src={logo} className="App-logo" alt="logo" />
      </HeaderLogo>
      <HeaderActions>
        <HeaderActionItem>Need help?</HeaderActionItem>
        <HeaderActionItem>Login</HeaderActionItem>
        <HeaderActionItem>
          <BiSearch />
        </HeaderActionItem>
      </HeaderActions>
    </HeaderContainer>
  );
};

export default Header;
