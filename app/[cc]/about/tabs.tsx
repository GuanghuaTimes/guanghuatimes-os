'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import CompanyOverviewSection from './company-overview/section'
import TechnicalAdvantagesSection from './technical-advantages/section'
import IntellectualPropertySection from './intellectual-property/section'
import CollaborationProjectsSection from './collaboration-projects/section'
import DemonstrationShowcaseSection from './demonstration-showcase/section'

export default function AboutTabs({ cc = 'cn' }: { cc?: 'cn' | 'en' }) {
  type Key = 'overview' | 'advantages' | 'ip' | 'projects' | 'showcase'
  const tabs = useMemo(
    () => [
      { key: 'overview' as Key, cn: '公司概况', en: 'Company Overview', Component: CompanyOverviewSection },
      { key: 'advantages' as Key, cn: '技术优势', en: 'Technical Advantages', Component: TechnicalAdvantagesSection },
      { key: 'ip' as Key, cn: '知识产权', en: 'Intellectual Property', Component: IntellectualPropertySection },
      { key: 'projects' as Key, cn: '合作项目', en: 'Collaboration Projects', Component: CollaborationProjectsSection },
      { key: 'showcase' as Key, cn: '示范展示', en: 'Demonstration & Showcase', Component: DemonstrationShowcaseSection },
    ],
    []
  )

  const [active, setActive] = useState<Key>('overview')
  const ActiveComp = tabs.find(t => t.key === active)?.Component ?? CompanyOverviewSection

  // animated underline indicator
  const containerRef = useRef<HTMLDivElement | null>(null)
  const btnRefs = useRef<Record<Key, HTMLButtonElement | null>>({
    overview: null,
    advantages: null,
    ip: null,
    projects: null,
    showcase: null,
  })
  const [indicator, setIndicator] = useState<{ left: number; width: number }>({ left: 0, width: 0 })

  const recalcIndicator = () => {
    const c = containerRef.current
    const b = btnRefs.current[active]
    if (!c || !b) return
    const cRect = c.getBoundingClientRect()
    const bRect = b.getBoundingClientRect()
    setIndicator({ left: bRect.left - cRect.left, width: bRect.width })
  }
  useEffect(() => {
    recalcIndicator()
    // ensure active tab visible
    btnRefs.current[active]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [active])
  useEffect(() => {
    const onResize = () => recalcIndicator()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // sync with URL hash (deep-linkable tabs)
  useEffect(() => {
    const map: Record<string, Key> = {
      '#overview': 'overview',
      '#advantages': 'advantages',
      '#ip': 'ip',
      '#projects': 'projects',
      '#showcase': 'showcase',
    }
    const applyFromHash = () => {
      const k = map[window.location.hash]
      if (k) setActive(k)
    }
    applyFromHash()
    window.addEventListener('hashchange', applyFromHash)
    return () => window.removeEventListener('hashchange', applyFromHash)
  }, [])
  useEffect(() => {
    const map: Record<Key, string> = {
      overview: '#overview',
      advantages: '#advantages',
      ip: '#ip',
      projects: '#projects',
      showcase: '#showcase',
    }
    const hash = map[active]
    if (hash) {
      history.replaceState(null, '', hash)
    }
  }, [active])

  // fade/slide animation for panel
  const [enter, setEnter] = useState(false)
  useEffect(() => {
    setEnter(false)
    const id = requestAnimationFrame(() => setEnter(true))
    return () => cancelAnimationFrame(id)
  }, [active])

  return (
    <section className="container my-8">
      <div role="tablist" aria-label="About Tabs" className="sticky top-16 z-10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div ref={containerRef} className="relative flex gap-2 overflow-x-auto px-2 pb-3 border-b border-border">
          <span
            className="absolute bottom-0 h-[2px] bg-primary transition-all duration-300"
            style={{ left: indicator.left, width: indicator.width }}
          />
          {tabs.map((t) => {
            const isActive = t.key === active
            return (
              <button
                key={t.key}
                ref={(el) => (btnRefs.current[t.key] = el)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${t.key}`}
                tabIndex={isActive ? 0 : -1}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    e.preventDefault()
                    const idx = tabs.findIndex(x => x.key === active)
                    const nextIdx = e.key === 'ArrowRight' ? (idx + 1) % tabs.length : (idx - 1 + tabs.length) % tabs.length
                    setActive(tabs[nextIdx].key)
                  }
                }}
                className={`relative px-4 py-2 rounded-full text-sm md:text-base transition-colors whitespace-nowrap border
                  ${isActive ? 'bg-primary text-primary-foreground border-primary shadow-sm' : 'bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted border-transparent'}`}
                onClick={() => setActive(t.key)}
              >
                {cc === 'cn' ? t.cn : t.en}
              </button>
            )
          })}
        </div>
      </div>

      <div
        id={`panel-${active}`}
        role="tabpanel"
        aria-labelledby={active}
        className={`pt-6 transition-all duration-300 ease-out ${enter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
      >
        <div className="rounded-xl border bg-card/50 p-6 md:p-8 shadow-sm">
          <ActiveComp cc={cc} />
        </div>
      </div>
    </section>
  )
}
