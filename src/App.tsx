import { FC } from 'react';
import Layout from 'src/components/Layout';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/utilities/theme';
import Dashboard from 'src/pages/Dashboard';
import GlobalStyle from 'src/utilities/theme/globalStyles';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
