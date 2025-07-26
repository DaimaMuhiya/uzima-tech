import { Header } from "@/components/header";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactMap } from "@/components/contact/contact-map";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#140921]">
      <Header />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
      <Footer />
    </div>
  );
}
