import ContactImage from "../assets/contact-page/ContactPageAssets.png";

function ContactPage() {
  return (
    <>
      <div className="min-h-screen bg-[#a0a0a0] flex items-center justify-end">
        <div className="flex flex-col bg-white w-300 h-screen">
          <h1 className="highlighted-text text-8xl text-(--color-primary-text) mb-0.85">
            CONTACT US
          </h1>

          <span className="text-2xl text-(--color-secondary-text)">
            We'd love to hear from you.
          </span>
        </div>
      </div>
    </>
  );
}

export default ContactPage;

// <div className="contact-wrapper">
//   <div className="contact-image">
//     <img src={image} alt="Sunglasses" />
//   </div>

//   <div className="contact-form">
//     <h1>CONTACT US</h1>

//     <p className="subtitle">We'd love to hear from you.</p>

//     <p className="description">
//       Questions about your order, product availability, or just want to say
//       hello? Drop us a message and we'll get back to you within 24 hours.
//     </p>

//     <form>
//       <div className="row">
//         <input type="text" placeholder="First Name" />
//         <input type="text" placeholder="Last Name" />
//       </div>

//       <input type="email" placeholder="Email Address" />

//       <select>
//         <option>Subject</option>
//         <option>Order Inquiry</option>
//         <option>Product Question</option>
//         <option>Other</option>
//       </select>

//       <textarea placeholder="Message" rows="4"></textarea>

//       <button type="submit">Send Message</button>
//     </form>
//   </div>
// </div>;
