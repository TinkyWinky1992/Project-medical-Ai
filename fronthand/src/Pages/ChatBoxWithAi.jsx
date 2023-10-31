import "../style/chatboxStyle.css";
import AiChatBox from "../Services/ChatBox";
import * as React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";

function RenderChatbox() {
  const ai_chatbox = new AiChatBox();
  return (
    <div className="App">
      <header className="App-header">
        <div ref={ai_chatbox.chatbox_ref} className="chatbox_container">
          <div
            ref={ai_chatbox.user_output_ref}
            className="output_message_user"
          ></div>
          <div
            ref={ai_chatbox.ai_output_ref}
            className="output_message_ai"
          ></div>
        </div>
        <div className="textarea_container">
          <TextareaAutosize
            ref={ai_chatbox.textarea_ref}
            className="custom-textarea"
            placeholder="Send a message"
          ></TextareaAutosize>
          <Button
            variant="outlined"
            onClick={(e) => ai_chatbox.onSendMessage(e)}
            className="custom-button"
          >
            Send
          </Button>
        </div>
      </header>
    </div>
  );
}
export default RenderChatbox;
