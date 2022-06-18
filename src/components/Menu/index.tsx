import { FC } from 'react';
import { FcMenu } from 'react-icons/fc';
import styled from 'styled-components';

const MenuContainer = styled.div`
  border-right: 1px solid ${({ theme }) => theme.borderLineColor};
  border-left: 1px solid ${({ theme }) => theme.borderLineColor};
  padding: 15px;
`;

const Menu: FC = () => {
  return (
    <MenuContainer data-testid="menu-container">
      <FcMenu size={'20px'} />
    </MenuContainer>
  );
};

export default Menu;
