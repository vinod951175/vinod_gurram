import Section from '@/components/Section'
import SkillTag from '@/components/SkillTag'

const specializations = [
  {
    title: 'Cloud Computing',
    items: [
      'AWS Security Architecture',
      'Cloud Infrastructure Hardening',
      'Container Security (K8s)',
      'Serverless Security',
      'Zero Trust Architecture',
      'AI Security Policies',
      'RBAC vs ABAC',
      'SIEM Integration',
    ],
  },
  {
    title: 'Network & Security',
    items: [
      'Network Protocol Analysis',
      'IPS/IDS Configuration',
      'Firewall & Palo Alto Networks',
      'VPN & Encryption',
      'Network Segmentation & VLANs',
      'Data Protection Policies',
    ],
  },
  {
    title: 'AI/ML Security',
    items: [
      'Prompt Injection',
      'Model Inversion Attacks',
      'Supply Chain Attacks',
      'Model & Data Poisoning',
      'Command Injection',
      'MCP Protocol Server Security',
      'Model Backdoors',
      'AI Hallucination Exploits',
    ],
  },
]

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-14">
        <p className="text-sky-400 text-sm font-mono mb-2">$ apt list --installed</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">~/.skills</h1>
        <p className="text-slate-400 font-mono text-sm"><span className="text-slate-600">//</span> technical toolkit — security engineering & research</p>
      </div>

      <Section title="$ cat specializations.txt">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {specializations.map((spec) => (
            <div key={spec.title} className="bg-white/[0.02] border border-white/[0.07] rounded-lg p-6 hover:border-white/15 transition duration-300">
              <h3 className="text-white font-semibold mb-4">{spec.title}</h3>
              <ul className="space-y-2">
                {spec.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="text-sky-400 text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <div>
          <Section title="[ security_ops ]">
            <div className="flex flex-wrap">
              <SkillTag name="Splunk SIEM" level="expert" />
              <SkillTag name="Alert Correlation" level="expert" />
              <SkillTag name="Incident Triage" level="expert" />
              <SkillTag name="False Positive Reduction" level="expert" />
              <SkillTag name="Incident Response" level="expert" />
              <SkillTag name="ELK Stack" level="advanced" />
              <SkillTag name="Threat Intelligence" level="advanced" />
              <SkillTag name="MITRE ATT&CK" level="expert" />
              <SkillTag name="SOC 2 Compliance" level="advanced" />
              <SkillTag name="ISO 27001" level="intermediate" />
            </div>
          </Section>

          <Section title="[ cloud_sec ]">
            <div className="flex flex-wrap">
              <SkillTag name="AWS Security" level="expert" />
              <SkillTag name="CloudTrail Monitoring" level="expert" />
              <SkillTag name="GuardDuty" level="expert" />
              <SkillTag name="IAM Analysis" level="expert" />
              <SkillTag name="VPC Flow Logs" level="expert" />
              <SkillTag name="WAF Configuration" level="advanced" />
              <SkillTag name="Network Firewall" level="advanced" />
              <SkillTag name="EC2 Security" level="expert" />
              <SkillTag name="Lambda" level="advanced" />
              <SkillTag name="S3 Security" level="advanced" />
              <SkillTag name="Azure Security" level="intermediate" />
            </div>
          </Section>

          <Section title="[ devops ]">
            <div className="flex flex-wrap">
              <SkillTag name="Docker Security" level="advanced" />
              <SkillTag name="Kubernetes (EKS)" level="advanced" />
              <SkillTag name="Container Vulnerability Scanning" level="expert" />
              <SkillTag name="CI/CD Security" level="advanced" />
              <SkillTag name="Terraform" level="advanced" />
              <SkillTag name="Infrastructure as Code Security" level="advanced" />
              <SkillTag name="Jenkins" level="intermediate" />
            </div>
          </Section>
        </div>

        <div>
          <Section title="[ network ]">
            <div className="flex flex-wrap">
              <SkillTag name="EDR/XDR" level="expert" />
              <SkillTag name="Nessus" level="advanced" />
              <SkillTag name="Vulnerability Assessment" level="expert" />
              <SkillTag name="Snyk" level="advanced" />
              <SkillTag name="IPS/IDS" level="advanced" />
              <SkillTag name="Network Segmentation" level="advanced" />
              <SkillTag name="TCP/IP" level="expert" />
              <SkillTag name="Active Directory" level="intermediate" />
              <SkillTag name="Metasploit" level="intermediate" />
            </div>
          </Section>

          <Section title="[ languages ]">
            <div className="flex flex-wrap">
              <SkillTag name="Python" level="expert" />
              <SkillTag name="Bash" level="expert" />
              <SkillTag name="PowerShell" level="advanced" />
              <SkillTag name="JavaScript" level="advanced" />
              <SkillTag name="Go" level="intermediate" />
              <SkillTag name="C" level="intermediate" />
              <SkillTag name="C++" level="intermediate" />
              <SkillTag name="Java" level="intermediate" />
            </div>
          </Section>

          <Section title="[ ai_ml_security ]">
            <div className="flex flex-wrap">
              <SkillTag name="PyTorch" level="advanced" />
              <SkillTag name="TensorFlow" level="advanced" />
              <SkillTag name="Scikit-Learn" level="expert" />
              <SkillTag name="XGBoost" level="expert" />
              <SkillTag name="Random Forest" level="expert" />
              <SkillTag name="Anomaly Detection" level="expert" />
              <SkillTag name="Pandas" level="advanced" />
              <SkillTag name="NumPy" level="advanced" />
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
