import  React ,{useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { checkAuth, getUser } from "../Services/ServerHandler";
import Cookies from "js-cookie";

const columns = [
    { field: 'id', headerName: 'ID', width: 70, headerClassName: 'super-app-theme--header' },
    { field: 'UserName', headerName: 'UserName', width: 100, headerClassName: 'super-app-theme--header' },
    { field: 'Discription', headerName: 'Discription name', width: 150, headerClassName: 'super-app-theme--header' },
];
    
const getAppointments = (user) =>{
    //fasfasf
}

export const AppointmentTable = () => {

    useEffect(() =>{


        const fetchData = async () => {
          const token_user = await checkAuth(Cookies.get('User_token'));
          const user = await getUser(token_user.username);
          console.log(user)
          getAppointments(user)
        }
        fetchData()
      }, [])
    return (
        <div style={{ height: 400, width: '100%' }}>
            <Box sx={{
                '& .MuiDataGrid-columnHeader': {
                    backgroundColor: 'rgba(255, 7, 0, 0.55)',
                    width: '100%',
                    display:'black'
                    

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
}
