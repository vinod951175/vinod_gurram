import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[70vh] flex items-center">
      <div>
        <p className="text-sky-400 text-sm font-mono mb-2">$ error 404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">page not found</h1>
        <p className="text-slate-400 font-mono text-sm mb-8">
          <span className="text-slate-600">//</span> the requested resource does not exist
        </p>
        <Link href="/" className="px-5 py-2.5 bg-sky-400 text-[#0a0a0a] font-mono font-medium text-sm rounded hover:bg-sky-300 transition duration-200">
          ./go home
        </Link>
      </div>
    </div>
  )
}
