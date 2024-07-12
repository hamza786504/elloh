// import React from "react";

// export default function contact() {

//   return (
//     <div className="h-full">
//       <div className="row">
//         <div className="col-4 border-end">side bar for chat member</div>
//         <div className="col-8">
//           <p>Find the mortgage you qualify for Now. without the hassle.</p>

//           <div className="container">
//             <div className="row">
//               <div className="col-md-6">
//                 <img src="/images/Borrower.png" alt="profile-img" />
//                 <hr></hr>
//                 <p>i am Borrower searching for own mortgage solution...</p>
//               </div>
//               <div className="col-md-6">
//                 <img src="/images/Broker.png" alt="profile-img" />
//                 <hr></hr>
//                 <p>i am broker working on behalf of client...</p>
//               </div>
//               <div className="col-md-6">
//                 <img src="/images/Purchase.png" alt="profile-img" />
//                 <hr></hr>
//                 <p>I am looking to purchase a property..</p>
//               </div>
//               <div className="col-md-6">
//                 <img src="/images/Refi.png" alt="profile-img" />
//                 <hr></hr>
//                 <p>i am looking to refinance a property...</p>
//               </div>
//               <div className="col-md-6">
//                 <img src="/images/RefID.png" alt="profile-img" />
//                 <hr></hr>
//                 <p>Enter a reference number from a previous conversation...</p>
//               </div>
//               <div className="col-md-6">
//                 <img src="/images/LiveAgent.png" alt="profile-img" />
//                 <hr></hr>
//                 <p>tranfer me to a live agent now... </p>
//               </div>
//             </div>
//             <div class="input-group mb-3 ">
//               <input
//                 type="text"
//                 class="form-control p-3"
//                 placeholder="Find the help you need here..."
//                 aria-label="Recipient's username"
//                 aria-describedby="button-addon2"
//               />
//               <button
//                 class="btn btn-outline-secondary"
//                 type="button"
//                 id="button-addon2"
//               >
//                 <i class="bi bi-send-fill fs-3"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <section>
//         <div class=" ">
//           <div class="row ">
//
//             </div>

//             <div class="col-md-6 h-full col-lg-7 col-xl-8">
//               <div className="row chat-option">
//                 <div className="col-md-6">
//                   <img src="/images/Borrower.png" alt="profile-img" />
//                   <hr></hr>
//                   <p>i am Borrower searching for own mortgage solution...</p>
//                 </div>
//                 <div className="col-md-6">
//                   <img src="/images/Broker.png" alt="profile-img" />
//                   <hr></hr>
//                   <p>i am broker working on behalf of client...</p>
//                 </div>
//                 <div className="col-md-6">
//                   <img src="/images/Purchase.png" alt="profile-img" />
//                   <hr></hr>
//                   <p>I am looking to purchase a property..</p>
//                 </div>
//                 <div className="col-md-6">
//                   <img src="/images/Refi.png" alt="profile-img" />
//                   <hr></hr>
//                   <p>i am looking to refinance a property...</p>
//                 </div>
//                 <div className="col-md-6">
//                   <img src="/images/RefID.png" alt="profile-img" />
//                   <hr></hr>
//                   <p>
//                     Enter a reference number from a previous conversation...
//                   </p>
//                 </div>
//                 <div className="col-md-6">
//                   <img src="/images/LiveAgent.png" alt="profile-img" />
//                   <hr></hr>
//                   <p>tranfer me to a live agent now... </p>
//                 </div>
//               </div>
//               <div className="overflow-scroll height">
//                 <div class="d-flex justify-content-end align-items-center mb-4 ">
//                   <p class="mb-0 text-end bg-secondary text-light p-3 rounded">
//                     Sed ut perspiciatis unde omnis iste natus error
//                   </p>

//                   <img
//                     src="/images/ELLOH.png"
//                     alt="avatar"
//                     class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
//                     width="60"
//                   />
//                 </div>
//                 <div class="d-flex justify-content-start align-items-center mb-4 ">
//                   <img
//                     src="/images/ELLOH.png"
//                     alt="avatar"
//                     class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
//                     width="60"
//                   />
//                   <p class="mb-0 text-end bg-secondary text-light p-3 rounded">
//                     Sed ut perspiciatis unde omnis iste natus error
//                   </p>
//                 </div>
//                 <div class="d-flex justify-content-end align-items-center mb-4 ">
//                   <p class="mb-0 text-end bg-secondary text-light p-3 rounded">
//                     Sed ut perspiciatis unde omnis iste natus error
//                   </p>

