import { Button } from "@/components/ui/button";

const steps = [
  { number: "01", title: "Make An Appointment" },
  { number: "02", title: "Meet Our Team" },
  { number: "03", title: "Get Consultation" },
  { number: "04", title: "Start Project" },
];

export function AboutProcess() {
  return (
    <section className="py-20 bg-[#140921] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/placeholder.svg?height=800&width=1920')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-xl font-semibold uppercase tracking-widest mb-6">
            How we Work
          </h2>

          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-wider">
            Our Process for Delivering Results
          </h3>

          <p className="text-[#D3C9C1] max-w-3xl mx-auto mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever.
          </p>

          {/* Process Flow Illustration */}
          <div className="w-full max-w-2xl mx-auto mb-12">
            <img
              src="/placeholder.svg?height=164&width=800"
              alt="Process Flow"
              className="w-full h-auto opacity-80"
            />
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-gradient-to-b from-[#B520A3] to-[#7436BB] rounded-full p-8 text-center relative ${
                index % 2 === 1 ? "lg:mt-16" : ""
              }`}
            >
              <div className="text-4xl font-bold text-white mb-4 tracking-wider">
                {step.number}
              </div>
              <h4 className="text-white text-lg font-semibold tracking-wider">
                {step.title}
              </h4>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-[#F54A48] text-white hover:bg-[#F54A48] px-8 py-3 rounded-full bg-transparent uppercase"
          >
            Contact Now
          </Button>
        </div>
      </div>
    </section>
  );
}
