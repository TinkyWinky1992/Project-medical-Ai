
import { TextField } from "@mui/material";
import React, { useState, forwardRef, useImperativeHandle} from "react";


const InputEmailField = forwardRef((props, ref) => {
  const [inputUserValue, setInputUserValue] = useState("");

  const [label, setLabel] = useState("Enter Your Email");
  const [isValid, setIsValid] = useState(true);
  const [errormsg, setErrormsg] = useState("Invalid input");

  const InputUserHandler = (event) => {
    const newValue = event.target.value;
    setInputUserValue(newValue);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsValid(emailRegex.test(newValue));
  };

  useImperativeHandle(ref, () => ({
    error: isValid,
    setValid: setIsValid,
    text: inputUserValue,
    inputText: setInputUserValue,
    label: setLabel,
    errormsg: setErrormsg,
  }));
  return (
    <TextField
      InputLabelProps={{ className: "userfield" }}
      label={label}
      style={{ padding: 10 }}
      fullWidth
      variant="outlined"
      value={inputUserValue}
      onChange={InputUserHandler}
      error={!isValid}
      color="warning"
      
      inputProps={{ style: { color: isValid ? 'white' : 'red' } }} 
      helperText={!isValid ? errormsg : ""}
    />
  );
});

const InputUsernameField = forwardRef((props, ref) => {
  const [inputUserValue, setInputUserValue] = useState("");
  const [label, setLabel] = useState("Enter Your Usernmae");

  const [isValid, setIsValid] = useState(true);
  const [errormsg, setErrormsg] = useState("Invalid input");
  
  const InputUserHandler = (event) => {
    const newValue = event.target.value;
    setInputUserValue(newValue);
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;

    setIsValid(usernameRegex.test(newValue));
    
  };
  useImperativeHandle(ref, () => ({
    error: isValid,
    setValid: setIsValid,
    text: inputUserValue,
    inputText: setInputUserValue,
    label: setLabel,
    errormsg: setErrormsg,
  }));

  return (
    <TextField
      InputLabelProps={{ className: "userfield" }}
      label={label}
      style={{ padding: 10, color: "white"}}
      fullWidth
      variant="outlined"
      value={inputUserValue}
      onChange={InputUserHandler}
      error={!isValid}
      color="warning"
      inputProps={{ style: { color: isValid ? 'white' : 'red' } }} 
      helperText={!isValid ? errormsg : ""}
    />
  );
});

const InputEmailOrUsernameField = forwardRef((props, ref) => {
  const [inputUserValue, setInputUserValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errormsg, setErrormsg] = useState("Invalid input");

  const InputUserHandler = (event) => {
    const newValue = event.target.value;
    setInputUserValue(newValue);

    const usernameRegex = /^[a-zA-Z0-9_-]+$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    setIsValid(usernameRegex.test(newValue) || emailRegex.test(newValue));
  };

  useImperativeHandle(ref, () => ({
    error: isValid,
    setValid: setIsValid,
    text: inputUserValue,
    errormsg: setErrormsg,
  }));
  return (
    <TextField
      InputLabelProps={{ className: "userfield" }}
      label="Enter Username or Email"
      style={{ padding: 10 }}
      fullWidth
      variant="outlined"
      value={inputUserValue}
      onChange={InputUserHandler}
      error={!isValid}
      color="warning"
      helperText={!isValid ?  errormsg: ""}
    />
  );
});

const InputPasswordField = forwardRef((props, ref) => {
  const [inputPassValue, setInputPassValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errormsg, setErrormsg] = useState("Invalid input");

  const PasswordHandler = (event) => {
    const newValue = event.target.value;
    setInputPassValue(newValue);
    const passwordRegex = /^[a-zA-Z0-9_-]+$/;
    setIsValid(passwordRegex.test(isValid));
  };
  useImperativeHandle(ref, () => ({
    error: isValid,
    setValid: setIsValid,
    text: inputPassValue,
    errormsg: setErrormsg,
  }));
  return (
    <TextField
      type="password"
      InputLabelProps={{ className: "Passwordfield" }}
      label="Enter Password"
      style={{ padding: 10 }}
      fullWidth
      variant="outlined"
      value={inputPassValue}
      onChange={PasswordHandler}
      error={!isValid}
      color="warning"
      helperText={!isValid ? errormsg: ""}
    />
  );
});

export {
  InputEmailOrUsernameField,
  InputPasswordField,
  InputEmailField,
  InputUsernameField,
};
