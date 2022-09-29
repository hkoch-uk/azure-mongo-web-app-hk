import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Test from './components/Test'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

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
            path="/test"
            element={
              <Test></Test>
            }
          />
        </Routes>
      </Router>
  </div>
  );
}

export default App;
