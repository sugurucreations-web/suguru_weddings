import React, { useEffect } from "react";

const Contact = ({ content }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us - Suguru Weddings";
  }, []);

  if (!content) return null;

  return (
    <div className="pt-28 pb-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">
          Book a Consultation
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Let’s discuss your wedding photography and videography requirements.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Contact Details
              </h2>

              <p className="mb-3">
                📞 <strong>Phone:</strong> {content.contact.phone}
              </p>

              <p className="mb-3">
                ✉️ <strong>Email:</strong> {content.contact.email}
              </p>

              <p className="mb-3">
                📍 <strong>Location:</strong> {content.contact.location}
              </p>
            </div>

            {/* Simple Form (UI only) */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Send a Message
              </h2>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-lg px-4 py-3"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded-lg px-4 py-3"
                />
                <textarea
                  rows="4"
                  placeholder="Tell us about your wedding"
                  className="w-full border rounded-lg px-4 py-3"
                />
                <button
                  type="button"
                  className="bg-rose-600 text-white px-6 py-3 rounded-full font-semibold"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
