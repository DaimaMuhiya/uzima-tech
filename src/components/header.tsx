import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#140921] to-[#140921] border-b border-[#471133]/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-24 h-8 bg-gradient-to-r from-[#7436BB] to-[#B520A3] rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">LOGO</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#FA982F] font-medium hover:text-[#FA982F]/80 transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/about"
              className="text-[#D3C9C1] hover:text-[#FA982F] transition-colors"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="text-[#D3C9C1] hover:text-[#FA982F] transition-colors"
            >
              Contact
            </Link>
            <div className="relative group">
              <button className="text-[#D3C9C1] hover:text-[#FA982F] transition-colors flex items-center gap-1">
                Plus
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M6 8L2 4h8L6 8z" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Contact Info & Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="text-right">
              <span className="text-[#D3C9C1] text-sm">Appelez-nous:</span>
              <div className="text-[#FA982F] font-medium">+243 995 825 417</div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
