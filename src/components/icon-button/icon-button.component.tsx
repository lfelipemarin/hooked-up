/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import { FC, ReactNode, SyntheticEvent } from 'react';

interface IconButtonProperties {
  buttonType: 'submit' | 'reset' | 'button' | undefined;
  children?: ReactNode;
  className?: string;
  action(event: SyntheticEvent): void
}

const IconButton: FC<IconButtonProperties> = ({
  buttonType, children, className, action
}) => (
  <button type={buttonType} className={className} onClick={action}>{children}</button>
);

export default IconButton;
