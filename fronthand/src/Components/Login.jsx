import '../style/LoginStyle.css';
import { Grid, Typography, Button} from '@mui/material';
import { InputPasswordField, InputEmailOrUsernameField } from './TextField-comps';
import React from 'react';

const RenderLogin = () => {
    return (
      <div className='Login' style={{ margin: 'auto' }}>
        <Grid container alignItems="center" direction="column">
          <Typography variant="h3" style={{ color: "whitesmoke" }}>Log In</Typography>
        </Grid>
        <InputEmailOrUsernameField />
        <InputPasswordField />
        <Grid>
          <Button variant="contained" color="success" fullWidth style={{ width: "100%" } }>Log In</Button>
        </Grid>
      </div>
    );
};
export default RenderLogin;