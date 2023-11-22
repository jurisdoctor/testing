import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from '../../components/Counter/Button/Button';

test('handles onClick', () => {
  const onClick = jest.fn();
  render(<Button title="increment" onClick={onClick} />);
  const buttonElement = screen.getByText('increment');
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('increment');
  expect(onClick).toHaveBeenCalledTimes(1);
});
