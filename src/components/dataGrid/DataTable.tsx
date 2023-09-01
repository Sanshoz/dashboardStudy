import { Link } from 'react-router-dom'
import './dataTable.scss'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'

type Props = {
    columns: GridColDef[],
    rows: object[],
    slug: string,
}

export const DataTable = (props:Props) => {
    const handleDelete= (id:number) => {
        //delete the item
        console.log(id + 'has been deleted')

    }

    const actionColumn: GridColDef={
        field: "action", headerName: "Action", width: 100, renderCell: (params)=>{
            return (
                <div className="action">
                    <Link to={`/${props.slug}/${params.row.id}`}>
                    <img src="/view.svg" alt="" />
                    </Link>
                    <div className="delete" onClick={() => handleDelete(params.row.id)}><img src="/delete.svg" alt="" /></div>
                </div>
            )
        }
    }

    // const actionColumn: GridColDef = {
    //     field: "action",
    //     headerName: "Action",
    //     width: 200,
    //     renderCell: (params) => {
    //       return (
    //         <div className="action">
    //           <Link to={`/${props.slug}/${params.row.id}`}>
    //             <img src="/view.svg" alt="" />
    //           </Link>
    //           <div className="delete" onClick={() => handleDelete(params.row.id)}>
    //             <img src="/delete.svg" alt="" />
    //           </div>
    //         </div>
    //       );
    //     },
    //   };

    return(
        <div className="dataTable">
            <div>
                <DataGrid 
                rows={props.rows} 
                columns={[...props.columns, actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }} 
                slots={{toolbar:GridToolbar,}}
                slotProps={{
                    toolbar: {
                        showQuickFilter:true,
                        quickFilterProps: {debounceMs: 500},
                    },
                }}
                pageSizeOptions={[5]}
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
                checkboxSelection
                disableRowSelectionOnClick
                className='dataGrid' />
            </div>
        </div>
    )
}