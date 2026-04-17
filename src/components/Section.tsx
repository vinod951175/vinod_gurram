import { ReactNode } from 'react'

interface SectionProps {
  title: string
  children: ReactNode
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-sm font-mono text-sky-400 tracking-wide">{title}</h2>
        <div className="flex-1 h-px bg-white/[0.06]" />
      </div>
      {children}
    </section>
  )
}
