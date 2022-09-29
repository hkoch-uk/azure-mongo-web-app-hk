
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';


import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SchoolPage from './pages/SchoolPage';
import EditChildrenFormPage from './pages/EditChildrenFormPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Login
              />
            }
          />
          <Route
            exact
            path="/school"
            element={
              <SchoolPage/>
            }
          />
          <Route
            exact
            path="/editchildren"
            element={
              <EditChildrenFormPage/>
            }
          />
        </Routes>
      </Router>
  </div>
  );
}

export default App;
