import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Clock,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#140921] to-[#471133] text-white">
      {/* CTA Section */}
      <div className="py-16 bg-[#140921]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <h3 className="text-xl font-semibold">
              Ask a Question to our amazing team, and get, response quickly.
            </h3>
            <Button
              variant="outline"
              className="border-[#F54A48] text-white hover:bg-[#F54A48] px-8 py-3 rounded-full bg-transparent"
            >
              CONTACT NOW
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="w-24 h-8 bg-gradient-to-r from-[#7436BB] to-[#B520A3] rounded flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">LOGO</span>
              </div>

              <p className="text-white mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="flex space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FA982F] text-[#FA982F] hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FA982F] text-[#FA982F] hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FA982F] text-[#FA982F] hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FA982F] text-[#FA982F] hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#FA982F] text-xl font-bold mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-white hover:text-[#FA982F] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white hover:text-[#FA982F] transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-white hover:text-[#FA982F] transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-white hover:text-[#FA982F] transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[#FA982F] text-xl font-bold mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/faq"
                    className="text-white hover:text-[#FA982F] transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white hover:text-[#FA982F] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-white hover:text-[#FA982F] transition-colors"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-white hover:text-[#FA982F] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-[#FA982F] text-xl font-bold mb-6">
                Get Connected
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#FA982F] flex-shrink-0" />
                  <span className="text-white">yourname@email.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#FA982F] flex-shrink-0" />
                  <span className="text-white">+123-456-7890</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#FA982F] flex-shrink-0 mt-0.5" />
                  <span className="text-white">
                    Office Hours: 8AM - 11PM
                    <br />
                    Sunday - Weekend Day
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 bg-[#140921] border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white text-sm">
              Copyright © 2023 digitly by Evonicmedia. All Rights Reserved.
            </p>
            <p className="text-white text-sm">Powered by Evonicsoft</p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#F54A48] hover:bg-[#F54A48]/90 text-white rounded-sm shadow-lg z-50"
        size="icon"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
}
