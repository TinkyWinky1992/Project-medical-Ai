const scrollingDown = (message_box)=>{
    message_box.current.scrollTop = message_box.current.scrollHeight;
}

const getLevelFromconvirstion =(text) =>{
    const level_match = text.match(/Level:\s*(\d+)/);
    if(level_match)
        return parseInt(level_match[1], 10);
    else
        return null;

}

const getProblemFromconvirstion =(text) =>{
    const problem_match = text.match(/Problem:\s*(.+)/);
    if(problem_match)
        return problem_match[1];
    else
        return null;
}
export { scrollingDown, getLevelFromconvirstion, getProblemFromconvirstion }
/*
const DEFAULT_CONFIG = {
    "ai_token": "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",
    "topic": "NodeJs",
    "model": "text-davinci-003"
}
*/
