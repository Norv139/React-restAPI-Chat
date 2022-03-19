import React, {useState, useEffect} from "react";

import ChatBody from "./components/ChatBody/index"
import HeaderChat from "./components/HeaderChat/index"
import ProfileID from "./components/ProfileID"

import './App.css';

const axios = require('axios').default;


function App() {
  const [flagShowID, setFlagShowID] = useState(false)
  const [data, setData] = useState([{}])

  const [IDUser, setIDUser] = useState(null)
  const [inputID, setInputID] = useState(null)

  const [IMessege, setIMessege] = useState("")

  async function getDataMesseges(){
    axios.get("/GetAnyMessage")
    .then(res => res.data)
    .then(data => {
      console.log("GET")
      setData(data)})
  }


  useEffect(
    ()=>{
      getDataMesseges()
    }
    ,[])

  return (

    <div className="App">
      <div 
        style={flagShowID === false ? {display:"none"}: null}>
        <ProfileID
          IDUserNow={IDUser}
          FOnChange={
            (e)=>{setInputID(e.target)}
          }
          SetFunction={
            ()=>{
              setIDUser(parseInt(inputID.value)); 
              setFlagShowID(!flagShowID);
            }
          }
        />
      </div>

      <HeaderChat
        FOnClick={()=>{setFlagShowID(!flagShowID)}}
        UpDate={()=>(getDataMesseges())}
      />

      <div className='main_chat'>
        <ChatBody 
          arr={data}
          FOnChange={
            (e)=>{setIMessege(e.target)}
          }
          FOnClick={
            ()=>{
              console.log(IMessege.value);

              if (IDUser == null){
                setFlagShowID(!flagShowID)
              }

              if (IMessege != "" && IDUser != null){
                axios.post('/PostMessage', {
                  id_person: IDUser,
                  messages: IMessege.value
                })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });

                IMessege.value = "";
              }
            }
          }
        />
      </div>
      <p>
        ЭТОТ ЧАТ ИСПОЛЬЗУЕТ WebSocket 
        <br/> из-за чего нужно обновлять страницу 
        <br/> для обновления сообщений, даже своих
      </p>
    </div>
  );
}

export default App;
