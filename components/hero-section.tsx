"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Logo from "./Logo"


export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full liquid-metal blur-xl"></div>
        <div
          className="absolute top-3/4 right-1/4 w-48 h-48 bg-accent/15 rounded-full liquid-metal blur-2xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-32 h-32 bg-primary/20 rounded-full liquid-metal blur-lg"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>

      {/* Main content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className={`mx-auto max-w-7xl flex flex-col items-center lg:flex-row lg:items-center lg:justify-center gap-8 lg:gap-16 text-center lg:text-left`}>
          {/* Logo block */}
          <div
            className={`mb-4 lg:mb-0 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="float-animation">
              <div className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
                <div className={`relative w-full h-full transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
                  <div className="absolute -inset-6 rounded-2xl bg-primary/20 blur-2xl" aria-hidden></div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" aria-hidden></div>
                  <div className="relative w-full h-full metallic-logo">
                    <Image
                      src="/karacode-logo-white.png"
                      alt="Karacode logo"
                      fill
                      priority
                      sizes="(max-width: 640px) 10rem, (max-width: 1024px) 14rem, (max-width: 1536px) 18rem, 20rem"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text block */}
          <div className="max-w-3xl">
            {/* Main heading */}
            <div
              className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-6 glow-text text-balance">
                Karacode
                <span className="block text-3xl sm:text-5xl lg:text-6xl xl:text-7xl mt-2 text-muted-foreground">
                  Yakında
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div
              className={`mt-6 transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed text-pretty">
                Geleceğin yazılım ve web çözümlerini bugünden inşa ediyoruz
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${mounted ? "opacity-100" : "opacity-0"}`}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
