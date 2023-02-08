import { main } from './themes/main';
import { ThemeProvider } from './themes/ThemeProvider';

function App() {
  return (
    <ThemeProvider theme={main}>
      <span>app</span>
    </ThemeProvider>
  );
}

export default App;
