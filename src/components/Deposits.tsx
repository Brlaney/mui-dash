import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault()
};

export default function Deposits({ content }) {
  return (
    <>
      <Title>{content.depositTitle}</Title>
      <Typography component='p' variant='h4'>
        {content.depositCost}
      </Typography>
      <Typography color='text.secondary' sx={{ flex: 1 }}>
        {content.depositDate}
      </Typography>
      <div>
        <Link color='primary' href='#' onClick={preventDefault}>
          {content.depositLink}
        </Link>
      </div>
    </>
  )
};
