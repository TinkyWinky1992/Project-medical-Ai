import { isUsernameExist, isEmailExist } from "../Services/ServerHandler";

export const checkEmailValid = async(email_input) => {
    if(email_input == null)
        return "Email text is empty";

    const isexistOnDatabase = await isEmailExist(email_input)
    if(isexistOnDatabase)
        return "Email already exist";

    return null;
}

export const checkUsernameValid = async(username_input) => {
    if(username_input == null)
        return "Username text is empty";

    const isexistOnDatabase = await isUsernameExist(username_input)
    if(isexistOnDatabase)
        return "Username already exist";
    
    return null;

}
export const checkPasswordValid = async(password_input) => {
    if(password_input == null)
        return "Password is empty";
    if(password_input.length <=6) 
        return "Password need to be above 6 letters";
    
    return null;
}


