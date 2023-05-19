/* eslint-disable import/no-extraneous-dependencies */
import {
  FC, lazy, ReactNode, Suspense
} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import profileImage from './assets/my-profile-image.jpeg';
import Header from './components/header/header.component';
import UserMessagingItem from './components/messaging/components/user-messaging-item.component';
import Messaging from './components/messaging/messaging.component';

const Network = lazy(() => import('./pages/network/network.page'));
const HomePage = lazy(() => import('./pages/home/home.page'));
const JobsPage = lazy(() => import('./pages/jobs/jobs.page'));
const MessagingPage = lazy(() => import('./pages/messaging/messaging.page'));
const NotificationsPage = lazy(() => import('./pages/notifications/notifications.page'));

const mockMessagingItems: ReactNode[] = [];
for (let index = 0; index < 20; index++) {
  mockMessagingItems.push(<UserMessagingItem
    key={index}
    profileImage={profileImage}
    name="Joe Doe"
    date="Mar 16"
    lastMessagePreview="I understand this is a message preview I understand this is a message
    preview I understand this is a message preview I understand this is a message preview"
  />);
}

const App: FC = () => (
  <>
    <Header className="tw-mx-auto md:tw-px-16 tw-fixed tw-w-screen tw-top-0 tw-z-10 tw-bg-white
   tw--translate-x-1/2 tw-left-1/2 tw-border tw-border-solid tw-border-b-gray-300"
    />
    <main className="lg:tw-container tw-mx-auto md:tw-px-16 tw-mt-20">
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="mynetwork" element={<Network />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="messaging" element={<MessagingPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route
            path="*"
            element={(
              <div>
                <p>Page not found!</p>
              </div>
            )}
          />
        </Routes>
      </Suspense>
    </main>
    <Messaging headerImage={profileImage} title="Messaging" messageItems={mockMessagingItems} className="tw-max-h-256 tw-w-80" />
  </>
);
export default App;
