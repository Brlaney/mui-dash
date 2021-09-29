import * as React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Copyright({ content }, props: any) {
  return (
    <>
      <Box className='footer'>
        <Typography
          className='text'
          variant='body2'
          color='text.secondary'
          align='center'
          {...props}
        >{content.copyright}{' '}
          <Link
            color='inherit'
            href='https://github.com/Brlaney/mui-dash'
            className='link'
          >{content.copyrightLink}
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </>
  )
};
