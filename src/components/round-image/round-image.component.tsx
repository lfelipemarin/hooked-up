import { FC } from 'react';

interface RoundImageProperties {
  /**
   * Test
   */
  imagePath: string,
  /**
   * Alt
   */
  alt: string
}

/**
 *
 * @param imagePath
 * @returns RoundImage component
 */
const RoundImage: FC<RoundImageProperties> = ({ imagePath = './path/to/image', alt = 'alt text' }) => (
  <object data={imagePath} type="image/svg+xml" aria-label={alt} />
);

export default RoundImage;
