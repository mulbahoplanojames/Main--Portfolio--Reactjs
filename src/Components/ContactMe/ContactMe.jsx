import React, { useState } from "react";
import "/src/Components/ContactMe/ContactMe.css";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [submit, setSubmit] = useState("");
  const message = `Hi, ${name}, thanks for contacting me. Hoping to get in touch with you very soon`;

  return (
    <>
      <div id="contact_me">
        <div className="contact_me_wripper">
          <div className="contact_me_content_one main_one">
            <p className="contact_me_title">--Let' s Connect</p>
            <h1 className="contact_me_sub_title">Get in touch</h1>
            <p className="contact_me_description">
              i'm currently avaliable to take on new projects, so feel free to
              send me a message about anything that you want to run past me. You
              can contact anytime at 24/7
            </p>

            <div className="contact_me">
              <div className="contact-me-content">
                <div className="contact-me-icon">
                  <img
                    src="src/assets/phone.gif"
                    alt="phoneIcon"
                    className="img"
                  />
                </div>
                <div className="contact-me-url">
                  <a href="#">
                    <p>+250791676207</p>
                  </a>
                </div>
              </div>

              <div className="contact-me-content">
                <div className="contact-me-icon">
                  <img
                    src="src/assets/email.gif"
                    alt="emailIcon"
                    className="img"
                  />
                </div>
                <div className="contact-me-url">
                  <a href="#">
                    <p>mulbahjamesoplano@gmail.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact_me_content_one main_one">
            <form action="#" className="form">
              <div>
                <input
                  type="text"
                  value={name}
                  id="name"
                  className="input"
                  placeholder="Full Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  ype="email"
                  value={email}
                  id="email"
                  className="input"
                  placeholder="username/Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <textarea
                  value={comment}
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Write something"
                  required
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <div>
                <input
                  type="submit"
                  id="submit"
                  className="btn contact-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSubmit(alert(message));
                  }}
                />
              </div>
            </form>
          </div>
        </div>

        <div className="map_wripper"></div>

        <footer className="footer">
          <hr />
          <p class="copyright">
            Copyright &copy; 2023 Oplano James Mulbah. All right reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default ContactMe;
