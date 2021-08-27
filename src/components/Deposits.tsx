import * as React from 'react'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Title from './Title'

interface content {
  chartTitle: string
  chartLabel: string
  copyright: string
  copyrightLink: string
  depositTitle: string
  depositCost: string
  depositDate: string
  depositLink: string
}

function preventDefault(event: React.MouseEvent) {
  event.preventDefault()
}

export default function Deposits({ content }) {
  return (
    <React.Fragment>
      <Title>{content.depositTitle}</Title>
      <Typography component='p' variant='h4'>
        {content.depositCost}
      </Typography>
      <Typography color='text.secondary' sx={{ flex: 1 }}>
        {content.depositDate}
      </Typography>
      <div>
        <Link color='primary' href='#' onClick={preventDefault}>
          {content.depositLink}
        </Link>
      </div>
    </React.Fragment>
  )
}
