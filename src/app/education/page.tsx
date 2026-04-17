import Section from '@/components/Section'

const msCourses = [
  ['Cloud Security', 'Advanced Machine Learning'],
  ['Cybersecurity Capstone', 'Penetration Testing'],
  ['Incident Response & Forensics', 'Vulnerability Assessment'],
  ['Cryptography', 'Security Architecture'],
  ['Network Security', 'Compliance & Auditing'],
]

const bsCourses = [
  ['Data Structures & Algorithms', 'Software Engineering'],
  ['Operating Systems', 'Security Fundamentals'],
  ['Database Management Systems', 'Discrete Mathematics'],
  ['Network Protocols', 'Web Development'],
  ['Computer Architecture', 'Cloud Computing Basics'],
]

export default function Education() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-14">
        <p className="text-sky-400 text-sm font-mono mb-2">$ cat credentials.txt</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">education.log</h1>
        <p className="text-slate-400 font-mono text-sm"><span className="text-slate-600">//</span> advanced credentials in cybersecurity — cs foundation</p>
      </div>

      <Section title="$ ls ./degrees/">
        <div className="space-y-4">
          {/* Masters */}
          <div className="bg-white/[0.02] border border-white/[0.07] rounded-lg p-6 hover:border-white/15 transition duration-300">
            <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
              <div>
                <h3 className="text-white font-semibold">Master of Science in Cybersecurity</h3>
                <p className="text-slate-300 text-sm mt-0.5">Montclair State University</p>
                <p className="text-slate-500 text-xs mt-0.5">Montclair, NJ</p>
              </div>
              <div className="text-right">
                <span className="text-slate-500 text-xs bg-white/[0.05] border border-white/[0.07] px-3 py-1 rounded-full">
                  Jan 2024 – Dec 2025
                </span>
                <p className="text-sky-400 text-sm font-medium mt-2">GPA: 3.8 / 4.0</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Relevant Coursework</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
                {msCourses.map(([left, right]) => (
                  <div key={left} className="contents">
                    <p className="text-slate-300 text-sm">{left}</p>
                    <p className="text-slate-300 text-sm">{right}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bachelors */}
          <div className="bg-white/[0.02] border border-white/[0.07] rounded-lg p-6 hover:border-white/15 transition duration-300">
            <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
              <div>
                <h3 className="text-white font-semibold">Bachelor of Science in Computer Science</h3>
                <p className="text-slate-300 text-sm mt-0.5">Malla Reddy College of Engineering and Technology</p>
                <p className="text-slate-500 text-xs mt-0.5">Hyderabad, India</p>
              </div>
              <div className="text-right">
                <span className="text-slate-500 text-xs bg-white/[0.05] border border-white/[0.07] px-3 py-1 rounded-full">
                  Jun 2019 – May 2023
                </span>
                <p className="text-sky-400 text-sm font-medium mt-2">GPA: 3.1 / 4.0</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Core Coursework</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
                {bsCourses.map(([left, right]) => (
                  <div key={left} className="contents">
                    <p className="text-slate-300 text-sm">{left}</p>
                    <p className="text-slate-300 text-sm">{right}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="$ ls ./certs/">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/[0.02] border border-white/[0.07] rounded-lg p-5 hover:border-white/15 transition duration-300">
            <h3 className="text-white font-medium mb-1">CompTIA Security+</h3>
            <p className="text-sky-400 text-xs mb-2">Certified</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Comprehensive coverage of threat management, vulnerability assessment, cryptography, and incident response.
            </p>
          </div>
          <div className="bg-white/[0.02] border border-white/[0.07] rounded-lg p-5 hover:border-white/15 transition duration-300">
            <h3 className="text-white font-medium mb-1">Certified AI Security Professional</h3>
            <p className="text-slate-500 text-xs mb-2">In Progress</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              AI/ML security applications, secure system design, data privacy, and emerging threat vectors.
            </p>
          </div>
        </div>
      </Section>

      <Section title="$ tail -f learning.log">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/[0.02] border border-white/[0.07] rounded-lg p-5 hover:border-white/15 transition duration-300">
            <h3 className="text-white font-medium mb-3">Academic Roles</h3>
            <div className="space-y-3">
              <div>
                <p className="text-slate-200 text-sm font-medium">Graduate Assistant — Montclair State University</p>
                <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                  Designed AI-driven cybersecurity labs and mentored 50+ students in ML-based threat detection.
                </p>
              </div>
              <div>
                <p className="text-slate-200 text-sm font-medium">Technical Mentor — Peer Collaboration</p>
                <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                  Guided peers in cloud security, incident response, and security tool implementation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/[0.07] rounded-lg p-5 hover:border-white/15 transition duration-300">
            <h3 className="text-white font-medium mb-3">Active Learning</h3>
            <div className="space-y-3">
              <div>
                <p className="text-slate-200 text-sm font-medium">Hack The Box</p>
                <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                  Solved 20+ vulnerable machines covering exploitation, privilege escalation, and persistence.
                </p>
              </div>
              <div>
                <p className="text-slate-200 text-sm font-medium">CTF Competitions</p>
                <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                  Active participant in Capture The Flag challenges for exploit development and vulnerability analysis.
                </p>
              </div>
              <div>
                <p className="text-slate-200 text-sm font-medium">Technical Writing on Medium</p>
                <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                  Publishing cybersecurity insights, tool walkthroughs, and technical solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
