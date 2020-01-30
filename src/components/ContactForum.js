import React, { useState, useEffect } from "react";
import { ReactComponent as LinkedInLogo } from "../images/linkedin.svg";
import { ReactComponent as Envelope } from "../images/envelope.svg";
import { ReactComponent as Location } from "../images/location.svg";

const ContactForm = () => {
  const [canSubmit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      return setSubmit(false);
    }
    if (!email.includes("@") || !email.includes(".com")) {
      return setSubmit(false);
    }
    if (message.length < 10) {
      return setSubmit(false);
    } else {
      return setSubmit(true);
    }
  }, [email, message, name]);

  return (
    <>
      <section
        id="contact-form"
        className="flex justify-center w-full bg-bgColor py-10 border-b border-gray-700"
      >
        <form
          className="footerColor w-full md:w-4/5 lg:w-2/3  p-5 md:p-10 border border-gray-900"
          action="https://smartforms.dev/submit/5dd43f03ed25000605199cd5"
          method="POST"
        >
          <div className="flex  justify-center md:justify-start md:px-12 py-4">
            <h2 className="text-3xl border-b border-gray-700">Contact Me</h2>
          </div>

          <section className="w-full md:flex md:justify-center  pt-8 md:pt-4">
            <div className="md:w-1/3 h-20 md:flex md:flex-wrap justify-start md:justify-center items-center">
              <div className="w-full flex  justify-start md:justify-center">
                <div className="w-5 mr-4 md:mx-4">
                  <a
                    href="https://www.lonelyplanet.com/canada/vancouver"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {<Location />}
                  </a>
                </div>
                <h3 className="font-bold">Location</h3>
              </div>
              <div className="w-full flex md:justify-center thinFont">
                <p> Vancouver, Canada </p>
              </div>
            </div>
            <div className="md:w-1/3 h-20 md:flex md:flex-wrap justify-start md:justify-center items-center">
              <div className="w-full flex  justify-start md:justify-center">
                <div className="w-5 mr-4 md:mx-4">
                  <a
                    href="https://www.linkedin.com/in/kyle-humphrey-1949165a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {<Envelope />}
                  </a>
                </div>
                <h3 className="font-bold">Email</h3>
              </div>
              <div className="w-full flex md:justify-center thinFont">
                <p>kylerhumphrey@gmail.com</p>
              </div>
            </div>
            <div className="md:w-1/3 h-20 md:flex md:flex-wrap justify-start md:justify-center items-center">
              <div className="w-full flex  justify-start md:justify-center">
                <div className="w-5 mr-4 md:mx-4">
                  <a
                    href="https://www.linkedin.com/in/kyle-humphrey-1949165a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {<LinkedInLogo />}
                  </a>
                </div>
                <h3 className="font-bold">LinkedIn</h3>
              </div>
              <div className=" thinFont">
                <a
                  href="https://www.linkedin.com/in/kyle-humphrey-1949165a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kyle-humphrey-1949165a/
                </a>
              </div>
            </div>
          </section>

          <div className="lg:flex flex-wrap mb-4 md:my-10  ">
            <div className="lg:w-1/2  py-2 rounded  lg:pr-2">
              <p className="border-b border-gray-700 pb-1 mb-1">Name</p>
              <input
                className="w-full bg-gray-800 py-2 pl-2"
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="lg:w-1/2  py-2  rounded lg:pl-2 ">
              <p className="border-b border-gray-700 pb-1 mb-1">Email</p>
              <input
                className="w-full bg-gray-800 py-2 pl-2"
                id="email"
                name="email"
                type="text"
                placeholder="Your Email"
                vaule={email}
                onChange={e => setEmail(e.target.value)}
              />
              <div className="w-full my-1">
                <p className="thinFont text-gray-500">
                  * email will be kept private
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center   ">
            <textarea
              className="w-full bg-gray-800 py-2 pl-2 "
              rows="9"
              id="message"
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>

          <div className="flex w-full justify-center my-12">
            {canSubmit ? (
              <button className="w-32 py-3  bg-bgColor rounded-sm border border-gray-500">
                Submit
              </button>
            ) : (
              <div className="w-32 py-3  bg-bgColor rounded-sm border border-gray-900 text-gray-700 text-center">
                Submit
              </div>
            )}
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
