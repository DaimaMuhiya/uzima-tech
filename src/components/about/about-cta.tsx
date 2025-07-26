import { Button } from "@/components/ui/button";

export function AboutCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#140921] to-[#471133]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <h3 className="text-xl font-semibold text-white tracking-widest uppercase max-w-3xl">
            Ask a Question to our amazing team, and get, response quickly.
          </h3>
          <Button
            variant="outline"
            className="border-[#F54A48] text-white hover:bg-[#F54A48] px-8 py-3 rounded-full bg-transparent uppercase flex-shrink-0"
          >
            Contact Now
          </Button>
        </div>
      </div>
    </section>
  );
}
