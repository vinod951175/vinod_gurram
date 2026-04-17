interface SkillTagProps {
  name: string
  level?: 'expert' | 'advanced' | 'intermediate'
}

export default function SkillTag({ name, level = 'expert' }: SkillTagProps) {
  const styles = {
    expert: 'bg-sky-400/10 text-sky-300 border-sky-400/25',
    advanced: 'bg-white/[0.05] text-slate-200 border-white/15',
    intermediate: 'bg-white/[0.02] text-slate-400 border-white/[0.08]',
  }

  return (
    <span className={`${styles[level]} border text-xs px-2.5 py-1 rounded inline-block mb-1.5 mr-1.5`}>
      {name}
    </span>
  )
}
