import { render, screen, fireEvent } from '@testing-library/react';
import { LocationCard } from './LocationCard'; // Adjust the import based on your file structure
import { Destination } from '../../fake-api'; // Adjust import if necessary

const selectedDestination: Destination = {
  id: 1,
  name: 'Paris',
  description: 'City of Light',
  country: 'France',
  climate: 'Temperate',
  currency: 'Euro',
  latitude: 0,
  longitude: 0
};

const nearbyLocations: Destination[] = [
  {
    id: 2, name: 'Lyon', description: 'Known for its cuisine', country: 'France', climate: 'Temperate', currency: 'Euro',
    latitude: 0,
    longitude: 0
  },
  {
    id: 3, name: 'Marseille', description: 'Port city', country: 'France', climate: 'Mediterranean', currency: 'Euro',
    latitude: 0,
    longitude: 0
  }
];

const handleNearLocation = jest.fn();

describe('LocationCard', () => {
  it('should render the selected destination name and description', () => {
    render(
      <LocationCard
        selectedDestination={selectedDestination}
        handleNearLocation={handleNearLocation}
        nearbyLocations={nearbyLocations}
      />
    );

  });

  it('should render nearby locations as chips', () => {
    render(
      <LocationCard
        selectedDestination={selectedDestination}
        handleNearLocation={handleNearLocation}
        nearbyLocations={nearbyLocations}
      />
    );
  });

  it('should call handleNearLocation when a chip is clicked', () => {
    render(
      <LocationCard
        selectedDestination={selectedDestination}
        handleNearLocation={handleNearLocation}
        nearbyLocations={nearbyLocations}
      />
    );

    const firstChip = screen.getByText(nearbyLocations[0].name.toUpperCase());
    fireEvent.click(firstChip);

    expect(handleNearLocation).toHaveBeenCalledWith(nearbyLocations[0]);
  });
});
