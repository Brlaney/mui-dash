import * as React from 'react';
import { useRouter } from 'next/router';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@mui/material/IconButton';
import Redirect from './Redirect';

export default function Copyright({ data }, props: any) {
  const [shouldRedirect, setShouldRedirect] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const { locales } = router;

  const name = data('copyright')
  const link = data('copyrightLink')

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRed = (loc) => {
    return <Redirect to={loc} />;
  };

  return (
    <>
      <div className='bottomfooter'>
        <Typography
          className='text'
          variant='body2'
          color='text.secondary'
          align='center'
          {...props}
        >{name}{' '}
          <Link
            color='primary'
            href='https://github.com/Brlaney/mui-dash'
            className='link'
          >{link}
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
        <IconButton
          className='languageMenu'
          color='primary'
          id='language-selection-menu'
          aria-controls='language-selection-menu'
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <LanguageIcon />
        </IconButton>
        <Menu
          id='language-selection-menu'
          aria-labelledby='language-selection-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          {locales.map((loc) => (
            <Link key={loc}>
              <MenuItem onClick={() => { handleRed(loc) }}>
                {loc}
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </div>
    </>
  )
};
