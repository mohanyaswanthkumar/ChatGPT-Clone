import logo from './logo.svg';
import './App.css';
import chatgptlogo from './chatgptlogo.png';
import home from './home.png';
import saved from './saved.png';
import upgrade from './upgrade.png';
import add from './add.png';
import hisside from './historyy-side.png';
import send from './send.png'
import chatgpt from './chatgpt.png';
import user from './user.png';
import { sendMsgToOpenAI } from './openai';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [msg,setMsg]=useState("");
  const [chats,setChats]=useState([]);
  // const data = [
  //   {'what is api': 'called some answer related to api'},
  //   {'what is programming': 'java, c, python, and a language called python'}
  // ];
  
  // localStorage.setItem('chatgpt', JSON.stringify(data));
  
  useEffect(() => {
    const existingData = localStorage.getItem('chatgpt');
    const parsedData = existingData ? JSON.parse(existingData) : [];
    setChats(parsedData);
  }, []);
  const handleSend= async()=>{
    const res=await sendMsgToOpenAI(msg);
    console.log(res);
    console.log(msg);
const existingData = localStorage.getItem('chatgpt');
const parsedData = existingData ? JSON.parse(existingData) : [];
setChats(parsedData);
console.log(parsedData);
const newMessage = { [msg]:"ChatGPT refers to OpenAI's language model, specifically the GPT (Generative Pre-trained Transformer) model fine-tuned for chat and conversation tasks. It's designed to generate human-like text based on the input it receives, making it suitable for various conversational applications such as chatbots, virtual assistants, and dialogue systems.OpenAI's GPT models are trained on a vast amount of text data from the internet, allowing them to understand and generate coherent responses across a wide range of topics. The chat aspect of ChatGPT indicates its focus on facilitating natural and engaging conversations with users, responding to queries, providing information, or engaging in casual dialogue."};
parsedData.push(newMessage);
const updatedData = JSON.stringify(parsedData);
localStorage.setItem('chatgpt', updatedData);
  }
  return (
    <div className="App">
      <div className='sidebar'>
        <div className='upperside'>
          <div className='uppersidetop'><img src={chatgptlogo} alt='' style={{width:'30px'}} className='logo'/><span className='brand'>ChatGPT</span></div>
          <button className='add'><img src={add} alt='' style={{width:'25px'}} />New Chat</button>
          <div className='uppersidebottom'>
            <button className='query'><img src={hisside} style={{width:'25px'}} alt='' />What is Programming ?</button>
            <button className='query'><img src={hisside} style={{width:'25px',marginLeft:'-18px'}} alt='' />How this api works ?</button>
          </div>
        </div>
        <div className='lowerside'>
          <div className='list-items'><img src={home} alt='' style={{width:'30px'}} className='list-items-img' />Home</div>
          <div className='list-items'><img src={saved} alt='' style={{width:'30px'}} className='list-items-img' />Saved</div>
          <div className='list-items'><img src={upgrade} alt='' style={{width:'30px'}} className='list-items-img' />Upgrade to Pro</div>
        </div>
      </div>
      {/* Right section begins */}
      <div className='mainbar'>
        <div className='chats'>
          
          {chats.map((chat, index) => (
  <div key={index}>
    <div className='chat'>
      <img src={user} style={{ width: '30px' }} className='chat-img' alt='' />
      <p className='txt'>{Object.keys(chat)[0]}</p>
    </div>
    <div className='chat bot'>
      <img src={chatgpt} style={{ width: '30px' }} className='chat-img' alt='' />
      <p className='txt'>{Object.values(chat)[0]}</p>
    </div>
  </div>
))}
        </div>
        <div className='chat-footer'>
          <div className='inp'>
            <input type='text' value={msg} onChange={(e)=>{setMsg(e.target.value)}} name='que' id='que' placeholder='Message ChatGPT ' /> <button className='send' onClick={handleSend}><img style={{width:'30px'}} src={send} alt=''/></button>
          </div>
          <p>ChatGPT can make mistakes. Consider checking important information.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
