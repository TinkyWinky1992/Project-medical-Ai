//
import axios from "axios";

export const postUser = async (username_temp, email_temp, password_temp) => {
  try {
    const response = await axios.post("http://localhost:5000/users/create", {
      username: username_temp,
      email: email_temp,
      password: password_temp,
    });

    return response.data;
  } catch (error) {
    console.error("Error while making the POST request:", error);
    throw error; // Rethrow the error for further handling if needed
  }
};

export const loginUser = async (email_or_username, password ) => {
  try {
      const response = await axios.get(`http://localhost:5000/users/loginUser?email-or-username=${email_or_username}&password=${password}`);
      
      return response.data;
  } catch (error) {
      console.error("Error while making the GET request:", error);
      throw error; // Rethrow the error for further handling if needed
  }
};

export const checkAuth = async (token) =>{
  try {
    console.log("cookieee " + token);
    const response = await axios.get(`http://localhost:5000/users/AuthUser`,{
      headers: {

        Authorization: token,

      }

    });

    return response.data;
} catch (error) {
    console.error("Error while making the GET request:", error);
    throw error; // Rethrow the error for further handling if needed
  }
}
