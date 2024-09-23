import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloudIcon from '@mui/icons-material/Cloud';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


interface Props {
  country: string;
  climate: string;
  currency: string;
}

export function LocationCardInfo({ country, climate, currency }: Props) {
  const iconStyle = {
    fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
    display: 'flex',
    alignItems: 'center',
    color: '#80C4E9',
    mr: 1
  }
  return (
    <Box sx={{
      alignContent: 'center',
      width: '100%',
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      justifyContent: 'center',
      gap: { xs: 1, sm: 2 },
      my: 1

    }}>
      <Typography
        variant="body2"
        sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, display: 'flex', alignItems: 'center' }}
      >
        <LocationOnIcon sx={iconStyle} />
        <strong>Country:&nbsp;</strong> {country}
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, display: 'flex', alignItems: 'center' }}
      >
        <CloudIcon sx={iconStyle} />
        <strong>Climate:&nbsp;</strong> {climate}
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, display: 'flex', alignItems: 'center' }}
      >
        <AttachMoneyIcon sx={iconStyle} />
        <strong>Currency:&nbsp;</strong> {currency}
      </Typography>
    </Box>
  )
}

