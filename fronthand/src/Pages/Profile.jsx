
import React from "react";
import { Grid, IconButton} from "@mui/material";
import Avatar from '@mui/material/Avatar';  
import { InputEmailField, InputUsernameField, InputPasswordField} from "../Components/TextField-comps";
function ProfilePage() {

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
          

          <InputEmailField/>
          <InputUsernameField/>
          <InputPasswordField/>
        </Grid>


      </div>
    );
  }
  

  export default ProfilePage;