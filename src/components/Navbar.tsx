"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenContact?: () => void;
  onOpenProjects?: () => void;
}

export default function Navbar({ onOpenContact, onOpenProjects }: NavbarProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isWhyStuebner =
    mounted && Boolean(pathname?.startsWith("/why-choose-us") || pathname?.startsWith("/why-stuebner"));
  const isServices = mounted && Boolean(pathname?.startsWith("/services"));
  const isAbout =
    mounted &&
    Boolean(
      pathname?.startsWith("/about-us") ||
      pathname?.startsWith("/about") ||
      pathname?.startsWith("/gallery") ||
      pathname?.startsWith("/our-people") ||
      pathname?.startsWith("/behind-the-build")
    );
  const isPortfolio =
    mounted &&
    Boolean(
      pathname?.startsWith("/our-portfolio") ||
      pathname?.startsWith("/portfolio") ||
      pathname?.startsWith("/commercial") ||
      pathname?.startsWith("/community") ||
      pathname?.startsWith("/education") ||
      pathname?.startsWith("/healthcare") ||
      pathname?.startsWith("/public-sector") ||
      pathname?.startsWith("/projects") ||
      pathname?.startsWith("/lehign") ||
      pathname?.startsWith("/diamond") ||
      pathname?.startsWith("/jeffersonville") ||
      pathname?.startsWith("/staybridge")
    );
  const isContact =
    mounted &&
    Boolean(
      pathname?.startsWith("/contact") ||
      pathname?.startsWith("/construction-project") ||
      pathname?.startsWith("/enquiries") ||
      pathname?.startsWith("/become-a-sub")
    );
  const isCareer = mounted && Boolean(pathname?.startsWith("/career"));

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        projectsRef.current &&
        !projectsRef.current.contains(event.target as Node)
      ) {
        setProjectsDropdownOpen(false);
      }
      if (
        aboutRef.current &&
        !aboutRef.current.contains(event.target as Node)
      ) {
        setAboutDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-[86px]">
          {/* Logo with natural aspect ratio */}
          <div className="shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center group py-2 focus:outline-hidden focus:ring-2 focus:ring-[#0070e0] rounded-sm"
              aria-label="E.R. Stuebner Home"
            >
              <Image
                src="/images/logo.png"
                alt="E.R. Stuebner General Contractor"
                width={443}
                height={160}
                priority
                className="h-10 sm:h-12 md:h-[50px] w-auto object-contain transition-transform duration-200 group-hover:opacity-95"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-7 xl:space-x-8 text-[14px] font-medium text-slate-800"
          >
            <Link
              href="/why-choose-us"
              className={`transition-colors duration-150 py-2 focus:outline-hidden ${
                isWhyStuebner
                  ? "text-[#0070e0] font-semibold"
                  : "text-slate-800 hover:text-[#0070e0]"
              }`}
            >
              Why Stuebner
            </Link>

            <Link
              href="/services"
              className={`transition-colors duration-150 py-2 focus:outline-hidden ${
                isServices
                  ? "text-[#0070e0] font-semibold"
                  : "text-slate-800 hover:text-[#0070e0]"
              }`}
            >
              Services
            </Link>

            {/* Projects with Dropdown */}
            <div
              ref={projectsRef}
              className="relative"
              onMouseEnter={() => setProjectsDropdownOpen(true)}
              onMouseLeave={() => setProjectsDropdownOpen(false)}
            >
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => {
                  setProjectsDropdownOpen(!projectsDropdownOpen);
                  if (onOpenProjects) onOpenProjects();
                }}
                className={`flex items-center gap-1 py-2 transition-colors duration-150 cursor-pointer focus:outline-hidden ${
                  isPortfolio
                    ? "text-[#0070e0] font-semibold"
                    : "text-slate-800 hover:text-[#0070e0]"
                }`}
                aria-expanded={projectsDropdownOpen}
                aria-haspopup="true"
              >
                <span>Projects</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    projectsDropdownOpen
                      ? "rotate-180 text-[#0070e0]"
                      : isPortfolio
                      ? "text-[#0070e0]"
                      : "text-slate-500"
                  }`}
                />
              </button>

              {projectsDropdownOpen && (
                <div className="absolute left-0 mt-1 w-64 rounded-xl bg-white shadow-xl border border-gray-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Project Categories
                  </div>
                  <Link
                    href="/our-portfolio"
                    onClick={() => setProjectsDropdownOpen(false)}
                    className={`block px-4 py-2 text-sm font-semibold transition-colors ${
                      isPortfolio
                        ? "text-[#0070e0] bg-blue-50/70"
                        : "text-slate-800 hover:bg-slate-50 hover:text-[#0070e0]"
                    }`}
                  >
                    Our Portfolio
                  </Link>
                  <Link
                    href="/commercial-retail-and-hospitality"
                    onClick={() => setProjectsDropdownOpen(false)}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      mounted &&
                      (pathname?.startsWith("/commercial") ||
                        pathname?.startsWith("/projects/lehign") ||
                        pathname?.startsWith("/projects/diamond") ||
                        pathname?.startsWith("/projects/jeffersonville") ||
                        pathname?.startsWith("/projects/staybridge"))
                        ? "text-[#0070e0] font-semibold bg-blue-50/50"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#0070e0]"
                    }`}
                  >
                    Commercial, Retail &amp; Hospitality
                  </Link>
                  <Link
                    href="/community-and-institutional"
                    onClick={() => setProjectsDropdownOpen(false)}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      mounted && pathname?.startsWith("/community")
                        ? "text-[#0070e0] font-semibold bg-blue-50/50"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#0070e0]"
                    }`}
                  >
                    Community &amp; Institutional
                  </Link>
                  <Link
                    href="/education"
                    onClick={() => setProjectsDropdownOpen(false)}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      mounted && pathname?.startsWith("/education")
                        ? "text-[#0070e0] font-semibold bg-blue-50/50"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#0070e0]"
                    }`}
                  >
                    Education
                  </Link>
                  <Link
                    href="/healthcare"
                    onClick={() => setProjectsDropdownOpen(false)}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      mounted && pathname?.startsWith("/healthcare")
                        ? "text-[#0070e0] font-semibold bg-blue-50/50"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#0070e0]"
                    }`}
                  >
                    Healthcare
                  </Link>
                  <Link
                    href="/public-sector"
                    onClick={() => setProjectsDropdownOpen(false)}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      mounted && pathname?.startsWith("/public-sector")
                        ? "text-[#0070e0] font-semibold bg-blue-50/50"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#0070e0]"
                    }`}
                  >
                    Public Sector
                  </Link>
                  <div className="border-t border-gray-100 my-1.5"></div>
                  <button
                    type="button"
                    onClick={() => {
                      setProjectsDropdownOpen(false);
                      if (onOpenProjects) onOpenProjects();
                    }}
                    className="w-full text-left px-4 py-2 text-sm font-semibold text-[#0070e0] hover:bg-blue-50/50 transition-colors cursor-pointer"
                  >
                    View All Projects Gallery &rarr;
                  </button>
                </div>
              )}
            </div>

            <Link
              href="/careers"
              className={`transition-colors duration-150 py-2 focus:outline-hidden cursor-pointer ${
                isCareer ? "text-[#0070e0] font-semibold" : "hover:text-[#0070e0]"
              }`}
            >
              Career
            </Link>

            {/* About with Dropdown */}
            <div
              ref={aboutRef}
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className={`flex items-center gap-1 py-2 transition-colors duration-150 cursor-pointer focus:outline-hidden ${
                  isAbout
                    ? "text-[#0070e0] font-semibold"
                    : "text-slate-800 hover:text-[#0070e0]"
                }`}
                aria-expanded={aboutDropdownOpen}
                aria-haspopup="true"
              >
                <span>About</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    aboutDropdownOpen
                      ? "rotate-180 text-[#0070e0]"
                      : isAbout
                      ? "text-[#0070e0]"
                      : "text-slate-500"
                  }`}
                />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute left-0 mt-1 w-56 rounded-xl bg-white shadow-xl border border-gray-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link
                    href="/about-us"
                    onClick={() => setAboutDropdownOpen(false)}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      mounted && (pathname === "/about-us" || pathname === "/about")
                        ? "text-[#0070e0] font-semibold bg-blue-50/70"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#0070e0]"
                    }`}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/gallery"
                    onClick={() => setAboutDropdownOpen(false)}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      mounted && pathname?.startsWith("/gallery")
                        ? "text-[#0070e0] font-semibold bg-blue-50/70"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#0070e0]"
                    }`}
                  >
                    Gallery
                  </Link>
                  <Link
                    href="/our-people"
                    onClick={() => setAboutDropdownOpen(false)}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      mounted && pathname?.startsWith("/our-people")
                        ? "text-[#0070e0] font-semibold bg-blue-50/70"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#0070e0]"
                    }`}
                  >
                    Our People
                  </Link>
                  <Link
                    href="/behind-the-build"
                    onClick={() => setAboutDropdownOpen(false)}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      mounted && pathname?.startsWith("/behind-the-build")
                        ? "text-[#0070e0] font-semibold bg-blue-50/70"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#0070e0]"
                    }`}
                  >
                    Behind the Build
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact-us/"
              className={`transition-colors duration-150 py-2 focus:outline-hidden cursor-pointer ${
                isContact ? "text-[#0070e0] font-semibold" : "hover:text-[#0070e0]"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-[#0070e0] hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-[#0070e0]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <Link
            href="/why-choose-us"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base ${
              isWhyStuebner
                ? "font-semibold text-[#0070e0] bg-blue-50/70"
                : "font-medium text-slate-800 hover:bg-slate-50 hover:text-[#0070e0]"
            }`}
          >
            Why Stuebner
          </Link>

          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base ${
              isServices
                ? "font-semibold text-[#0070e0] bg-blue-50/70"
                : "font-medium text-slate-800 hover:bg-slate-50 hover:text-[#0070e0]"
            }`}
          >
            Services
          </Link>

          <div>
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base ${
                isPortfolio
                  ? "font-semibold text-[#0070e0] bg-blue-50/70"
                  : "font-medium text-slate-800 hover:bg-slate-50 hover:text-[#0070e0]"
              }`}
            >
              <span>Projects</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileProjectsOpen
                    ? "rotate-180 text-[#0070e0]"
                    : isPortfolio
                    ? "text-[#0070e0]"
                    : "text-slate-500"
                }`}
              />
            </button>
            {mobileProjectsOpen && (
              <div className="pl-6 pr-3 py-1 space-y-1 bg-slate-50/70 rounded-lg mt-1">
                <Link
                  href="/our-portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-semibold ${
                    isPortfolio
                      ? "text-[#0070e0]"
                      : "text-slate-700 hover:text-[#0070e0]"
                  }`}
                >
                  Our Portfolio
                </Link>
                <Link
                  href="/commercial-retail-and-hospitality"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm ${
                    mounted && pathname?.startsWith("/commercial")
                      ? "text-[#0070e0] font-semibold"
                      : "text-slate-600 hover:text-[#0070e0]"
                  }`}
                >
                  Commercial, Retail &amp; Hospitality
                </Link>
                <Link
                  href="/community-and-institutional"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm ${
                    mounted && pathname?.startsWith("/community")
                      ? "text-[#0070e0] font-semibold"
                      : "text-slate-600 hover:text-[#0070e0]"
                  }`}
                >
                  Community &amp; Institutional
                </Link>
                <Link
                  href="/education"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm ${
                    mounted && pathname?.startsWith("/education")
                      ? "text-[#0070e0] font-semibold"
                      : "text-slate-600 hover:text-[#0070e0]"
                  }`}
                >
                  Education
                </Link>
                <Link
                  href="/healthcare"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm ${
                    mounted && pathname?.startsWith("/healthcare")
                      ? "text-[#0070e0] font-semibold"
                      : "text-slate-600 hover:text-[#0070e0]"
                  }`}
                >
                  Healthcare
                </Link>
                <Link
                  href="/public-sector"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm ${
                    mounted && pathname?.startsWith("/public-sector")
                      ? "text-[#0070e0] font-semibold"
                      : "text-slate-600 hover:text-[#0070e0]"
                  }`}
                >
                  Public Sector
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenProjects) onOpenProjects();
                  }}
                  className="block py-2 text-sm font-semibold text-[#0070e0]"
                >
                  View All Projects Gallery &rarr;
                </button>
              </div>
            )}
          </div>

          <Link
            href="/careers"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base ${
              isCareer
                ? "font-semibold text-[#0070e0] bg-blue-50/70"
                : "font-medium text-slate-800 hover:bg-slate-50 hover:text-[#0070e0]"
            }`}
          >
            Career
          </Link>

          <div>
            <button
              type="button"
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base ${
                isAbout
                  ? "font-semibold text-[#0070e0] bg-blue-50/70"
                  : "font-medium text-slate-800 hover:bg-slate-50 hover:text-[#0070e0]"
              }`}
            >
              <span>About</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileAboutOpen
                    ? "rotate-180 text-[#0070e0]"
                    : isAbout
                    ? "text-[#0070e0]"
                    : "text-slate-500"
                }`}
              />
            </button>
            {mobileAboutOpen && (
              <div className="pl-6 pr-3 py-1 space-y-1 bg-slate-50/70 rounded-lg mt-1">
                <Link
                  href="/about-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm ${
                    mounted && (pathname === "/about-us" || pathname === "/about")
                      ? "text-[#0070e0] font-semibold"
                      : "text-slate-700 hover:text-[#0070e0]"
                  }`}
                >
                  About Us
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm ${
                    mounted && pathname?.startsWith("/gallery")
                      ? "text-[#0070e0] font-semibold"
                      : "text-slate-700 hover:text-[#0070e0]"
                  }`}
                >
                  Gallery
                </Link>
                <Link
                  href="/our-people"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm ${
                    mounted && pathname?.startsWith("/our-people")
                      ? "text-[#0070e0] font-semibold"
                      : "text-slate-700 hover:text-[#0070e0]"
                  }`}
                >
                  Our People
                </Link>
                <Link
                  href="/behind-the-build"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm ${
                    mounted && pathname?.startsWith("/behind-the-build")
                      ? "text-[#0070e0] font-semibold"
                      : "text-slate-700 hover:text-[#0070e0]"
                  }`}
                >
                  Behind the Build
                </Link>
              </div>
            )}
          </div>

          <div className="pt-2">
            <Link
              href="/contact-us/"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block py-3 px-4 rounded-xl text-center font-semibold text-white bg-[#0070e0] hover:bg-[#005bb5] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
