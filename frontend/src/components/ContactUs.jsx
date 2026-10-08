import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTag,
  FaComment,
  FaPaperPlane,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10 px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-700 mb-2">
            Contact GreenBaketary
          </h1>
          <p className="text-gray-600">
            We'd love to hear from you! Fill out the form below and our team
            will get back to you shortly.
          </p>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-300 focus-within:border-green-500">
            <FaUser className="text-green-600 text-xl" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-transparent w-full outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-300 focus-within:border-green-500">
            <FaEnvelope className="text-green-600 text-xl" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-transparent w-full outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-300 focus-within:border-green-500">
            <FaPhone className="text-green-600 text-xl" />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              className="bg-transparent w-full outline-none"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-300 focus-within:border-green-500">
            <FaTag className="text-green-600 text-xl" />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="bg-transparent w-full outline-none"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg border border-gray-300 focus-within:border-green-500">
            <FaComment className="text-green-600 text-xl" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="bg-transparent w-full outline-none"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition"
          >
            Send Message <FaPaperPlane />
          </button>
        </form>

        {/* Toast Message */}
        {showToast && (
          <div className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg">
            ✅ Message sent successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
