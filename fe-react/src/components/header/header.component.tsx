/* eslint-disable react/require-default-props */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/alpha-h-box.svg';
import { navItems } from '../../constants';
import NavBar from '../navbar/navbar.component';
import SearchBar from '../search-bar/search-bar.component';
import './header.styles.scss';
import ThemeSwitch from '../theme/theme-switch.component';
import { RootState } from '../../store/store';
import { ReactComponent as BrightnessIcon } from '../../assets/icons8-brightness-50.svg';

interface HeaderProperties {
  className?: string;
}

const Header: FC<HeaderProperties> = ({ className = '' }) => {
  const theme = useSelector((state: RootState) => state.theme.mode);
  return (
    <header
      className={`${className}`}
      style={{ backgroundColor: 'var(--header-bg-color)' }}
    >
      <div className="xl:tw-container xl:tw-px-48 tw-mx-auto tw-px-2 tw-flex tw-items-center">
        <div className="hu-nav-logo tw-flex">
          <Logo
            width="24"
            height="24"
            style={{ fill: `${theme === 'light' ? 'black' : 'white'}` }}
          />
        </div>
        <div className="tw-grow">
          <SearchBar expandable />
        </div>
        <NavBar navItems={navItems} />
        <BrightnessIcon
          fill={`${theme === 'light' ? 'black' : 'white'}`}
          width="32px"
        />
        <ThemeSwitch />
      </div>
    </header>
  );
};
export default Header;
