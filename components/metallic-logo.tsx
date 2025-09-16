"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface MetallicLogoProps {
  width?: number
  height?: number
  className?: string
}

export function MetallicLogo({ width = 200, height = 200, className = "" }: MetallicLogoProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={`relative metallic-paint ${className}`}>
      {/* Main logo with metallic effect */}
      <div className="relative">
        <Image
          src="/karacode-logo.svg"
          alt="Karacode Logo"
          width={width}
          height={height}
          className="metallic-logo relative z-10"
          priority
        />

        {/* Metallic glow layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-500/30 to-pink-400/20 rounded-full blur-xl scale-110 -z-10 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-indigo-400/20 to-violet-500/15 rounded-full blur-2xl scale-125 -z-20"></div>

        {/* Chrome reflection overlay */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay -z-5"
          style={{
            background: `linear-gradient(
              45deg,
              transparent 0%,
              rgba(255, 255, 255, 0.1) 25%,
              rgba(147, 197, 253, 0.2) 50%,
              rgba(255, 255, 255, 0.1) 75%,
              transparent 100%
            )`,
            backgroundSize: "200% 200%",
            animation: "chromeReflection 4s ease-in-out infinite",
          }}
        />
      </div>

      {/* Shimmer effect overlay */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `linear-gradient(
            110deg,
            transparent 25%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 75%
          )`,
          backgroundSize: "200% 100%",
          animation: "metallicShimmer 3s ease-in-out infinite",
        }}
      />
    </div>
  )
}
