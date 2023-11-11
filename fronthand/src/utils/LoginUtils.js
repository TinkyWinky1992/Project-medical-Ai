import { getUser } from "../Services/ServerHandler";


export const checkSettingValid = async(user_input, password) =>{
    const response = await getUser(user_input, password);
    return response;
}




