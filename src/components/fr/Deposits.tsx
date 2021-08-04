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
      <Title>Dépôts récents</Title>
      <Typography component='p' variant='h4'>
        $3,024.00
      </Typography>
      <Typography color='text.secondary' sx={{ flex: 1 }}>
        Le 15 mars 2019
      </Typography>
      <div>
        <Link color='primary' href='#' onClick={preventDefault}>
          Vue de l'équilibre
        </Link>
      </div>
    </React.Fragment>
  );
}
