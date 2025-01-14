"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal, Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 border-b border-gray-800 z-50 text-green-400">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6" />
            <Link href="#home" className="inline">
              <span className="text-xl font-bold">
                jchakir
                <span className="text-white text-2xl">@</span>
                portfolio
                <span className="text-white">:</span>~$
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {["home", "education", "experience", "projects", "skills", "languages"].map(
              (section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  onClick={() => handleClick(section)}
                  className={`hover:text-white transition-colors ${
                    activeSection === section ? "text-white" : ""
                  }`}
                >
                  {activeSection === section ? `./${section}` : section}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-400 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-2">
            {["home", "education", "experience", "projects", "skills", "languages"].map(
              (section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  onClick={() => handleClick(section)}
                  className={`block px-4 py-2 text-green-400 hover:text-white transition-colors ${
                    activeSection === section ? "text-white" : ""
                  }`}
                >
                  {activeSection === section ? `./${section}` : section}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
