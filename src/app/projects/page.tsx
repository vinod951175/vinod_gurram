import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'AWS Cloud Security Monitoring Dashboard with Real-Time Threat Detection',
    description:
      'Comprehensive security monitoring solution integrating AWS services with SIEM tools for proactive threat detection across multi-account environments.',
    problem:
      'Organizations need real-time visibility into security events across cloud infrastructure while detecting unauthorized API calls and anomalous network traffic at scale.',
    tools: ['AWS CloudTrail', 'GuardDuty', 'Splunk/ELK', 'Prometheus', 'Grafana', 'Lambda', 'Kubernetes'],
    outcome:
      'Deployed production-grade monitoring system that reduced incident detection time by 40% and automated remediation workflows for IAM privilege escalations.',
  },
  {
    title: 'Mitigation of IoT DDoS Attacks Using Machine Learning',
    description:
      'High-accuracy ML-driven system to detect and mitigate DDoS attacks on IoT devices with real-time attack monitoring dashboard.',
    problem:
      'IoT devices suffer from weak authentication protocols and are frequently targeted by DDoS attackers. Manual detection methods are too slow for resource-constrained devices.',
    tools: ['Python', 'XGBoost', 'Random Forest', 'MLP', 'Flask', 'React.js', 'Raspberry Pi', 'Socket.IO'],
    outcome:
      'Achieved 98% accuracy in attack detection using ensemble ML models trained on 60+ DDoS attack types. F1-scores above 97% on imbalanced datasets.',
  },
  {
    title: 'Secure File Sharing Application with AES Encryption',
    description:
      'Centralized file-sharing platform with end-to-end encryption, key-based authentication, and comprehensive audit logging.',
    problem:
      'Organizations need secure file sharing with cryptographic protection, preventing unauthorized access while maintaining audit trails for compliance.',
    tools: ['AES-256', 'PBKDF2', 'HTTPS', 'HMAC', 'Role-Based Access Control'],
    outcome:
      'Implemented end-to-end encryption reducing data breach risk by 90%. HMAC-based integrity verification and audit logging met SOC 2 compliance requirements.',
  },
]

const labs = [
  {
    title: 'Hack The Box',
    desc: 'Actively solving vulnerable machine challenges to sharpen penetration testing, privilege escalation, and exploit development skills.',
    stat: '20+ Machines Solved',
  },
  {
    title: 'CTF Challenges',
    desc: 'Active participant in Capture The Flag competitions to refine exploit development and vulnerability analysis skills.',
    stat: 'Ongoing Participation',
  },
  {
    title: 'Technical Writing',
    desc: 'Write technical Medium blogs sharing insights on cybersecurity, threat detection, and cloud security.',
    link: { href: 'https://medium.com/@vinodgurram50', label: 'Read on Medium →' },
  },
  {
    title: 'ML Security Research',
    desc: 'Exploring machine learning applications in cybersecurity, including anomaly detection and automated threat analysis.',
    stat: 'PyTorch · TensorFlow · Scikit-Learn',
  },
]

const techStack = [
  {
    title: 'Cloud & Infrastructure',
    items: ['AWS (CloudTrail, GuardDuty, EKS, Lambda)', 'Docker & Kubernetes', 'Terraform', 'Jenkins CI/CD'],
  },
  {
    title: 'Security Tools',
    items: ['Splunk SIEM', 'AWS WAF & Network Firewall', 'Nessus & Snyk', 'EDR/XDR Tools'],
  },
  {
    title: 'Programming & ML',
    items: ['Python (automation & ML)', 'ML Frameworks (PyTorch, TensorFlow)', 'JavaScript/React', 'Bash & PowerShell'],
  },
]

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-14">
        <p className="text-sky-400 text-sm font-mono mb-2">$ ls -la ./projects/</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">projects/</h1>
        <p className="text-slate-400 font-mono text-sm"><span className="text-slate-600">//</span> hands-on security implementations — threat detection, automation, cloud sec</p>
      </div>

      <Section title="$ find . -name '*.project' -type f">
        <div className="space-y-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>

      <Section title="$ tail -f learning.log">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {labs.map((lab) => (
            <div key={lab.title} className="bg-white/[0.02] border border-white/[0.07] rounded-lg p-5 hover:border-white/15 transition duration-300">
              <h3 className="text-white font-medium mb-2">{lab.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">{lab.desc}</p>
              {lab.stat && <p className="text-slate-500 text-xs">{lab.stat}</p>}
              {lab.link && (
                <a
                  href={lab.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 text-sm transition duration-200"
                >
                  {lab.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="$ pip list --installed">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {techStack.map((stack) => (
            <div key={stack.title} className="bg-white/[0.02] border border-white/[0.07] rounded-lg p-5 hover:border-white/15 transition duration-300">
              <h3 className="text-white font-medium mb-3">{stack.title}</h3>
              <ul className="space-y-2">
                {stack.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                    <span className="text-sky-400 shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
