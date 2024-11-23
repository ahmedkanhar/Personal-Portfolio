const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content section */}
      <section className="py-12 px-6 bg-gray-100" id="contact">
        <h2 className="text-3xl font-semibold text-center mb-8 mt-4 text-red-900">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center items-center">
          {/* Contact Information Box */}
          <div className="flex flex-col justify-center items-center bg-white p-6 border-2 border-red-700 rounded-md w-full max-w-sm h-[500px]">
            <h3 className="text-xl font-semibold mb-4 text-red-900">Contact Information</h3>
            <p className="text-lg mb-4 text-gray-800">
              Feel free to reach out to me for any inquiries or opportunities.
            </p>
            <div className="space-y-4 text-center">
              <div>
                <h4 className="font-semibold text-red-900">Phone</h4>
                <p>(+92)3061831383</p>
              </div>
              <div>
                <h4 className="font-semibold text-red-900">Email</h4>
                <p>ahmedalikanhar777@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-red-900">Address</h4>
                <p>P&T colony, Rehan St, Gizri, Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Contact Form Box */}
          <div className="flex flex-col justify-center items-center bg-white p-6 border-2 border-red-700 rounded-md w-full max-w-sm h-[500px]">
            <h3 className="text-xl font-semibold mb-4 text-red-900">Send a Message</h3>
            <form className="space-y-6 w-full">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Email"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border border-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Message"
                  rows={5}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-2 bg-red-700 text-white font-semibold rounded-md hover:bg-red-800"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Media Box */}
          <div className="flex flex-col justify-center items-center bg-white p-6 border-2 border-red-700 rounded-md w-full max-w-sm h-[500px]">
            <h3 className="text-xl font-semibold mb-4 text-red-900">Follow Me</h3>
            <p className="text-lg mb-6 text-gray-800">Connect with me on social media.</p>
            <div className="grid grid-cols-3 gap-4">
              {/* GitHub Box */}
              <a
                href="https://github.com/ahmedkanhar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-24 h-24 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
              >
                <i className="bx bxl-github text-3xl text-gray-700 hover:text-black"></i>
              </a>
              {/* LinkedIn Box */}
              <a
                href="https://www.linkedin.com/ahmedkanhar777"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-24 h-24 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
              >
                <i className="bx bxl-linkedin text-3xl text-gray-700 hover:text-blue-600"></i>
              </a>
              {/* Facebook Box */}
              <a
                href="https://www.facebook.com/your-masroofhunn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-24 h-24 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
              >
                <i className="bx bxl-facebook text-3xl text-gray-700 hover:text-blue-500"></i>
              </a>
              {/* Twitter Box */}
              <a
                href="https://x.com/ahmedkanhar777"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-24 h-24 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
              >
                <i className="bx bxl-twitter text-3xl text-gray-700 hover:text-blue-400"></i>
              </a>
              {/* Instagram Box */}
              <a
                href="https://www.instagram.com/ahmedkanhar777"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-24 h-24 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
              >
                <i className="bx bxl-instagram text-3xl text-gray-700 hover:text-pink-500"></i>
              </a>
              {/* Gmail Box */}
              <a
                href="mailto:ahmedalikanhar777@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-24 h-24 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
              >
                <i className="bx bx-mail-send text-3xl text-gray-700 hover:text-red-500"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
