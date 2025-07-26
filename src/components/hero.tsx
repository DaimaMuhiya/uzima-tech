import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#140921] via-[#471133] to-[#140921]" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url('/placeholder.svg?height=800&width=1920')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Social Links */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FA982F] text-[#FA982F] hover:text-white transition-all"
        >
          <Facebook className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FA982F] text-[#FA982F] hover:text-white transition-all"
        >
          <Instagram className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FA982F] text-[#FA982F] hover:text-white transition-all"
        >
          <Twitter className="h-5 w-5" />
        </Button>
        <div className="w-px h-32 bg-white/20 mx-auto" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wider">
          DIGITAL SERVICES
        </h1>
        <p className="text-xl md:text-2xl text-white mb-12 font-semibold tracking-wide">
          BUILDING YOUR EMPIRE DIGITALLY
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#7436BB] to-[#B520A3] hover:from-[#7436BB]/90 hover:to-[#B520A3]/90 text-white px-8 py-6 rounded-full text-lg font-medium"
          >
            COMMENCER
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-[#FA982F] text-white hover:bg-[#FA982F] hover:text-white px-8 py-6 rounded-full text-lg font-medium bg-transparent"
          >
            EN SAVOIR PLUS
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#140921] to-transparent" />
    </section>
  );
}
