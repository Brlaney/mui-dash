import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Link from 'next/link'

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link href='/'>
        <ListItemText primary='Dashboard' />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <Link href='/orders'>
        <ListItemText primary='Orders' />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link href='/customers'>
        <ListItemText primary='Customers' />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link href='/reports'>
        <ListItemText primary='Reports' />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link href='/integrations'>
        <ListItemText primary='Integrations' />
      </Link>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <Link href='/reports'>
      <ListSubheader inset>Reports</ListSubheader>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link href='/current'>
        <ListItemText primary='Current month' />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link href='/last-quarter'>
        <ListItemText primary='Last quarter' />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link href='/year-end'>
        <ListItemText primary='Year-end sale' />
      </Link>
    </ListItem>
  </div>
);