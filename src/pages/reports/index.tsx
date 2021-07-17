import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from 'next/link';

export default function Reports() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant='h1' component='h1' color='text.secondary'>
        Reports
      </Typography>
      <Container sx={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Link href='/reports/current'>
          <Button variant='contained' color='primary' sx={{ margin: '1rem' }}>
            Current
          </Button>
        </Link>
        <Link href='/reports/last-quarter'>
          <Button variant='contained' color='primary' sx={{ margin: '1rem' }}>
            Last Quarter
          </Button>
        </Link>
        <Link href='/reports/year-end'>
          <Button variant='contained' color='primary' sx={{ margin: '1rem' }}>
            Year End
          </Button>
        </Link>
      </Container>
    </Box>
  );
}
