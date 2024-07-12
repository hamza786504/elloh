import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoChatboxEllipses } from "react-icons/io5";
import ChatListItem from "../components/chatbot/chatListItem";
import { WOW } from 'wowjs';
import 'animate.css/animate.min.css';
import "../styles/chat.css"

const Chat = () => {
  const [activeChat, setActiveChat] = useState(null);

  const chatData = [
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      name: 'John Doe',
      message: 'Hello, Are you there?',
      timestamp: new Date(),
      unreadCount: 1
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      name: 'Danny Smith',
      message: 'Hello, Are you there?',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      name: 'Danny Smith',
      message: 'Hello, Are you there?',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      name: 'Danny Smith',
      message: 'Hello, Are you there?',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      name: 'Danny Smith',
      message: 'Hello, Are you there?',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      name: 'Danny Smith',
      message: 'Hello, Are you there?',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      name: 'Danny Smith',
      message: 'Hello, Are you there?',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      name: 'Danny Smith',
      message: 'Hello, Are you there?',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      name: 'Danny Smith',
      message: 'Hello, Are you there?',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      name: 'Danny Smith',
      message: 'Hello, Are you there?',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      name: 'Danny Smith',
      message: 'Hello, Are you there?',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      name: 'Danny Smith',
      message: 'Hello, Are you there?',
      timestamp: new Date(new Date().getTime() - 5 * 60000),
    },
    {
      avatarSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      name: 'Danny Smith',
      message: 'Hello, Are you there?',
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
      <div className="container-fluid chat_page" style={{ maxWidth: "1600px" }}>
        <div className="row align-items-stretch justify-content-center">
          <div className="col-12 col-lg-4 col-xl-3 pe-0 pb-4 d-flex flex-column align-items-start text-start" style={{ maxHeight: "100vh" }}>
            <div className="d-flex align-items-center" style={{ height: "100px" }}>
              <button type="button" className="p-2 px-3 btn btn-outline-secondary" style={{ fontSize: "16px" }}>
                <IoChatboxEllipses className="me-2" /> New Chat
              </button>
            </div>
            <div className="card flex-grow-1 chat_section" style={{ overflowY: "scroll", width: "100%" }}>
              <div style={{ height: "100%" }}>
                <div>
                  <div class="card-body">
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
          <div className="col-12 col-lg-8 col-xl-9">
            <div className="row px-3" style={{ height: "100%" }}>
              <nav class="navbar navbar-light bg-transparent py-0" style={{height: "50px"}}>
                <Link class="d-flex align-items-center text-black" style={{ textDecoration: "none" }} to="/chat">
                  <img
                    src="/images/ELLOH.png"
                    alt="logo"
                    width="30"
                    height="30"
                    class="d-inline-block align-text-end"
                  />
                  <h4 className="ms-1" style={{ marginBottom: "-3px" }}>ELLOH</h4>
                </Link>
              </nav>
              <section className={`card h-full p-0 d-flex ${activeChat ? "align-items-end flex-row w-full" : ""} container-fluid`}>
                {activeChat === null ? (
                  <div className="row px-3 align-items-stretch">
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
                ) : <ChatContent />}
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
    <div className="mt-3 px-2 col-lg-4 col-sm-6 col-12 wow animate__animated animate__fadeInUp" data-wow-delay={`${delay}s`}>
      <div className="card text-center p-5 mx-auto" style={{ height: "100%" }}>
        <img src={src} alt={alt} className="profile-img mx-auto" style={{ maxWidth: "50px" }} onClick={onClick} />
        <hr />
        <p className="mb-0">{description}</p>
      </div>
    </div>
  );
};

const ChatContent = () => {
  return (
    <div className="chat-content d-flex flex-column" style={{ width: "100%" }}>
      <div className="overflow-y-scroll flex-grow-1">
        <div class="d-flex justify-content-end align-items-center mb-4 ">
          <p class="mb-0 text-end border text-black border-secondary text-light p-3 rounded">
            Sed ut perspiciatis unde omnis iste natus error
          </p>

          <div style={{ height: "35px" }}>
            <img
              src="/images/ELLOH.png"
              alt="avatar"
              class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
              width="30"
            />
          </div>
        </div>
        <div class="d-flex justify-content-start align-items-center mb-4 ">
          <div style={{ height: "35px" }}>
            <img
              src="/images/ELLOH.png"
              alt="avatar"
              class="rounded-circle d-flex align-self-start mx-3 shadow-1-strong"
              width="30"
            />
          </div>
          <p class="mb-0 text-end border text-black border-secondary text-light p-3 rounded">
            Sed ut perspiciatis unde omnis iste natus error
          </p>
        </div>
        <div class="d-flex justify-content-end align-items-center mb-4 ">
          <p class="mb-0 text-end border text-black border-secondary text-light p-3 rounded">
            Sed ut perspiciatis unde omnis iste natus error
          </p>

          <div style={{ height: "35px" }}>
            <img
              src="/images/ELLOH.png"
              alt="avatar"
              class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
              width="30"
            />
          </div>
        </div>
      </div>
      <div className="input-group w-full" style={{ border: "1px solid black !important" }}>
        <input
          type="text"
          class="w-full p-4 flex-grow-1"
          style={{ background: "#f5f5f5", border: "0" }}
          placeholder="Find the help you need here..."
        />
        <button
          type="button"
          style={{ width: "50px", background: "#f5f5f5", border: "none", borderLeft: "1px solid rgba(0,0,0,0.17)" }}
        >
          <i class="bi bi-send-fill py-5 fs-2"></i>
        </button>
      </div>
    </div>
  );
};

export default Chat;
