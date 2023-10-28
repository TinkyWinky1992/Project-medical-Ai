
import '../style/LoginStyle.css';
import { Grid } from '@mui/material';
import logo from '../giphy.gif';
function RenderLogin(){

    return(
    <div className="LoginScreen">
        <Grid container style={{minHeight:'100vh'}}>
            <Grid item xs={12} sm={6}>
                <img src = {logo}
                     style={{width:'100%', height:'100%', objectFit:'cover'}}alt='brand'></img>
            </Grid>
            <Grid container item xs={12} sm={6} style={{padding:10}}>
                
            </Grid>
        </Grid>
    </div>
    );
}
export default RenderLogin;