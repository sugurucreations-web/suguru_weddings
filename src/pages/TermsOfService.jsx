import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Service - Suguru Weddings";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header spacing */}
      <div className="h-16"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/" className="text-rose-600 hover:text-rose-700">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Terms of Service</span>
        </div>

        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: February 1, 2026</p>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Suguru Weddings. By accessing our website at www.suguruweddings.com or engaging our photography and videography services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you do not agree with any of these terms, you are prohibited from using or accessing our services. The materials and services contained on this website are protected by applicable copyright and trademark law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Suguru Weddings provides professional photography and videography services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Wedding photography and videography</li>
              <li>Pre-wedding photoshoots</li>
              <li>Destination wedding coverage</li>
              <li>Corporate event photography</li>
              <li>Birthday and celebration photography</li>
              <li>Photo and video editing services</li>
              <li>Album and print production</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Booking and Reservations</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Booking Process</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To book our services, clients must:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Submit a booking inquiry through our website, email, or phone</li>
              <li>Review and sign our service agreement</li>
              <li>Pay the required booking deposit</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Booking Confirmation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A booking is confirmed only upon receipt of:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Signed service agreement</li>
              <li>Non-refundable booking deposit (typically 30-50% of total package cost)</li>
              <li>Complete event details and schedule</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Date Reservation</h3>
            <p className="text-gray-700 leading-relaxed">
              Your event date is reserved exclusively for you once the booking deposit is received. We cannot guarantee date availability without a confirmed booking.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Payment Schedule</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Booking Deposit:</strong> 30-50% of total package cost (non-refundable)</li>
              <li><strong>Balance Payment:</strong> Due 7 days before the event date</li>
              <li><strong>Additional Services:</strong> Payable upon delivery or as agreed</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Payment Methods</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We accept payment through:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Bank transfer / NEFT / RTGS</li>
              <li>UPI payments</li>
              <li>Cash (for deposits only)</li>
              <li>Cheque (subject to clearance)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Late Payments</h3>
            <p className="text-gray-700 leading-relaxed">
              Failure to make the final payment 7 days before the event may result in cancellation of services. We reserve the right to withhold delivery of photos and videos until full payment is received.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cancellation and Refund Policy</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Client Cancellation</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>More than 90 days before event:</strong> 50% refund of booking deposit</li>
              <li><strong>30-90 days before event:</strong> 25% refund of booking deposit</li>
              <li><strong>Less than 30 days before event:</strong> No refund</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Suguru Weddings Cancellation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In the unlikely event that we need to cancel your booking due to unforeseen circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Full refund of all payments made</li>
              <li>Assistance in finding alternative photographers/videographers</li>
              <li>No liability for additional costs incurred</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Postponement</h3>
            <p className="text-gray-700 leading-relaxed">
              If you need to postpone your event, we will make every effort to accommodate the new date subject to availability. The booking deposit will be transferred to the new date. Additional charges may apply if the new date requires different arrangements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Service Delivery</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Deliverables</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As per your selected package, deliverables may include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Edited high-resolution digital images</li>
              <li>Cinematic wedding film/video</li>
              <li>Online gallery access</li>
              <li>Photo albums (physical or digital)</li>
              <li>Prints and enlargements</li>
              <li>All raw/unedited files (if contracted)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Delivery Timeline</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Edited Photos:</strong> 4-8 weeks after the event</li>
              <li><strong>Wedding Film/Video:</strong> 8-12 weeks after the event</li>
              <li><strong>Photo Albums:</strong> 10-14 weeks after approval</li>
              <li><strong>Same-day edits:</strong> If contracted, delivered at event</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Delivery Method</h3>
            <p className="text-gray-700 leading-relaxed">
              Digital files are delivered via secure online gallery, cloud storage link, or USB drive. Physical products are shipped or arranged for pickup as specified in your contract.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Copyright and Usage Rights</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Copyright Ownership</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Suguru Weddings retains full copyright ownership of all photographs and videos created. Clients receive a license to use the images for personal, non-commercial purposes.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Client Usage Rights</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clients may:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Print photos for personal use</li>
              <li>Share on social media (with credit to Suguru Weddings)</li>
              <li>Display in personal spaces</li>
              <li>Create personal albums and keepsakes</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">7.3 Prohibited Uses</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clients may NOT:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Sell or profit from the images</li>
              <li>Claim copyright ownership</li>
              <li>Alter images in a way that misrepresents our work</li>
              <li>Remove watermarks or copyright information</li>
              <li>Use images for commercial purposes without written permission</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">7.4 Portfolio and Marketing Use</h3>
            <p className="text-gray-700 leading-relaxed">
              By engaging our services, clients grant Suguru Weddings permission to use selected images for portfolio, marketing, social media, website, and promotional purposes. If you prefer privacy, please notify us in writing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Client Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clients are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Providing accurate event details (date, time, venue, schedule)</li>
              <li>Coordinating with venue for photographer/videographer access</li>
              <li>Informing us of any venue restrictions or special requirements</li>
              <li>Providing a detailed shot list or must-have photos (if desired)</li>
              <li>Designating a point of contact for the event day</li>
              <li>Ensuring the safety and security of our equipment at the venue</li>
              <li>Arranging meals for photographers/videographers for events over 6 hours</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">9.1 Equipment Failure</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we use professional backup equipment, in the rare event of total equipment failure or data loss beyond our control, our liability is limited to a full refund of fees paid. We are not liable for indirect, consequential, or emotional damages.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">9.2 Missed Shots</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We make every effort to capture all important moments. However, we cannot guarantee every single moment will be photographed, especially if not included in a provided shot list or if circumstances prevent access.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">9.3 Third-Party Interference</h3>
            <p className="text-gray-700 leading-relaxed">
              We are not responsible for missed shots due to interference from guests, other photographers, venue restrictions, or circumstances beyond our control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Force Majeure</h2>
            <p className="text-gray-700 leading-relaxed">
              We are not liable for failure to perform services due to events beyond our reasonable control, including but not limited to: natural disasters, government restrictions, pandemic-related closures, severe weather, accidents, illness, or other emergencies. In such cases, we will work with you to reschedule or provide a full refund.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Model Release</h2>
            <p className="text-gray-700 leading-relaxed">
              By engaging our services, clients and their guests consent to be photographed and videographed. Clients are responsible for informing their guests that photography and videography will take place.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Conduct and Cooperation</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We expect respectful and professional treatment of our team. We reserve the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Refuse service if we encounter abusive, threatening, or unsafe behavior</li>
              <li>Leave the venue if conditions become unsafe</li>
              <li>Terminate services without refund in cases of severe misconduct</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Modifications to Services</h2>
            <p className="text-gray-700 leading-relaxed">
              Any changes to the agreed services must be requested in writing and are subject to availability and additional charges. We cannot guarantee that last-minute changes can be accommodated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In the event of a dispute:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>We encourage direct communication to resolve issues amicably</li>
              <li>If resolution cannot be reached, disputes will be handled through mediation</li>
              <li>Legal disputes are subject to the jurisdiction of courts in Hyderabad, Telangana, India</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service, together with your signed service agreement and any additional written agreements, constitute the entire agreement between you and Suguru Weddings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">Suguru Weddings</p>
              <p className="text-gray-700">Banjara Hills, Hyderabad, Telangana</p>
              <p className="text-gray-700">Phone: +91-8374962192</p>
              <p className="text-gray-700">Email: info@suguruweddings.com</p>
              <p className="text-gray-700">Website: www.suguruweddings.com</p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-rose-50 border-l-4 border-rose-600 p-6 rounded">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Acknowledgment</h3>
              <p className="text-gray-700">
                By booking our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t">
          <Link 
            to="/" 
            className="inline-flex items-center text-rose-600 hover:text-rose-700 font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
