import Section from '@/components/Section'

const experiences = [
  {
    company: 'DreamlineAI',
    location: 'Sebring, Florida, USA',
    position: 'Security Analyst',
    duration: 'Mar 2026 – Present',
    highlights: [
      'Monitor and analyze 150–250 daily security alerts across Splunk SIEM, AWS CloudTrail, and endpoint telemetry — reducing false-positive escalation rate by 28% through engineered correlation rules',
      'Investigate security events across cloud and application layers including API abuse, suspicious IAM activity, and anomalous login patterns — improving detection accuracy by 32%',
      'Built Python automation to correlate CloudTrail, VPC Flow Logs, and application logs, reducing Mean Time to Triage by 30%',
      'Execute incident containment workflows including disabling compromised IAM keys, isolating EC2 instances, blocking malicious IPs via WAF, and applying zero trust network segmentation — reducing average containment time by 25%',
      'Driving remediation of CI/CD pipeline vulnerabilities from Snyk and Nessus scanner outputs — improving critical findings closure rate by 35% within SLA timelines',
      'Lead weekly MITRE ATT&CK-aligned threat reviews mapping observed attack patterns to known adversary techniques for improved detection coverage',
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
      'Engineered and maintained cloud security monitoring across a multi-account AWS environment using Splunk, AWS CloudTrail, CrowdStrike Falcon, and GuardDuty — ingesting and correlating 150–250 daily alerts to detect unauthorized API calls, privilege escalations, and lateral movement',
      'Designed and enforced least-privilege IAM policies and RBAC controls across AWS accounts and EKS clusters — reducing over-permissioned roles by 40% and preventing unauthorized cross-account resource access',
      'Detected and responded to data exfiltration attempts by monitoring S3 bucket access patterns, VPC Flow Logs, and GuardDuty findings — blocked exfil paths via bucket policies and SCPs, improving detection accuracy by 32%',
      'Built Python automation pipelines to ingest and correlate CloudTrail events, CrowdStrike EDR telemetry, VPC Flow Logs, and EKS audit logs into Splunk dashboards — reducing mean time to triage by 30% and enabling real-time container threat visibility',
      'Executed containment workflows for compromised AWS workloads: revoking IAM credentials, quarantining EC2 and EKS pods via network policy enforcement, blocking malicious IPs via WAF, and rotating exposed secrets in AWS Secrets Manager — reducing incident containment time by 25%',
      'Hardened EKS cluster security posture by implementing Pod Security Admission policies, namespace-scoped RBAC roles, audit logging, and Falco for runtime threat detection across containerized workloads',
      'Engineered 15+ custom Splunk correlation rules targeting IAM privilege escalation, S3 exfiltration, and lateral movement — cutting false-positive escalation rate by 28%',
      'Produced MITRE ATT&CK-mapped incident reports used to drive quarterly detection coverage reviews and improve SOC rule engineering',
    ],
  },
  {
    company: 'CKoinect',
    location: 'Hyderabad, India',
    position: 'Cloud Security Intern',
    duration: 'Apr 2022 – Nov 2022',
    highlights: [
      'Deployed and secured containerized workloads on Amazon EKS — configuring namespace-level RBAC, network policies, and Pod Security Standards to enforce least-privilege container execution and restrict inter-pod communication',
      'Implemented IAM policy guardrails using AWS SCPs and Permission Boundaries to prevent privilege escalation and unauthorized resource access across accounts',
      'Monitored for data exfiltration indicators including unusual S3 GetObject patterns, cross-region data transfers, and anomalous CloudTrail API call volumes — correlating findings with CrowdStrike Falcon EDR telemetry',
      'Monitored AWS network security controls including Network Firewall, WAF, and Security Groups — forwarded VPC Flow Logs and DNS query logs to Splunk, identifying and blocking C2 beacon traffic and port scan activity across cloud VPCs',
      'Collaborated with DevOps teams to embed security into AWS architecture: VPC segmentation, private EKS endpoint configurations, ECR image scanning, and Terraform-based enforcement of IAM and security group baselines',
      'Automated log parsing, IOC enrichment, and alert triage using Python — reducing manual investigation effort by 20+ hours per month',
      'Authored 15+ SOPs and runbooks for EKS security incidents, IAM misconfigurations, and container escape scenarios — standardizing response procedures and reducing MTTR for recurring cloud security events',
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
        <p className="text-slate-400 font-mono text-sm"><span className="text-slate-600">//</span> 3+ years — cloud security, IAM security, EKS hardening, CI/CD security, threat detection, incident response</p>
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
