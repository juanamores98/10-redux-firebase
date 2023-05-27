import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginScreen from '../pages/LoginScreen';
import RegisterScreen from '../pages/RegisterScreen';

const AuthRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
      </Routes>
    </Router>
  );
};

export default AuthRouter;
