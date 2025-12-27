// Superlash Beauty Bar — Cream Minimalist Theme
// Vite + React + TypeScript single-page site

import React, { useEffect, useState } from "react";
import { Phone, Instagram, Mail } from "lucide-react";

const salonName = "Superlash Beauty Bar";
const logoSrc = "/images/superlash-logo.png";
const heroImage = "/hero.jpg";
const whatsappNumber = "+6586844399";
const bookingLink = "https://sody.app/superlashsg/book";

// LASH SERVICES
const lashServices = [
  {
    title: "LED Lash Extensions (Any Style)",
    desc: "Natural, volume, hybrid, manga — in LED application for longer retention.",
    price: "$78 First Trial (any style)",
  },
  {
    title: "LED Lash Extensions",
    desc: "Natural, volume, hybrid, manga — in LED application for longer retention.",
    price: "Prices Starting from $88 only",
  },
  {
    title: "Lash Infills (Promo)",
    desc: "Includes bottom lash touch-up if applicable.",
    price: "$38 Promo • Usual: $48 all styles / $68 9D–10D Volume",
  },
  {
    title: "LED Lash Add-On",
    desc: "Top up on Brow or Lip Embroidery service.",
    price: "$50 (any style)",
  },
  {
    title: "Lash Lift + Tint",
    desc: "Natural lift + curl with tint for brighter, fuller-looking eyes.",
    price: "$50",
  },
];

// BROW + LIP SERVICES
const browLipServices = [
  {
    title: "Brow Lamination + Tint",
    desc: "Lifts, shapes and sets brows for a fuller look. Includes tint.",
    price: "$50",
  },
  {
    title: "Featherstroke Brow Embroidery",
    desc: "Soft strokes for natural hair-like finish.",
    price: "$288 (free touch-up after 1 month)",
  },
  {
    title: "Misty Brow Embroidery",
    desc: "Powdery, soft-focus gradient look.",
    price: "$268 (free touch-up after 1 month)",
  },
  {
    title: "Hybrid Brow Embroidery",
    desc: "Combination of strokes + shading.",
    price: "$288 (free touch-up after 1 month)",
  },
  {
    title: "Lip Embroidery A La Carte",
    desc: "Includes free touch-up after 2 months.",
    price: "$358",
  },
  {
    title: "Brow + Lip Embroidery Combo",
    desc: "Both services with free touch-ups included.",
    price: "$599",
  },
];

// NAIL SERVICES
const nailServices = [
  {
    title: "Classic Gel Manicure",
    desc: `Unlimited Colours/Cateye/Ombre/Glitter

Includes overlay, shaping, cuticle clean-up,
diamond top coat, nail oil.`,
    price: "$48",
  },
  {
    title: "Design Gel Manicure",
    desc: `Unlimited Design
Unlimited Charms
Unlimited Colours/ Cateye / Ombre/ French

Includes overlay, shaping, cuticle clean-up,
diamond top coat, nail oil.`,
    price: "$68",
  },
  {
    title: "Design Gel Manicure + Extensions",
    desc: `Unlimited Design
Unlimited Charms
Unlimited Colours/ Cateye / Ombre/ French

Includes overlay, shaping, cuticle clean-up,
diamond top coat, nail oil.`,
    price: "$88",
  },
  {
    title: "Nail Add-Ons",
    desc: "3D gel sculpting, intricate drawings, removal only (without new set).",
    price: "$20 each",
  },
];


const promos = [
  {
    title: "CNY 2026 EXCLUSIVE PROMO",
    detail: `WHATSAPP/BOOK DIRECTLY ON SODY
NO CNY SURCHARGES FOR ALL PACKAGES AND BUNDLES`,
  },
  {
    title: "Glow Hydrate Mini Bottle Gift",
    detail:
      "Our exclusive Glow Hydrate Mini Bottle — printed with our Superlash logo. Free for the first 50 bookings only!",
  },
  {
    title: "Embroidery + LED Lash Bundle",
    detail: "Top up only $50 to add LED Lash Extensions (any style).",
  },
];

const instagramEmbeds = [
  {
    id: "insta-1",
    src: "https://www.instagram.com/reel/DQ8g4RHEVnA/embed",
    title: "SuperlashSG Reel 1",
  },
  {
    id: "insta-2",
    src: "https://www.instagram.com/reel/DRYiWUHEnYe/embed",
    title: "SuperlashSG Reel 2",
  },
  {
    id: "insta-3",
    src: "https://www.instagram.com/reel/DRRjbylEa4g/embed",
    title: "SuperlashSG Reel 3",
  },
];

