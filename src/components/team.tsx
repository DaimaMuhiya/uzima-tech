import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Jane Smith",
    role: "Creative Director",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Sarah Wilson",
    role: "Marketing Manager",
    image: "/placeholder.svg?height=400&width=300",
  },
];

export function Team() {
  return (
    <section className="py-20 bg-[#140921] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 team-bg-image"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-0.5 bg-[#B520A3] flex-1 max-w-24" />
            <h2 className="text-white text-xl font-semibold uppercase tracking-wide">
              Experience
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h3 className="text-4xl lg:text-5xl font-bold text-white max-w-md">
              Meet Our Team of
              <br />
              Professionals.
            </h3>

            <Button
              variant="outline"
              className="border-[#F54A48] text-white hover:bg-[#F54A48] px-8 py-3 rounded-full lg:mb-2 bg-transparent"
            >
              ALL MEMBERS
            </Button>
          </div>

          <p className="text-[#D3C9C1] mt-6 max-w-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="text-white text-xl font-bold mb-1">
                  {member.name}
                </h4>
                <p className="text-[#FA982F] text-sm font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
