import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { RegisterTest } from './components/RegisterTest';
import Login from './pages/Login'
import SchoolPage from './pages/SchoolPage'

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Home />} />
        <Route path="join-us" element={<RegisterTest />} />
        <Route path="login" element={<Login />} />
        <Route path="school" element={<SchoolPage />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
}

export default App;
