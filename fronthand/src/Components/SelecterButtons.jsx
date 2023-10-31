import "../style/LoginStyle.css";
import React, { useRef, useEffect } from "react";


const SelectersButtons = ({ login, register }) => {
  const switch_btns = useRef();
  const loginBtn = useRef();
  const registerBtn = useRef();

  useEffect(() => {
    login.current.style.display = "block";
    register.current.style.display = "none";
  }, []);

  const moveToLogin = () => {
    switch_btns.current.style.left = "0";
    loginBtn.current.style.color = "white";
    registerBtn.current.style.color = "black";
    login.current.style.display = "block";
    register.current.style.display = "none";
  };

  const moveToRegister = () => {
    switch_btns.current.style.left = "110px";
    registerBtn.current.style.color = "white";
    loginBtn.current.style.color = "black";
    login.current.style.display = "none";
    register.current.style.display = "block";
  };

  return (
    <div className="login-register">
      <div ref={switch_btns} className="btns"></div>
      <button
        ref={loginBtn}
        type="button"
        className="toggle-btn"
        onClick={moveToLogin}
      >
        Log In
      </button>
      <button
        ref={registerBtn}
        type="button"
        className="toggle-btn"
        onClick={moveToRegister}
      >
        {" "}
        Register
      </button>
    </div>
  );
};


export default SelectersButtons;
