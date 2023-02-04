import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Workspace = React.lazy(() => import('@layouts/Workspace'));
const LogIn = React.lazy(() => import('@pages/LogIn'));
const SignUp = React.lazy(() => import('@pages/SignUp'));

const App = () => (
  <Routes>
    <Route path="/" element={<Navigate replace to="/login" />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/workspace/:workspace" element={<Workspace />} />
  </Routes>
);

export default App;
