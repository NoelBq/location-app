import { Typography, Chip, Box, Card, CardContent } from "@mui/material";
import { Destination } from "../../fake-api";
import { LocationCardInfo } from "../LocationCardInfo";


interface Props {
  selectedDestination: Destination;
  handleNearLocation: (location: Destination) => void;
  nearbyLocations: Destination[];
}


export function LocationCard({
  selectedDestination,
  handleNearLocation,
  nearbyLocations,
}: Props) {
  return (
    <Card sx={{
      margin: "2rem 0",
      padding: "1rem",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    }}>
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 'bold',
            mb: 4,
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
          }}
        >
          {selectedDestination.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            fontSize: { xs: '13px', md: '16px' },
          }}
        >
          {selectedDestination.description}
        </Typography>
        <LocationCardInfo
          country={selectedDestination.country}
          climate={selectedDestination.climate}
          currency={selectedDestination.currency}
        />

        <Box>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: 'semiBold',
              fontSize: { xs: '14px', sm: '16px', md: '16px' },
              mb: 1,
              mt: 2
            }}
          >
            Nearby Locations:
          </Typography>
          <Box sx={{
            display: 'flex', flexWrap: 'wrap', gap: 2,
            alignContent: 'center',
            justifyContent: 'center'

          }}>
            {nearbyLocations.map((location) => (
              <Chip
                key={location.id}
                label={location.name.toUpperCase()}
                color="primary"
                sx={{
                  cursor: 'pointer',
                  fontSize: { xs: '10px', sm: '11px', md: '12px' },
                  borderRadius: 2,
                  display: 'flex',
                  height: { xs: 20, sm: 28, md: 32 },
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => handleNearLocation(location)}
              />
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
