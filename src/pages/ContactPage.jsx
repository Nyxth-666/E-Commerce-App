import ContactImage from "../assets/contact-page/ContactPageAssets.png";

function ContactPage() {
  return (
    <>
      <div className="h-screen bg-[#a0a0a0] flex items-center justify-end">
        {/* BANNER IMAGE */}
        <div className="relative p-10 w-[40vw] h-screen flex items-center justify-center overflow-hidden">
          <img
            src={ContactImage}
            alt="Contact Banner"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col bg-white w-[60vw] h-screen p-25 overflow-y-auto">
          <div className="flex flex-col items-start">
            {/* TITLE */}
            <h1 className="highlighted-text text-7xl text-(--color-primary-text) mb-2">
              CONTACT US
            </h1>

            <span className="text-2xl text-(--color-primary-text) mb-7">
              We'd love to hear from you.
            </span>

            <p className="text-xl text-(--color-secondary-text) mb-12">
              Questions about your order, product availability, or just want to
              say hello? Drop us a message and we'll get back to you within 24
              hours.
            </p>

            <form className="flex flex-col gap-4 w-full">
              <div className="flex flex-row gap-4">
                {/* FIRST NAME */}
                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-sm text-(--color-secondary-text)">
                    First Name
                  </label>
                  <input type="text" className="w-full" />
                </div>
                {/* LAST NAME */}
                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-sm text-(--color-secondary-text)">
                    Last Name
                  </label>
                  <input type="text" className="w-full" />
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-(--color-secondary-text)">
                  Email Address
                </label>
                <input type="email" className="w-full" />
              </div>

              {/* SUBJECT */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-(--color-secondary-text)">
                  Subject
                </label>
                <select className="w-full bg-white cursor-pointer">
                  <option value="" disabled selected></option>
                  <option>Order Inquiry</option>
                  <option>Product Question</option>
                  <option>Other</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-(--color-secondary-text)">
                  Message
                </label>
                <textarea rows="5" className="w-full resize-none" />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full py-3 border border-[#bbb] bg-transparent rounded-md text-sm text-(--color-secondary-text) cursor-pointer hover:bg-[#f2f2f2] transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
