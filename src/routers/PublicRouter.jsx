/*import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router';

const PublicRouter = ({ log, component: Component }) => {
  return !log ? <Component /> : <Navigate to='/app' />;
};

export default PublicRouter;*/

import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router';

const PublicRouter = ({ log, component: Component }) => {
  return log ? <Component /> : <Navigate to='/login' />;
};

export default PublicRouter;
