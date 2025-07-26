import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function AboutContent() {
  return (
    <section className="py-20 bg-[#140921]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-0.5 bg-[#B520A3] flex-1 max-w-24" />
              <h2 className="text-white text-xl font-semibold uppercase tracking-widest">
                About us
              </h2>
            </div>

            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight tracking-wider capitalize">
              Explore Our Services
              <br />
              and Boost Your Online
              <br />
              Presence
            </h3>

            <p className="text-[#D3C9C1] mb-8 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <Check className="h-5 w-5 text-[#FA982F] flex-shrink-0" />
                <span className="text-[#D3C9C1]">
                  Lorem Ipsum is simply dummy text of the printing.
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Check className="h-5 w-5 text-[#FA982F] flex-shrink-0" />
                <span className="text-[#D3C9C1]">
                  Lorem Ipsum is simply dummy text of the printing.
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-gradient-to-r from-[#7436BB] to-[#B520A3] hover:from-[#7436BB]/90 hover:to-[#B520A3]/90 text-white px-8 py-6 rounded-full uppercase">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-[#F54A48] text-white hover:bg-[#F54A48] px-8 py-6 rounded-full bg-transparent uppercase"
              >
                Discover More
              </Button>
            </div>

            {/* Creative Solution Line */}
            <div className="flex items-center gap-4">
              <div className="h-px bg-white flex-1 max-w-32" />
              <span className="text-white text-sm tracking-[4px] capitalize">
                creative solution
              </span>
            </div>
          </div>

          {/* Image with Experience Badge */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="/placeholder.svg?height=511&width=531"
                alt="About us"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-[#F54A48] to-[#FA982F] rounded-full w-40 h-40 flex flex-col items-center justify-center text-white">
              <div className="text-4xl font-bold tracking-wider">12+</div>
              <div className="text-sm uppercase font-medium">years of</div>
              <div className="text-sm uppercase font-medium">experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
