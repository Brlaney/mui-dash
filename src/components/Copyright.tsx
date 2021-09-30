import * as React from 'react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@mui/material/IconButton';

export default function Copyright({ content }, props: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const { locale, locales } = router;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        >{content.copyright}{' '}
          <Link
            color='primary'
            href='https://github.com/Brlaney/mui-dash'
            className='link'
          >{content.copyrightLink}
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
              <MenuItem href='/' onClick={handleClose}>
                {loc}
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </div>
    </>
  )
};
