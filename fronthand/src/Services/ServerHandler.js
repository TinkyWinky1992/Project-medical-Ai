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

export const getUser = async (email_or_username, password ) => {
  try {
      const response = await axios.get(`http://localhost:5000/users/getusers?email-or-username=${email_or_username}&password=${password}`);

      return response.data;
  } catch (error) {
      console.error("Error while making the GET request:", error);
      throw error; // Rethrow the error for further handling if needed
  }
};

export const isUsernameExist = async (username) => {
  const response = await axios.get(
    `http://localhost:5000/users/username-exists?username=${username}`
  );
  return response.data;
};

export const isEmailExist = async (email) => {
  const response = await axios.get(
    `http://localhost:5000/users/email-exists?email=${email}`
  );
  return response.data;
};
