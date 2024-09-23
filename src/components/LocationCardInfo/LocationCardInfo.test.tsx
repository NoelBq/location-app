import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LocationCardInfo } from './LocationCardInfo';

describe('LocationCardInfo', () => {
  const props = {
    country: 'Argentina',
    climate: 'Temperate',
    currency: 'ARS'
  };

  test('renders the location card info with the provided props', () => {
    render(<LocationCardInfo {...props} />);

    expect(screen.getByText(/Country:/))
    expect(screen.getByText(/Climate:/))
    expect(screen.getByText(/Currency:/))

    expect(screen.getByTestId('LocationOnIcon')).toBeInTheDocument();
    expect(screen.getByTestId('CloudIcon')).toBeInTheDocument();
    expect(screen.getByTestId('AttachMoneyIcon')).toBeInTheDocument();
  });
});
