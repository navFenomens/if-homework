import { render, screen } from '@testing-library/react';
import InsurancePolicyComponent from './components/insurancePolicyComponent/insurancePolicyComponent';

test('renders learn react link', () => {
  render(<InsurancePolicyComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
