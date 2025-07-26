import { Header } from "@/components/header";
import { AboutHero } from "@/components/about/about-hero";
import { AboutContent } from "@/components/about/about-content";
import { AboutFeatures } from "@/components/about/about-features";
import { AboutExperience } from "@/components/about/about-experience";
import { AboutClients } from "@/components/about/about-clients";
import { AboutProcess } from "@/components/about/about-process";
import { AboutTeam } from "@/components/about/about-team";
import { AboutCTA } from "@/components/about/about-cta";
import { FAQ } from "@/components/faq";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#140921]">
      <Header />
      <AboutHero />
      <AboutContent />
      <AboutFeatures />
      <AboutExperience />
      <AboutClients />
      <AboutProcess />
      <AboutTeam />
      <AboutCTA />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}
