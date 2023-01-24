/* eslint-disable react/require-default-props */
import {
  FC, ReactNode, SVGProps
} from 'react';

interface IconButtonProperties {
  labelText: string
  Icon?: FC<SVGProps<SVGSVGElement>>
  iconColor?: string
  className?: string
}

const Button: FC<IconButtonProperties> = ({
  labelText, Icon, iconColor = 'black', className = ''
}) => {
  let iconJSX: ReactNode;
  if (Icon) {
    iconJSX = <Icon color={iconColor} />;
  }
  return (
    <button
      type="button"
      aria-label={labelText}
      className={className}
    >
      {iconJSX}
      {labelText}
    </button>
  );
};

export default Button;
