import { CheckCircle2 } from 'lucide-react'

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-navy mb-4">
          Application Received!
        </h1>
        <p className="text-body text-lg mb-2">
          Thank you for your interest in Ethames Business School.
        </p>
        <p className="text-body mb-8">
          Our admissions counsellor will call you within 24 hours to discuss your program and next steps.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/919703003456?text=Hi%2C%20I%20just%20submitted%20my%20application%20on%20the%20Ethames%20website.%20Looking%20forward%20to%20hearing%20from%20the%20admissions%20team."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-medium text-sm cursor-pointer"
          >
            Chat on WhatsApp
          </a>
          <button
            onClick={() => window.location.hash = '/'}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-navy text-white font-medium text-sm cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}
