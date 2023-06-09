import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from '../pages/LoginScreen';
import RegisterScreen from '../pages/RegisterScreen';
import { useEffect, useReducer, useState } from 'react';
import { firebase } from '../firebase/config-firebase';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import AppRouter from './AppRouter';

const AuthRouter = () => {
  const dispatch = useDispatch();

  const [log, setLog] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setLog(true);
      } else {
        setLog(false);
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route
          path='*'
          element={!log ? <AppRouter /> : <Navigate to='/login' />}
        />
      </Routes>
    </Router>
  );
};

export default AuthRouter;
