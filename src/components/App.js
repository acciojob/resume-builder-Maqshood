import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Education from './pages/Education';
// ... other imports

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/education" element={<Education />} />
      {/* Add other routes */}
    </Routes>
  );
}

export default App;
