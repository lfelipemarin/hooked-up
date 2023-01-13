/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-one-expression-per-line */
import {
  FC, SVGProps, useRef
} from 'react';
import { CSSTransition } from 'react-transition-group';
import './icon-text.styles.scss';

interface Style {
  width: string,
  height: string
}

interface IconTextProperties {
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
  target?: string,
  /**
   * Styles applied to the SVG
   */
  style?: Style,
  borderStyle?: object,
  /**
   * Active class
   */
  isActive?: boolean
}

/**
 * Icon with text description
 */
const IconText: FC<IconTextProperties> = ({
  Icon,
  text = 'test',
  link,
  target = '_blank',
  style = { width: '2em', height: '2em' },
  borderStyle = { borderBottom: '2px solid gray' },
  isActive = false
}) => {
  const { width, height } = style;
  const nodeReference = useRef(null);
  return (
    <div className="hu-icon-text">
      <a
        href={link}
        target={target}
        className="tw-flex tw-flex-col tw-gap-2 tw-w-fit tw-justify-center tw-items-center tw-p-2"
      >
        <Icon
          className="tw-max-w-xs"
          width={width}
          height={height}
        />
        <span className="tw-text-center tw-text-xs tw-whitespace-nowrap">{text}</span>
      </a>
      <CSSTransition nodeRef={nodeReference} in={isActive} timeout={200} classNames="hu-icon-border-bottom--is-active">
        <span ref={nodeReference} className="hu-icon-border-bottom" style={borderStyle} />
      </CSSTransition>
    </div>
  );
};
export default IconText;
