import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
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
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
