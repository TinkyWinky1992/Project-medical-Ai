import '../style/LoginStyle.css';
import { TextField } from '@mui/material';
import React, { useState} from 'react';

const InputEmailField =() =>{
    const [inputUserValue, setInputUserValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const InputUserHandler= (event) =>{
        const newValue = event.target.value;
        setInputUserValue(newValue);
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    
        setIsValid (emailRegex.test(newValue));
    };

    return (
        <TextField
          InputLabelProps={{className: "userfield"}}
          label="Enter Your Email"
          style={{padding: 10}}
          fullWidth
          variant="outlined"
          value={inputUserValue}
          onChange={InputUserHandler}
          error={!isValid}
          color="warning"
          helperText={!isValid ? 'Invalid input' : ''}
        />
    );
}

const InputUsernameField =() =>{
    const [inputUserValue, setInputUserValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const InputUserHandler= (event) =>{
        const newValue = event.target.value;
        setInputUserValue(newValue);
        const usernameRegex = /^[a-zA-Z0-9_-]+$/;
    
        setIsValid (usernameRegex.test(newValue));
    };

    return (
        <TextField
          InputLabelProps={{className: "userfield"}}
          label="Enter Your Username"
          style={{padding: 10}}
          fullWidth
          variant="outlined"
          value={inputUserValue}
          onChange={InputUserHandler}
          error={!isValid}
          color="warning"
          helperText={!isValid ? 'Invalid input' : ''}
        />
    );
}


const InputEmailOrUsernameField =() =>{
    const [inputUserValue, setInputUserValue] = useState('');
    const [isValid, setIsValid] = useState(true);
  
    const InputUserHandler = (event) => {
      const newValue = event.target.value;
      setInputUserValue(newValue);
  
      
      const usernameRegex = /^[a-zA-Z0-9_-]+$/;
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  
      setIsValid(usernameRegex.test(newValue) || emailRegex.test(newValue));
    };
  
    return (
      <TextField
        InputLabelProps={{className: "userfield"}}
        label="Enter Username or Email"
        style={{padding: 10}}
        fullWidth
        variant="outlined"
        value={inputUserValue}
        onChange={InputUserHandler}
        error={!isValid}
        color="warning"
        helperText={!isValid ? 'Invalid input' : ''}
      />
    );
  };

  const InputPasswordField =() =>{
    const [inputPassValue, setInputPassValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const PasswordHandler =(event)=>{
        const newValue = event.target.value;
        setInputPassValue(newValue);
        const passwordRegex = /^[a-zA-Z0-9_-]+$/;
        setIsValid(passwordRegex.test(isValid));
    }
    return (
        <TextField
          type='password'
          InputLabelProps={{className: "Passwordfield"}}
          label="Enter Password"
          style={{padding: 10}}
          fullWidth
          variant="outlined"
          value={inputPassValue}
          onChange={PasswordHandler}
          error={!isValid}
          color="warning"
          helperText={!isValid ? 'Invalid input' : ''}
        />
      
      );
  }
  export {InputEmailOrUsernameField, InputPasswordField, InputEmailField, InputUsernameField}