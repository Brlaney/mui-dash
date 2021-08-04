import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


export default function Copyright(props: any) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'कॉपीराइट © '}
      <Link color='inherit' href='https://github.com/Brlaney/mui-dash'>
        मुई-डैश
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
