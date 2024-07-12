import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ChatListItem = ({ avatarSrc, name, message, timestamp, unreadCount }) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const timestampDate = timestamp instanceof Date ? timestamp : new Date(timestamp);
      const now = new Date();
      const diffMs = now - timestampDate;

      if (diffMs < 60000) {
        // Less than a minute ago
        setTimeAgo('Just now');
      } else if (diffMs < 3600000) {
        // Less than an hour ago
        const minsAgo = Math.floor(diffMs / 60000);
        setTimeAgo(`${minsAgo} mins ago`);
      } else {
        // More than an hour ago, show hours
        const hoursAgo = Math.floor(diffMs / 3600000);
        setTimeAgo(`${hoursAgo} hours ago`);
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
            width="40"
          />
          <div className='flex-grow-1'>
            <div className='d-flex align-items-center justify-content-between' style={{ width: "100%" }}>
              <span className='fw-bold text-start d-flex flex-column align-items-start justify-content-between text-black mb-0'>{name}</span>
              <span className='d-flex flex-row align-items-center'>
                {unreadCount > 0 && <span className="badge d-flex align-items-center justify-content-center bg-danger me-1" style={{ borderRadius: "50%", fontSize: "8px" }}>{unreadCount}</span>}
                <p className="text-muted mb-0 ms-1" style={{ fontSize: "10px" }}>{timeAgo}</p>
              </span>
            </div>
            <p className="small text-muted">{message.slice(0, 30)}{message.length >= 30 ? "..." : ""}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ChatListItem;
