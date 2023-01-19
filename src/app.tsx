/* eslint-disable import/no-extraneous-dependencies */
import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Navigation = lazy(() => import('./pages/navigation/navigation.page'));
const Network = lazy(() => import('./pages/network/network.page'));
const HomePage = lazy(() => import('./pages/home/home.page'));

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<HomePage />} />
      <Route path="network" element={<Network />} />
    </Route>
  </Routes>

);
export default App;
