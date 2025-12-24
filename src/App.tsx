// src/App.tsx
import React, { useEffect, useMemo, useState } from "react";
import { Phone, Instagram, Mail } from "lucide-react";

const salonName = "Superlash Beauty Bar";
const logoSrc = "/images/superlash-logo.png";
const heroImage = "/hero.jpg";
const whatsappNumber = "+6586844399";
const bookingLink = "https://sody.app/superlashsg/book";

function sanitizePhoneToDigits(input: string) {
  return input.replace(/[^0-9]/g, "");
}

// LASH SERVICES
const lashServices = [
  {
    title: "LED Lash Extensions (Any Style)",
    desc: "Natural, volume, hybrid, manga — in LED application for longer retention.",
    price: "$78 First Trial (any style)",
  },
  {
    title: "LED Lash Extensions",
    desc: "Long-lasting, fast curing, reduced sensitivity.",
    price: "Any Style — Top-up only $50 with Brow/Lip Embroidery",
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
  { title: "Brow Lamination + Tint", desc: "Lifts, shapes and sets brows for a fuller look. Includes tint.", price: "$50" },
  { title: "Featherstroke Brow Embroidery", desc: "Soft strokes for natural hair-like finish.", price: "$288 (free touch-up after 1 month)" },
  { title: "Misty Brow Embroidery", desc: "Powdery, soft-focus gradient look.", price: "$268 (free touch-up after 1 month)" },
  { title: "Hybrid Brow Embroidery", desc: "Combination of strokes + shading.", price: "$288 (free touch-up after 1 month)" },
  { title: "Lip Embroidery A La Carte", desc: "Includes free touch-up after 2 months.", price: "$358" },
  { title: "Brow + Lip Embroidery Combo", desc: "Both services with free touch-ups included.", price: "$599" },
];

// NAIL SERVICES
const nailServices = [
  { title: "Classic Gel Manicure", desc: "Single tone / French tips / cat-eye / ombré / glitter. Includes overlay, shaping, cuticle care, top coat & nail oil.", price: "$48" },
  { title: "Classic Gel Manicure (Art)", desc: "Simple drawings up to 6 fingers, unlimited charms, stickers & glitter. Includes overlay, shaping, cuticle care, top coat & nail oil.", price: "$58" },
  { title: "Classic Gel Manicure + Extensions", desc: "Classic manicure with extensions & simple art. Includes overlay, shaping, cuticle care, top coat & nail oil.", price: "$68" },
  { title: "Nail Add-Ons", desc: "3D gel sculpting, intricate drawings, removal only (without new set).", price: "$15 each" },
];

const promos = [
  { title: "12.12 LUXE FLASH SALE", detail: "Enjoy exclusive festive rates + priority slots!" },
  {
    title: "Glow Hydrate Mini Bottle Gift",
    detail: "Our exclusive Glow Hydrate Mini Bottle — printed with our Superlash logo. Free for the first 50 bookings only!",
  },
  { title: "Embroidery + LED Lash Bundle", detail: "Top up only $50 to add LED Lash Extensions (any style)." },
];

const instagramEmbeds = [
  { id: "insta-1", src: "https://www.instagram.com/reel/DQ8g4RHEVnA/embed", title: "SuperlashSG Reel 1" },
  { id: "insta-2", src: "https://www.instagram.com/reel/DRYiWUHEnYe/embed", title: "SuperlashSG Reel 2" },
  { id: "insta-3", src: "https://www.instagram.com/reel/DRRjbylEa4g/embed", title: "SuperlashSG Reel 3" },
];

export default function App() {
  const waLink = useMemo(() => `https://wa.me/${sanitizePhoneToDigits(whatsappNumber)}`, []);

  const [activeInstaIndex, setActiveInstaIndex] = useState(0);
  const [activeServiceTab, setActiveServiceTab] = useState<"lashes" | "browsLips" | "nails">("lashes");

  const instaItems = instagramEmbeds;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const currentServices =
    activeServiceTab === "lashes" ? lashServices : activeServiceTab === "browsLips" ? browLipServices : nailServices;

  const isLashes = activeServiceTab === "lashes";
  const isBrowsLips = activeServiceTab === "browsLips";
  const isNails = activeServiceTab === "nails";

  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#3b2b22] font-sans">
      <header className="bg-gradient-to-r from-[#fdf7ef] via-[#f7ecdf] to-[#fdf7ef] border-b border-[#e0cfbf] backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logoSrc} alt="Superlash logo" className="h-20 w-20 object-contain" />
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-[0.35em] uppercase text-[#b9824a]">
                {salonName}
              </h1>
              <p className="text-sm text-[#6b5a4a]">Luxury Lash, Brow, Lip &amp; Nail Studio</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#services" className="hover:text-[#c89a6c]">Services</a>
            <a href="#promos" className="hover:text-[#c89a6c]">Promos</a>
            <a href="#gallery" className="hover:text-[#c89a6c]">Gallery</a>
            <a href="#about" className="hover:text-[#c89a6c]">About</a>
            <a href="#contact" className="bg-[#d9b99b] text-black px-3 py-2 rounded-full font-semibold shadow-sm hover:shadow-md hover:bg-[#e4c7a8] transition">
              Book Now
            </a>
          </nav>

          <div className="md:hidden">
            <a href={bookingLink} className="inline-flex items-center gap-2 bg-[#d9b99b] text-[#3b2b22] font-semibold px-3 py-2 rounded-full text-sm shadow-sm">
              Book
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-10 items-center rounded-3xl border border-[#e0cfbf] bg-[#fff9f2] px-6 py-10 shadow-lg">
          <div>
            <div className="relative mb-6">
              <h2 className="text-4xl md:text-6xl font-serif font-bold bg-gradient-to-r from-[#b9824a] via-[#e4c7a8] to-[#b9824a] bg-clip-text text-transparent text-center md:text-left tracking-tight drop-shadow-[0_1px_1px_rgba(185,130,74,0.4)]">
                Luxe Beauty, Tailored For You ✨
              </h2>
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 -left-1/3 w-1/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2.8s_ease-in-out_infinite]" />
              </div>
            </div>

            <p className="text-[#6b5a4a] mb-6">
              Experience premium lash artistry, brow &amp; lip embroidery and gel nails — crafted to enhance your natural glow.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href={bookingLink} className="inline-block bg-[#d9b99b] text-[#3b2b22] font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:bg-[#e4c7a8] transition">
                Book Your Slot
              </a>
              <a href={waLink} className="inline-flex items-center gap-2 border border-[#d9b99b] text-[#c89a6c] px-4 py-3 rounded-full hover:bg-[#f7ecdf] transition">
                <Phone size={16} />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {promos.map((promo) => (
                <div key={promo.title} className="space-y-1 text-xs md:text-sm">
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
            <img src={heroImage} alt="Studio" className="w-full rounded-2xl shadow-xl object-cover" />
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mt-16">
          <h3 className="text-2xl font-bold mb-4 text-[#c89a6c]">Services &amp; Prices</h3>

          <div className="inline-flex rounded-full border border-[#e0cfbf] bg-[#fffaf4] p-1 mb-6 text-xs md:text-sm">
            <button type="button" onClick={() => setActiveServiceTab("lashes")}
              className={`px-4 py-2 rounded-full transition ${isLashes ? "bg-[#d9b99b] text-[#3b2b22] shadow-md" : "text-[#8a7560]"}`}>
              Lashes
            </button>
            <button type="button" onClick={() => setActiveServiceTab("browsLips")}
              className={`px-4 py-2 rounded-full transition ${isBrowsLips ? "bg-[#d9b99b] text-[#3b2b22] shadow-md" : "text-[#8a7560]"}`}>
              Brows &amp; Lips
            </button>
            <button type="button" onClick={() => setActiveServiceTab("nails")}
              className={`px-4 py-2 rounded-full transition ${isNails ? "bg-[#d9b99b] text-[#3b2b22] shadow-md" : "text-[#8a7560]"}`}>
              Nails
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentServices.map((s) => (
              <div key={s.title} className="bg-[#fffaf4] border border-[#e0cfbf] rounded-2xl p-5 shadow-sm">
                <h4 className="text-[#3b2b22] font-bold text-lg">{s.title}</h4>
                <p className="text-sm text-[#6b5a4a] mt-2">{s.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-[#c89a6c]">{s.price}</span>
                  <a href={bookingLink} className="text-sm font-semibold text-[#b9824a] border border-[#e0cfbf] px-3 py-1 rounded-full hover:bg-[#f7ecdf] transition">
                    Book
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY (embed) */}
        <section id="gallery" className="mt-16">
          <h3 className="text-2xl font-bold mb-4 text-[#c89a6c]">Gallery</h3>
          <div className="mt-4 bg-[#f9efe3] border border-[#e0cfbf] rounded-2xl p-4 shadow-sm">
            <div className="relative w-full overflow-hidden rounded-2xl border border-[#e0cfbf] bg-[#f9efe3] aspect-[9/16]">
              <iframe
                key={instaItems[activeInstaIndex].id}
                src={instaItems[activeInstaIndex].src}
                title={instaItems[activeInstaIndex].title}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                frameBorder={0}
              />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveInstaIndex((i) => (i - 1 + instaItems.length) % instaItems.length)}
                className="rounded-full border border-[#d2bfae] px-3 py-1 text-xs hover:border-[#c89a6c] transition"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() => setActiveInstaIndex((i) => (i + 1) % instaItems.length)}
                className="rounded-full border border-[#d2bfae] px-3 py-1 text-xs hover:border-[#c89a6c] transition"
              >
                Next
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-16 bg-[#fffaf4] border border-[#e0cfbf] p-6 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 text-[#c89a6c]">About {salonName}</h3>
          <p className="text-[#6b5a4a]">
            A cozy private studio specialising in luxurious lash artistry, premium brow &amp; lip embroidery and gel nail services.
          </p>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16 grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-[#fffaf4] border border-[#e0cfbf] p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-3 text-[#c89a6c]">Contact &amp; Location</h3>
            <p className="text-[#6b5a4a]">Address: 50B Phillips Avenue, Singapore 546996</p>
            <p className="text-[#6b5a4a] mt-2">Opening Hours: Mon–Sun 10:00 – 22:00</p>

            <div className="mt-4 flex items-center gap-4 text-sm">
              <a href={waLink} className="inline-flex items-center gap-2 text-[#c89a6c] hover:text-[#b9824a]">
                <Phone size={16} />
                <span>WhatsApp</span>
              </a>
              <a href="https://www.instagram.com/superlashsg" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#c89a6c] hover:text-[#b9824a]">
                <Instagram size={16} />
                <span>@superlashsg</span>
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-[#c89a6c] hover:text-[#b9824a]">
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#fffaf4] border-t border-[#e0cfbf] mt-12">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center text-center gap-3">
          <p className="text-[#8f7a66] text-xs">© 2023 Superlash Beauty Bar. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-120%); opacity: 0; }
          25% { opacity: 0.35; }
          50% { opacity: 0.25; }
          100% { transform: translateX(260%); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
