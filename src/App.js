import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authenticatio from './pages/Authentication/Authenticatio';
import HomePage from './pages/Home/HomePage';
import ProfilePage from './pages/Profile/ProfilePage';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Authenticatio />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
