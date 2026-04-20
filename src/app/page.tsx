import Link from 'next/link'
import Section from '@/components/Section'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center mb-20">
        <div className="w-full max-w-2xl">
          <p className="text-sky-400 text-sm font-mono mb-4">$ whoami</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Vinod Gurram
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-2 max-w-xl font-mono text-sm">
            <span className="text-slate-600">// role:</span> Cloud Security & SOC Analyst · AI/ML Security · Compliance
          </p>
          <p className="text-slate-400 text-sm leading-relaxed mb-3 max-w-xl font-mono">
            <span className="text-slate-600">// spec:</span> threat detection, incident response, security automation
          </p>
          <p className="text-slate-300 text-sm leading-relaxed mb-4 max-w-xl border-l-2 border-sky-400/40 pl-4">
            Identify and exploit system weaknesses, then translate findings into actionable defensive controls. Build SIEM-driven detections, automate remediation workflows, and strengthen security across cloud, network, and endpoint environments. Leverage machine learning–based anomaly detection and scripting to reduce response time and improve overall security posture.
          </p>
          <div className="max-w-xl bg-sky-400/[0.05] border border-sky-400/20 rounded-lg px-4 py-3 mb-8">
            <p className="text-sky-400 text-xs font-mono mb-1">// ai_security_focus.txt</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Actively researching <span className="text-white font-medium">AI/ML security pipelines</span> — threat modeling prompt injection, model poisoning, and adversarial attacks on inference workflows. Open to short-term engagements with teams building LLM-powered products.{' '}
              <Link href="/contact" className="text-sky-400 hover:text-sky-300 transition duration-200 underline underline-offset-2">
                Let's talk.
              </Link>
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-14">
            <Link
              href="/projects"
              className="px-5 py-2.5 bg-sky-400 text-[#0a0a0a] font-mono font-medium text-sm rounded hover:bg-sky-300 transition duration-200"
            >
              ./run projects
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 border border-white/15 text-slate-300 hover:border-white/30 hover:text-white text-sm rounded font-mono transition duration-200"
            >
              ping vinod
            </Link>
            <a
              href="/resume.pdf"
              download
              className="px-5 py-2.5 border border-sky-400/30 text-sky-400 hover:border-sky-400/60 hover:bg-sky-400/[0.05] text-sm rounded font-mono transition duration-200"
            >
              ./download cv
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-sm font-mono">
            <div>
              <p className="text-2xl font-bold text-white">3.8</p>
              <p className="text-slate-500 text-xs mt-0.5">--gpa=4.0</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">3+</p>
              <p className="text-slate-500 text-xs mt-0.5">uptime --years</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">20+</p>
              <p className="text-slate-500 text-xs mt-0.5">htb --solved</p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <Section title="$ cat services.txt">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: 'Threat Detection',
              desc: 'Monitor and analyze security alerts from SIEM tools, correlate logs across cloud and endpoints.',
            },
            {
              title: 'Security Automation',
              desc: 'Build Python-based automation scripts for incident handling and remediation workflows.',
            },
            {
              title: 'Cloud Security',
              desc: 'AWS security monitoring, IAM analysis, container security, and incident response.',
            },
            {
              title: 'Incident Response',
              desc: 'Conduct investigations, root-cause analysis, and implement containment actions.',
            },
            {
              title: 'AI/ML Security',
              desc: 'Securing AI systems by attacking them — prompt injection, model backdoors, training data poisoning, model evasion, command injection in pipelines, supply chain attacks, and adversarial inputs on LLM inference flows.',
            },
            {
              title: 'Compliance & Auditing',
              desc: 'SOC 2, ISO 27001 frameworks — audit trail management, policy enforcement, and compliance reporting.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-white/[0.02] border border-white/[0.07] rounded-lg p-5 hover:border-white/15 transition duration-300">
              <h3 className="text-white font-medium mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Quick Access */}
      <Section title="$ ls -la ./">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/experience', label: './experience', desc: '# work history & professional background' },
            { href: '/projects', label: './projects', desc: '# security labs & detection engineering' },
            { href: '/skills', label: './skills', desc: '# installed packages & expertise' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white/[0.02] border border-white/[0.07] rounded-lg p-5 hover:border-sky-400/30 hover:bg-sky-400/[0.03] transition duration-300"
            >
              <h3 className="text-white font-medium mb-1.5 group-hover:text-sky-400 transition duration-200">{item.label}</h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  )
}
