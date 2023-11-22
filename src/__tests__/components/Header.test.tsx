import { render, screen } from '@testing-library/react';

import { Header } from '../../components/Header/Header';

test('renders Header component', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Counter/i);
  // expect(linkElement).toBeInTheDocument();
  // expect(linkElement).toHaveTextContent('Counter');
  expect(linkElement).toHaveAttribute('role', 'contentinfo');
});
