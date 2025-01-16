import { FC, lazy, ReactNode, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import profileImage from './assets/my-profile-image.jpeg';
import Header from './components/header/header.component';
import UserMessagingItem from './components/messaging/components/user-messaging-item.component';
import Messaging from './components/messaging/messaging.component';
import MePage from './pages/me/me.page';
import { RootState } from './store/store';

const Network = lazy(() => import('./pages/network/network.page'));
const HomePage = lazy(() => import('./pages/home/home.page'));
const LoginPage = lazy(() => import('./pages/login/login.page'));
const JobsPage = lazy(() => import('./pages/jobs/jobs.page'));
const MessagingPage = lazy(() => import('./pages/messaging/messaging.page'));
const NotificationsPage = lazy(
  () => import('./pages/notifications/notifications.page')
);

const mockMessagingItems: ReactNode[] = [];
for (let index = 0; index < 1; index++) {
  mockMessagingItems.push(
    <UserMessagingItem
      key={index}
      profileImage={profileImage}
      name="Felipe Marin"
      date="Mar 16"
      lastMessagePreview="Click here to contact me. This will open WhatsApp."
      status={index % 3 === 0 ? 'online' : 'away'}
    />
  );
}

const App: FC = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <>
      <Header
        className={`tw-mx-auto tw-fixed tw-w-screen tw-top-0 tw-z-10
   tw--translate-x-1/2 tw-left-1/2 tw-border tw-border-t-0 tw-border-l-0 tw-border-r-0 ${theme === 'dark' ? 'tw-border-b-gray-700' : 'tw-border-gray-300'}`}
      />
      <main className="xl:tw-container tw-mx-auto tw-px-10 xl:tw-px-48 tw-mt-20">
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="login" element={<LoginPage />} />
            {/* <Route path="/home" element={<PrivateRoute element={HomePage} path="/restricted" />} /> */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/me" element={<MePage />} />
            <Route path="mynetwork" element={<Network />} />
            <Route path="jobs" element={<JobsPage />} />
            <Route path="messaging" element={<MessagingPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route
              path="*"
              element={
                <div>
                  <p>Page not found!</p>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </main>
      <Messaging
        headerImage={profileImage}
        title="Messaging"
        messageItems={mockMessagingItems}
        className="tw-max-h-256 tw-w-80"
      />
    </>
  );
};
export default App;
