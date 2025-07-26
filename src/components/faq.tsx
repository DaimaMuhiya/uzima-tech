import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What kind of digital services do you provide?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    isOpen: true,
  },
  {
    question: "What is your process for working with clients?",
    answer: "",
    isOpen: false,
  },
  {
    question: "What is your timeline for completing a project?",
    answer: "",
    isOpen: false,
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer: "",
    isOpen: false,
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-[#140921] relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 faq-bg-image" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-0.5 bg-[#B520A3] flex-1 max-w-24" />
              <h2 className="text-white text-xl font-semibold uppercase tracking-wide">
                Experience
              </h2>
            </div>

            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Frequently Asked
              <br />
              Questions
            </h3>

            <p className="text-[#D3C9C1] leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <Button
                  variant="ghost"
                  className="w-full p-6 text-left justify-between hover:bg-gray-50 text-[#140921] font-medium"
                >
                  <span className="uppercase">{faq.question}</span>
                  <ChevronDown className="h-4 w-4 flex-shrink-0" />
                </Button>

                {faq.isOpen && faq.answer && (
                  <div className="px-6 pb-6">
                    <p className="text-[#767676] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
