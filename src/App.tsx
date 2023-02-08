import { main } from './themes/main';
import { ThemeProvider } from './themes/ThemeProvider';
import styled from '@emotion/styled';
import { Navigation } from './components';
import { Route, Routes } from 'react-router-dom';
import { Home, Characters, About } from './pages';

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  color: #fff;
`;

function App() {
  return (
    <ThemeProvider theme={main}>
      <AppContainer theme={main}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
