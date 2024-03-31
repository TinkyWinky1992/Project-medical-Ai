import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
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
        field: 'Your_Appointment_Date',
        headerName: 'Date',
        width: 250,
        editable: true,
      },
    {
      field: 'problem',
      headerName: 'Discription',
      width: 718,
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
            console.log(appointments)
            setRows(appointments);
        };
        fetchData();
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  height: '50vh' }}>
            <div style={{ width: '79.2%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    sx={{
                        '& .MuiDataGrid-columnHeader': {
                            backgroundColor: 'rgba(0, 7, 0, 0.55)',
                            color: 'white',
                        },
                        '& .MuiDataGrid-cell': {
                            color: 'rgb(180, 180, 180)'
                        }
                    }}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5, outlineColor: 'black'},
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
};

