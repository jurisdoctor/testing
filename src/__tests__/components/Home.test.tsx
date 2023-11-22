import { render, screen } from '@testing-library/react';

import { Home } from '../../components/Home/Home';

test('renders Home component', () => {
  render(<Home />);
  const linkElement = screen.getByText(/hello world/i);
  // expect(linkElement).toBeInTheDocument();
  // expect(linkElement).toHaveTextContent('Counter');
  expect(linkElement).toHaveAttribute('role', 'main');
});
