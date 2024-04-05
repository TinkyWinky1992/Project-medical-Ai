import { dialog_pages } from "../../routing/routes";
import { settings_pages } from "../../routing/routes";
import { useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useState} from "react";
import { IconButton } from "@mui/material";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';  
import { InputEmailField, InputUsernameField } from "../../Components/TextField-comps";
import Cookies from 'js-cookie';
import { checkAuth, getUser, ChangeUserConfig} from "../../Services/ServerHandler";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { customTheme } from "../../StyleElements/TextFieldStyle";
import UserAppBar from "../../Components/UserAppBar";
import Button from '@mui/material/Button';

function ProfilePage() {
  const outerTheme = useTheme();
  const navigate = useNavigate();
  const input_email_ref = useRef();
  const input_username_ref = useRef();
  const [user, setUser] = useState(null);

  let location = useLocation();
  const profilebar_ref= useRef();
  const btn = useRef();
  

  useEffect(() => {
    console.log(location.pathname);
    const index = settings_pages.findIndex(page => page.route_url === location.pathname)
    console.log(index)
    profilebar_ref.current.setSelectedTab(index)
    const fetchUserData = async () => {
      try {
        const token_user = await checkAuth(Cookies.get('User_token'));
        const userTemp = await getUser(token_user.username);
        setUser(userTemp);

        input_email_ref.current.setValid(true);
        input_email_ref.current.label("Your Email");
        input_email_ref.current.inputText(userTemp.email);
    
        input_username_ref.current.setValid(true);
        input_username_ref.current.label("Your Username");
        input_username_ref.current.inputText(userTemp.username);
        
    
      } catch (error) {
        console.log(error);
        navigate(dialog_pages[1].route_url);
      }
    }
    fetchUserData();

  }, [btn]);

  const handleChangie = async () => {
    try {
      const res = await ChangeUserConfig(input_username_ref.current.text, input_email_ref.current.text, user.id);
    } catch (error) {
        const mesg = error.message;
        console.log(mesg)
        if(mesg === "Username already exists.") {
          input_username_ref.current.errormsg(mesg);
          input_username_ref.current.setValid(false);
          
        } else if(mesg === "Email already exists.") {
          input_email_ref.current.errormsg(mesg);
          input_email_ref.current.setValid(false);
        }

    }
  };

    return (
      <div className="profile-screen">
        <UserAppBar ref={profilebar_ref}/>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: '60vh' }}>
          <Container fixed maxWidth="sm">
            <ThemeProvider theme={customTheme(outerTheme)}>
              <InputEmailField ref={input_email_ref}/>
              <InputUsernameField ref={input_username_ref}/>
            </ThemeProvider>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: '10vh' }}>
                <Button sx={{ minWidth: '60vh',borderRadius:'10px' }} variant="contained" color="success" onClick={async()=> { await handleChangie()}} ref={btn} 
                >CHANGE</Button>
            </Grid>
            
          </Container>
            
        </Grid>
      </div>
    );
  }
  

  export default ProfilePage;