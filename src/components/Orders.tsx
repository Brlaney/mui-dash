import * as React from 'react';
import { useRouter } from 'next/router';
import { orders as en } from '@/lib/data/orders/en';
import { orders as es } from '@/lib/data/orders/es';
import { orders as fr } from '@/lib/data/orders/fr';
import { orders as hi } from '@/lib/data/orders/hi';
import Title from './Title';
// import {
//   DataGrid,
//   GridColDef,
//   GridValueGetterParams
// } from '@mui/x-data-grid';

/*
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 125 },
  { field: 'date', headerName: 'Date', width: 150 },
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
    width: 200,
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
  { field: 'cost', headerName: 'Cost', width: 180 },
];
*/

const Orders = () => {
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
          : '';
  
  const t = locale === 'en'
    ? en : es === es
      ? es : fr === fr
        ? fr : hi === hi
          ? hi : en;

  return (
    <>
      <Title>{message}</Title>
      <div
        style={{
          height: 400,
          width: '100%',
          paddingBottom: '25px'
        }}
      >
        DATA HERE
        {/* <DataGrid
          rows={t}
          columns={columns}
          pageSize={5}
          checkboxSelection
        /> */}
      </div>
    </>
  )
};

export default Orders;
