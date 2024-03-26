import { useRef, useEffect} from "react";
import { scrollingDown } from "../utils/ChatUtil";
import Ai from "./Ai";
import {startConversation, checkAuth, getUser} from "./ServerHandler"
import Cookies from "js-cookie";
function AiChatBox() {

  useEffect(() =>{

    const fetchData = async () => {
      const token_user = await checkAuth(Cookies.get('User_token'));
      const user = await getUser(token_user.username);
      console.log(user)
      startConversation(user.username, user.email)
    }
    fetchData()
  }, [])
  const ai = new Ai();
  const user_output_ref = useRef();
  const ai_output_ref = useRef();
  const textarea_ref = useRef();
  const chatbox_ref = useRef();

  // hello this is a recent change
  const onSendMessage = async (onclikc_function) => {
    if (textarea_ref.current.value == "") 
      return;

    const message_output = user_output_ref.current.cloneNode(true);
    message_output.style.display = "flex";
    message_output.textContent = textarea_ref.current.value;
    
    chatbox_ref.current.appendChild(message_output);
    textarea_ref.current.value = "";

    let should_scroll =
      chatbox_ref.current.scrollTop + chatbox_ref.current.clientHeight ===
      chatbox_ref.current.scrollHeight;
    if (!should_scroll) scrollingDown(chatbox_ref);
    console.log(message_output)
    ai.AichatRespone(onclikc_function,ai_output_ref,message_output,chatbox_ref);
    
  };

  return {
    chatbox_ref: chatbox_ref,

    ai_output_ref: ai_output_ref,
    user_output_ref: user_output_ref,

    textarea_ref: textarea_ref,

    //functions
    onSendMessage: onSendMessage,
  };
}

export default AiChatBox;
