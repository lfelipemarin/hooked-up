/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header.component';

const Navigation: FC = () => (
  <>
    <div className="md:tw-container tw-mx-auto md:tw-px-16">
      <Header className="tw-w-full" />
    </div>
    <main className="tw-container tw-mx-auto">
      <Outlet />
    </main>
  </>
);
export default Navigation;
