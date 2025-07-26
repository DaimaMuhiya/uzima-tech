import { Button } from "@/components/ui/button";
import { Code, Palette, Brain } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  },
  {
    icon: Palette,
    title: "Visual Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-[#3D0F41]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-0.5 bg-[#B520A3] flex-1 max-w-24" />
            <h2 className="text-white text-xl font-semibold uppercase tracking-wide">
              Services
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h3 className="text-4xl lg:text-5xl font-bold text-white">
              Services We Offer
            </h3>

            <Button
              variant="outline"
              className="border-[#F54A48] text-white hover:bg-[#F54A48] px-8 py-3 rounded-full lg:mb-2 bg-transparent"
            >
              VIEW ALL SERVICES
            </Button>
          </div>

          <p className="text-[#D3C9C1] mt-6 max-w-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#B520A3] to-[#7436BB] rounded-3xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <service.icon className="h-16 w-16 text-white" />
              </div>

              <h4 className="text-white text-2xl font-bold mb-6 tracking-wider uppercase">
                {service.title}
              </h4>

              <p className="text-[#D3C9C1] mb-8 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          <div className="w-2 h-2 bg-[#EDEDED] rounded-full" />
          <div className="w-2.5 h-2.5 bg-[#62606B] rounded-full" />
        </div>
      </div>
    </section>
  );
}
