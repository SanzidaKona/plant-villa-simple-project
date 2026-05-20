
export function Footer() {
  return (
    <footer id="main-footer" className="w-full bg-[#f8faf8] border-t border-[#c3c8c2]/50 py-8 px-6 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <span className="font-serif text-[#424843] font-sans text-center md:text-left">
          &copy; 2026 Plant Villa. Botanical Luxury for Every Home. All rights reserved.
        </span>
        <div className="font-sans flex gap-6">
          <a
            id="footer-privacy"
            href="#"
            className="text-[#424843] hover:text-emerald-700 hover:underline transition-colors font-sans uppercase tracking-wider text-xs font-semibold"
          >
            Privacy Policy
          </a>
          <a
            id="footer-terms"
            href="#"
            className="text-[#424843] hover:text-emerald-700 hover:underline transition-colors font-sans uppercase tracking-wider text-xs font-semibold"
          >
            Terms of Service
          </a>
          <a
            id="footer-contact"
            href="#"
            className="text-[#424843] hover:text-emerald-700 hover:underline transition-colors font-sans uppercase tracking-wider text-xs font-semibold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}