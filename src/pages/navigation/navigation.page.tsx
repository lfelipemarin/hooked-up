/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header.component';

const Navigation: FC = () => (
  <>
    <div>
      <Header className="tw-w-full" />
    </div>
    <main className="lg:tw-container tw-mx-auto md:tw-px-16 tw-mt-5">
      <Outlet />
    </main>
  </>
);
export default Navigation;
