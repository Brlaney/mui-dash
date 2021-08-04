import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { orders as ordersData } from '@/lib/data/orders/hi';
import Title from '../Title';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'पहचान', width: 70 },
  { field: 'date', headerName: 'दिनांक', width: 125 },
  {
    field: 'Name',
    headerName: 'अंतिम पहला नाम',
    sortable: false,
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'first_name') || ''} , ${params.getValue(params.id, 'last_name') || ''}`,
  },
  {
    field: 'Location',
    headerName: 'स्थान',
    sortable: false,
    width: 140,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'city') || ''} , ${params.getValue(params.id, 'state') || ''}`,
  },
  {
    field: 'Payment',
    headerName: 'भुगतान',
    sortable: false,
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'company') || ''} •••• ${params.getValue(params.id, 'card') || ''}`,
  },
  { field: 'cost', headerName: 'लागत', width: 125 },
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
