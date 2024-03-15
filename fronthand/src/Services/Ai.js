
import {
  scrollingDown,
} from "../utils/ChatUtil";
import { Conversation } from "./ServerHandler";


function Ai() {


  const AichatRespone = async (e, ai_output, user_output, chatbox) => {
    e.stopPropagation();
    const message = await Conversation(user_output);

    const message_output = ai_output.current.cloneNode(true);
    message_output.style.display = "flex";
    message_output.textContent = message;

    chatbox.current.appendChild(message_output);

    let should_scroll =
      chatbox.current.scrollTop + chatbox.current.clientHeight ===
      chatbox.current.scrollHeight;
    if (!should_scroll) scrollingDown(chatbox);
  };

  return {
    AichatRespone: AichatRespone,
  };
}

export default Ai;
