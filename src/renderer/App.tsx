import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Stack, ThemeProvider } from '@mui/material';
import { Nav } from './components';
import { Home } from './pages';
import { theme } from './theme';
import './App.css';

// function Hello() {
//   return (
//     <div>
//       hi
//       <button
//         id="btn"
//         type="button"
//         onClick={async () => {
//           const value = await window.electron.ipcRenderer.setTitle('asdf');
//           console.log({ value });
//         }}
//       >
//         Set
//       </button>
//     </div>
//   );
// }

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav />
        <Stack sx={{ overflowY: 'auto' }} width="100%">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Stack>
      </Router>
    </ThemeProvider>
  );
}
