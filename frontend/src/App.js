import './App.css';
import { Navbar } from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Register } from './Components/Register';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Home />} />
        <Route path="join-us" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
}

export default App;
