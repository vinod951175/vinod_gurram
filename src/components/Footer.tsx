import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Contact</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:gurramvinod9898@gmail.com" className="text-slate-400 hover:text-white transition duration-200">
                  gurramvinod9898@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+12015899947" className="text-slate-400 hover:text-white transition duration-200">
                  +1 (201) 589-9947
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/vinod-gurram-575227247/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition duration-200">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Social</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition duration-200">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://medium.com/@vinodgurram50" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition duration-200">
                  Medium
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/vinod-gurram-575227247/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition duration-200">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Navigation</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-slate-400 hover:text-white transition duration-200">Home</Link></li>
              <li><Link href="/projects" className="text-slate-400 hover:text-white transition duration-200">Projects</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition duration-200">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 text-center">
          <p className="text-slate-600 text-sm">&copy; {currentYear} Vinod Gurram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
