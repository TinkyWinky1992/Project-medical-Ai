import { dialog_pages } from "../../routing/routes";
import React, { useEffect, useRef} from "react";
import { IconButton } from "@mui/material";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';  
import { InputEmailField, InputUsernameField } from "../../Components/TextField-comps";
import Cookies from 'js-cookie';
import { checkAuth, getUser } from "../../Services/ServerHandler";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { customTheme } from "../../StyleElements/TextFieldStyle";
import MenuAppBar from "../../Components/AppBar";


function LocationPage() {
  const outerTheme = useTheme();
  const navigate = useNavigate();
  const input_email_ref = useRef();
  const input_username_ref = useRef();
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token_user = await checkAuth(Cookies.get('User_token'));
        const user = await getUser(token_user.username);
        console.log(user);
        input_email_ref.current.setValid(true);
        input_email_ref.current.label("Your Email");
        input_email_ref.current.inputText(user.email);

        input_username_ref.current.setValid(true);
        input_username_ref.current.label("Your Username");
        input_username_ref.current.inputText(user.username);


  
      } catch (error) {
        console.log(error);
        navigate(dialog_pages[1].route_url);
      }
    }

    fetchUserData();

  }, []);

  const ChangePhoto =()=>{

  }
  
    return (
      <div className="aboutpage-screen">
        <MenuAppBar/>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: '60vh' }}>
          <IconButton sx={{ p: 0 }} onClick={ChangePhoto}>
            <Avatar
              alt="Remy Sharp"
              src=""
              sx={{ width: 200, height: 200,}}
            />
          </IconButton>

          <Container fixed maxWidth="sm">
            <ThemeProvider theme={customTheme(outerTheme)}>
              <InputEmailField ref={input_email_ref}/>
              <InputUsernameField ref={input_username_ref}/>
            </ThemeProvider>
          </Container>

            
        </Grid>


      </div>
    );
  }
  

  export default LocationPage;