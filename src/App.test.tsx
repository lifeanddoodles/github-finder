import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GitHub Users title', () => {
  render(<App />);
  const titleElement = screen.getByText(/GitHub Users/i);
  expect(titleElement).toBeInTheDocument();
});
