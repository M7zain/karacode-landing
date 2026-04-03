import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SuccessPartnersSection } from "@/components/success-partners-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <SuccessPartnersSection />
      <Footer />
    </main>
  )
}
