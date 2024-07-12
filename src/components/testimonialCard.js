import React from "react";

const TestimonialCard = ({ title, image, name, description }) => {
    return (
        <div className="card mb-4 py-5 mx-3 border-0 d-flex flex-column shadow-sm rounded" style={{height:"100%", maxWidth: '430px' }}>
            <img src={image} className="card-img-top mx-auto" alt={title} style={{maxWidth: "100px", width: '100%', height: '100px', borderRadius: "50% 50% 0", objectFit: 'cover' }} />
            <div className="card-body text-center mt-4 p-4">
                <h5 className="card-title font-weight-bold text-lg">{title}</h5>
                <p className="card-text font-weight-medium mb-2">{name}</p>
                <p className="card-text text-sm mb-0 text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
