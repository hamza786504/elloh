import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ChatListItem = ({ avatarSrc, name, message, timestamp, unreadCount }) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const timestampDate = timestamp instanceof Date ? timestamp : new Date(timestamp);
      const now = new Date();

      // Calculate difference in days
      const diffDays = Math.floor((now - timestampDate) / (1000 * 60 * 60 * 24));

      if (diffDays === 0) {
        setTimeAgo('Today');
      } else if (diffDays === 1) {
        setTimeAgo('Yesterday');
      } else {
        setTimeAgo(`${diffDays} days ago`);
      }
    };

    calculateTimeAgo();

    // Update time ago every minute to handle dynamic time changes
    const interval = setInterval(() => {
      calculateTimeAgo();
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [timestamp]);

  return (
    <li className="p-2">
      <Link to="/" className="text-decoration-none d-flex justify-content-between" style={{ width: "100%" }}>
        <div className="d-flex align-items-start justify-content-start flex-row" style={{ width: "100%" }}>
          <img src={avatarSrc}
            alt="avatar"
            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
            width="35"
          />
          <div className='flex-grow-1'>
            <div className='d-flex align-items-center justify-content-between' style={{ width: "100%" }}>
              {/* <span className='fw-bold text-start d-flex flex-column align-items-start justify-content-between text-black mb-0'>{name}</span> */}
              <span className='d-flex flex-row align-items-center'>
                {/* {unreadCount > 0 && <span className="badge d-flex align-items-center justify-content-center bg-danger me-1" style={{ borderRadius: "50%", fontSize: "8px" }}>{unreadCount}</span>} */}
                <p className="mb-0 text-muted" style={{fontSize: "14px", lineHeight: 1.3 , color: "#43565A"}}>{message.slice(0, 30)}{message.length >= 30 ? "..." : ""}</p>
              </span>
            </div>
            <p className="text-muted mb-0 text-start" style={{ fontSize: "10px" }}>{timeAgo}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ChatListItem;
