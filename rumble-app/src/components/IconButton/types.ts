import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IconButtonProps {
  icon: IconProp;
  color: string;
  onClick: () => void;
}
