import '../style/LoginStyle.css';
import { InputPasswordField, InputEmailField, InputUsernameField } from './TextField-comps';
import { Grid, Typography, Button} from '@mui/material';
import React from 'react';


const RenderRegister = () => {
   
    return (
      <div className='Register' style={{ margin: 'auto' }}>
        <Grid container alignItems="center" direction="column">
          <Typography variant="h3" style={{ color: "whitesmoke" }}>Register</Typography>
        </Grid>
        <InputEmailField  />
        <InputUsernameField />
        <InputPasswordField />
        <Grid>
            <Button variant="contained" color="success" style={{ width: "100%" }} >Register</Button>
        </Grid>
      </div>
    );
  };
export default RenderRegister;