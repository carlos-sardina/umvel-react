import { main } from './themes/main';
import { ThemeProvider } from './themes/ThemeProvider';
import styled from '@emotion/styled';
import { Navigation } from './components';

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  color: #fff;
`;

function App() {
  return (
    <ThemeProvider theme={main}>
      <AppContainer theme={main}>
        <Navigation />
        <span>app</span>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
