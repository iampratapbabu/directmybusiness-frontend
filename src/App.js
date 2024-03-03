import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import UserLayout from './layouts/UserLayout';
import Profile from './pages/user/Profile';
import Homepage from './pages/Homepage';

const App = () => {

  let isLoggedIn = true;

  return (
    <>
      {
        !isLoggedIn ? (
          <>
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>

          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<UserLayout />}>
                <Route path="" element={<Homepage />} />
                <Route path="profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="" replace />} />
              </Route>

            </Routes>

          </>

        )
      }

    </>
  );
}

export default App;
