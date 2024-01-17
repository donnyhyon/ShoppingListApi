import { render, screen } from '@testing-library/react';

test('render shopping list home page', () => {
  render(<ShoppingList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
