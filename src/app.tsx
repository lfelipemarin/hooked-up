/* eslint-disable import/no-extraneous-dependencies */
import { FC, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Navigation = lazy(() => import('./pages/navigation/navigation.page'));
const Network = lazy(() => import('./pages/network/network.page'));
const HomePage = lazy(() => import('./pages/home/home.page'));
const JobsPage = lazy(() => import('./pages/jobs/jobs.page'));
const MessagingPage = lazy(() => import('./pages/messaging/messaging.page'));
const NotificationsPage = lazy(() => import('./pages/notifications/notifications.page'));

const App: FC = () => (
  <Suspense fallback="Loading...">
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="home" element={<HomePage />} />
        <Route path="mynetwork" element={<Network />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="messaging" element={<MessagingPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
      </Route>
    </Routes>
  </Suspense>

);
export default App;
