/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header.component';

const Navigation: FC = () => (
  <>
    <Header className="tw-mx-auto md:tw-px-16 tw-fixed tw-w-screen tw-top-0 tw-z-10 tw-bg-white
     tw--translate-x-1/2 tw-left-1/2 tw-border tw-border-solid tw-border-b-gray-300"
    />
    <main className="lg:tw-container tw-mx-auto md:tw-px-16 tw-mt-20">
      <Outlet />
    </main>
  </>
);
export default Navigation;
