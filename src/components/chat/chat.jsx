import React, { useState } from 'react'
import './chat.scss'
export const Chat = () => {
    const [chat,setchat]=useState(true)
    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <span>Arjun Jadhav</span>
                    <p>Hello !! How are You?</p>
                </div>
                <div className="message">
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <span>Arjun Jadhav</span>
                    <p>Hello !! How are You?</p>
                </div>
                <div className="message">
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <span>Arjun Jadhav</span>
                    <p>Hello !! How are You?</p>
                </div>
                <div className="message">
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <span>Arjun Jadhav</span>
                    <p>Hello !! How are You?</p>
                </div>
                <div className="message">
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <span>Arjun Jadhav</span>
                    <p>Hello !! How are You?</p>
                </div>


            </div>
            { chat &&(
            <div className="chatbox">
                <div className="top">
                    <div className="user">
                        <img
                            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=""
                        />
                        
                    </div>
                    <span className='close' onClick={() => setchat(false)}>X</span>
                </div>
                <div className="center">
                      <div className="chatmessage own">
                        <p>
                        There are many variations
                        </p>
                        <span>1 hour ago</span>
                      </div>
                      <div className="chatmessage">
                        <p>
                        There are many variations
                        </p>
                        <span>1 hour ago</span>
                      </div>
                      <div className="chatmessage own">
                        <p>
                        There are many variations
                        </p>
                        <span>1 hour ago</span>
                      </div>
                      <div className="chatmessage">
                        <p>
                        There are many variations
                        </p>
                        <span>1 hour ago</span>
                      </div>
                      <div className="chatmessage own">
                        <p>
                        There are many variations
                        </p>
                        <span>1 hour ago</span>
                      </div><div className="chatmessage">
                        <p>
                        There are many variations
                        </p>
                        <span>1 hour ago</span>
                      </div>
                </div>
                <div className="bottom">
                      <textarea></textarea>
                      <button>Send</button>
                </div>
            </div>)}
        </div>
    )
}
