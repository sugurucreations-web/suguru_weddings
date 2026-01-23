import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Send } from 'lucide-react';

const Contact = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', eventType: '', eventDate: '', message: '', budget: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.eventType) {
      alert('Please fill in all required fields');
      return;
    }

    setFormStatus('sending');

    // Track lead
    if (window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'Contact',
        event_label: formData.eventType,
        value: 1
      });
    }
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: formData.eventType,
        content_category: 'Contact Form'
      });
    }

    try {
      // Replace with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/xgoaalnp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', eventType: '', eventDate: '', message: '', budget: '' });
        
        // Track conversion
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-XXXXXXXXX/XXXXXX',
            event_category: 'Form Submission',
            event_label: 'Contact Form'
          });
        }
        
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
      console.error('Form submission error:', error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Get In Touch</h2>
            <p className="text-slate-600 mb-8 text-lg">
              Ready to book your special event? Fill out the form or reach us directly through the contact details below.
            </p>

            <div className="space-y-6">
              <a 
                href={`tel:${contact.phone}`}
                className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition group"
              >
                <Phone className="h-6 w-6 text-rose-600 mt-1 group-hover:scale-110 transition" />
                <div>
                  <p className="font-semibold text-slate-800">Phone</p>
                  <p className="text-slate-600">{contact.phone}</p>
                </div>
              </a>

              <a 
                href={`mailto:${contact.email}`}
                className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition group"
              >
                <Mail className="h-6 w-6 text-rose-600 mt-1 group-hover:scale-110 transition" />
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <p className="text-slate-600">{contact.email}</p>
                </div>
              </a>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg">
                <MapPin className="h-6 w-6 text-rose-600 mt-1" />
                <div>
                  <p className="font-semibold text-slate-800">Location</p>
                  <p className="text-slate-600">{contact.location}</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <p className="font-semibold mb-4 text-lg">Follow Us</p>
              <div className="flex space-x-4">
                <a 
                  href={contact.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-full text-white hover:scale-110 transition"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href={contact.social.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-3 rounded-full text-white hover:scale-110 transition"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href={contact.social.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-600 p-3 rounded-full text-white hover:scale-110 transition"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mt-8 p-6 bg-rose-50 rounded-lg">
              <h3 className="font-bold mb-3">Operating Hours</h3>
              <p className="text-slate-700">Monday - Saturday: 9:00 AM - 8:00 PM</p>
              <p className="text-slate-700">Sunday: 10:00 AM - 6:00 PM</p>
              <p className="text-sm text-slate-500 mt-2">Available 24/7 for event coverage</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600 transition"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600 transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Phone *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600 transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Event Type *</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600 transition"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="pre-wedding">Pre-Wedding</option>
                    <option value="birthday">Birthday</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Event Date</label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600 transition"
                >
                  <option value="">Select budget range</option>
                  <option value="under-25k">Under ₹25,000</option>
                  <option value="25k-50k">₹25,000 - ₹50,000</option>
                  <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                  <option value="above-100k">Above ₹1,00,000</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">Message</label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600 transition"
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={formStatus === 'sending'}
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-4 rounded-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {formStatus === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Submit Inquiry
                  </>
                )}
              </button>

              {formStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg">
                  <p className="font-semibold">Thank you for contacting us!</p>
                  <p className="text-sm">We'll get back to you within 24 hours.</p>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
                  <p className="font-semibold">Oops! Something went wrong.</p>
                  <p className="text-sm">Please try again or call us directly.</p>
                </div>
              )}

              <p className="text-xs text-slate-500 text-center">
                We'll never share your information. Your privacy is important to us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
