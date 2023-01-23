/* eslint-disable react/require-default-props */
import { FC, ReactElement } from 'react';
import './main.layout.styles.scss';

interface MainLayoutProperties {
  SectionLeft?: ReactElement
  SectionCenter?: ReactElement
  SectionRight?: ReactElement
  /**
   * Number of colums for the layout.
   * Supported values:
   * colums = 2
   */
  columns?: number
  /**
   * Include this attribute if you want to
   * span the 2 colums from the left.
   * Requires to be combined with columns = 2
   */
  left?: boolean
}

const MainLayout: FC<MainLayoutProperties> = ({
  SectionLeft, SectionCenter, SectionRight, columns = 3, left
}) => {
  const leftClass = left && columns === 2 ? `hu-main-layout--${columns}-cols-left` : '';
  return (
    <div className={`hu-main-layout hu-main-layout--${columns}-cols ${leftClass} tw-grid`}>
      <section className="hu-main-section-left hu-left-sidebar">
        {SectionLeft}
      </section>
      <section className="hu-main-section-center hu-center-main">
        {SectionCenter}
      </section>
      <section className="hu-main-section-right hu-right-aside">
        {SectionRight}
      </section>
    </div>
  );
};

export default MainLayout;
