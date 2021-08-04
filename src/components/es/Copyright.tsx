import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


export default function Copyright(props: any) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Derechos de autor © '}
      <Link color='inherit' href='https://github.com/Brlaney/mui-dash'>
        Mui-tablero
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}