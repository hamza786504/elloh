import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { LuSend } from 'react-icons/lu';
import { FaBars } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [chat, setChat] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [cards, setCards] = useState([]);

  const messageListRef = useRef(null);

  const scrollToBottom = () => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  };

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const onSendButtonClick = async () => {
    if (!userInput.trim()) {
      return;
    }

    const newMessage = {
      message_id: chat.length + 1,
      message: userInput.trim(),
      timestamp: new Date().toISOString(),
      from: 'user'
    };

    const updatedChat = [...chat, newMessage];
    setChat(updatedChat);

    try {
      const message = userInput.trim();
      setUserInput('');
      const response = await axios.post('https://backendv1.flatfeebizloans.com/api/conversation', {
        message,
        ip: 'dummy_ip'
      });

      const botMessage = {
        message_id: updatedChat.length + 1,
        message: response.data.message,
        timestamp: new Date().toISOString(),
        from: 'bot'
      };

      const updatedChatWithBot = [...updatedChat, botMessage];
      setChat(updatedChatWithBot);
      localStorage.setItem('chat', JSON.stringify(updatedChatWithBot));
    } catch (error) {
      console.error('Error sending message:', error);
    }

  };

  const startChat = (initialMessage) => {
    const newChat = [{
      message_id: 1,
      message: initialMessage,
      timestamp: new Date().toISOString(),
      from: 'bot'
    }];

    setChat(newChat);
    localStorage.setItem('chat', JSON.stringify(newChat));
  };

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
    const storedChat = JSON.parse(localStorage.getItem('chat')) || [];
    setChat(storedChat);

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

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  return (
    <div className="container">
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card chat-app">
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
                    <button id="showPeopleList" style={{ fontSize: "17px" }} className="me-0 btn btn-outline-secondary d-md-none">
                      <FaBars />
                    </button>
                  </div>
                </div>
                <span className="header-title">
                  Find the mortgage you qualify for now. Without the hassle.
                </span>
              </div>
              <div className="chat-history" ref={messageListRef}>
                {!chat.length && (
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
                <ul className="m-b-0" id="messageList">
                  {chat.map((message, index) => (
                    <li className="clearfix" key={index}>
                      {message.from === 'bot' ? (
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

const Card = ({ imageSrc, altText, text, onClick }) => (
  <div className="col-6">
    <div className="btn card-btn text-center card border-secondary mb-3" onClick={onClick}>
      <div className="image-container">
        <img className="card-img my-2" style={{ maxWidth: "60px" }} src={imageSrc} alt={altText} />
      </div>
      <div className="card-footer text-muted">
        {text}
      </div>
    </div>
  </div>
);

export default App;
