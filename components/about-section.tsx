"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance">Hakkımızda</h2>

          <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
            Modern teknolojilerle güçlendirilmiş, kullanıcı deneyimini ön planda tutan
            <span className="text-primary font-semibold"> yazılım çözümleri </span>
            ve
            <span className="text-primary font-semibold"> web siteleri </span>
            geliştiriyoruz.
          </p>
        </div>

        {/* Feature highlights */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {[
            { title: "İnovatif", desc: "Cutting-edge teknolojiler" },
            { title: "Kullanıcı Odaklı", desc: "Mükemmel deneyim tasarımı" },
            { title: "Güvenilir", desc: "Kaliteli ve sürdürülebilir kod" },
          ].map((item, index) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
