import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="py-20 bg-[#140921]/95 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 newsletter-bg"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Decorative Text */}
          <div className="mb-8">
            <div className="transform rotate-90 text-white text-sm tracking-widest opacity-60 inline-block">
              NEWSLETTER
            </div>
          </div>

          <div className="w-px h-12 bg-white/20 mx-auto mb-8" />

          <h2 className="text-white text-xl font-semibold uppercase tracking-wide mb-8">
            Join Our Mailing List
          </h2>

          <p className="text-[#D3C9C1] max-w-3xl mx-auto mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </p>

          {/* Newsletter Form */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex-1 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#B520A3]/20 border-[#B520A3] text-white placeholder:text-white/70 h-14 px-6 rounded-full"
                />
              </div>
              <Button className="bg-gradient-to-r from-[#7436BB] to-[#B520A3] hover:from-[#7436BB]/90 hover:to-[#B520A3]/90 text-white px-8 h-14 rounded-full font-medium uppercase">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
