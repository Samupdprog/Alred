import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SEOContent } from "@/components/seo-content"
import { ServicesSection } from "@/components/services-section"
import { BenefitsSection } from "@/components/benefits-section"
import { PricingSection } from "@/components/pricing-section"
import { ProcessSection } from "@/components/process-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

import { ScrollProgressIndicator } from "@/components/scroll-effects"
import { FloatingElements, InteractiveGrid, CodeElements } from "@/components/animated-svg"
import { InteractiveParticles } from "@/components/interactive-particles"
import { ScrollBackground } from "@/components/scroll-background"
import { NetworkSVG } from "@/components/network-svg"

import { DashboardSection } from "@/components/dashboard-section"

import { ParallaxEffects } from "@/components/parallax-sections"

export default function Home() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <ScrollProgressIndicator />
      <ScrollBackground />
      <NetworkSVG />
      <ParallaxEffects />
      <InteractiveParticles />
      <InteractiveGrid />
      <FloatingElements />
      <CodeElements />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <DashboardSection />
        {/*<PricingSection /> para cambiarlo cuando tenga*/}
          <ProcessSection />
          {/*<CaseStudiesSection /> para cambiarlo cuando tenga*/}
          <FAQSection />
          <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
