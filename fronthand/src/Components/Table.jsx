import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { checkAuth, getUser, getFromDataBaseUserAppointments } from "../Services/ServerHandler";
import Cookies from "js-cookie";

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'username',
      headerName: 'UserName',
      width: 200,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      editable: true,
    },
    {
      field: 'problem',
      headerName: 'Discription',
      width: 350,
      editable: true,
    },
  ];

export const AppointmentTable = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token_user = await checkAuth(Cookies.get('User_token'));
            const user = await getUser(token_user.username);
            console.log(user);
            const appointments = await getFromDataBaseUserAppointments(user.username, user.email);
            setRows(appointments);
        };
        fetchData();
    }, []);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <Box sx={{
                '& .MuiDataGrid-columnHeader': {
                    backgroundColor: 'rgba(255, 7, 0, 0.55)',
                    width: '100%',
                    display: 'black'
                },
            }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </Box>
        </div>
    );
};
