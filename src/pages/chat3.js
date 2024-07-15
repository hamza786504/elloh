import React, { useState, useEffect } from 'react';
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import '../styles/chat3.css';

const App = () => {
  const [chats, setChats] = useState([]);
  const [chat, setChat] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [cards, setCards] = useState([]);
  const [sidebar, setSidebar] = useState(true);

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 766) {
        setSidebar(true);
      } else {
        setSidebar(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const StartChat = () => {
    setChat([{ message: "I am a borrower searching for my own mortgage solution...", timestamp: new Date(new Date().getTime()), from: "bot" }]);
  }

  useEffect(() => {
    setChats(Array.from({ length: 24 }, () => ({
      message: 'Help me to find low income men',
      timestamp: "Today"
    })));

    setCards([
      {
        id: 1,
        imageSrc: './images/Borrower.png',
        altText: 'Borrower',
        text: 'I am a borrower searching for my own mortgage solution...',
      },
      {
        id: 2,
        imageSrc: './images/Broker.png',
        altText: 'Broker',
        text: 'I am a broker working on behalf of a client',
      },
      {
        id: 3,
        imageSrc: './images/Purchase.png',
        altText: 'Purchase',
        text: 'I am looking to purchase a property',
      },
      {
        id: 4,
        imageSrc: './images/Refi.png',
        altText: 'Refi',
        text: 'I am looking to refinance a property',
      },
      {
        id: 5,
        imageSrc: './images/RefID.png',
        altText: 'Ref ID',
        text: 'Enter a reference number from a previous conversation',
      },
      {
        id: 6,
        imageSrc: './images/LiveAgent.png',
        altText: 'Live Agent',
        text: 'Transfer me to a live agent now',
      }
    ])
  }, []);


  async function OnSendButtonClick() {
    if (!userInput) {
      return;
    }
    setChat([...chat, { message: userInput, timestamp: new Date(new Date().getTime()), from: "user" }]);
    setUserInput("");
  }

  return (
    <>
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card chat-app">
              <div id="plist" className={`${sidebar ? "open d-block" : "d-none"} people-list`}>
                <button id="closePeopleList" onClick={() => { setSidebar(!sidebar) }} className={`${sidebar ? "d-block" : "d-none"} close-btn d-md-none`}>
                  <FaTimes />
                </button>
                <div className="d-flex justify-content-start mb-2">
                  <button className="px-3 btn btn-outline-secondary" style={{ fontSize: "16px" }}>
                    <i className="fa fa-comments"></i>
                    <IoChatbubblesSharp /> New Chat
                  </button>
                </div>
                <hr />
                <ul className="chat-list mt-2 mb-0" id="chatList">
                  {chats.map((chat, key) => (
                    <li className='text-start' onClick={() => { if (window.innerWidth < 766) setSidebar(!sidebar) }} key={key}>
                      <p className='message'>{chat.message}</p>
                      <p className='status'><FaCircle /> {chat.timestamp}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="overlay" id="overlay">
                <button id="" className="btn btn-outline-secondary d-md-none">
                  <FaBars />
                </button>
              </div>
              <div id="chat-container" className="chat">
                <div className="chat-header clearfix">
                  <div className="row">
                    <div className="col-6 col-md-6 items-center">
                      <img src="./images/ELLOH.png" alt="avatar" />
                      <div className="chat-about">
                        <h6 className="m-b-0">ELLOH</h6>
                      </div>
                    </div>
                    <div className="col-6 col-md-6 d-flex align-items-center justify-content-end text-right">
                      <button id="showPeopleList" style={{ fontSize: "17px" }} className="me-0 btn btn-outline-secondary d-md-none" onClick={() => { setSidebar(!sidebar) }}>
                        <FaBars />
                      </button>
                    </div>
                  </div>
                  <span className="header-title">
                    Find the mortgage you qualify for now. Without the hassle.
                  </span>
                </div>
                <div className="chat-history">
                  <ul className="m-b-0" id="messageList">
                    <div className="row image-container">
                      {cards.map(card => (
                        <Card
                          key={card.id}
                          imageSrc={card.imageSrc}
                          altText={card.altText}
                          text={card.text}
                          onClick={StartChat}
                        />
                      ))}
                    </div>
                    {chat.map((c, index) => (
                      <li className="clearfix" key={index}>
                        {c.from === "bot" ? (
                          <div className={`d-flex mt-2 justify-content-end`}>
                            <div className="message other-message float-right">{c.message}</div>
                            <img src="./images/ELLOH.png" alt="avatar" className="img-bot" />
                          </div>
                        ) : (
                          <div className='text-start'>
                            <div className="message-data">
                              <span className="message-data-time">{c.timestamp.toLocaleString()}</span>
                            </div>
                            <div className="message my-message">{c.message}</div>
                          </div>
                        )}
                        <hr /> {/* Move the <hr /> outside of the conditional block */}
                      </li>
                    ))}

                  </ul>
                </div>
                <div className="chat-message clearfix">
                  <div className="input-group mb-0">
                    <input
                      id="userInput"
                      type="text"
                      className="form-control"
                      placeholder="Find the help you need here..."
                      value={userInput}
                      onChange={(e) => { handleUserInputChange(e) }}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          OnSendButtonClick()
                        }
                      }}
                    />
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center" style={{ height: "35px" }} onClick={(e) => { OnSendButtonClick() }}>
                          <LuSend style={{ fontSize: "18px", marginBottom: "-2px" }} />
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ imageSrc, altText, text, onClick }) => (
  <div className="col-6">
    <div className="btn card-btn text-center card border-secondary mb-3" onClick={onClick}>
      <div className="image-container">
        <img className="card-img my-4" style={{ maxWidth: "60px" }} src={imageSrc} alt={altText} />
      </div>
      <div className="card-footer text-muted">
        {text}
      </div>
    </div>
  </div>
);

export default App;
