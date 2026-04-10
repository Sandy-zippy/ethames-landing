import logo from '../assets/logo.webp'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <a href="#/" className="inline-block mb-8">
          <img src={logo} alt="Ethames Business School" className="h-10" />
        </a>
        <h1 className="font-serif text-3xl font-bold text-navy mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted mb-8">Last updated: April 10, 2026</p>

        <div className="prose prose-sm max-w-none text-body space-y-6">
          <section>
            <h2 className="font-serif text-lg font-semibold text-navy mb-2">1. Information We Collect</h2>
            <p>When you fill out a form on this website, we collect:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Full name</li>
              <li>Phone number</li>
              <li>City</li>
              <li>Program of interest</li>
            </ul>
            <p className="mt-2">We also automatically collect technical data including your IP address, browser type, device information, and pages visited through cookies and analytics tools (Google Analytics).</p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-navy mb-2">2. How We Use Your Information</h2>
            <p>Your information is used to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Contact you regarding admissions enquiries</li>
              <li>Provide information about our programs</li>
              <li>Schedule counselling sessions</li>
              <li>Improve our website and marketing efforts</li>
              <li>Send relevant updates about admissions and events</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-navy mb-2">3. Data Sharing</h2>
            <p>We do not sell your personal information. We may share your data with:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Our admissions and counselling team at IYRA</li>
              <li>CRM and communication tools used for follow-ups</li>
              <li>Analytics providers (Google Analytics) for website improvement</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-navy mb-2">4. Cookies &amp; Tracking</h2>
            <p>This website uses cookies and tracking pixels (including Google Analytics and Meta Pixel) to understand visitor behavior and measure ad effectiveness. You can disable cookies in your browser settings.</p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-navy mb-2">5. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-navy mb-2">6. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data by contacting us at <a href="mailto:info@iyrahub.com" className="text-red hover:underline">info@iyrahub.com</a>.</p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-navy mb-2">7. Contact</h2>
            <p>For privacy-related queries, contact us at:</p>
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
