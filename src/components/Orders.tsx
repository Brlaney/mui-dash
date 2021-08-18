import * as React from 'react'
import { useRouter } from 'next/router'
import { orders as en } from '@/lib/data/orders/en'
import { orders as es } from '@/lib/data/orders/es'
import { orders as fr } from '@/lib/data/orders/fr'
import { orders as hi } from '@/lib/data/orders/hi'
import Title from './Title'
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams
} from '@material-ui/data-grid'


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'date', headerName: 'Date', width: 125 },
  {
    field: 'Name',
    headerName: 'Last, first name',
    sortable: false,
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'first_name') || ''} ,
       ${params.getValue(params.id, 'last_name') || ''}`,
  },
  {
    field: 'Location',
    headerName: 'Location',
    sortable: false,
    width: 140,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'city') || ''} ,
       ${params.getValue(params.id, 'state') || ''}`,
  },
  {
    field: 'Payment',
    headerName: 'Payment',
    sortable: false,
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'company') || ''}
       •••• ${params.getValue(params.id, 'card') || ''}`,
  },
  { field: 'cost', headerName: 'Cost', width: 125 },
]

const Orders = (props: any) => {
  const router = useRouter()
  const { locale } = router

  const message = locale === 'en'
    ? 'Recent Orders'
    : locale === 'es'
    ? 'órdenes recientes'
    : locale === 'fr'
    ? 'Dernières commandes'
    : locale === 'hi'
    ? 'हालिया आदेश'
    : ''
  
  const t = locale === 'en'
    ? en : es === es
    ? es : fr === fr
    ? fr : hi === hi
    ? hi : en

  return (
    <React.Fragment {...props}>
      <Title>{message}</Title>
      <div
        style={{
          height: 400,
          width: '100%',
          paddingBottom: '25px'
        }}
      >
        <DataGrid
          rows={t}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </React.Fragment>
  )
}

export default Orders
