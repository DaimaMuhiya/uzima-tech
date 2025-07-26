import { Button } from "@/components/ui/button";

const categories = [
  "All",
  "Design",
  "Development",
  "Branding",
  "UI/UX",
  "Marketing",
  "SEO",
];

const projects = [
  { id: 1, image: "/placeholder.svg?height=300&width=400", category: "design" },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=400",
    category: "development",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=400&width=400",
    category: "branding",
  },
  { id: 4, image: "/placeholder.svg?height=300&width=400", category: "ui/ux" },
  {
    id: 5,
    image: "/placeholder.svg?height=600&width=400",
    category: "marketing",
  },
  { id: 6, image: "/placeholder.svg?height=600&width=400", category: "seo" },
  {
    id: 7,
    image: "/placeholder.svg?height=600&width=400",
    category: "development",
  },
  { id: 8, image: "/placeholder.svg?height=600&width=400", category: "design" },
];

export function Portfolio() {
  return (
    <section className="py-20 bg-[#140921]/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-px h-32 bg-white/20 mx-auto mb-8" />
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-0.5 bg-[#B520A3] flex-1 max-w-24" />
            <h2 className="text-white text-xl font-semibold uppercase tracking-wide">
              Portfolio
            </h2>
          </div>

          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Latest Projects.
          </h3>

          <p className="text-[#D3C9C1] mb-8 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever.
          </p>

          <Button
            variant="outline"
            className="border-[#F54A48] text-white hover:bg-[#F54A48] px-8 py-3 rounded-full bg-transparent"
          >
            VIEW ALL PROJECTS
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className="text-white hover:text-[#FA982F] hover:bg-white/10 px-6 py-2 rounded-full border border-white/20"
            >
              {category.toUpperCase()}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={`Project ${project.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="w-px h-32 bg-white/20 mx-auto" />
        </div>
      </div>
    </section>
  );
}
