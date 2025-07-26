import { Lightbulb, Target, Palette, Users } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Customized Solutions",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  },
  {
    icon: Target,
    title: "ROI-Driven Approach",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  },
  {
    icon: Palette,
    title: "Creative Solution",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  },
];

export function Features() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#140921] to-[#471133] rounded-3xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#7436BB] to-[#B520A3] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4 tracking-wider uppercase">
                {feature.title}
              </h3>
              <p className="text-white text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
