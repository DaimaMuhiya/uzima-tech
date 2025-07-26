import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "10 Must-Know Digital Marketing Trends in 2023",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "The Importance of Responsive Web Design for Your Business",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "How to Create a Successful Social Media Strategy",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
];

export function Blog() {
  return (
    <section className="py-20 bg-[#140921]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-0.5 bg-[#B520A3] flex-1 max-w-24" />
            <h2 className="text-white text-xl font-semibold uppercase tracking-wide">
              Blogs
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h3 className="text-4xl lg:text-5xl font-bold text-white">
              Latest Posts
            </h3>

            <Button
              variant="outline"
              className="border-[#F54A48] text-white hover:bg-[#F54A48] px-8 py-3 rounded-full lg:mb-2 bg-transparent"
            >
              SEE ALL BLOGS
            </Button>
          </div>

          <p className="text-[#D3C9C1] mt-6 max-w-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h4 className="text-white text-xl font-semibold mb-4 leading-tight group-hover:text-[#FA982F] transition-colors">
                {post.title}
              </h4>

              <Button
                variant="link"
                className="text-[#FA982F] hover:text-[#FA982F]/80 p-0 h-auto font-medium uppercase text-sm"
              >
                Learn more
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
