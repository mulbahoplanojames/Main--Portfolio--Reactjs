import React, { useState } from "react";
import "/src/Components/ContactInfo/ContactInfo.css";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import swal from "sweetalert";

const Contactinfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <>
      <section id="contact_info">
        <div className="contact_info_wripper">
          <form className="form">
            <h1 className="form_title">Send Message</h1>

            <div>
              <input
                type="text"
                className="input"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="email"
                className="input"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="text"
                className="input"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div>
              <textarea
                id="comments"
                placeholder="Message"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                required
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                id="submit"
                value={"Send Message"}
                onClick={(e) => {
                  e.preventDefault();
                  setComments("");
                  setEmail("");
                  setName("");
                  setSubject("");
                }}
              />
            </div>
          </form>

          <div className="get_in_touch">
            <h1 className="form_title">Get in Touch</h1>
            <p className="personal_info_description">
              Hello there! My name is Oplano James Mulbah. I am a web developer
              & Software Engineer, and I'm very passionate and dedicated to my
              work. With +6 months experience as a professional a wed developer,
              I have acquired the skills and knowledge necessary to make your
              project a success, I enjoy every step of the design process.
            </p>

            <div>
              <p className="persoal_conatct_details">
                <CiLocationOn className="icon_two" />
                <span className="detail_span">
                  KG 276 Gizosi Kigali, Rwanda
                </span>
              </p>
              <p className="persoal_conatct_details">
                <MdOutlinePhoneIphone className="icon_two" />
                <span className="detail_span">(+250) 791676207</span>
              </p>
              <p className="persoal_conatct_details">
                <CiMail className="icon_two" />
                <span className="detail_span">mulbahjamesoplano@gmail.com</span>
              </p>
            </div>

            <div className="social_links_icon_wripper">
              <a href="https://github.com/mulbahoplanojames" target="_blank">
                <div className="social_links_icons">
                  <FaGithub className="social_icon" />
                </div>
              </a>
              <a href="/">
                <div className="social_links_icons">
                  <FaXTwitter className="social_icon" />
                </div>
              </a>
              <a href="/">
                <div className="social_links_icons">
                  <SiUpwork className="social_icon" />
                </div>
              </a>
              <a href="/">
                <div className="social_links_icons">
                  <FaWhatsapp className="social_icon" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactinfo;
