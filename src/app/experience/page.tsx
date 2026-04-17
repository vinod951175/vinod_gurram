import Section from '@/components/Section'

const experiences = [
  {
    company: 'DreamlineAI',
    location: 'Sebring, Florida, USA',
    position: 'Security Analyst',
    duration: 'Mar 2026 – Present',
    highlights: [
      'Monitored and analyzed 150–250 daily security alerts from Splunk SIEM, AWS CloudTrail, and endpoint logs',
      'Reduced false-positive escalation rate by 28% through improved correlation rules',
      'Improved detection accuracy by 32% through investigation of API abuse and anomalous login patterns',
      'Built Python-based automation scripts reducing Mean Time to Triage by 30%',
      'Assisted incident response by supporting containment actions, reducing containment time by 25%',
      'Conducted vulnerability validation from scanner outputs (Snyk/Nessus), improving closure rate by 35%',
      'Mapped attack patterns to MITRE ATT&CK techniques in weekly threat review meetings',
    ],
  },
  {
    company: 'Montclair State University',
    location: 'Montclair, NJ, USA',
    position: 'Graduate Assistant',
    duration: 'Jan 2025 – Dec 2025',
    highlights: [
      'Designed and delivered AI-driven cybersecurity labs for 50+ students',
      'Integrated ML models with network datasets, improving lab completion rates by 30%',
      'Guided students in building ML models using PyTorch, TensorFlow, and scikit-learn',
      'Achieved 90%+ accuracy in anomaly detection experiments on curated network datasets',
      'Taught IP networking concepts and system-level troubleshooting in lab environment',
    ],
  },
  {
    company: 'CKoinect',
    location: 'Hyderabad, India',
    position: 'Cloud Security Engineer',
    duration: 'Nov 2022 – Nov 2023',
    highlights: [
      'Monitored SIEM dashboards and cloud security logs (Splunk, AWS CloudTrail, GuardDuty)',
      'Analyzed 150–250 daily alerts, prioritizing high-risk events for escalation',
      'Reduced false-positive escalation by 28% through improved correlation logic',
      'Built Python automation scripts reducing mean time to triage by 30%',
      'Assisted containment actions including WAF blocking and IAM credential management',
      'Validated scanner outputs and tracked remediation with engineering teams',
      'Mapped incidents to MITRE ATT&CK techniques for improved detection coverage',
    ],
  },
  {
    company: 'CKoinect',
    location: 'Hyderabad, India',
    position: 'Cloud Security Intern',
    duration: 'Apr 2022 – Nov 2022',
    highlights: [
      'Supported deployment and monitoring of containerized workloads (Docker, Kubernetes/EKS)',
      'Resolved 15+ runtime and configuration issues affecting application stability',
      'Led incident response and root-cause analysis by correlating EDR/XDR telemetry with AWS logs',
      'Utilized Python scripting for log parsing, IOC enrichment, and alert handling',
      'Reduced manual investigation effort by 20+ hours per month',
      'Created 15+ SOPs, incident reports, and audit-ready compliance artifacts',
    ],
  },
]

const metrics = [
  { value: '28%', label: 'False-positive reduction' },
  { value: '32%', label: 'Detection accuracy improvement' },
  { value: '30%', label: 'MTTR reduction' },
  { value: '25%', label: 'Faster containment' },
]

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-14">
        <p className="text-sky-400 text-sm font-mono mb-2">$ git log --career</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">experience.log</h1>
        <p className="text-slate-400 font-mono text-sm"><span className="text-slate-600">//</span> 2+ years — cloud security, threat detection, incident response</p>
      </div>

      <Section title="$ git log --oneline --all">
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/[0.02] border border-white/[0.07] rounded-lg p-6 hover:border-white/15 transition duration-300">
              <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                <div>
                  <h3 className="text-white font-semibold">{exp.position}</h3>
                  <p className="text-slate-300 text-sm mt-0.5">{exp.company}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{exp.location}</p>
                </div>
                <span className="text-slate-500 text-xs bg-white/[0.05] border border-white/[0.07] px-3 py-1 rounded-full whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
                    <span className="text-sky-400 mt-0.5 shrink-0">›</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="$ grep -c impact results.log">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-white/[0.02] border border-white/[0.07] rounded-lg p-5 text-center">
              <p className="text-2xl font-bold text-sky-400 mb-1">{m.value}</p>
              <p className="text-slate-500 text-xs">{m.label}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
