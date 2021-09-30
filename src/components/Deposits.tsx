import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault()
};

export default function Deposits({ data }) {
  const title = data('depositTitle')
  const cost = data('depositCost')
  const date = data('depositDate')
  const link = data('depositLink')

  return (
    <>
      <Title>{title}</Title>
      <Typography component='p' variant='h4'>
        {cost}
      </Typography>
      <Typography color='text.secondary' sx={{ flex: 1 }}>
        {date}
      </Typography>
      <div>
        <Link color='primary' href='#' onClick={preventDefault}>
          {link}
        </Link>
      </div>
    </>
  )
};
