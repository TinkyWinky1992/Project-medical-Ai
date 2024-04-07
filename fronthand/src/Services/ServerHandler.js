//
import axios from "axios";
export const getFromDataBaseUserAppointments = async(id) => {
  try {
    const response = await axios.get(`http://localhost:5000/queue/getAppointment?id=${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error while making the Get request:", error);
  }
}


export const startConversation = async (username, email, id) => {
  try {
    const response = await axios.get(`http://localhost:5001/?username=${username}&email=${email}&id=${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error while making the Get request:", error);
  }
};



export const Conversation = async (message) => {
  try {
    const response = await axios.get(`http://localhost:5001/getMessage?messageToDoctor=${message}`);
    console.log("Data: ",response.data);
    return response.data;
  } catch (error) {
    console.error("Error while making the Get request:", error);
    // Handle error gracefully (display error message)
    return { error: "An error occurred. Please try again later." };
  }
};
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
export const getUser = async (username) => {
  try {
    const response = await axios.get(`http://localhost:5000/users/getUser?email-or-username=${username}`);
    return response.data;

  }catch(error){
    console.error("Error while making the GET request:", error);
    throw error;
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


export const ChangeUserConfig = async (new_username, new_email, id) => {
  try {
    const response = await axios.post('http://localhost:5000/users/update', {
      id: id,
      new_email: new_email,
      new_username: new_username
    });
    return response.data; 
  } catch (error) {
      console.error("Error message from server:", error.response.data.message);
      throw error.response.data; 
    } 
} 



