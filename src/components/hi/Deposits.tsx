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
      <Title>हालिया जमा</Title>
      <Typography component='p' variant='h4'>
        $3,024.00
      </Typography>
      <Typography color='text.secondary' sx={{ flex: 1 }}>
        15 मार्च, 2019 को
      </Typography>
      <div>
        <Link color='primary' href='#' onClick={preventDefault}>
          शेष राशि
        </Link>
      </div>
    </React.Fragment>
  );
}
