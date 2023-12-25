import { checkAuth } from "../Services/ServerHandler";

export const checkAuthUser =  async(token)=>{
    try{
        const res = await checkAuth(token);
        return res;
    }catch(error){

    }
}