import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login';
import { CssBaseline } from "@mui/material";
import HomePage from './components/Homepage';
import Community from 'components/Community';
import { useSelector } from "react-redux";

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));
  const user = useSelector((state) => state.user);
  console.log(user);
  console.log(isAuth);

  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home"
            element={isAuth ? <HomePage /> : <Navigate to="/" />}
          />
          <Route
            path="/community"
            element={isAuth ? <Community /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;