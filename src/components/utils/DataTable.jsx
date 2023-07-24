import * as React from 'react';
import { AiOutlineDelete } from 'react-icons/ai'
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
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
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'joinedAt',
        headerName: 'Joined At',
        width: 110,
        editable: false,
    },
    {
        field: "contact",
        headerName: "Contact",
        description: "This column is the contact of the user.",
        sortable: true,
        width: 160,
    },
    {
        field: 'status',
        headerName: 'Status',
        sortable: true,
        type: 'boolean'
    },
    {
        field: 'actions',
        headerName: 'Actions',
        renderCell: (params) => {
            return (
                <div className='flex text-xl space-x-2'>
                    <Tooltip title='delete' followCursor>
                        <IconButton>
                            <AiOutlineDelete className='text-red-500' />
                        </IconButton>
                    </Tooltip>
                </div>
            )
        }
    }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', joinedAt: "Jan 20, 2023", contact: '0559305117', status: true },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', joinedAt: "Jan 20, 2023", contact: '0559305117', status: true },
    // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


export const DataTable = () => {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 }
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </Box>
    );
}
