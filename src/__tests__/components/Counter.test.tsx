import { fireEvent, render, screen } from '@testing-library/react';

import { Counter } from '../../components/Counter/Counter';

test('handles onClick', () => {
  render(<Counter />);

  const divElement = screen.getByRole('contentinfo');
  const buttonElement = screen.getByText('+');
  fireEvent.click(buttonElement);

  expect(divElement).toHaveTextContent('Count is 1');
});
