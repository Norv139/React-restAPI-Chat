import React, {useState} from "react";

import "./ChatBody.scss"

function ChatBody(props){


    return(
        <div>
            <div className="chat_box_css">
                <div className="main_messege">
                    {props.arr
                    .map(
                        (x)=>
                            <Create_massege
                                name={x.id_person}
                                messege={x.message}
                            />
                        )
                    }
                </div>
            </div>
            <div className="input_form">
                <input 
                    className="input" 
                    placeholder="Введите текст"
                    onChange={props.FOnChange}
                ></input>
                <button
                    onClick={props.FOnClick}
                >post</button>
            </div>
        </div>
    )
}

export default ChatBody

function Create_massege(props){
    return (
        <div 
            className="messege other"
        >
            <div className="user">{props.name}</div>
            <div className="messege_text">{props.messege}</div>
        </div>
    )
}
