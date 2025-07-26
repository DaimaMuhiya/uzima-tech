import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutHero() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0314] to-[#471133]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-wider capitalize">
          About Us
        </h1>
      </div>

      {/* Video Section */}
      <div className="absolute bottom-0 left-0 right-0 px-4">
        <div className="container mx-auto">
          <div className="relative max-w-5xl mx-auto">
            <div className="aspect-video rounded-3xl overflow-hidden">
              <img
                src="/placeholder.svg?height=550&width=970"
                alt="About us video"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Play Button */}
            <Button
              size="icon"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/30 hover:bg-white/40 backdrop-blur-sm"
            >
              <Play className="h-6 w-6 text-white ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
