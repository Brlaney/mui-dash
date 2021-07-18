import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function Customers() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography variant='h1' component='h1' color='text.secondary'>
        Customers
      </Typography>
    </Box>
  );
}
