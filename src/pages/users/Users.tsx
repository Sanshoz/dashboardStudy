import { DataTable } from '../../components/dataGrid/DataTable'
import { GridValueGetterParams, GridColDef } from '@mui/x-data-grid/models';
import './users.scss'
import { useState } from 'react';
import { Add } from '../../components/add/Add';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
      {
        field: 'email',
        headerName: 'Email',
        width: 150,
        editable: true,
      },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 200,
        type: "string",
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  


const Users = () =>{
    const [open, setOpen] = useState(false)
    // const { isLoading, data } = useQuery({
    //     queryKey: ['repoData'],
    //     queryFn: () =>
    //       fetch('https://api.github.com/repos/TanStack/query').then(
    //         (res) => res.json(),
    //       ),
    //   })

    return(
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={()=>setOpen(true)}>add new user</button>
            </div>
           {false ? "loading...": <DataTable slug="users" columns={columns} rows={rows}/>}
           {open && <Add setOpen={setOpen} slug="user" columns={columns} />}
        </div>
    )
}

export default Users