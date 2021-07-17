import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from 'next/link';

export default function YearEnd() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography variant='h1' component='h1' color='text.secondary'>
        Year end sales report
      </Typography>
      <Container>
        <Link href='/reports'>
          <Button variant='contained' color='primary'>
            Back to reports
          </Button>
        </Link>
      </Container>
    </Box>
  );
}
