/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-one-expression-per-line */
import {
  FC, useEffect, useRef, useState
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { IconTextProperties } from '../navbar/navbar.component';
import './icon-text.styles.scss';

/**
 * Icon with text description
*/
const IconText: FC<IconTextProperties> = ({
  id,
  Icon,
  text = 'test',
  link,
  target = '_self',
  style = { width: '1.5em', height: '1.5em' },
  borderStyle = { borderBottom: '2px solid gray' },
  isActive = false,
  onClick
}) => {
  const [allStyles, setAllStyles] = useState({});
  useEffect(() => {
    setAllStyles({ transform: isActive ? 'scaleX(1)' : 'scaleX(0)', ...borderStyle });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { width, height } = style;
  const nodeReference = useRef(null);
  return (
    <div className="hu-icon-text" onClick={(event_) => onClick?.(id, event_)} role="button" tabIndex={id as number} aria-hidden>
      <a
        href={link}
        target={target}
        className="tw-flex tw-flex-col tw-w-fit tw-justify-center tw-items-center tw-p-2"
      >
        <Icon
          className="tw-max-w-xs"
          width={width}
          height={height}
        />
        <span className="tw-text-center tw-text-xs tw-whitespace-nowrap">{text}</span>
      </a>
      <CSSTransition nodeRef={nodeReference} in={isActive} timeout={200} classNames="hu-icon-border-bottom--is-active">
        <span ref={nodeReference} className="hu-icon-border-bottom" style={allStyles} />
      </CSSTransition>
    </div>
  );
};
export default IconText;
