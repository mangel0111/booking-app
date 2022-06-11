import { FC } from 'react';
import { FcMenu } from 'react-icons/fc';
import styled from 'styled-components';

const MenuContainer = styled.div`
  border-right: 1px solid ${({ theme }) => theme.borderLineColor};
  padding: 15px;
`;

const Menu: FC = () => {
  return (
    <MenuContainer>
      <FcMenu size={'20px'} />
    </MenuContainer>
  );
};

export default Menu;
