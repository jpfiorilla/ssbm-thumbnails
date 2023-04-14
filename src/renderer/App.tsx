import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
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
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
