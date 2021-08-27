import * as React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import AssignmentIcon from '@material-ui/icons/Assignment'

interface data {
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
  six: string;
  seven: string;
  eight: string;
  nine: string;
}

const SecondaryList = ({data}) => {
  return (
    <div>
      <ListSubheader inset>{data.six}</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary={data.seven} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary={data.eight} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary={data.nine} />
      </ListItem>
    </div>
  )
}

export default SecondaryList
