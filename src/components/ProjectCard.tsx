interface ProjectCardProps {
  title: string
  description: string
  tools: string[]
  problem: string
  outcome: string
  link?: string
}

export default function ProjectCard({
  title,
  description,
  tools,
  problem,
  outcome,
  link,
}: ProjectCardProps) {
  return (
    <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6 hover:border-white/20 hover:bg-white/[0.04] transition duration-300">
      <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-5 leading-relaxed">{description}</p>

      <div className="space-y-3 mb-5">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Problem</p>
          <p className="text-slate-300 text-sm leading-relaxed">{problem}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Outcome</p>
          <p className="text-slate-300 text-sm leading-relaxed">{outcome}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Tools</p>
        <div className="flex flex-wrap gap-1.5">
          {tools.map((tool) => (
            <span
              key={tool}
              className="bg-sky-400/10 text-sky-300 text-xs px-2 py-0.5 rounded border border-sky-400/20"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 text-sm transition duration-200"
        >
          View Project →
        </a>
      )}
    </div>
  )
}
