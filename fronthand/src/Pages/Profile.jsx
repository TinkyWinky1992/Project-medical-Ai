import { dialog_pages } from "../routing/routes";
import React from "react";
import { useEffect } from "react";
import { IconButton} from "@mui/material";
import { checkAuth } from "../Services/ServerHandler";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';  
import { InputEmailField, InputUsernameField, InputPasswordField} from "../Components/TextField-comps";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";



function ProfilePage() {
  const navigate = useNavigate();

  useEffect( () => {
    let user; 
    let token_user;

    const getUser = async () => {
        try{  
          token_user = await checkAuth(Cookies.get('User_token'));
          console.log(token_user);
      }catch(error){
        console.log(error);
        navigate(dialog_pages[1].route_url);
      }
    }

    getUser();
  }, [])


  const ChangePhoto =()=>{

  }
  
    return (
      <div className="aboutpage-screen">
        <Grid>
          <IconButton sx={{ p: 0 }} onClick={ChangePhoto}>
            <Avatar
              alt="Remy Sharp"
              src=""
              sx={{ width: 200, height: 200,}}
            />
          </IconButton>

          <Container fixed maxWidth="sm">
              <InputEmailField/>
              <InputUsernameField/>
              <InputPasswordField/>
          </Container>

            

        </Grid>


      </div>
    );
  }
  

  export default ProfilePage;