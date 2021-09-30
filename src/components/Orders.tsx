import * as React from 'react';
import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { orders as en } from '@/lib/data/orders/en';
import { orders as es } from '@/lib/data/orders/es';
import { orders as fr } from '@/lib/data/orders/fr';
import { orders as hi } from '@/lib/data/orders/hi';
import { orders as zh } from '@/lib/data/orders/zh';
import Title from './Title';
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams
} from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'date', headerName: 'Date', width: 110 },
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
  { field: 'cost', headerName: 'Cost', width: 110 },
];

const Orders = () => {
  let { lang } = useTranslation();
  let [lng, setLng] = useState(lang);
  const [data, setData] = useState([]);
  const { t } = useTranslation('home');
  const message = t('orderTitle');

  /* This hook will re-render the order data
  every time the locale changes.  */
  useEffect(() => {
    setLng(lang);
  }, [lng]);

  /* The useEffect hook will match the locale with
  the associated order data for that language.  */
  useEffect(() => {
    if (lng == 'en') {
      setData(en);
    } else if (lng == 'es') {
      setData(es);
    } else if (lng == 'fr') {
      setData(fr);
    } else if (lng == 'hi') {
      setData(hi);
    } else if (lng == 'zh') {
      setData(zh);
    } else {
      null;
    }
  }, [data]);

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
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </>
  )
};

export default Orders;
