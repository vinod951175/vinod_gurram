import Section from '@/components/Section'

const contactInfo = [
  { label: 'Email', value: 'gurramvinod9898@gmail.com', href: 'mailto:gurramvinod9898@gmail.com' },
  { label: 'Phone', value: '+1 (201) 589-9947', href: 'tel:+12015899947' },
  { label: 'Location', value: 'Edison, NJ 08817, USA', href: null },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vinod-gurram-575227247/' },
  { label: 'Medium', href: 'https://medium.com/@vinodgurram50' },
  { label: 'GitHub', href: 'https://github.com/vinod951175' },
  { label: 'Hack The Box', href: null },
]

const preferredChannels = [
  { label: 'Email', desc: 'Best for detailed inquiries and project discussions' },
  { label: 'LinkedIn', desc: 'Best for professional networking and job opportunities' },
  { label: 'Phone', desc: 'Available for interviews and important discussions' },
]

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-14">
        <p className="text-sky-400 text-sm font-mono mb-2">$ ssh vinod@contact</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">ping vinod</h1>
        <p className="text-slate-400 font-mono text-sm"><span className="text-slate-600">//</span> connect for cybersecurity, cloud security, or incident response opportunities</p>
      </div>

      <Section title="$ cat contact.txt">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactInfo.map((item) => (
            <div key={item.label} className="bg-white/[0.02] border border-white/[0.07] rounded-lg p-4">
              <p className="text-xs text-slate-500 mb-1">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-slate-200 text-sm hover:text-white transition duration-200">
                  {item.value}
                </a>
              ) : (
                <p className="text-slate-200 text-sm">{item.value}</p>
              )}
            </div>
          ))}

          <div className="bg-white/[0.02] border border-white/[0.07] rounded-lg p-4 md:col-span-2">
            <p className="text-xs text-slate-500 mb-3">Online Profiles</p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-sky-400 text-sm transition duration-200"
                  >
                    <span className="text-sky-400">›</span>
                    {link.label}
                  </a>
                ) : (
                  <span key={link.label} className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="text-sky-400">›</span>
                    {link.label}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </Section>

      <Section title="$ man contact">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {preferredChannels.map((ch) => (
            <div key={ch.label} className="bg-white/[0.02] border border-white/[0.07] rounded-lg p-4">
              <h3 className="text-white text-sm font-medium mb-1">{ch.label}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{ch.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
