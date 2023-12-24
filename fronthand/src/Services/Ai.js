import OpenAI from "openai";
import { useState } from "react";
import axios from "axios";
import {
  scrollingDown,
  getLevelFromconvirstion,
  getProblemFromconvirstion,
} from "../utils/ChatUtil";
import raw from "../ai-description.txt";

const API_KEY = "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";

const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

function Ai() {
  const [content, setcontent] = useState();
  let messageList = [];
 
  const read = async () =>
  {
    try{
      const respone = await axios.get(raw);
      setcontent(respone.data);
    }catch (error) {
      console.error("Error while making the request to api:", error);
      throw error; // Rethrow the error for further handling if needed}
    }
  } 
read();
    
  const generateText = async (userInput) => {
    const userMessage = { role: "user", content: userInput.textContent };
    messageList.push(userMessage);

    const messages = [
      { role: "system", content: content },
      userMessage,
      ...messageList, // Include previous responses
    ];
    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: messages,
        model: "gpt-3.5-turbo",
      });
      const textAI = chatCompletion.choices[0].message.content;
      const aiMessage = { role: "assistant", content: textAI };

      messageList.push(aiMessage);

      //console.log(getLevelFromconvirstion(textAI));
      //console.log(getProblemFromconvirstion(textAI));

      return textAI;
    } catch (error) {
      // Handle network or other unexpected errors
      console.error("An error occurred:", error);
      return "there is an error";
    }
  };

  const AichatRespone = async (e, ai_output, user_output, chatbox) => {
    e.stopPropagation();
    const message = await generateText(user_output);

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
