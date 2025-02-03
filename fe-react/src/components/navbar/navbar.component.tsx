/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/require-default-props */
import {
  FC, MouseEvent, SVGProps, useEffect, useState
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import IconText from '../icon/icon-text.component';
import './navbar.styles.scss';
import { RootState } from '../../store/store';
import { setActiveItem } from '../../store/navbar/navbar.slice';

export interface Style {
  width: string,
  height: string
}

export interface IconTextProperties {
  /**
   * The id of the element
   */
  id: number
  /**
  * Icon in SVG format
  */
  iconKey: string
  /**
   * Description text
   */
  text?: string
  /**
   * Link for the href
   */
  link?: string
  /**
   * Target for the "a" element
   */
  target?: string
  /**
   * Styles applied to the SVG
   */
  style?: Style
  borderStyle?: object
  /**
   * Active class
   */
  isActive?: boolean
  onClick?: (id: number, event_: MouseEvent) => void
}

export interface NavBarProperties {
  /**
   * NavBar items
   */
  // navItems: IconTextProperties[],
  className?: string
}

const NavBar: FC<NavBarProperties> = ({ className = '' }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navItems = useSelector((state: RootState) => state.navBar.items)
  useEffect(() => {
    const activeItem = navItems.find((item) => item.link === pathname)
    if (activeItem) {
      dispatch(setActiveItem(activeItem.id))
    }
  }, [pathname, dispatch])
  return (
    <ul className={`tw-flex ${className}`}>
      {navItems.map((navItem) => (
        <li key={navItem.id}>
          <IconText
            id={navItem.id}
            iconKey={navItem.iconKey}
            isActive={navItem.isActive}
            link={navItem.link}
            text={navItem.text}
            target={navItem.target}
          />
        </li>
      ))}
    </ul>
  );
};
export default NavBar;
