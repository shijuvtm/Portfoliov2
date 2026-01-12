import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_8u1kzjq",
        "template_megkkpj",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "7qAIRTN2jYGVq2nG0"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send the message.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info Card */}
          <div className="lg:col-span-2 bg-blue-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Email me at</p>
                  <p className="font-medium text-lg">shijuavtm@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Call me</p>
                  <p className="font-medium text-lg">+91 9497192475</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Location</p>
                  <p className="font-medium text-lg">Kerala, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-blue-100 mb-4 uppercase tracking-widest text-xs font-bold">Follow Me</p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/shiju-a-800572273" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all">
                  <FaLinkedin size={22} />
                </a>
                <a href="https://github.com/shijuvtm" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all">
                  <FaGithub size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@mail.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                <span>{isSending ? "Sending..." : "Send Message"}</span>
                {!isSending && <FaPaperPlane className="text-sm" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
