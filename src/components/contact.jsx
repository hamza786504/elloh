import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleOnChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <section id="contact">
        <div className="wrapper">
          <div className="col-a">
            <header>
              <h2>Get in touch with us!</h2>
            </header>
          </div>
          <div className="col-b">
            <form>
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={(e) => {
                      handleOnChange(e);
                    }}
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={(e) => {
                      handleOnChange(e);
                    }}
                    placeholder="Your Email"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => {
                      handleOnChange(e);
                    }}
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={(e) => {
                      handleOnChange(e);
                    }}
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading"></div>
                  <div className="error-message"></div>
                  <div className="sent-message"></div>
                  <button type="submit" onClick={(e) => handleFormSubmit(e)}>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
