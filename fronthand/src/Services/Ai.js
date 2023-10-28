import OpenAI from "openai";
import { useState } from "react";
import axios from 'axios';
import { scrollingDown, getLevelFromconvirstion, getProblemFromconvirstion } from "../utils/ChatUtil";
import raw from '../ai-description.txt';

const API_KEY = "sk-qC7VKFMSssHcu4lpWLSqT3BlbkFJ64DGlPKibRqUkNK6eR5wF";


const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

function Ai() {
  const [content, setcontent] = useState();
  let messageList = [];
  const read = async () =>{
   const data = await axios.get(raw);
   setcontent(data);
  }
  read().catch(error => {
    console.log("Someting goes worng when reading description file")
  });

    
  /*
  fetch(raw)
    .then(r => r.text())
    .then(text => {
      setcontent(text);
});
*/



  const generateText = async (userInput) => {

    const userMessage = { role: "user", content: userInput.textContent };
    messageList.push(userMessage);

    const messages = [
      { role: "system", content: content },
      userMessage,
      ...messageList, // Include previous responses
   
    ];
    const chatCompletion = await openai.chat.completions.create({
  
      messages: messages,
      model: 'gpt-3.5-turbo',
    
    });
    const textAI = chatCompletion.choices[0].message.content;
    const aiMessage = { role: "assistant", content: textAI };

    messageList.push(aiMessage);
    console.log(getLevelFromconvirstion(textAI));
    console.log(getProblemFromconvirstion(textAI));
    return textAI;
  }


  const AichatRespone = async (e, ai_output, user_output, chatbox) => {
    e.stopPropagation();
    const message = await generateText(user_output);

    const message_output = ai_output.current.cloneNode(true);
    message_output.style.display = "flex";
    message_output.textContent = message;

    chatbox.current.appendChild(message_output);

    let should_scroll = chatbox.current.scrollTop + chatbox.current.clientHeight === chatbox.current.scrollHeight;
    if (!should_scroll)
      scrollingDown(chatbox);
  }

  return {
    AichatRespone: AichatRespone
  }
}

export default Ai;

