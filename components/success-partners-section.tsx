"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const partners = [
  { src: "/succes-partners/kugiad-1.png", alt: "KUGİAD", href: "https://kutahyagiad.com/" },
  { src: "/succes-partners/tcaree.png", alt: "TCareer", href: "https://tcaree.com" },
  { src: "/succes-partners/zoudne.png", alt: "Zoudne", href: "https://zoudne.com" },
] as const

export function SuccessPartnersSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0, rootMargin: "120px 0px" },
    )
    observer.observe(el)

    // If already in view on mount (e.g. short page), show content immediately
    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight
    if (rect.top < vh && rect.bottom > 0) setIsVisible(true)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative border-y border-border/40 bg-gradient-to-b from-card/80 via-card to-card/80 py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="success-partners-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div
          className={`mb-10 text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">İş birlikleri</p>
          <h2 id="success-partners-heading" className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
            Güvenen markalar
          </h2>
          <div className="mx-auto mt-4 h-px w-16 rounded-full bg-primary/60" />
        </div>

        <ul
          className={`flex flex-col items-stretch justify-center gap-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-16 sm:gap-y-12 lg:gap-x-20 transition-all duration-700 delay-150 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          {partners.map((p, i) => (
            <li
              key={p.src}
              className="flex flex-1 justify-center sm:flex-none"
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[4.5rem] w-full max-w-[280px] items-center justify-center rounded-xl border border-white/10 bg-black/45 px-6 py-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-[5.5rem]"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={260}
                  height={56}
                  className="h-11 w-auto max-h-12 max-w-[240px] object-contain object-center opacity-95 transition-opacity duration-300 group-hover:opacity-100 sm:h-12 sm:max-w-[260px]"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
