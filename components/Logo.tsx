"use client"

import MetallicPaint, { parseLogoImage } from "./MetallicPaint"
import { useState, useEffect } from "react"

const Component = () => {
  const [imageData, setImageData] = useState<ImageData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadDefaultImage() {
      try {
        setLoading(true)
        const response = await fetch("/karacode-logo.svg")

        if (!response.ok) {
          throw new Error(`Failed to fetch logo: ${response.status}`)
        }

        const blob = await response.blob()
        const file = new File([blob], "karacode-logo.svg", { type: blob.type })

        const parsedData = await parseLogoImage(file)
        setImageData(parsedData?.imageData ?? null)
      } catch (err) {
        console.error("Error loading default image:", err)
        setImageData(null)
      } finally {
        setLoading(false)
      }
    }

    loadDefaultImage()
  }, [])

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    )
  }

  if (!imageData) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-4xl font-bold text-primary glow-text">K</div>
      </div>
    )
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MetallicPaint
        imageData={imageData}
        params={{
          edge: 2,
          patternBlur: 0.005,
          patternScale: 2,
          refraction: 0.015,
          speed: 0.3,
          liquid: 0.07,
        }}
      />
    </div>
  )
}

export default Component
