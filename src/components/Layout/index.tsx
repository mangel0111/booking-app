import { FC, ReactElement } from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div``;

interface ILayoutProps {
  children: ReactElement;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
