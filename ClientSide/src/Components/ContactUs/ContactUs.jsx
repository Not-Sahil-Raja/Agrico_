import React from "react";

function ContactUs() {
  return (
    <>
      {/* <div>ContactUs</div> */}
      <div className="max-w-md w-full mx-auto p-6 bg-orange-200 rounded-lg shadow-md px-8 pt-6 pb-8 mb-4 flex-wrap size-3/6 mt-10 h-1/2 overflow-hidden relatives ">
        {/* <div className='max-w-md w-full mx-auto p-6 bg-orange-200 rounded-lg shadow-md px-8 pt-6 w-16 md:w-32 lg:w-48'> */}

        {/* <div className='shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-orange-200'> */}
        <h2 className="text-4xl text-center text-lime-800 font-bold mb-6 flex justify-center mt-60 w-full ">
          Contact Us
        </h2>
        <form action="">
          <p className="mb-8 lg:mb-16 font-light-text text-center text-orange-950:text-black-400 sm:text-xl text-bold">
            Faced any Technical issues? Want to send feedback? Let us know.
          </p>
          <span>
            <div className="mb-4">
              <label className="block text-white text--sm font-semibold mb-2">
                {" "}
                Your Name
              </label>
              <input
                placeholder="xyz"
                className="w-full px-3 py-2 border rounded-1g bg-gray-200 focus:border-blue-500 text-black"
                type="text"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text--sm font-semibold mb-2">
                {" "}
                Your Email
              </label>
              <input
                placeholder="xyz@gmail.com"
                className="w-full px-3 py-2 border rounded-1g bg-gray-200 focus:border-blue-500 text-black"
                type="text"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text--sm font-semibold mb-2">
                {" "}
                Your Message
              </label>
              <input
                placeholder="Write your message here"
                className="w-full px-3 py-2 border rounded-1g bg-gray-200 focus:border-blue-500 text-black"
                type="text"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-lime-800 text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-white"
              >
                Submit Message
              </button>
            </div>
          </span>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
