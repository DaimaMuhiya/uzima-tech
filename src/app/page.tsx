import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { About } from "@/components/about";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Team } from "@/components/team";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { Blog } from "@/components/blog";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#140921]">
      <Header />
      <Hero />
      <Features />
      <About />
      <Portfolio />
      <Services />
      <Process />
      <Team />
      <Pricing />
      <FAQ />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}
