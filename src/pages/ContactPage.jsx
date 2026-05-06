import React from "react";
import "./cp.css";
import image from "./Group 116.png";

export default function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-image">
          <img src={image} alt="Sunglasses" />
        </div>

        <div className="contact-form">
          <h1>CONTACT US</h1>

          <p className="subtitle">We'd love to hear from you.</p>

          <p className="description">
            Questions about your order, product availability, or just want to say hello?
            Drop us a message and we'll get back to you within 24 hours.
          </p>

          <form>
            <div className="row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <input type="email" placeholder="Email Address" />

            <select>
              <option>Subject</option>
              <option>Order Inquiry</option>
              <option>Product Question</option>
              <option>Other</option>
            </select>

            <textarea placeholder="Message" rows="4"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
}