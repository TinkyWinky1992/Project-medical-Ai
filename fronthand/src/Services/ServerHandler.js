//
import axios from 'axios'

export const postUser = async (username_temp, email_temp, password_temp) => {
    try {

      const response = await axios.post('http://localhost:5000/users/create', {
        username: username_temp,
        email: email_temp,
        password: password_temp,
      });
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Error while making the POST request:', error);
      throw error; // Rethrow the error for further handling if needed
    }
  };