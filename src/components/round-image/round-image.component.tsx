/* eslint-disable react/require-default-props */
import { FC } from 'react';
import './round-image.styles.scss';

interface RoundImageProperties {
  /**
   * Image path
   */
  imagePath: string
  /**
   * Alt text
   */
  alt: string
  /**
   * Image size
   */
  imageWidth?: string
  /**
   * Border color
   */
  border?: string
  className?: string
}

/**
 *
 * @param imagePath
 * @returns RoundImage component
 */
const RoundImage: FC<RoundImageProperties> = ({
  imagePath, alt, imageWidth = '72', border, className
}) => (
  <img src={imagePath} aria-label={alt} width={imageWidth} height={imageWidth} className={`hu-round-image ${className}`} style={{ border }} />
);

export default RoundImage;
