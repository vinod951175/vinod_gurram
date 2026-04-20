import Section from '@/components/Section'

const expertise = [
  {
    title: 'Security Operations',
    items: [
      'SIEM monitoring & alert correlation (Splunk)',
      'Incident triage & initial investigation',
      'False positive reduction & rule engineering',
      'Incident response & containment workflows',
      'Compliance & audit trail management',
    ],
  },
  {
    title: 'Cloud Security',
    items: [
      'AWS security monitoring & hardening',
      'IAM privilege escalation detection',
      'VPC Flow Logs & CloudTrail analysis',
      'Container security (Docker/Kubernetes)',
      'EKS cluster security & runtime threat detection',
      'WAF & Network Firewall configuration',
    ],
  },
  {
    title: 'Automation & Scripting',
    items: [
      'Python-based automation for incident handling',
      'Log parsing & IOC enrichment',
      'AWS Lambda for automated response',
      'Threat intelligence integration',
      'CI/CD security scanning',
    ],
  },
  {
    title: 'AI/ML Security',
    items: [
      'Prompt injection & jailbreak attacks',
      'Model backdoors & trojan implants',
      'Remote code execution via model serving',
      'Command injection in AI pipelines',
      'Training data & model poisoning',
      'Model evasion & adversarial inputs',
      'Supply chain attacks on ML dependencies',
      'LLM pipeline & inference flow security',
    ],
  },
]

const certifications = [
  {
    title: 'CompTIA Security+',
    desc: 'Industry-recognized certification covering threat management, vulnerability assessment, and incident response.',
  },
  {
    title: 'Certified AI Security Professional (In Progress)',
    desc: 'Advanced certification covering AI/ML security applications, secure system design, and emerging threat vectors.',
  },
  {
    title: 'Hack The Box Contributor',
    desc: 'Solved 20+ vulnerable machine challenges, demonstrating hands-on penetration testing and exploit development skills.',
  },
  {
    title: 'Technical Writer',
    desc: 'Actively publish cybersecurity insights and solutions on Medium, sharing knowledge with the security community.',
  },
]

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-14">
        <p className="text-sky-400 text-sm font-mono mb-2">$ cat about.txt</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">whoami</h1>
        <p className="text-slate-400 max-w-2xl font-mono text-sm">
          <span className="text-slate-600">//</span> cybersecurity professional — threat detection, AWS cloud security, SOC operations, incident response, zero trust architecture, AI/ML security
        </p>
      </div>

      <Section title="$ cat story.txt">
        <div className="bg-white/[0.02] border border-white/[0.07] rounded-lg p-6 mb-6 space-y-4">
          <p className="text-slate-300 text-sm leading-relaxed">
            I believe security is strongest when tested from an attacker's perspective. My journey into cybersecurity started with a passion for understanding how systems break and how to rebuild them stronger.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            During my internship at CKoinect, I supported cloud security operations on AWS infrastructure, gaining hands-on experience in threat detection and incident response at scale. This evolved into a full-time role as a Cloud Security Engineer, where I built automation pipelines to correlate logs across CloudTrail, GuardDuty, and application telemetry — reducing mean time to triage by 30%. I operated within a SOC environment leveraging CrowdStrike for endpoint detection and response, enforced least-privilege IAM policies to minimize the blast radius of potential compromises, hardened EKS cluster security posture, detected and contained data exfiltration attempts, and drove zero trust adoption across cloud workloads.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            As a Graduate Assistant at Montclair State University, I designed AI-driven cybersecurity labs for 50+ students, integrating machine learning models with network datasets. This reinforced my belief that the future of cybersecurity lies in automated threat detection and intelligent response systems.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            Now as a Security Analyst at DreamlineAI, I continue to break down security challenges by correlating alerts, investigating anomalies, and translating offensive findings into defensive controls.
          </p>
        </div>
      </Section>

      <Section title="$ man --expertise">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {expertise.map((area) => (
            <div key={area.title} className="bg-white/[0.02] border border-white/[0.07] rounded-lg p-6 hover:border-white/15 transition duration-300">
              <h3 className="text-white font-semibold mb-4">{area.title}</h3>
              <ul className="space-y-2">
                {area.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                    <span className="text-sky-400 mt-0.5 shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="$ ls ./certs/">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <div key={cert.title} className="bg-white/[0.02] border border-white/[0.07] rounded-lg p-5 hover:border-white/15 transition duration-300">
              <h3 className="text-white font-medium mb-2 text-sm">{cert.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{cert.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
