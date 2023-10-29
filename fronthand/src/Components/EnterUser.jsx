
import '../style/LoginStyle.css';
import { Grid } from '@mui/material';
import React, { useRef, useEffect} from 'react';
import RenderRegister from './Register';
import RenderLogin from './Login';
import logo from '../giphy.gif';

  
  const SelectersButtons = ({ login, register }) => {
    const switch_btns = useRef();
    const loginBtn = useRef();
    const registerBtn = useRef();

    useEffect(() => {
      login.current.style.display = 'block';
      register.current.style.display = 'none';
    }, []);
  
    const moveToLogin = () => {
      switch_btns.current.style.left = '0';
      loginBtn.current.style.color = 'white';
      registerBtn.current.style.color = 'black';
      login.current.style.display = 'block';
      register.current.style.display = 'none';
    };
  
    const moveToRegister = () => {
      switch_btns.current.style.left = '110px';
      registerBtn.current.style.color = 'white';
      loginBtn.current.style.color = 'black';
      login.current.style.display = 'none';
      register.current.style.display = 'block';
    };

    return (
      <div className="login-register">
        <div ref={switch_btns} className="btns"></div>
        <button ref={loginBtn} type="button" className="toggle-btn"onClick={moveToLogin}>Log In</button>
        <button ref={registerBtn} type="button" className="toggle-btn" onClick={moveToRegister}> Register</button>
      </div>
    );
  };
  
  
  function Render() {
    const login_ref = useRef();
    const register_ref = useRef();
  
    return (
      <div className="Login-Register">
        <Grid container style={{ minHeight: '100vh' }}>
          <Grid item xs={12} sm={6}>
            <img src={logo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt='brand' />
          </Grid>
          <Grid container item xs={12} sm={6} alignItems="center" direction="column" justify="space-between" style={{ padding: 10 }}>
            <SelectersButtons login={login_ref} register={register_ref} />
            <div ref={login_ref}><RenderLogin /></div>
            <div ref={register_ref}><RenderRegister /></div>
          </Grid>
        </Grid>
      </div>
    );
  }
  
  export default Render;