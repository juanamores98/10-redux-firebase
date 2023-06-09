import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router';

const PrivateRouter = ({ log, component: Component }) => {
  return log ? <Component /> : <Navigate to='/login' />;
};

export default PrivateRouter;
