import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

const App = () => {

  let a = 5;

  let isLoggedIn = true;


  return (
    <>
      {
        isLoggedIn ? (
          <>
            <Routes>
              <Route path="/">

              </Route>

            </Routes>

          </>
        ) : (
          <>
            <Routes>
              <Route path="/">

              </Route>

            </Routes>

          </>

        )
      }
    </>
  );
}

export default App;
