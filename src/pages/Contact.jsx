import React, { useEffect } from "react";

const Contact = ({ content }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us - Suguru Weddings";
  }, []);

  // 🛡️ HARD GUARD
  if (!content || !content.contact) {
    return (
      <div className="pt-28 text-center">
        Loading contact details...
      </div>
    );
  }

  const { phone, email, location, whatsapp } = content.contact;

  return (
    <div className="pt-28 pb-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">
          Book a Consultation
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Let’s discuss your wedding photography and videography needs.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Contact Details
              </h2>

              <p className="mb-3">
                📞 <strong>Phone:</strong> {phone || "Available on request"}
              </p>

              <p className="mb-3">
                ✉️ <strong>Email:</strong> {email || "info@suguruweddings.com"}
              </p>

              <p className="mb-3">
                📍 <strong>Location:</strong> {location || "Hyderabad"}
              </p>

              {whatsapp && (
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4
