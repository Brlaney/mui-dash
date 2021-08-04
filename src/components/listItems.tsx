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
import { mainItems, bottomItems } from '@/en/sidebar';


export const mainListItems = (
  <div>
    {mainItems.map((item) => (
      <ListItem key={item.name} button>
        <ListItemIcon>
          <{item.icon} />
        </ListItemIcon>
        <Link href={item.endpoint}>
          <ListItemText primary={item.name} />
        </Link>
      </ListItem>
    ))}
  </div>
);

export const secondaryListItems = (
  <div>
    <Link href='/reports'>
      <ListSubheader inset>Reports</ListSubheader>
    </Link>
    {bottomItems.map((item) => (
      <ListItem key={item.name} button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <Link href={item.endpoint}>
          <ListItemText primary={item.name} />
        </Link>
      </ListItem>
    ))}
  </div>
);
