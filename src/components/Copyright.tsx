import * as React from 'react'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

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

export default function Copyright({ content }, props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {content.copyright}
      <Link
        color='inherit'
        href='https://github.com/Brlaney/mui-dash'
      >
        {content.copyrightLink}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
