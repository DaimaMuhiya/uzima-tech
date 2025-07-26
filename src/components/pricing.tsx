import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: 24,
    features: [
      "SEO Audits",
      "SEO Managements",
      "Digital Marketing",
      "Site Management",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: 59,
    features: [
      "SEO Audits",
      "SEO Managements",
      "Digital Marketing",
      "Site Management",
      "Link Building",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: 99,
    features: [
      "SEO Audits",
      "SEO Managements",
      "Digital Marketing",
      "Site Management",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-20 bg-[#140921]/95">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-xl font-semibold uppercase tracking-wide mb-6">
            Pricing
          </h2>

          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Pricing plans
          </h3>

          <p className="text-[#D3C9C1] max-w-3xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 text-center ${
                plan.popular
                  ? "bg-gradient-to-b from-[#B520A3] to-[#7436BB] transform scale-105"
                  : "bg-[#3D0F41]"
              }`}
            >
              <h4 className="text-[#FA982F] text-2xl font-bold mb-8 tracking-wider uppercase">
                {plan.name}
              </h4>

              <div className="mb-8">
                <span className="text-white text-5xl font-bold">
                  ${plan.price}
                </span>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center justify-center gap-3"
                  >
                    <Check className="h-5 w-5 text-[#FA982F] flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full py-6 rounded-full text-lg font-medium ${
                  plan.popular
                    ? "bg-white text-[#7436BB] hover:bg-white/90"
                    : "bg-gradient-to-r from-[#7436BB] to-[#B520A3] text-white hover:from-[#7436BB]/90 hover:to-[#B520A3]/90"
                }`}
              >
                GET STARTED
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
