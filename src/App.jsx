import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { IoChatbubblesSharp } from 'react-icons/io5';
import { FaCircle } from 'react-icons/fa';
import { LuSend } from 'react-icons/lu';
import { FaBars, FaTimes } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [chats, setChats] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [cards, setCards] = useState([]);
  const [sidebar, setSidebar] = useState(true);
  const [selectedChat, setSelectedChat] = useState(null);
  const [cardGeneratedChat, setCardGeneratedChat] = useState(false);

  const messageListRef = useRef(null);

  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem('chats')) || [];
    setChats(storedChats);

    setCards([
      {
        id: 1,
        imageSrc: './images/Borrower.png',
        altText: 'Borrower',
        text: 'I am searching for my own mortgage',
        initialMessage: 'I am searching for my own mortgage',
      },
      {
        id: 2,
        imageSrc: './images/Broker.png',
        altText: 'Broker',
        text: 'I am a broker working on behalf of a client',
        initialMessage: 'I am a broker working on behalf of a client',
      },
      {
        id: 3,
        imageSrc: './images/Purchase.png',
        altText: 'Purchase',
        text: 'I am looking to purchase a property',
        initialMessage: 'I am looking to purchase a property',
      },
      {
        id: 4,
        imageSrc: './images/Refi.png',
        altText: 'Refi',
        text: 'I am looking to refinance a property',
        initialMessage: 'I am looking to refinance a property',
      },
      {
        id: 5,
        imageSrc: './images/RefID.png',
        altText: 'Ref ID',
        text: 'REF ID from previous conversation',
        initialMessage: 'REF ID from previous conversation',
      },
      {
        id: 6,
        imageSrc: './images/LiveAgent.png',
        altText: 'Live Agent',
        text: 'Schedule a live agent call now',
        initialMessage: 'Schedule a live agent call now',
      },
    ]);

    const handleKeyDown = (e) => {
      if (e.keyCode === 123) {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
        e.preventDefault();
      }
      if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


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

  useEffect(() => {
    scrollToBottom();
  }, [selectedChat, chats]);

  const scrollToBottom = () => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  };

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSendButtonClick();
    }
  };

  const onSendButtonClick = async () => {
    let id = selectedChat !== null ? selectedChat : Math.floor(Math.random() * 10000000) + 1;
    const userInputMessage = userInput.trim();
    setUserInput('');

    const userMessage = {
      message_id: chats.length + 1,
      message: userInputMessage,
      timestamp: new Date().toISOString(),
      from: 'user',
    };

    const updatedChats = [...chats];
    let filteredChat = updatedChats.find((chat) => chat.chat_id === id);

    if (!filteredChat) {
      filteredChat = {
        chat_id: id,
        chat: [],
      };
      updatedChats.push(filteredChat);
    }

    filteredChat.chat.push(userMessage);
    setChats(updatedChats);
    setSelectedChat(id);
    localStorage.setItem('chats', JSON.stringify(updatedChats));

    try {
      const response = await axios.post('https://backendv1.flatfeebizloans.com/api/conversation', {
        message: userInputMessage,
        ip: 'dummy_ip',
      });

      const formattedBotMessage = {
        message_id: filteredChat.chat.length + 1,
        message: formatMessage(response.data.message), // Format the bot's message
        timestamp: new Date().toISOString(),
        from: 'bot',
      };

      filteredChat.chat.push(formattedBotMessage);
      setChats([...updatedChats]);
      setSelectedChat(id);
      localStorage.setItem('chats', JSON.stringify(updatedChats));
      scrollToBottom();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };


  const onCardClick = async (cardText) => {
    setCardGeneratedChat(true);

    // Check if the selected chat is already displaying messages related to the cardText
    const isSelectedChatDisplayed = chats.some((chat) => {
      return (
        chat.chat_id === selectedChat &&
        chat.chat.length > 0 &&
        chat.chat[0].message === cardText &&
        chat.chat[0].from === 'bot'
      );
    });

    if (isSelectedChatDisplayed) {
      // If the selected chat already displays messages related to cardText, return early
      return;
    }

    // If not, proceed to create a new chat or update an existing chat
    let id = selectedChat;

    if (id === null) {
      // Generate a new chat_id if selectedChat is null
      id = Math.floor(Math.random() * 10000000) + 1;
    }

    try {
      // Construct user message
      const userMessage = {
        message_id: chats.length + 1,
        message: cardText, // Use cardText as the user's message
        timestamp: new Date().toISOString(),
        from: 'user',
      };

      // Update or add the chat with userMessage and botMessage
      const updatedChats = chats.map((chat) => {
        if (chat.chat_id === id) {
          // Update existing chat
          return {
            ...chat,
            chat: [userMessage, ...chat.chat],
          };
        } else {
          return chat;
        }
      });

      if (!updatedChats.some((chat) => chat.chat_id === id)) {
        // If chat_id does not exist, create a new chat with userMessage and botMessage
        const response = await axios.post(
          'https://backendv1.flatfeebizloans.com/api/conversation',
          {
            message: cardText,
            ip: 'dummy_ip',
          }
        );

        const formattedBotMessage = {
          message_id: 1, // Assuming you reset message_id for each chat
          message: formatMessage(response.data.message), // Format the bot's message
          timestamp: new Date().toISOString(),
          from: 'bot',
        };

        updatedChats.push({
          chat_id: id,
          chat: [userMessage, formattedBotMessage],
        });
      }

      setChats(updatedChats);
      setSelectedChat(id);
      localStorage.setItem('chats', JSON.stringify(updatedChats));
      scrollToBottom();
    } catch (error) {
      console.error('Error sending message:', error);
    }
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

  // Determine if there are user messages in the selected chat
  const hasUserMessages = selectedChat !== null && chats.some((chat) =>
    chat.chat_id === selectedChat && chat.chat.some((message) => message.from === 'user')
  );


  const formatMessage = (text) => {
    // Regular expression pattern to find URLs
    let urlRegex = /(?:(?:https?|ftp):\/\/)?[\w/\-?=%.]+\.[\w/\-&?=%.]+/g;

    // Function to replace URLs with "click here" anchor tags
    const replaceUrlsWithLinks = (text) => {
      return text.replace(urlRegex, (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer">click here</a>`);
    };

    // Replace URLs in the text with "click here" anchor tags
    let formattedText = replaceUrlsWithLinks(text);

    return formattedText;
  };



  return (
    <>
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card chat-app" style={{ maxHeight: "100vh" }} >
              {/* Sidebar for chat list */}
              <div id="plist" className={`${sidebar ? 'open d-block' : 'd-none'} h-100 people-list`}>
                <button
                  id="closePeopleList"
                  onClick={() => setSidebar(false)}
                  className="btn btn-outline-secondary float-end d-md-none"
                >
                  <FaTimes />
                </button>
                <div className="pe-3 text-start">
                  <button
                    className="px-3 btn fw-semibold btn-outline-secondary"
                    onClick={() => setSelectedChat(null)}
                    style={{ paddingTop: "10px", paddingBottom: "10px", fontSize: '16px' }}
                  >
                    <IoChatbubblesSharp className='me-2' style={{ fontSize: "20px" }} /> New Chat
                  </button>
                </div>
                <hr />
                <ul className="chat-list mt-2 mb-0 ps-0" id="chatList">
                  {chats?.map((chat, key) => (
                    <li className={`text-start ${chat.chat_id === selectedChat ? 'active' : ''}`} onClick={() => { window.innerWidth > 766 ? setSidebar(true) : setSidebar(false); setSelectedChat(chat.chat_id) }} key={key}>
                      <p className="message">{chat.chat[0].message}</p>
                      <p className="status">
                        <FaCircle /> {getDaysAgo(chat.chat[0].timestamp)}
                      </p>
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
                <div className="chat-header clearfix pb-1 pb-md-2">
                  <div className="row">
                    <div className="col-6 col-md-6 items-center">
                      <img src="./images/ELLOH.png" style={{ cursor: "pointer" }} alt="avatar" onClick={() => setSelectedChat(null)} /><p className='ms-2' style={{ fontSize: "20px", fontWeight: "500", marginBottom: "-2px" }}>ELLOH</p>
                    </div>
                    <div className="col-6 col-md-6 d-flex align-items-center justify-content-end text-right">
                      <button
                        id="showPeopleList"
                        style={{ fontSize: '17px', height: "40px" }}
                        className="d-flex align-items-center me-0 btn btn-outline-secondary d-md-none"
                        onClick={() => setSidebar(true)}
                      >
                        <FaBars />
                      </button>
                    </div>
                  </div>
                  <span className="header-title text-center">Find the mortgage you qualify for now. Without the hassle.</span>
                </div>
                {/* Render cards for chat options */}
                <div className="px-3 chat-history flex-grow-1" ref={messageListRef} style={{ overflowY: "scroll", overflowX: "hidden" }}>
                  {(!hasUserMessages || cardGeneratedChat) && (
                    <div className="row align-items-stretch image-container">
                      {cards?.map((card) => (
                        <div className="col-6 px-1 py-2 px-md-2" key={card.id} onClick={() => { onCardClick(card.initialMessage) }}>
                          <div className="btn h-100 card-btn text-center card border-secondary mb-3">
                            <div className="image-container">
                              <img className="card-img my-2" style={{ maxWidth: '60px' }} src={card.imageSrc} alt={card.altText} />
                            </div>
                            <div className="card-footer text-muted">{card.text}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Render chat messages */}
                  <ul className="m-b-0" id="messageList">
                    {chats
                      .filter((chat) => chat.chat_id === selectedChat) // Filter chats with selectedChat
                      .map((chat, index) => (
                        <li className="clearfix" key={index}>
                          {chat.chat.map((message, index) => (
                            <div key={index}>
                              {message.from === 'bot' ? (
                                <>
                                  <div className="d-flex mt-2 justify-content-end">
                                    <div
                                      className="message other-message float-right"
                                      dangerouslySetInnerHTML={{ __html: message.message }}
                                    />
                                    <img src="./images/ELLOH.png" alt="avatar" className="img-bot" />
                                  </div>
                                  <hr className='pt-3 mb-2' />
                                </>
                              ) : (
                                <>
                                  {/* Conditionally render user message based on chat generation source */}
                                  {index === 0 && message.from === 'user' && cardGeneratedChat ? (
                                    // First user message generated from card click, don't render
                                    null
                                  ) : (
                                    <div className="text-start">
                                      <div className="message-data">
                                        <span className="message-data-time">
                                          {new Date(message.timestamp).toLocaleString()}
                                        </span>
                                      </div>
                                      <div className="message my-message">
                                        {message.message}
                                      </div>
                                    </div>
                                  )}
                                  <hr className='pt-3 mb-2' />
                                </>
                              )}
                            </div>
                          ))}

                        </li>
                      ))}
                  </ul>


                </div>
                {/* Input for user to send messages */}
                <div className="chat-message clearfix">
                  <div className="input-group py-0 mb-0">
                    <input
                      id="userInput"
                      type="text"
                      className="form-control p-3"
                      placeholder="Find the help you need here..."
                      value={userInput}
                      onChange={(e) => {
                        handleUserInputChange(e);
                      }}
                      onKeyPress={(e) => {
                        handleKeyPress(e);
                      }}
                    />
                    <div className="input-group-prepend">
                      <span className="input-group-text h-100" style={{ padding: "6px" }}>
                        <button
                          className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                          style={{ height: '45px' }}
                          onClick={() => onSendButtonClick()}
                        >
                          <LuSend style={{ fontSize: '18px', marginBottom: '-2px' }} />
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

export default App;
