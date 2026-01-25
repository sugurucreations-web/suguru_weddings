import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg opacity-90">Last updated: January 25, 2026</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using the services of Suguru Weddings, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Services Provided</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Suguru Weddings provides professional photography and videography services for weddings and related events, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Wedding Photography</li>
              <li>Wedding Videography</li>
              <li>Pre-Wedding Shoots</li>
              <li>Destination Wedding Coverage</li>
              <li>Event Photography and Videography</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Booking and Payment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Booking Confirmation:</strong> A booking is confirmed only upon receipt of a signed contract and the required advance payment. The advance payment is typically 30-50% of the total package cost.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Payment Schedule:</strong> The remaining balance must be paid before or on the event date unless otherwise agreed in writing. Failure to make full payment may result in non-delivery of final photos and videos.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Accepted Payment Methods:</strong> We accept bank transfers, UPI, credit/debit cards, and cash payments.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cancellation and Refund Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Client Cancellation:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
              <li>Cancellations made 90+ days before the event: 50% refund of advance payment</li>
              <li>Cancellations made 60-89 days before the event: 25% refund of advance payment</li>
              <li>Cancellations made less than 60 days before the event: No refund</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Force Majeure:</strong> In case of circumstances beyond our control (natural disasters, severe weather, illness, accidents), we will attempt to provide a suitable replacement photographer/videographer. If a replacement cannot be arranged, a full refund will be issued.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Coverage</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Schedule:</strong> The coverage hours and specific events to be covered will be outlined in your contract. Any additional hours requested on the event day will be charged at the overtime rate specified in your contract.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Access:</strong> The client is responsible for ensuring that Suguru Weddings has full access to all event locations and that we are included in the timeline and vendor list provided to the venue.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Weather and Venue Limitations:</strong> We will work professionally within any weather conditions or venue restrictions, but cannot guarantee specific shots if conditions or venue rules prevent them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Delivery of Final Products</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Timeline:</strong> Edited photos and videos will be delivered within 4-8 weeks from the event date, unless otherwise specified in the contract.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Delivery Method:</strong> Final products will be delivered via online gallery, USB drive, or as specified in your package. Physical albums and prints (if included) may take additional time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Image Selection:</strong> Suguru Weddings will select and edit the best images from your event. The number of final deliverable images will be as specified in your package.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Copyright and Usage Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Copyright:</strong> Suguru Weddings retains the copyright to all photographs and videos created. You are granted a personal, non-exclusive license to use the images for personal purposes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Client Usage:</strong> You may share images on social media, print for personal use, and share with family and friends. Commercial use requires written permission.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Suguru Weddings Usage:</strong> We reserve the right to use images from your event for portfolio, marketing, social media, website, competitions, and promotional purposes unless you specifically opt out in writing.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Credit:</strong> When sharing our work, we appreciate credit to Suguru Weddings, though it is not mandatory.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Liability Limitations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Equipment Failure:</strong> While we use professional backup equipment, in the unlikely event of total equipment failure or data loss, our liability is limited to a refund of payments received.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Missed Shots:</strong> We will make every effort to capture all important moments. However, we cannot be held responsible for missing specific shots due to obstructions, lighting conditions, or other unforeseen circumstances.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Third-Party Interference:</strong> We are not liable for disruptions caused by guests, venue staff, or other vendors that prevent us from performing our duties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Client Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide accurate event details, timelines, and contact information</li>
              <li>Inform us of any family dynamics or special situations we should be aware of</li>
              <li>Ensure cooperation from family members and guests for photo sessions</li>
              <li>Obtain necessary permissions from venue management for our access</li>
              <li>Provide meals and breaks for our team during extended coverage</li>
              <li>Make full payment according to the agreed schedule</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Model Release</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By booking our services, you grant Suguru Weddings permission to photograph you and your guests. You release all rights to us for the use of these images for promotional and portfolio purposes. Guests who do not wish to be photographed should inform us on the event day.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Force Majeure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Suguru Weddings is not liable for failure to perform services due to circumstances beyond our control, including but not limited to acts of God, natural disasters, epidemics, government restrictions, war, terrorism, or civil unrest.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Any disputes arising from these terms or our services will first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes will be resolved through arbitration in Hyderabad, Telangana, India, in accordance with Indian law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Suguru Weddings reserves the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Bookings made prior to changes will be governed by the terms in effect at the time of booking.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700"><strong>Suguru Weddings</strong></p>
              <p className="text-gray-700">Email: info@suguruweddings.com</p>
              <p className="text-gray-700">Phone: +91 XXX XXX XXXX</p>
              <p className="text-gray-700">Address: Hyderabad, Telangana, India</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By signing our service contract and making a booking payment, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>

          {/* Back to Home Link */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <Link 
              to="/" 
              className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
