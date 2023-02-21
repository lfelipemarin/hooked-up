/* eslint-disable react/require-default-props */
import { FC } from 'react';
import { ReactComponent as Logo } from '../../assets/alpha-h-box.svg';
import { navItems } from '../../constants';
import NavBar from '../navbar/navbar.component';
import SearchBar from '../search-bar/search-bar.component';
import './header.styles.scss';

interface HeaderProperties {
  className?: string
}

const Header: FC<HeaderProperties> = ({ className }) => (
  <header className={`${className}`}>
    <div className="lg:tw-container xl:tw-px-20 tw-px-2 tw-flex tw-items-center">
      <div className="hu-nav-logo tw-flex">
        <Logo width="24" height="24" />
      </div>
      <SearchBar />
      <NavBar navItems={navItems} />
    </div>
  </header>
);
export default Header;
