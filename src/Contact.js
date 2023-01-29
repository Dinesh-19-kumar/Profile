import React from 'react';
import './Contact.css';
import contactImg from './assets/img/about-9.png';
function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
            <div className="contact__box">
                <div className="contact__meta">
                    <h1 className="Hire__text">
                        Hire Me.
                    </h1>
                    <p className="hire__text white">I am available for <strong>Work</strong>. Connect with me via </p>
                    <p className="hire__text white">Email <strong>dinesh01karma@gmail.com</strong> Or Other Contact</p>
                    <p className="hire__text white">Details are Listed Below.</p>
                </div>
                <div className="input__box">
                  <form action="https://formsubmit.co/dinesh01karma@gmail.com.com" method="POST">
                    <input type="text" className="contact name" placeholder="Your name *" />
                    <input type="email" className="contact email" placeholder="Your Email *" />
                    <input type="text" className="contact subject" placeholder="Write a Subject *" />
                    <textarea className="message" id="message" placeholder="Write Your message"></textarea>
                    <button className="btn contact pointer" type="submit">submit</button>
                  </form>
                </div>
            </div>
        </div>
        <div className="col__2">
            <img src={contactImg} alt="" className="contact__img" />
        </div>
        <div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
