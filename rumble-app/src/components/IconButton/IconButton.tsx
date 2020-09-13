import React from 'react';

import { IconButtonProps } from './types';
import { Button } from './styles';

const IconButton: React.FC<IconButtonProps> = ({ icon, color, onClick }) => (
  <Button data-testid="button" icon={icon} size="3x" color={color} onClick={onClick} />
);

export default IconButton;
