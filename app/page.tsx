"use client";

import React from "react";
import Image from "next/image";
import { clientContent } from "./contentData";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function LandingPage() {
  const { brand, hero, coachingSection, aboutMe, booking } = clientContent;

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: booking.calendlyUrl,
      });
    } else {
      console.warn("Calendly script hasn't loaded fully yet.");
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2c2a29] font-sans antialiased">
      {/* Native HTML loading anchors to prevent Next.js basePath path corruption */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <script
        src="https://assets.calendly.com/assets/external/widget.js"
        type="text/javascript"
        async
      />

      {/* Navigation Header */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-xl font-serif tracking-wider uppercase font-semibold text-[#4a4744]">
          {brand.logoText}
        </div>
        <nav className="hidden md:flex space-x-8 text-sm tracking-wide uppercase text-[#615e5a]">
          <a href="#coaching" className="hover:text-[#2c2a29] transition-colors">
            Coaching
          </a>
          <a href="#about-eveliina" className="hover:text-[#2c2a29] transition-colors">
            About
          </a>
          <a href="#session" className="hover:text-[#2c2a29] transition-colors">
            1-1 Coaching
          </a>
        </nav>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 pt-4 pb-24 md:pt-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-stretch">
          {/* LEFT SIDE: Image Frame */}
          <div className="w-full md:w-1/2 order-2 md:order-1 flex items-center justify-center">
            <div className="relative w-full aspect-[4/5] max-h-[600px] overflow-hidden rounded-xl bg-[#f5f1ea] shadow-sm">
              <Image
                src={hero.profileImage.src}
                alt={hero.profileImage.alt}
                fill
                sizes="(max-w: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT SIDE: Text & Booking Flow */}
          <div className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2">
            <div className="flex flex-col h-full justify-center">
              {/* THE CONVERSATIONAL BIO BLOCK */}
              <div
                id="hero-about"
                className="order-2 md:order-1 space-y-6 mb-10 md:mb-8 mt-8 md:mt-0"
              >
                <span className="text-2xl sm:text-3xl font-serif font-light text-[#a89f95] block italic">
                  {hero.greeting}
                </span>
                <h1 className="text-4xl sm:text-5xl log-serif font-serif font-light text-[#383533] leading-[1.2]">
                  {hero.headline}
                </h1>
                <div className="h-0.5 w-16 bg-[#a89f95]"></div>

                <div className="space-y-4 text-[#524f4b] text-base leading-relaxed font-light">
                  {hero.descriptionParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* THE 1-1 SESSION BOOKING CARD */}
              <div
                id="session"
                className="order-1 md:order-2 bg-white p-6 md:p-8 rounded-xl border border-[#edeae4] shadow-sm"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#a89f95] font-bold block mb-1">
                  {booking.tagline}
                </span>
                <h2 className="text-xl font-serif text-[#4a4744] mb-3">
                  {booking.title}
                </h2>
                <p className="text-xs text-[#615e5a] leading-relaxed mb-5">
                  {booking.description}
                </p>

                <div className="space-y-3">
                  <button
                    onClick={openCalendly}
                    className="w-full bg-[#4a4744] hover:bg-[#383533] text-white text-center text-sm font-medium py-3.5 px-6 rounded-md transition-colors tracking-wide cursor-pointer"
                  >
                    {booking.buttonText}
                  </button>
                  <p className="text-center text-[11px] text-[#a89f95]">
                    {booking.subtext}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Muted Sage Green Coaching Showcase Section */}
      <section
        id="coaching"
        className="border-t border-[#e2e7e0] bg-[#f1f4f0] py-24"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-[#8a9687] font-bold">
              {coachingSection.title}
            </h2>
            <p className="text-2xl sm:text-3xl font-serif font-light text-[#2d332c] leading-relaxed max-w-2xl mx-auto tracking-wide">
              {coachingSection.description}
            </p>
          </div>
          
          <div className="pt-6">
            <p className="text-sm italic font-serif text-[#8a9687] mb-5">
              {coachingSection.tagline}
            </p>
            <button
              onClick={openCalendly}
              className="inline-block border-b border-[#2d332c] text-[#2d332c] hover:text-[#8a9687] hover:border-[#8a9687] text-xs uppercase tracking-widest font-semibold pb-1.5 transition-all cursor-pointer bg-transparent tracking-widest"
            >
              Book discovery call &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE "ABOUT EVELIINA" BIO FOLD */}
      <section
        id="about-eveliina"
        className="bg-[#f6f2ec] border-t border-b border-[#edeae4] py-20 md:py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            {/* Story Copy */}
            <div className="w-full md:w-7/12 space-y-6">
              <div className="space-y-1">
                <h2 className="text-3xl font-serif text-[#383533]">
                  {aboutMe.name}
                </h2>
                <p className="text-xs uppercase tracking-widest text-[#a89f95] font-bold">
                  {aboutMe.title}
                </p>
              </div>

              <h3 className="text-xl font-serif text-[#4a4744] italic font-light">
                "{aboutMe.headingText}"
              </h3>

              <div className="h-0.5 w-12 bg-[#a89f95]"></div>

              <div className="space-y-5 text-[#524f4b] text-base leading-relaxed font-light">
                {aboutMe.storyParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Reflection Graphic Frame */}
            <div className="w-full md:w-5/12">
              <div className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl bg-[#faf8f5] shadow-sm border border-[#edeae4]">
                <Image
                  src={aboutMe.image.src}
                  alt={aboutMe.image.alt}
                  fill
                  sizes="(max-w: 768px) 100vw, 40vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Container */}
      <footer className="border-t border-[#edeae4] py-8 text-center text-[11px] tracking-wider text-[#a89f95] uppercase">
        © {new Date().getFullYear()} {brand.logoText} • {brand.location}
      </footer>
    </div>
  );
}