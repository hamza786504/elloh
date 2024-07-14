import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoChatboxEllipses } from "react-icons/io5";
import ChatListItem from "../components/chatbot/chatListItem";
import { WOW } from 'wowjs';
import { FaUser } from "react-icons/fa";
import 'animate.css/animate.min.css';
import "../styles/chat.css"

const Chat2 = () => {
  const [activeChat, setActiveChat] = useState(null);


  const chatData = [
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      message: 'Help me to find low income men',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
  ];

  useEffect(() => {
    const wow = new WOW({
      boxClass: 'wow',            // default
      animateClass: 'animate__animated', // default
      offset: 0,                 // default
      mobile: true,              // default
      live: true                 // default
    });
    wow.init();
  }, []);

  const handleChatSelect = (profile) => {
    setActiveChat(profile);
  };

  return (
    <>
      <div className="container-fluid p-0 chat_page" style={{ minHeight: "100vh", maxWidth: "1600px" }}>
        <div className="row px-3 py-4 align-items-stretch justify-content-center" style={{ height: "100%" }}>
          <div className="col-12 col-lg-3 col-xl-2 pe-0 d-flex flex-column align-items-start text-start">
            <div className="d-flex align-items-center">
              <button type="button" className="p-2 px-3 btn btn-outline-secondary" style={{ fontSize: "16px" }}>
                <IoChatboxEllipses className="me-2" /> New Chat
              </button>
            </div>
            <div className="my-4 w-95" style={{ background: "gray", paddingRight: "20px", height: "1px" }}></div>
            <div className="flex-grow-1 w-95 chat_section" style={{ height: "400px", overflowY: "scroll" }}>
              <div style={{ height: "100%" }}>
                <div>
                  <div className="card-body">
                    <ul className="list-unstyled">
                      {chatData.map((item, index) => (
                        <ChatListItem
                          key={index} // Use a more stable key if possible
                          avatarSrc={item.avatarSrc}
                          name={item.name}
                          message={item.message}
                          timestamp={item.timestamp}
                          unreadCount={item.unreadCount || 0}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-lg-0 mt-5 col-12 d-flex align-items-start flex-column col-lg-9 col-xl-10 pe-0" style={{ maxHeight: "95vh" }}>
            <div className="ps-4 d-flex flex-column w-100" style={{ borderLeft: "1px solid #d2d2d2", marginRight: "-10px", height: "100%" }}>
              <nav className="navbar navbar-light bg-transparent py-0" style={{ height: "40px" }}>
                <Link className="d-flex align-items-center text-black" style={{ textDecoration: "none" }} to="/chat">
                  <img
                    src="/images/ELLOH.png"
                    alt="logo"
                    width="40"
                    height="40"
                    className="d-inline-block align-text-end"
                  />
                  <h4 className="ms-1" style={{ marginBottom: "-3px" }}>ELLOH</h4>
                </Link>
                <p className="position-absolute text-black" style={{ left: "50%", transform: "translateX(-50%)", bottom: "-40%", fontSize: "13px" }}>Find the mortgage you qualify for now , whithout the hassle</p>
              </nav>
              <section className={`flex-grow-1 p-0 d-flex align-items-center flex-column justify-content-center  ${activeChat ? "align-items-end flex-row w-full" : ""} container-fluid`}>
                <div className="row px-4 align-items-stretch">
                  <ProfileImage
                    src="/images/Borrower.png"
                    alt="Borrower"
                    description="I am Borrower searching for own mortgage solution..."
                    delay="0.2"
                    onClick={() => handleChatSelect("borrower")}
                  />
                  <ProfileImage
                    src="/images/Broker.png"
                    alt="Broker"
                    description="i am broker working on behalf of client.."
                    delay="0.5"
                    onClick={() => handleChatSelect("Broker")}
                  />
                  <ProfileImage
                    src="/images/Purchase.png"
                    alt="Purchase"
                    description="I am looking to purchase a property.."
                    delay="0.8"
                    onClick={() => handleChatSelect("Purchase")}
                  />
                  <ProfileImage
                    src="/images/Refi.png"
                    alt="Refi"
                    description="i am looking to refinance a property..."
                    delay="1.1"
                    onClick={() => handleChatSelect("refinance")}
                  />
                  <ProfileImage
                    src="/images/RefID.png"
                    alt="RefID"
                    description=" Enter a reference number from a previous conversation..."
                    delay="1.4"
                    onClick={() => handleChatSelect("ReferenceId")}
                  />
                  <ProfileImage
                    src="/images/LiveAgent.png"
                    alt="LiveAgent"
                    description="tranfer me to a live agent now..."
                    delay="1.7"
                    onClick={() => handleChatSelect("LiveAgent")}
                  />
                </div>
                <div className="w-100 flex-grow-1 d-flex justify-content-end flex-column">
                  <ChatContent />
                </div>
              </section>
            </div>
          </div>
        </div >
      </div >
    </>
  );
};

const ProfileImage = ({ src, alt, description, onClick, delay }) => {
  return (
    <div className="mt-4 px-2 col-sm-6 col-12 wow animate__animated animate__fadeInUp" data-wow-delay={`${delay}s`}>
      <div onClick={onClick} className="text-center mx-auto shadow-sm" style={{ height: "100%" }}>
        <img src={src} alt={alt} className="profile-img mx-auto" style={{ maxWidth: "30px" }} />
        <hr />
        <p className="mb-3 py-1 px-3 mx-3" style={{ background: "#f8f8f8" }}>{description}</p>
      </div>
    </div>
  );
};

const ChatContent = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const onChangeMessage = (e) => {
    setMessage(e.target.value)
  }

  useEffect(() => {
    const initialMessage = {
      text: "Hello! How can I help you today?",
      fromUser: false,
      timestamp: new Date().toISOString(),
    };
    setMessages([initialMessage]);
  }, []);
  const sendMessage = (messageText) => {
    setMessage("");
    const newMessage = {
      text: messageText,
      fromUser: true,
      timestamp: new Date().toISOString(),
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setTimeout(() => {
      const botMessage = {
        text: "Sure, here is the response from the chatbot.",
        fromUser: false,
        timestamp: new Date().toISOString(),
      };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 2000);
  };
  return (
    <>
      <div className="chat-content d-flex flex-column flex-grow-1 pt-4" style={{ width: "100%" }}>
        <div className="flex-grow-1 pe-0 d-flex flex-column justify-content-end" style={{ height: "70px", overflowY: "scroll" }}>
          {messages.map((message, index) => (
            <div key={index} className={`d-flex justify-content-${message.fromUser ? 'start' : 'end'} align-items-${message.fromUser ? 'center' : 'start'} mb-4`}>
              {message.fromUser && (
                <div style={{ height: "35px" }}>
                  <FaUser className="me-2 mt-3" />
                </div>
              )}
              <p className={`mb-0 text-${message.fromUser ? 'start' : 'end'} border text-black p-3 rounded border-0`} style={{ backgroundColor: "#E7F2F4" }}>
                {message.text}
              </p>
              {!message.fromUser && (
                <div style={{ height: "35px" }}>
                  <img
                    src="/images/ELLOH.png"
                    alt="avatar"
                    className="mt-2 me-2 rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                    width="30"
                  />
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
      <div className="input-group w-full" style={{ border: "1px solid black !important" }}>
        <input
          type="text"
          className="w-full p-4 flex-grow-1"
          style={{ background: "#f5f5f5", border: "0" }}
          placeholder="Type your message..."
          value={message}
          onChange={(e) => {onChangeMessage(e)}}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessage(message);
              setMessage("");
            }
          }}
        />
        <button
          type="button"
          onClick={() => sendMessage(message)}
          style={{ width: "50px", background: "#f5f5f5", border: "none", borderLeft: "1px solid rgba(0,0,0,0.17)" }}
        >
          <i className="bi bi-send-fill py-5 fs-2"></i>
        </button>
      </div>
    </>
  );
};

export default Chat2;
