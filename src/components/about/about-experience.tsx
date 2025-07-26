export function AboutExperience() {
  return (
    <section className="py-20 bg-[#3D0F41] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 about-experience-bg"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="/placeholder.svg?height=581&width=531"
                alt="Experience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-8">
            {/* Creative Approach */}
            <div className="bg-white rounded-2xl p-6 flex items-center gap-6">
              <div className="bg-gradient-to-b from-[#7436BB] to-[#B520A3] rounded-full w-20 h-20 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">90%</div>
                </div>
              </div>
              <div>
                <h4 className="text-[#231F20] text-xl font-bold mb-2 tracking-wider">
                  Creative Approach
                </h4>
                <p className="text-[#767676] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>

            {/* Guaranteed Success */}
            <div className="bg-white rounded-2xl p-6 flex items-center gap-6">
              <div className="bg-gradient-to-b from-[#7436BB] to-[#B520A3] rounded-full w-20 h-20 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                </div>
              </div>
              <div>
                <h4 className="text-[#231F20] text-xl font-bold mb-2 tracking-wider">
                  Guaranteed Success
                </h4>
                <p className="text-[#767676] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>

            {/* Brand Strategy */}
            <div className="bg-white rounded-2xl p-6 flex items-center gap-6">
              <div className="bg-gradient-to-b from-[#7436BB] to-[#B520A3] rounded-full w-20 h-20 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">85%</div>
                </div>
              </div>
              <div>
                <h4 className="text-[#231F20] text-xl font-bold mb-2 tracking-wider">
                  Brand Strategy
                </h4>
                <p className="text-[#767676] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20">
        <div className="w-full h-full rounded-full border border-white/20"></div>
      </div>
    </section>
  );
}
