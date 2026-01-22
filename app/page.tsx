"use client";

import { I18nProvider } from "@/lib/i18n/context";
import { Starfield } from "@/components/selena/starfield";
import { Header } from "@/components/selena/header";
import { Hero } from "@/components/selena/hero";
import { Situation } from "@/components/selena/situation";
import { Outcomes } from "@/components/selena/outcomes";
import { HowItWorks } from "@/components/selena/how-it-works";
import { Deliverables } from "@/components/selena/deliverables";
import { Calculator } from "@/components/selena/calculator";
import { AddOns } from "@/components/selena/addons";
import { FAQ } from "@/components/selena/faq";
import { ContactForm } from "@/components/selena/contact-form";
import { SocialProof } from "@/components/selena/social-proof";
import { Footer } from "@/components/selena/footer";
import { MobileCTA } from "@/components/selena/mobile-cta";

export default function Home() {
  return (
    <I18nProvider>
      <div className="relative min-h-screen">
        <Starfield />
        <Header />
        <main>
          <Hero />
          <Situation />
          <Outcomes />
          <HowItWorks />
          <Deliverables />
          <Calculator />
          <AddOns />
          <FAQ />
          <ContactForm />
          <SocialProof />
        </main>
        <Footer />
        <MobileCTA />
      </div>
    </I18nProvider>
  );
}
