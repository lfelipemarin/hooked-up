/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/require-default-props */
import {
  FC, Key, MouseEvent, SVGProps, useEffect, useState
} from 'react';
import { useLocation } from 'react-router-dom';
import IconText from '../icon/icon-text.component';
import './navbar.styles.scss';

export interface Style {
  width: string,
  height: string
}

export interface IconTextProperties {
  /**
   * The id of the element
   */
  id: Key
  /**
  * Icon in SVG format
  */
  Icon: FC<SVGProps<SVGSVGElement>>
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
  onClick?: (id: Key, event_: MouseEvent) => void
}

export interface NavBarProperties {
  /**
   * NavBar items
   */
  navItems: IconTextProperties[],
  className?: string
}

const NavBar: FC<NavBarProperties> = ({ navItems, className = '' }) => {
  const { pathname } = useLocation();
  const [activeItems, setActiveItems] = useState(navItems);
  useEffect(() => {
    const items = [...activeItems];
    // eslint-disable-next-line no-restricted-syntax
    for (const item of items) {
      item.isActive = item.link === pathname;
    }
    setActiveItems(items);
  }, [pathname]);
  return (
    <ul className={`tw-flex ${className}`}>
      {activeItems.map((navItem) => (
        <li key={navItem.id}>
          <IconText
            id={navItem.id}
            Icon={navItem.Icon}
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
