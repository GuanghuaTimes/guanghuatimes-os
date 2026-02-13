'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
import CompanyOverviewSection from './company-overview/section'
import TechnicalAdvantagesSection from './technical-advantages/section'
import IntellectualPropertySection from './intellectual-property/section'
import CollaborationProjectsSection from './collaboration-projects/section'

export default function AboutTabs({ cc = 'cn' }: { cc?: 'cn' | 'en' }) {
  const router = useRouter()

  type Key = 'overview' | 'advantages' | 'ip' | 'projects'
  const tabs = useMemo(
    () => [
      { key: 'overview' as Key, cn: '公司概况', en: 'Company Overview', Component: CompanyOverviewSection },
      { key: 'advantages' as Key, cn: '技术优势', en: 'Technical Advantages', Component: TechnicalAdvantagesSection },
      { key: 'ip' as Key, cn: '知识产权', en: 'Intellectual Property', Component: IntellectualPropertySection },
      { key: 'projects' as Key, cn: '合作项目', en: 'Collaboration Projects', Component: CollaborationProjectsSection },
    ],
    []
  )

  const [active, setActive] = useState<Key>('overview')
  const [showcaseConfirmOpen, setShowcaseConfirmOpen] = useState(false)
  const ActiveComp = tabs.find(t => t.key === active)?.Component ?? CompanyOverviewSection

  // animated underline indicator
  const containerRef = useRef<HTMLDivElement | null>(null)
  const btnRefs = useRef<Record<Key, HTMLButtonElement | null>>({
    overview: null,
    advantages: null,
    ip: null,
    projects: null,
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
        <div className="border-b border-border mx-6 md:mx-8">
          <div ref={containerRef} className="relative flex gap-2 overflow-x-auto pb-3">
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

            <button
              type="button"
              className="relative px-4 py-2 rounded-full text-sm md:text-base transition-colors whitespace-nowrap border bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted border-transparent"
              onClick={() => setShowcaseConfirmOpen(true)}
            >
              {cc === 'cn' ? '示范展示' : 'Demonstration & Showcase'}
            </button>
          </div>
        </div>
      </div>

      <DialogPrimitive.Root open={showcaseConfirmOpen} onOpenChange={setShowcaseConfirmOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60" />
          <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-background p-6 shadow-lg">
            <DialogPrimitive.Title className="text-base font-semibold">
              {cc === 'cn' ? '确认跳转' : 'Confirm navigation'}
            </DialogPrimitive.Title>
            <DialogPrimitive.Description className="mt-2 text-sm text-muted-foreground">
              {cc === 'cn'
                ? '即将跳转至「应用案例」页面，是否继续？'
                : 'You are about to navigate to the Application Cases page. Continue?'}
            </DialogPrimitive.Description>

            <div className="mt-6 flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowcaseConfirmOpen(false)}>
                {cc === 'cn' ? '取消' : 'Cancel'}
              </Button>
              <Button
                onClick={() => {
                  setShowcaseConfirmOpen(false)
                  router.push(`/${cc}/application-cases`)
                }}
              >
                {cc === 'cn' ? '确认' : 'Confirm'}
              </Button>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>

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
