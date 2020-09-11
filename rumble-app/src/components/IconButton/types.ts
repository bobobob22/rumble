import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {func} from "prop-types";


export interface IconButtonProps {
  icon: IconProp;
  color: string;
  onClick: () => void;
}
