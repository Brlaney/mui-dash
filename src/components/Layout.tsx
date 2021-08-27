import * as React from 'react'
import { useRouter } from 'next/router'
import { experimentalStyled as styled } from '@material-ui/core/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MuiDrawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

// Import data for all supported locales
import en from '@/lib/data/list-items/en'
import es from '@/lib/data/list-items/es'
import fr from '@/lib/data/list-items/fr'
import hi from '@/lib/data/list-items/hi'

import MainList from './MainList'
import SecondaryList from './SecondaryList'

const drawerWidth: number = 244

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
)

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

export default function Layout() {
  const [open, setOpen] = React.useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }
  const router = useRouter()
  const { locale } = router

  const message = locale === 'en'
    ? 'Welcome, to your dashboard'
    : locale === 'es'
    ? 'Bienvenido, a tu tablero.'
    : locale === 'fr'
    ? 'Bienvenue à votre conseil.'
    : locale === 'hi'
    ? 'आपकी सलाह में आपका स्वागत है।'
    : ''

  const t = locale === 'en'
    ? en : es === es
    ? es : fr === fr
    ? fr : hi === hi
    ? hi : en

  return (
    <>
      {/* Navbar */}
      <AppBar position='absolute' open={open}>
        <Toolbar sx={{ pr: '24px' }}>
          <IconButton edge='start' color='inherit' aria-label='open drawer' onClick={toggleDrawer} sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}>
            <MenuIcon />
          </IconButton>
          <Typography component='h1' variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
            {message}
          </Typography>
          <IconButton color='inherit'>
            <Badge overlap='circular' variant='dot' color='secondary' sx={{ color: 'white' }}>
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer variant='permanent' open={open}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1], }}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          <MainList data={t} />
        </List>
        <Divider />
        <List>
        <SecondaryList data={t} />
        </List>
      </Drawer>
    </>
  )
}
