import logo from '../assets/logo.webp'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <a href="#/" className="inline-block mb-8">
          <img src={logo} alt="Ethames Business School" className="h-10" />
        </a>
        <h1 className="font-serif text-3xl font-bold text-navy mb-2">Terms of Service</h1>
        <p className="text-sm text-muted mb-8">Last updated: April 10, 2026</p>

        <div className="prose prose-sm max-w-none text-body space-y-6">
          <section>
            <h2 className="font-serif text-lg font-semibold text-navy mb-2">1. About This Website</h2>
            <p>This website is operated by IYRA in strategic collaboration with Ethames Business School (EBS) to provide information about academic programs and facilitate admissions enquiries. By using this website, you agree to these terms.</p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-navy mb-2">2. Enquiry Forms</h2>
            <p>Submitting a form on this website constitutes an enquiry, not a confirmed admission. Our admissions team will contact you to discuss program details, eligibility, and next steps. Submitting a form does not guarantee admission to any program.</p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-navy mb-2">3. Program Information</h2>
            <p>Program details, seat availability, and fee structures displayed on this website are subject to change. The most current information will be provided during your counselling session. All degrees are awarded by the affiliated university as per their regulations.</p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-navy mb-2">4. Intellectual Property</h2>
            <p>All content on this website, including text, images, logos, and design, is the property of IYRA and Ethames Business School or their respective partners. You may not reproduce, distribute, or use this content without written permission.</p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-navy mb-2">5. Third-Party Partners</h2>
            <p>References to Ernst &amp; Young, Harvard Manage Mentor, Coursera, TiE, and other partners reflect active collaborations. Partnership details and scope may evolve. For the most current partnership information, contact our admissions team.</p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-navy mb-2">6. Limitation of Liability</h2>
            <p>This website is provided "as is." We make no warranties about the accuracy or completeness of information. We are not liable for any damages arising from the use of this website.</p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-navy mb-2">7. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Hyderabad, Telangana.</p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-navy mb-2">8. Contact</h2>
            <p>For questions about these terms, contact us at:</p>
            <p className="mt-1">Email: <a href="mailto:info@iyrahub.com" className="text-red hover:underline">info@iyrahub.com</a></p>
            <p>Phone: +91-9703003456</p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <a href="#/" className="text-sm text-red hover:underline">&larr; Back to Home</a>
        </div>
      </div>
    </div>
  )
}
