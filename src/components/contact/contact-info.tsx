import { MapPin, Phone, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    info: "Plaza X , XY Floor, XYZ Street, XYZ",
  },
  {
    icon: Phone,
    title: "Phone",
    info: "+123-456-7890",
  },
  {
    icon: Mail,
    title: "Email",
    info: "yourname@email.com",
  },
];

export function ContactInfo() {
  return (
    <section className="py-16 bg-[#140921]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 text-center md:text-left"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-[#7436BB] to-[#B520A3] rounded-full flex items-center justify-center flex-shrink-0">
                <item.icon className="h-8 w-8 text-white" />
              </div>

              {/* Info */}
              <div className="flex-1">
                <p className="text-white text-lg font-medium">{item.info}</p>
              </div>

              {/* Vertical Border (except last item) */}
              {index < contactInfo.length - 1 && (
                <div className="hidden md:block w-px h-16 bg-white/20 ml-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
