import {
  FC, Key, MouseEvent, SVGProps, useState
} from 'react';
import IconText from '../icon/icon-text.component';

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
  onClick?(id: Key, event_: MouseEvent<HTMLDivElement, MouseEvent>): void
}

export interface NavBarProperties {
  /**
   * NavBar items
   */
  navItems: IconTextProperties[]
}

const NavBar: FC<NavBarProperties> = ({ navItems }) => {
  const [activeItems, setActiveItems] = useState(navItems);
  const clickHandler = (itemId: Key, event_: MouseEvent<HTMLDivElement, MouseEvent>): void => {
    event_.preventDefault();
    const items = [...activeItems];
    // eslint-disable-next-line no-restricted-syntax
    for (const item of items) {
      item.isActive = itemId === item.id;
    }
    setActiveItems(items);
  };
  return (
    <ul className="tw-flex">
      {activeItems.map((navItem) => (
        <li key={navItem.id}>
          <IconText
            id={navItem.id}
            Icon={navItem.Icon}
            isActive={navItem.isActive}
            link={navItem.link}
            text={navItem.text}
            target={navItem.target}
            onClick={clickHandler}
          />
        </li>
      ))}
    </ul>
  );
};
export default NavBar;
