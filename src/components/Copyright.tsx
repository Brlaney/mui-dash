import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import useTranslation from 'next-translate/useTranslation';

// Add the following into it's own locale file
const translations = [
  'English',
  'Spanish',
  'French',
  'Hindi',
  'Chinese'
];

export default function Copyright({ data }, props: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  let { lang } = useTranslation();
  let [lng, setLng] = useState(lang);

  const name = data('copyright')
  const link = data('copyrightLink')

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  /* This hook will re-render the order data
  every time the locale changes.  */
  useEffect(() => {
    setLng(lang);
  }, [lng]);

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
          <Link href='https://github.com/Brlaney/mui-dash'>
            {link}
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
        <Tooltip
          title='Select a language'
          enterDelay={350}
          leaveDelay={200}
          arrow
        >
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
        </Tooltip>
        <Menu
          id='language-selection-menu'
          aria-labelledby='language-selection-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          elevation={2}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          TransitionComponent={Fade}
        >
          {router.locales.map((locale, index) => (
            <Link
              key={index}
              locale={locale}
              href={router.asPath}
            >
              <MenuItem
                onClick={handleClose}
                sx={{ width: '200px', justifyContent: 'center' }}
              >
                {translations[index]}
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </div>
    </>
  )
};