//                   <img
//                     src="/images/ELLOH.png"
//                     alt="avatar"
//                     class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
//                     width="60"
//                   />
//                 </div>
//               </div>

//               <hr />

//               <div class="input-group mt-5 ">
//                 <input
//                   type="text"
//                   class="S p-4"
//                   placeholder="Find the help you need here..."
//                   aria-label="Recipient's username"
//                   aria-describedby="button-addon2"
//                 />
//                 <button
//                   class="btn btn-outline-secondary"
//                   type="button"
//                   id="button-addon2"
//                 >
//                   <i class="bi bi-send-fill fs-3"></i>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import React, { useState } from "react";
import Navbar from "../components/cotactAppbar.js";

const ChatSection = () => {
  const [activeChat, setActiveChat] = useState(null); // State to track active chat

  const handleProfileClick = (profile) => {
    setActiveChat(profile); // Set active chat based on profile clicked
  };

  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-4 border-end">
          <div class="  mb-md-0">
            <div class="card ">
              <div class="card-body">
                <ul class="list-unstyled mb-0">
                  <li class="p-2 border-bottom bg-body-tertiary">
                    <a
                      href="#!"
                      class="text-decoration-none d-flex justify-content-between"
                    >
                      <div class="d-flex flex-row">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                          alt="avatar"
                          class="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                          width="60"
                        />
                        <div class="pt-1">
                          <p class="fw-bold text-start mb-0">John Doe</p>
                          <p class="small text-muted">Hello, Are you there?</p>
                        </div>
                      </div>

                      <div class="pt-1">
                        <p class="small text-muted mb-1">Just now</p>
                        <span class="badge bg-danger float-end">1</span>
                      </div>
                    </a>
                  </li>
                  <li class="p-2 border-bottom">
                    <a
                      href="#!"
                      class="text-decoration-none d-flex justify-content-between"
                    >
                      <div class="d-flex flex-row">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp"
                          alt="avatar"
                          class="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                          width="60"
                        />
                        <div class="pt-1">
                          <p class="fw-bold text-start mb-0">Danny Smith</p>
                          <p class="small text-muted">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div class="pt-1">
                        <p class="small text-muted mb-1">5 mins ago</p>
                      </div>
                    </a>
                  </li>
                  <li class="p-2 border-bottom">
                    <a
                      href="#!"
                      class="text-decoration-none d-flex justify-content-between"
                    >
                      <div class="d-flex flex-row">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                          alt="avatar"
                          class="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                          width="60"
                        />
                        <div class="pt-1">
                          <p class="fw-bold text-start mb-0">Alex Steward</p>
                          <p class="small text-muted">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div class="pt-1">
                        <p class="small text-muted mb-1">Yesterday</p>
                      </div>
                    </a>
                  </li>
                  <li class="p-2 border-bottom">
                    <a
                      href="#!"
                      class="text-decoration-none d-flex justify-content-between"
                    >
                      <div class="d-flex flex-row">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                          alt="avatar"
                          class="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                          width="60"
                        />
                        <div class="pt-1">
                          <p class="fw-bold text-start mb-0">Ashley Olsen</p>
                          <p class="small text-muted">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div class="pt-1">
                        <p class="small text-muted mb-1">Yesterday</p>
                      </div>
                    </a>
                  </li>
                  <li class="p-2 border-bottom">
                    <a
                      href="#!"
                      class="text-decoration-none d-flex justify-content-between"
                    >
                      <div class="d-flex flex-row">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
                          alt="avatar"
                          class="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                          width="60"
                        />
                        <div class="pt-1">
                          <p class="fw-bold text-start mb-0">Kate Moss</p>
                          <p class="small text-muted">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div class="pt-1">
                        <p class="small text-muted mb-1">Yesterday</p>
                      </div>
                    </a>
                  </li>
                  <li class="p-2 border-bottom">
                    <a
                      href="#!"
                      class="text-decoration-none d-flex justify-content-between"
                    >
                      <div class="d-flex flex-row">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                          alt="avatar"
                          class="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                          width="60"
                        />
                        <div class="pt-1">
                          <p class="fw-bold text-start mb-0">Lara Croft</p>
                          <p class="small text-muted">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div class="pt-1">
                        <p class="small text-muted mb-1">Yesterday</p>
                      </div>
                    </a>
                  </li>
                  <li class="p-2">
                    <a
                      href="#!"
                      class="text-decoration-none d-flex justify-content-between"
                    >
                      <div class="d-flex flex-row">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                          alt="avatar"
                          class="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                          width="60"
                        />
                        <div class="pt-1">
                          <p class="fw-bold text-start mb-0">Brad Pitt</p>
                          <p class="small text-muted">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div class="pt-1">
                        <p class="small text-muted mb-1">5 mins ago</p>
                        <span class="text-muted float-end">
                          <i class="fas fa-check" aria-hidden="true"></i>
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8">
          <p>Find the mortgage you qualify for Now. without the hassle.</p>

          <section>
            <div className="container">
              <div className="row">
                <div className="h-full">
                  <div className="row chat-option">
                    <ProfileImage
                      src="/images/Borrower.png"
                      alt="Borrower"
                      description="I am Borrower searching for own mortgage solution..."
                      onClick={() => handleProfileClick("borrower")}
                    />
                    <ProfileImage
                      src="/images/Broker.png"
                      alt="Broker"
                      description="i am broker working on behalf of client.."
                      onClick={() => handleProfileClick("Broker")}
                    />
                    <ProfileImage
                      src="/images/Purchase.png"
                      alt="Purchase"
                      description="I am looking to purchase a property.."
                      onClick={() => handleProfileClick("Purchase")}
                    />
                    <ProfileImage
                      src="/images/Refi.png"
                      alt="Refi"
                      description="i am looking to refinance a property..."
                      onClick={() => handleProfileClick("refinance")}
                    />
                    <ProfileImage
                      src="/images/RefID.png"
                      alt="RefID"
                      description=" Enter a reference number from a previous conversation..."
                      onClick={() => handleProfileClick("ReferenceId")}
                    />
                    <ProfileImage
                      src="/images/LiveAgent.png"
                      alt="LiveAgent"
                      description="tranfer me to a live agent now..."
                      onClick={() => handleProfileClick("LiveAgent")}
                    />
                    {/* Repeat for other profiles */}
                  </div>
                  <div className="overflow-scroll height">
                    {activeChat === "borrower" ? (
                      <ChatContent>
                        {" "}
                        this is <b className="text-danger">{activeChat}</b> chat
                      </ChatContent>
                    ) : activeChat === "Broker" ? (
                      <ChatContent>
                        {" "}
                        this is <b className="text-danger">{activeChat}</b> chat
                      </ChatContent>
                    ) : activeChat === "Purchase" ? (
                      <ChatContent>
                        {" "}
                        this is <b className="text-danger">{activeChat}</b> chat
                      </ChatContent>
                    ) : activeChat === "refinance" ? (
                      <ChatContent>
                        {" "}
                        this is <b className="text-danger">{activeChat}</b> chat
                      </ChatContent>
                    ) : activeChat === "ReferenceId" ? (
                      <ChatContent>
                        {" "}
                        this is <b className="text-danger">{activeChat}</b> chat
                      </ChatContent>
                    ) : activeChat === "LiveAgent" ? (
                      <ChatContent>
                        {" "}
                        this is <b className="text-danger">{activeChat}</b> chat
                      </ChatContent>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

const ProfileImage = ({ src, alt, description, onClick }) => {
  return (
    <div className="col-md-6">
      <img src={src} alt={alt} className="profile-img" onClick={onClick} />
      <hr />
      <p>{description}</p>
    </div>
  );
};

const ChatContent = ({ children }) => {
  return (
    <div className="chat-content">
      <h3> {children}</h3>

      <div className="overflow-scroll height">
        <div class="d-flex justify-content-end align-items-center mb-4 ">
          <p class="mb-0 text-end bg-secondary text-light p-3 rounded">
            Sed ut perspiciatis unde omnis iste natus error
          </p>

          <img
            src="/images/ELLOH.png"
            alt="avatar"
            class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
            width="60"
          />
        </div>
        <div class="d-flex justify-content-start align-items-center mb-4 ">
          <img
            src="/images/ELLOH.png"
            alt="avatar"
            class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
            width="60"
          />
          <p class="mb-0 text-end bg-secondary text-light p-3 rounded">
            Sed ut perspiciatis unde omnis iste natus error
          </p>
        </div>
        <div class="d-flex justify-content-end align-items-center mb-4 ">
          <p class="mb-0 text-end bg-secondary text-light p-3 rounded">
            Sed ut perspiciatis unde omnis iste natus error
          </p>

          <img
            src="/images/ELLOH.png"
            alt="avatar"
            class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
            width="60"
          />
        </div>
      </div>

      <hr />
      <div className="input-group mt-5">
        <input
          type="text"
          class="w-full p-4"
          placeholder="Find the help you need here..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          <i class="bi bi-send-fill py-5 fs-3"></i>
        </button>
      </div>
    </div>
  );
};

export default ChatSection;
