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
  borderColor?: string
}

/**
 *
 * @param imagePath
 * @returns RoundImage component
 */
const RoundImage: FC<RoundImageProperties> = ({
  imagePath, alt, imageWidth = '64', borderColor = 'white'
}) => (
  <img src={imagePath} aria-label={alt} width={imageWidth} className="hu-round-image" style={{ borderColor }} />
);

export default RoundImage;
