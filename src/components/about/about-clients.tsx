const clients = [
  { name: "Client 1", logo: "/placeholder.svg?height=30&width=148" },
  { name: "Client 2", logo: "/placeholder.svg?height=35&width=153" },
  { name: "Client 3", logo: "/placeholder.svg?height=22&width=94" },
  { name: "Client 4", logo: "/placeholder.svg?height=34&width=138" },
  { name: "Client 5", logo: "/placeholder.svg?height=30&width=125" },
  { name: "Client 6", logo: "/placeholder.svg?height=30&width=151" },
];

export function AboutClients() {
  return (
    <section className="py-20 bg-[#140921]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-px h-32 bg-white/20 mx-auto mb-8" />
          <h2 className="text-white text-2xl font-bold uppercase tracking-wider mb-8">
            Our Clients
          </h2>

          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="h-8 w-auto object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>

          <div className="w-px h-32 bg-white/20 mx-auto mt-8" />
        </div>
      </div>
    </section>
  );
}
