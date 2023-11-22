import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from '../../components/Button/Button';

test('renders Button component', () => {
  render(<Button title="increment" />);
  const buttonElement = screen.getByText(/increment/i);
  // expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('increment');
});

test('handles onClick', () => {
  const onClick = jest.fn();
  render(<Button title="increment" onClick={onClick} />);
  const buttonElement = screen.getByText('increment');
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('increment');
  expect(onClick).toHaveBeenCalledTimes(1);
});
