import React, { useState, useEffect, useRef } from 'react';
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import '../styles/chat3.css';

const App = () => {
  const [chats, setChats] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [cards, setCards] = useState([]);
  const [sidebar, setSidebar] = useState(true);
  const [selectedChat, setSelectedChat] = useState(null);

  const messageListRef = useRef(null);

  // Function to scroll to bottom of message list
  const scrollToBottom = () => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  };

  // Function to handle user input change
  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Function to handle clicking on a chat item
  const handleChatItemClick = (chat_id) => {
    setSelectedChat(chat_id);
    if (window.innerWidth < 766) setSidebar(false);
  };

  const newChat = () => {
    setSelectedChat(null);
  };

  // Function to handle sending a message
  const onSendButtonClick = () => {
    if (!userInput.trim() || selectedChat === null) {
      return;
    }

    const filteredChat = chats.find(chat => chat.chat_id === selectedChat);

    if (!filteredChat) {
      console.error(`Chat with chat_id ${selectedChat} not found.`);
      return;
    }

    const newMessage = {
      message_id: filteredChat.chat.length + 1,
      message: userInput.trim(),
      timestamp: new Date().toISOString(),
      from: "user"
    };

    const updatedChats = chats.map(chat =>
      chat.chat_id === selectedChat
        ? { ...chat, chat: [...chat.chat, newMessage] }
        : chat
    );

    setChats(updatedChats);
    localStorage.setItem("chats", JSON.stringify(updatedChats));
    setUserInput("");
  };

  const startChat = (initialMessage) => {
    // Generate a random chat_id between 1 and 10,000,000
    const randomChatId = Math.floor(Math.random() * 10000000) + 1;
    
    setSelectedChat(randomChatId);
    const newChat = {
      chat_id: randomChatId,
      chat: [{
        message_id: 1,
        message: initialMessage,
        timestamp: new Date().toISOString(),
        from: "bot"
      }]
    };

    setChats([...chats, { ...newChat }]);
    localStorage.setItem("chats", JSON.stringify([...chats, { ...newChat }]));
  };

  // Function to calculate days ago from timestamp
  const getDaysAgo = (timestamp) => {
    const msPerDay = 24 * 60 * 60 * 1000;
    const currentTimestamp = new Date().setHours(0, 0, 0, 0);
    const messageTimestamp = new Date(timestamp).setHours(0, 0, 0, 0);
    const daysDiff = Math.round((currentTimestamp - messageTimestamp) / msPerDay);

    if (daysDiff === 0) {
      return 'Today';
    } else if (daysDiff === 1) {
      return 'Yesterday';
    } else {
      return `${daysDiff} day${daysDiff !== 1 ? 's' : ''} ago`;
    }
  };

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

  // Determine if there are user messages in the selected chat
  const hasUserMessages = selectedChat !== null && chats.some(chat =>
    chat.chat_id === selectedChat && chat.chat.some(message => message.from === "user")
  );

  // Initialize chats and cards on component mount
  useEffect(() => {
    // if (window.innerWidth < 766) setSidebar(false);
    // if (window.innerWidth > 766) setSidebar(true);
    const storedChats = JSON.parse(localStorage.getItem("chats")) || [];
    setChats(storedChats);

    setCards([
      {
        id: 1,
        imageSrc: './images/Borrower.png',
        altText: 'Borrower',
        text: 'I am a borrower searching for my own mortgage solution...',
        initialMessage: 'I am a borrower searching for my own mortgage solution...'
      },
      {
        id: 2,
        imageSrc: './images/Broker.png',
        altText: 'Broker',
        text: 'I am a broker working on behalf of a client',
        initialMessage: 'I am a broker working on behalf of a client'
      },
      {
        id: 3,
        imageSrc: './images/Purchase.png',
        altText: 'Purchase',
        text: 'I am looking to purchase a property',
        initialMessage: 'I am looking to purchase a property'
      },
      {
        id: 4,
        imageSrc: './images/Refi.png',
        altText: 'Refi',
        text: 'I am looking to refinance a property',
        initialMessage: 'I am looking to refinance a property'
      },
      {
        id: 5,
        imageSrc: './images/RefID.png',
        altText: 'Ref ID',
        text: 'Enter a reference number from a previous conversation',
        initialMessage: 'Enter a reference number from a previous conversation'
      },
      {
        id: 6,
        imageSrc: './images/LiveAgent.png',
        altText: 'Live Agent',
        text: 'Transfer me to a live agent now',
        initialMessage: 'Transfer me to a live agent now'
      }
    ]);
  }, []);

  // Scroll to bottom whenever selectedChat or chats change
  useEffect(() => {
    scrollToBottom();
  }, [selectedChat, chats]);

  return (
    <div className="container">
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card chat-app">
            {/* Sidebar for chat list */}
            <div id="plist" className={`${sidebar ? "open d-block" : "d-none"} people-list`}>
              <button id="closePeopleList" onClick={() => setSidebar(false)} className={`${sidebar ? "d-block" : "d-none"} close-btn d-md-none`}>
                <FaTimes />
              </button>
              <div className="d-flex justify-content-start mb-2">
                <button className="px-3 btn btn-outline-secondary" onClick={() => { newChat() }} style={{ fontSize: "16px" }}>
                  <IoChatbubblesSharp /> New Chat
                </button>
              </div>
              <hr />
              <ul className="chat-list mt-2 mb-0" id="chatList">
                {chats?.map((chat, key) => (
                  <li className={`text-start ${chat.chat_id === selectedChat ? "active" : ""}`} onClick={() => handleChatItemClick(chat.chat_id)} key={key}>
                    <p className='message'>{chat.chat[0].message}</p>
                    <p className='status'><FaCircle /> {getDaysAgo(chat.chat[0].timestamp)}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Overlay button */}
            <div className="overlay" id="overlay">
              <button id="" className="btn btn-outline-secondary d-md-none">
                <FaBars />
              </button>
            </div>
            {/* Chat container */}
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
              {/* Render cards for chat options */}
              <div className="chat-history" ref={messageListRef}>
                {!hasUserMessages && (
                  <div className="row image-container">
                    {cards?.map(card => (
                      <Card
                        key={card.id}
                        imageSrc={card.imageSrc}
                        altText={card.altText}
                        text={card.text}
                        onClick={() => startChat(card.initialMessage)}
                      />
                    ))}
                  </div>
                )}
                {/* Render chat messages */}
                <ul className="m-b-0" id="messageList">
                  {chats
                    .filter(chat => chat.chat_id === selectedChat) // Filter chats with selectedChat
                    .map((chat, index) => (
                      <li className="clearfix" key={index}>
                        {chat.chat.map((message, index) => (
                          <div key={index}>
                            {message.from === "bot" ? (
                              <div className="d-flex mt-2 justify-content-end">
                                <div className="message other-message float-right">{message.message}</div>
                                <img src="./images/ELLOH.png" alt="avatar" className="img-bot" />
                              </div>
                            ) : (
                              <div className='text-start'>
                                <div className="message-data">
                                  <span className="message-data-time">{new Date(message.timestamp).toLocaleString()}</span>
                                </div>
                                <div className="message my-message">{message.message}</div>
                              </div>
                            )}
                            <hr />
                          </div>
                        ))}
                      </li>
                    ))}
                </ul>
              </div>
              {/* Input for user to send messages */}
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
                        onSendButtonClick();
                      }
                    }}
                  />
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center" style={{ height: "35px" }} onClick={() => onSendButtonClick()}>
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
  );
};

// Component for rendering each card
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
