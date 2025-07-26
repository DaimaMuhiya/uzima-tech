export function ContactHero() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0314] to-[#471133]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-wider capitalize">
          Let&apos;s talk To Us
        </h1>
      </div>
    </section>
  );
}
