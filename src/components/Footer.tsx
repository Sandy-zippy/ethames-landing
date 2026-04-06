import logo from '../assets/logo.webp'

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="eTHAMES Business School" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm leading-relaxed">
              Industry-integrated BBA &amp; BCA programs preparing students for
              the careers of tomorrow.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#programs" className="hover:text-white transition-colors">BBA in Marketing</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">BBA in Finance</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">BBA in HR Management</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">BCA in Computer Science</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">BCA in Data Science & AI</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#campus" className="hover:text-white transition-colors">Campus Life</a></li>
              <li><a href="#recognition" className="hover:text-white transition-colors">Accreditations</a></li>
              <li><a href="#apply" className="hover:text-white transition-colors">Apply Now</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>admissions@ethames.ac.in</li>
              <li>+91 XXXXX XXXXX</li>
              <li>eTHAMES Business School Campus</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">&copy; {new Date().getFullYear()} eTHAMES Business School. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
