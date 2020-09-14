import React from 'react';
import { render } from '@testing-library/react';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons/faTimesCircle';

import IconButton from './IconButton';

it('should render icon button', () => {
  const { container } = render(
    <IconButton
      icon={faTimesCircle}
      color="red"
      onClick={jest.fn()}
    />,
  );
  expect(container.getElementsByTagName('svg')).toHaveLength(1);
});
