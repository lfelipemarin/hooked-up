/* eslint-disable jsx-a11y/role-has-required-aria-props */
import { FC, useState } from 'react';
import { ReactComponent as MagnifyLogo } from '../../assets/magnify.svg';
import './search-bar.styles.scss';

interface SearchBarProperties {
  expandable?: boolean,
  className?: string
}

const SearchBar: FC<SearchBarProperties> = ({ expandable, className = '' }) => {
  const [expanded, setExpanded] = useState(false);
  const clickHandler = (): void => {
    if (expandable) { setExpanded(!expanded); }
  };
  const expandedClass = expanded ? 'hu-main-search-bar--inner-expanded' : '';
  const explandableClasses = expandable ? 'hu-main-search-bar--inner' : '';
  return (
    <div className={`hu-main-search-bar tw-block tw-relative ${className}`} onFocus={clickHandler} onBlur={clickHandler} aria-hidden>
      <div className={`${explandableClasses} ${expandedClass}`}>
        <input type="text" className="tw-h-9 tw-bg-gray-100" placeholder="Search" role="combobox" aria-expanded="false" aria-label="Search" />
        <div className="tw-absolute tw-top-0 tw-left-0 tw-h-9 tw-flex tw-items-center tw-p-2 tw-pointer-events-none">
          <MagnifyLogo width="1.2em" height="1.2em" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
