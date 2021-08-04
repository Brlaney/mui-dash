import * as React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Title from '../Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Depósitos recientes</Title>
      <Typography component='p' variant='h4'>
        $3,024.00
      </Typography>
      <Typography color='text.secondary' sx={{ flex: 1 }}>
        El 15 de marzo de 2019.
      </Typography>
      <div>
        <Link color='primary' href='#' onClick={preventDefault}>
          Ver saldo
        </Link>
      </div>
    </React.Fragment>
  );
}
