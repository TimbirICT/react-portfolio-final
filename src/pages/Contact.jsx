import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4">
        <h1 className="py-4 text-4xl font-bold text-center text-blue">
          Contact
        </h1>
        <form action="" method="POST" encType="multipart/form-data"></form>
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone Number</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Message</label>
            <textarea className="border-2 rounded-lg p-3 border-gray-300" 
              rows="10"
              name="message"
              id="message"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button className="bg-[#001b53] text-gray-100 mt-4 w-full p-4 rounded-lg">
            Send Message
            </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
