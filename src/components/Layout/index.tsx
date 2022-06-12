import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import Header from 'src/components/Header';

const LayoutContainer = styled.div``;

interface ILayoutProps {
  children: ReactElement;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <LayoutContainer data-testid="layout-container">
      <Header />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