type InstagramEmbed = {
  id: string;
  src: string;
  title: string;
};

type SalonWebsiteProps = {
  dynamicInstagramEmbeds?: InstagramEmbed[];
};


function SalonWebsite({ dynamicInstagramEmbeds }: SalonWebsiteProps) {
  const sanitizedWhatsApp = whatsappNumber.replace(/[^0-9]/g, "");
  const waLink = `https://wa.me/${sanitizedWhatsApp}`;

  const instaItems =
    dynamicInstagramEmbeds && dynamicInstagramEmbeds.length
      ? dynamicInstagramEmbeds
      : instagramEmbeds;

  const [activeInstaIndex, setActiveInstaIndex] = useState(0);
  const [activeServiceTab, setActiveServiceTab] = useState<"lashes" | "browsLips" | "nails">("lashes");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePrev = () => {
    setActiveInstaIndex((prev) => (prev - 1 + instaItems.length) % instaItems.length);
  };

  const handleNext = () => {
    setActiveInstaIndex((prev) => (prev + 1) % instaItems.length);
  };

  const currentServices =
    activeServiceTab === "lashes"
      ? lashServices
      : activeServiceTab === "browsLips"
      ? browLipServices
      : nailServices;

  const isLashes = activeServiceTab === "lashes";
  const isBrowsLips = activeServiceTab === "browsLips";
  const isNails = activeServiceTab === "nails";

  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#3b2b22] font-sans">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-[#fdf7ef] via-[#f7ecdf] to-[#fdf7ef] border-b border-[#e0cfbf] backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logoSrc} alt="logo" className="h-12 w-12 object-contain rounded" />
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-[0.35em] uppercase text-[#b9824a]">
                {salonName}
              </h1>
              <p className="text-sm text-[#6b5a4a]">Luxury Lash, Brow, Lip &amp; Nail Studio</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#services" className="hover:text-[#c89a6c]">
              Services
            </a>
            <a href="#promos" className="hover:text-[#c89a6c]">
              Promos
            </a>
            <a href="#gallery" className="hover:text-[#c89a6c]">
              Gallery
            </a>
            <a href="#about" className="hover:text-[#c89a6c]">
              About
            </a>
            <a
              href="#contact"
              className="bg-[#d9b99b] text-black px-3 py-2 rounded-full font-semibold shadow-sm hover:shadow-md hover:bg-[#e4c7a8] transition"
            >
              Book Now
            </a>
          </nav>

          <div className="md:hidden">
            <a
              href={bookingLink}
              className="inline-flex items-center gap-2 bg-[#d9b99b] text-[#3b2b22] font-semibold px-3 py-2 rounded-full text-sm shadow-sm"
            >
              Book
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-10 items-center rounded-3xl border border-[#e0cfbf] bg-[#fff9f2] px-6 py-10 shadow-lg">
          <div>
            {/* Limited gift badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#f4debf] text-[#5b4533] px-4 py-1 text-xs font-semibold uppercase tracking-wide mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b9824a]" />
              <span>Glow Hydrate Gift • First 50 bookings</span>
            </div>

            <div className="relative mb-6">
              <h2 className="text-4xl md:text-6xl font-serif font-bold bg-gradient-to-r from-[#b9824a] via-[#e4c7a8] to-[#b9824a] bg-clip-text text-transparent text-center md:text-left tracking-tight drop-shadow-[0_1px_1px_rgba(185,130,74,0.4)]">
                Luxe Beauty, Tailored For You ✨
              </h2>
              {/* Shimmer sweep */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 -left-1/3 w-1/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2.8s_ease-in-out_infinite]" />
              </div>
              {/* Sparkles around headline */}
              <span className="pointer-events-none absolute -top-1 left-1/4 h-1.5 w-1.5 rounded-full bg-[#fef3c7] opacity-60 shadow-[0_0_6px_rgba(255,243,199,0.7)] animate-pulse" />
              <span className="pointer-events-none absolute top-2 right-1/5 h-1 w-1 rounded-full bg-[#fff7dd] opacity-60 shadow-[0_0_4px_rgba(255,247,221,0.6)] animate-pulse" />
            </div>
            <p className="text-[#6b5a4a] mb-6">
              Experience premium lash artistry, brow &amp; lip embroidery and gel nails — crafted to enhance your natural
              glow.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={bookingLink}
                className="inline-block bg-[#d9b99b] text-[#3b2b22] font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:bg-[#e4c7a8] transition"
              >
                Book Your Slot
              </a>
              <a
                href={waLink}
                className="inline-flex items-center gap-2 border border-[#d9b99b] text-[#c89a6c] px-4 py-3 rounded-full hover:bg-[#f7ecdf] transition"
              >
                <Phone size={16} />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* PROMOS */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {promos.map((promo) => (
                <div key={promo.title} className="bg-[#fffaf4] border border-[#e0cfbf] p-4 rounded-2xl shadow-sm">
                  <h4 className="font-semibold text-[#c89a6c] text-sm">{promo.title}</h4>
                  <p className="text-xs text-[#6b5a4a] mt-1">{promo.detail}</p>
                  {promo.title === "Glow Hydrate Mini Bottle Gift" && (
                    <img
                      src="/images/glow-hydrate-bottle.png"
                      alt="Glow Hydrate Mini Bottle"
                      className="mt-3 w-32 h-auto rounded-xl border border-[#e0cfbf] shadow-md"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Floating dust particles */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
              <span className="absolute top-10 left-6 h-2 w-2 rounded-full bg-[#f5e7cf] opacity-60 animate-ping"></span>
              <span className="absolute top-1/3 right-10 h-1.5 w-1.5 rounded-full bg-[#e8d7b9] opacity-50 animate-pulse"></span>
              <span className="absolute bottom-8 left-1/4 h-2 w-2 rounded-full bg-[#f3e2c4] opacity-70 animate-ping"></span>
            </div>
            {/* Floating monogram emblem */}
            <div className="absolute -top-6 -left-6 z-20 flex items-center justify-center h-16 w-16 rounded-full bg-[#fffaf4]/80 backdrop-blur border border-[#e0cfbf] shadow-md">
              <div className="relative">
                <img
                  src={monogramSrc}
                  alt="Superlash Gold Emblem"
                  className="h-10 w-10 object-contain opacity-95 drop-shadow-md"
                />
                <span className="pointer-events-none absolute -top-2 left-1/2 h-2 w-2 rounded-full bg-[#fef3c7] shadow-[0_0_10px_rgba(255,230,180,0.9)] animate-ping" />
                <span className="pointer-events-none absolute top-3 right-1 h-1.5 w-1.5 rounded-full bg-[#fff7d6] shadow-[0_0_6px_rgba(255,230,180,0.9)] animate-pulse" />
              </div>
              {/* Extra sparkle */}
              <span className="pointer-events-none absolute -top-1 right-1 h-2 w-2 rounded-full bg-[#fef3c7] shadow-md animate-ping" />
            </div>

            <img
              src={heroImage}
              alt="studio"
              className="w-full rounded-2xl shadow-xl object-cover transform transition-transform duration-[6000ms] ease-out hover:scale-105"
            />

            {/* Hero bottle highlight in corner */}
            <div className="absolute -bottom-6 right-4 bg-[#fffaf4] border border-[#e0cfbf] rounded-2xl p-3 shadow-md flex items-center gap-2 max-w-[230px]">
              <img
                src="/images/glow-hydrate-bottle.png"
                alt="Glow Hydrate Mini Bottle"
                className="w-12 h-12 object-cover rounded-lg border border-[#e0cfbf] bg-white"
              />
              <div className="text-[11px] leading-snug text-[#6b5a4a]">
                Complimentary <span className="font-semibold">Glow Hydrate Mini Bottle</span> for the first
                <span className="font-semibold"> 50 bookings</span>.
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mt-16">
          <h3 className="text-2xl font-bold mb-4 text-[#c89a6c]">Services &amp; Prices</h3>
          <p className="text-[#6b5a4a] text-sm md:text-base mb-4">Select a category to explore our full menu.</p>

          {/* Category Tabs with soft underline */}
          <div className="inline-flex rounded-full border border-[#e0cfbf] bg-[#fffaf4] p-1 mb-6 text-xs md:text-sm">
            <button
              type="button"
              onClick={() => setActiveServiceTab("lashes")}
              className={`px-4 py-2 rounded-full transition flex flex-col items-center justify-center ${
                isLashes ? "bg-[#d9b99b] text-[#3b2b22] shadow-md" : "text-[#8a7560]"
              }`}
            >
              <span>Lashes</span>
              {isLashes && <span className="mt-0.5 h-[3px] w-8 rounded-full bg-[#c89a6c]" />}
            </button>
            <button
              type="button"
              onClick={() => setActiveServiceTab("browsLips")}
              className={`px-4 py-2 rounded-full transition flex flex-col items-center justify-center ${
                isBrowsLips ? "bg-[#d9b99b] text-[#3b2b22] shadow-md" : "text-[#8a7560]"
              }`}
            >
              <span>Brows &amp; Lips</span>
              {isBrowsLips && <span className="mt-0.5 h-[3px] w-10 rounded-full bg-[#c89a6c]" />}
            </button>
            <button
              type="button"
              onClick={() => setActiveServiceTab("nails")}
              className={`px-4 py-2 rounded-full transition flex flex-col items-center justify-center ${
                isNails ? "bg-[#d9b99b] text-[#3b2b22] shadow-md" : "text-[#8a7560]"
              }`}
            >
              <span>Nails</span>
              {isNails && <span className="mt-0.5 h-[3px] w-8 rounded-full bg-[#c89a6c]" />}
            </button>
          </div>

          {/* Services grid for active category */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentServices.map((s) => (
              <div
                key={s.title}
                className="bg-[#fffaf4] border border-[#e0cfbf] rounded-2xl p-5 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <div>
                  <h4 className="text-[#3b2b22] font-bold text-lg flex items-center gap-2">
                    {s.title}
                    {[
                      "LED Lash Extensions (Any Style)",
                      "Hybrid Brow Embroidery",
                      "Lip Embroidery A La Carte",
                      "Brow + Lip Embroidery Combo",
                    ].includes(s.title) && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#d9b99b] text-[#3b2b22] font-semibold uppercase">
                        Most Popular
                      </span>
                    )}
                    {[
                      "Brow + Lip Embroidery Combo",
                      "Lash Lift + Tint",
                      "LED Lash Add-On",
                      "Brow Lamination + Tint",
                      "LED Lash Extensions",
                      "Classic Gel Manicure",
                      "Design Gel Manicure",
                      "Design Gel Manicure + Extensions",
                    ].includes(s.title) && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#c89a6c] text-white font-semibold uppercase">
                        New
                      </span>
                    )}
                  </h4>
                  <p className="text-sm text-[#6b5a4a] mt-2 leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-[#c89a6c]">{s.price}</span>
                  <a
                    href={bookingLink}
                    className="text-sm font-semibold text-[#b9824a] border border-[#e0cfbf] px-3 py-1 rounded-full hover:bg-[#f7ecdf] transition shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_1px_6px_rgba(200,154,108,0.5)] relative overflow-visible hover:shadow-[0_0_12px_rgba(200,154,108,0.6)] after:content-[''] after:absolute after:-top-1 after:-right-1 after:h-2 after:w-2 after:rounded-full after:bg-[#f9e9c6] after:shadow-[0_0_8px_rgba(200,154,108,0.8)] after:animate-ping"
                  >
                    Book
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Nails mini menu callout when Nails tab selected */}
          {isNails && (
            <div className="mt-8 rounded-3xl border border-[#e0cfbf] bg-[#fffaf4] p-6 md:p-8">
              <h4 className="text-xl font-semibold text-[#c89a6c] mb-3">Nails Menu Highlight</h4>
              <p className="text-[#6b5a4a] text-sm md:text-base max-w-2xl">
                Inspired by our in-studio menu, Superlash Beauty Bar offers classic gel manicures, art sets and
                extensions — finished with overlay, shaping, cuticle care and a glossy top coat.
              </p>
            </div>
          )}
        </section>

        {/* PROMOS SECTION */}
        <section id="promos" className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-[#c89a6c]">Current Promos</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {promos.map((promo) => (
              <div
                key={promo.title}
                className="bg-gradient-to-br from-[#f4debf] to-[#f7e9cf] border border-[#e0cfbf] p-6 rounded-2xl shadow-sm"
              >
                <h4 className="text-lg font-bold text-[#b9824a]">{promo.title}</h4>
                <p className="text-sm text-[#6b5a4a] mt-2">{promo.detail}</p>
                <div className="mt-4">
                  <a
                    href={bookingLink}
                    className="inline-block bg-[#d9b99b] text-[#3b2b22] font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-[#e4c7a8] transition"
                  >
                    Grab the deal
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-16 bg-[#fffaf4] border border-[#e0cfbf] p-6 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 text-[#c89a6c]">About {salonName}</h3>
          <p className="text-[#6b5a4a]">
            A cozy private studio specialising in luxurious lash artistry, premium brow &amp; lip embroidery and gel nail
            services. Designed for long-lasting comfort and elegant enhancement.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#6b5a4a]">
            <li>• Certified lash, embroidery &amp; nail artists</li>
            <li>• Relaxing, clean private studio</li>
            <li>• Free touch-up for embroidery (within 1–2 months)</li>
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16 grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-[#fffaf4] border border-[#e0cfbf] p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-3 text-[#c89a6c]">Contact &amp; Location</h3>
            <p className="text-[#6b5a4a]">Address: 50B Phillips Avenue, Singapore 546996</p>
            <p className="text-[#6b5a4a] mt-2">Opening Hours: Mon–Sun 10:00 – 22:00</p>

            <div className="mt-4 rounded-2xl overflow-hidden border border-[#e0cfbf]">
              <iframe
                title="Superlash Beauty Bar map"
                src="https://www.google.com/maps?q=50B+Phillips+Avenue+Singapore+546996&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-56 md:h-64"
              />
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm">
              <a href={waLink} className="inline-flex items-center gap-2 text-[#c89a6c] hover:text-[#b9824a]">
                <Phone size={16} />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/superlashsg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#c89a6c] hover:text-[#b9824a]"
              >
                <Instagram size={16} />
                <span>@superlashsg</span>
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-[#c89a6c] hover:text-[#b9824a]">
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* FORM */}
          <form className="bg-[#fffaf4] border border-[#e0cfbf] p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-3 text-[#c89a6c]">Quick Enquiry / Booking</h3>
            <label className="block text-sm text-[#6b5a4a]">Name</label>
            <input
              className="w-full bg-[#f0e2d3] border border-[#e0cfbf] rounded px-3 py-2 mt-1 text-[#3b2b22]"
              placeholder="Your name"
            />

            <label className="block text-sm text-[#6b5a4a] mt-3">Phone / WhatsApp</label>
            <input
              className="w-full bg-[#f0e2d3] border border-[#e0cfbf] rounded px-3 py-2 mt-1 text-[#3b2b22]"
              placeholder="+65 9xxxxxxx"
            />

            <label className="block text-sm text-[#6b5a4a] mt-3">Message</label>
            <textarea
              className="w-full bg-[#f0e2d3] border border-[#e0cfbf] rounded px-3 py-2 mt-1 text-[#3b2b22]"
              rows={4}
              placeholder="Your preferred service & date"
            />

            <div className="mt-4 flex gap-3">
              <button type="button" className="bg-[#d9b99b] text-[#3b2b22] px-4 py-2 rounded-full font-semibold">
                Send
              </button>
              <a
                href={bookingLink}
                className="inline-flex items-center gap-2 border border-[#d9b99b] px-4 py-2 rounded-full text-[#b9824a] hover:bg-[#f7ecdf] transition"
              >
                Book Online
              </a>
            </div>
          </form>
        </section>

        {/* GALLERY & INSTAGRAM */}
        <section id="gallery" className="mt-16">
          <h3 className="text-2xl font-bold mb-4 text-[#c89a6c] text-center md:text-left">
            Studio &amp; Work Gallery
          </h3>
          <p className="text-[#6b5a4a] max-w-2xl text-sm md:text-base mb-6 text-center md:text-left">
            A glimpse into our lash work, nails, brow details and the cozy Superlash Beauty Bar space.
          </p>

          {/* Photo grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-2xl border border-[#e0cfbf] bg-[#fffaf4] transition duration-300 hover:-translate-y-1 hover:border-[#c89a6c]/60 hover:shadow-lg">
              <img
                src="/images/gallery-lash-1.jpg"
                alt="Wispy lash set at Superlash Beauty Bar"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[#e0cfbf] bg-[#fffaf4] transition duration-300 hover:-translate-y-1 hover:border-[#c89a6c]/60 hover:shadow-lg">
              <img
                src="/images/gallery-lash-2.jpg"
                alt="Soft natural lash extensions close-up"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[#e0cfbf] bg-[#fffaf4] transition duration-300 hover:-translate-y-1 hover:border-[#c89a6c]/60 hover:shadow-lg">
              <img
                src="/images/gallery-brow-1.jpg"
                alt="Brow embroidery detail in studio"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[#e0cfbf] bg-[#fffaf4] transition duration-300 hover:-translate-y-1 hover:border-[#c89a6c]/60 hover:shadow-lg lg:block hidden">
              <img
                src="/images/gallery-studio-1.jpg"
                alt="Cozy Superlash Beauty Bar studio interior"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>

          {/* Instagram embeds section */}
          <h4 className="text-xl font-semibold mt-10 mb-3 text-[#c89a6c] text-center md:text-left">
            Featured on Instagram
          </h4>
          <p className="text-[#6b5a4a] text-sm md:text-base mb-2 text-center md:text-left">
            Watch our real client transformations and studio vibes — straight from Instagram.
          </p>
          <div className="mb-6 flex justify-center md:justify-start">
            <a
              href="https://www.instagram.com/superlashsg"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d9b99b]/60 px-4 py-2 text-xs md:text-sm font-semibold text-[#b9824a] uppercase tracking-wide hover:bg-[#d9b99b] hover:text-black transition"
            >
              <Instagram size={14} />
              <span>Follow @superlashsg</span>
            </a>
          </div>

          <div className="mt-4 bg-[#f9efe3] border border-[#e0cfbf] rounded-2xl p-4 shadow-sm">
            {instaItems && instaItems.length > 0 && (
              <div className="relative w-full overflow-hidden rounded-2xl border border-[#e0cfbf] bg-[#f9efe3] aspect-[9/16] transition duration-300 hover:-translate-y-1 hover:border-[#c89a6c]/60 hover:shadow-lg">
                <iframe
                  key={instaItems[activeInstaIndex].id}
                  src={instaItems[activeInstaIndex].src}
                  title={instaItems[activeInstaIndex].title}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  frameBorder="0"
                />
              </div>
            )}

            {instaItems && instaItems.length > 1 && (
              <div className="mt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="rounded-full border border-[#d2bfae] px-3 py-1 text-xs text-[#5b534c] hover:border-[#c89a6c] hover:text-[#c89a6c] transition"
                >
                  Prev
                </button>
                <div className="flex-1 flex justify-center gap-2">
                  {instaItems.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveInstaIndex(index)}
                      className={`h-2 w-2 rounded-full transition ${
                        index === activeInstaIndex ? "bg-[#c89a6c]" : "bg-[#d2bfae]"
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  className="rounded-full border border-[#d2bfae] px-3 py-1 text-xs text-[#5b534c] hover:border-[#c89a6c] hover:text-[#c89a6c] transition"
                >
                  Next
                </button>
              </div>
            )}

            {instaItems && instaItems.length > 0 && (
              <div className="mt-4 flex justify-center">
                <a
                  href="https://www.instagram.com/superlashsg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d9b99b] px-4 py-2 text-xs md:text-sm font-semibold text-[#b9824a] hover:bg-[#d9b99b] hover:text-black transition"
                >
                  <Instagram size={14} />
                  <span>View more on Instagram</span>
                </a>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* FOOTER with monogram & sparkle */}
      <footer className="bg-[#fffaf4] border-t border-[#e0cfbf] mt-12">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center text-center gap-3">
          <div className="relative flex flex-col items-center gap-2">
            <img
              src={monogramSrc}
              alt="Superlash Monogram Logo"
              className="h-12 w-12 object-contain opacity-95 drop-shadow-md animate-pulse"
            />
            <span className="pointer-events-none absolute -top-1 right-[30%] h-2 w-2 rounded-full bg-[#fef3c7] shadow-md animate-ping" />
            <h2 className="text-lg tracking-[0.25em] font-semibold text-[#3b2b22] uppercase">
              Superlash Beauty Bar
            </h2>
          </div>

          <div className="flex items-center gap-2 text-[#b9824a] text-sm font-medium select-none">
            <span className="h-px w-8 bg-[#d9b99b]" />
            <span>ESTABLISHED 2023</span>
            <span className="h-px w-8 bg-[#d9b99b]" />
          </div>

          <p className="text-[#6b5a4a] text-sm">Luxury Lash • Brow • Lip • Nail Studio</p>

          <p className="text-[#8f7a66] text-xs mt-2">© 2023 Superlash Beauty Bar. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating action buttons */}
      <div className="fixed bottom-6 right-4 flex flex-col items-end gap-3 z-50">
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-green-500 text-white px-4 py-2 text-sm font-semibold shadow-lg hover:bg-green-400 transition"
        >
          <Phone size={16} />
          <span>Chat on WhatsApp</span>
        </a>
        <a
          href={bookingLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#d9b99b] text-[#3b2b22] px-4 py-2 text-sm font-semibold shadow-lg hover:bg-[#e4c7a8] transition"
        >
          <span>Book Now</span>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return <SalonWebsite />;
}
