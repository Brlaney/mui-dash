import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { orders as ordersData } from '@/lib/data/orders/es';
import Title from '../Title';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'date', headerName: 'Fecha', width: 145 },
  {
    field: 'Name',
    headerName: 'Último nombre',
    sortable: false,
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'first_name') || ''} , ${params.getValue(params.id, 'last_name') || ''}`,
  },
  {
    field: 'Location',
    headerName: 'Localización',
    sortable: false,
    width: 175,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'city') || ''} , ${params.getValue(params.id, 'state') || ''}`,
  },
  {
    field: 'Payment',
    headerName: 'Pago',
    sortable: false,
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'company') || ''} •••• ${params.getValue(params.id, 'card') || ''}`,
  },
  { field: 'cost', headerName: 'Costo', width: 145 },
];


const Orders = () => {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <div style={{ height: 400, width: '100%', paddingBottom: '25px' }}>
        <DataGrid rows={ordersData} columns={columns} pageSize={5} checkboxSelection />
      </div>
    </React.Fragment>
  );
}

export default Orders
