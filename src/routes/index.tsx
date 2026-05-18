import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import projectOffside from "@/assets/project-offside.png";
import projectPrime from "@/assets/project-prime.jpg";
import brandOffside from "@/assets/brand-offside.jpg";
import brandPrime from "@/assets/brand-prime.jpg";
import brandKayan from "@/assets/brand-kayan.jpg";
import brandPenavio from "@/assets/brand-penawio.png";
import brandSeoudi from "@/assets/brand-seoudi.png";
import brandFuelup from "@/assets/brand-fuelup.png";
import brandKhaleds from "@/assets/brand-khaleds.png";
import result1 from "@/assets/result-1.png";
import result2 from "@/assets/result-2.png";
import result3 from "@/assets/result-3.png";
import result4 from "@/assets/result-4.png";
import result5 from "@/assets/result-5.png";
import result6 from "@/assets/result-6.png";
import result7 from "@/assets/result-7.png";
import workKhaleds1 from "@/assets/work-khaleds-1.jpg";
import workKhaleds2 from "@/assets/work-khaleds-2.jpg";
import workKhaleds3 from "@/assets/work-khaleds-3.jpg";
import workFuelup1 from "@/assets/work-fuelup-1.jpg";
import workFuelup2 from "@/assets/work-fuelup-2.jpg";
import kayanVideo from "@/assets/kayan-video.mp4";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "https://wa.me/201090196974";
const INSTAGRAM = "https://instagram.com/mohamad_ali.official";
const LINKEDIN = "https://linkedin.com/in/mohamedeibrahim";
const FACEBOOK = "https://www.facebook.com/mohamed.aly.248809";

const projects = [
  {
    img: projectOffside,
    title: "Offside — Sportswear Campaign",
    client: "Offside",
    year: "2025",
    tag: "Brand Campaign",
    desc: "Stadium-energy social campaign that drove brand recall for a homegrown sportswear label.",
  },
  {
    video: kayanVideo,
    poster: brandKayan,
    title: "Kayan Medical Lab — Reels",
    client: "Kayan",
    year: "2025",
    tag: "Video / Reels",
    desc: "Short-form storytelling that turned a medical lab into a recognizable, trusted name.",
  },
  {
    img: projectPrime,
    title: "Prime — E-commerce Solutions",
    client: "Prime Agency",
    year: "2024",
    tag: "Content Series",
    desc: "Concept-led visuals for an e-commerce solutions company. Bold copy, premium look.",
  },
  {
    img: brandPenavio,
    title: "Penavio — Brand Launch",
    client: "Penavio",
    year: "2024",
    tag: "Identity / Launch",
    desc: "Launch content & motion direction for a fresh, energetic tech-forward brand.",
  },
  {
    img: workKhaleds1,
    title: "Khaled's — Pizza Campaign",
    client: "Khaled's",
    year: "2025",
    tag: "Social / Arabic",
    desc: "Bold Arabic typography meets bold flavors — high-impact food campaigns for KSA.",
  },
  {
    img: workKhaleds2,
    title: "Khaled's — Burger Drop",
    client: "Khaled's",
    year: "2025",
    tag: "Product / Social",
    desc: "Appetite-first product visuals built to stop the scroll on Instagram.",
  },
  {
    img: workKhaleds3,
    title: "Khaled's — Around the World",
    client: "Khaled's",
    year: "2025",
    tag: "Concept / Social",
    desc: "Cinematic concept post turning a pizza slice into a journey around the world.",
  },
  {
    img: workFuelup1,
    title: "FuelUp — Batman Pack",
    client: "FuelUp Supplements",
    year: "2025",
    tag: "Campaign / Cinematic",
    desc: "Hero-energy supplement campaign — superhero visuals for serious athletes.",
  },
  {
    img: workFuelup2,
    title: "FuelUp — Hulk Pack",
    client: "FuelUp Supplements",
    year: "2025",
    tag: "Campaign / Cinematic",
    desc: "Mass-gain pack told through Hulk-scale energy and impact.",
  },
];

const brands = [
  { name: "Offside", img: brandOffside },
  { name: "Prime", img: brandPrime },
  { name: "Kayan", img: brandKayan },
  { name: "Penavio", img: brandPenavio },
  { name: "Seoudi", img: brandSeoudi },
  { name: "FuelUp", img: brandFuelup },
  { name: "Khaled's", img: brandKhaleds },
];

const results = [
  { img: result1, label: "193,042 Views", sub: "Nov 15 – Dec 15" },
  { img: result2, label: "226,042 Views", sub: "Dec 15 – Jan 12" },
  { img: result3, label: "+262% Engagement", sub: "Instagram Insights" },
  { img: result5, label: "67.5K Views", sub: "Oct 18 – 23 · Instagram" },
  { img: result4, label: "13.3K Views", sub: "Oct 18 – 23 · Instagram" },
  { img: result7, label: "64K Views", sub: "Oct 11 – 18 · Instagram" },
  { img: result6, label: "+344% Reach", sub: "Oct 11 – 18 · Instagram" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[Inter,sans-serif] overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <Brands />
      <Results />
      <About />
      <Contact />
      <Footer />
      <Cursor />
    </div>
  );
}

function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block w-6 h-6 rounded-full mix-blend-difference bg-white"
      animate={{ x: pos.x - 12, y: pos.y - 12 }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.3 }}
    />
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/5" : "mix-blend-difference"}`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-5">
        <a href="#top" className="font-[Bebas_Neue] text-2xl tracking-[0.2em] text-white">
          MOHAMED<span className="text-[var(--gold)]">.</span>ALI
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.25em] text-white">
          <a href="#work" className="hover:text-[var(--gold)] transition">
            Work
          </a>
          <a href="#brands" className="hover:text-[var(--gold)] transition">
            Brands
          </a>
          <a href="#results" className="hover:text-[var(--gold)] transition">
            Results
          </a>
          <a href="#about" className="hover:text-[var(--gold)] transition">
            About
          </a>
          <a href="#contact" className="hover:text-[var(--gold)] transition">
            Contact
          </a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="text-xs uppercase tracking-[0.25em] text-white border border-white/40 px-4 py-2 hover:bg-white hover:text-black transition"
        >
          Let's talk
        </a>
      </div>
    </motion.header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const headline = "Stories that".split(" ");
  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden flex items-end">
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/10 via-black to-black"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.15),transparent_60%)]" />

      <motion.div style={{ opacity }} className="relative w-full px-6 md:px-12 pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-6"
        >
          Content Creative · Cairo / Worldwide
        </motion.p>
        <h1 className="font-[Bebas_Neue] leading-[0.85] tracking-tight text-[18vw] md:text-[12vw] text-white">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {headline.join(" ")}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="block italic font-serif text-[var(--gold)] tracking-tight"
            >
              break <span className="text-white not-italic font-[Bebas_Neue]">the formula.</span>
            </motion.span>
          </span>
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-5xl"
        >
          <p className="text-base md:text-lg text-white/70 max-w-md">
            I'm Mohamed Ali — a content creative building bold campaigns, video, and brand worlds
            for people who refuse to blend in.
          </p>
          <a
            href="#work"
            className="text-xs uppercase tracking-[0.3em] text-white border-b border-[var(--gold)] pb-1 self-start md:self-end"
          >
            See selected work ↓
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.3em] uppercase"
      >
        scroll
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Brand Films",
    "Campaigns",
    "Social",
    "Reels",
    "Direction",
    "Concept",
    "Story",
    "Identity",
  ];
  return (
    <div className="border-y border-white/10 py-6 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap font-[Bebas_Neue] text-3xl md:text-5xl tracking-widest"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="text-white/80">{t}</span>
            <span className="text-[var(--gold)]">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="px-6 md:px-12 py-24 md:py-32">
      <div className="flex items-end justify-between mb-16">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-3">
            01 — Selected Work
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-[Bebas_Neue] text-6xl md:text-8xl tracking-tight"
          >
            Projects & Brands
          </motion.h2>
        </div>
        <p className="hidden md:block text-sm text-white/50 max-w-xs">
          A curated cut from recent collaborations across brand, e-commerce and editorial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((w, i) => (
          <ProjectCard key={i} w={w} i={i} />
        ))}
      </div>
    </section>
  );
}

type Project = {
  img?: string;
  video?: string;
  poster?: string;
  title: string;
  client: string;
  year: string;
  tag: string;
  desc: string;
};

function ProjectCard({ w, i }: { w: Project; i: number }) {
  const [hover, setHover] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (!videoRef.current) return;
    if (hover) videoRef.current.play().catch(() => {});
    else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [hover]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative overflow-hidden aspect-[4/5] md:aspect-[16/10] group cursor-pointer ${i === 0 ? "md:col-span-2 md:aspect-[21/9]" : ""}`}
    >
      {w.video ? (
        <>
          <img
            src={w.poster}
            alt={w.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <video
            ref={videoRef}
            src={w.video}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hover ? "opacity-100" : "opacity-0"}`}
          />
        </>
      ) : (
        <motion.img
          src={w.img}
          alt={w.title}
          loading="lazy"
          animate={{ scale: hover ? 1.08 : 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
      <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-3">
          <span>{w.tag}</span>
          <span className="w-8 h-px bg-[var(--gold)]" />
          <span>{w.year}</span>
        </div>
        <h3 className="font-[Bebas_Neue] text-3xl md:text-5xl tracking-tight text-white">
          {w.title}
        </h3>
        <p className="text-sm text-white/60 mt-1">for {w.client}</p>
        <AnimatePresence>
          {hover && (
            <motion.p
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 10, height: 0 }}
              className="text-sm text-white/70 mt-3 max-w-md"
            >
              {w.desc}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        animate={{ scale: hover ? 1 : 0.6, opacity: hover ? 1 : 0, rotate: hover ? 0 : -45 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-6 right-6 w-20 h-20 rounded-full bg-[var(--gold)] text-black flex items-center justify-center font-[Bebas_Neue] text-sm tracking-widest"
      >
        VIEW →
      </motion.div>
    </motion.div>
  );
}

function Brands() {
  return (
    <section id="brands" className="px-6 md:px-12 py-24 md:py-32 border-t border-white/10">
      <div className="mb-14">
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-3">
          02 — Trusted By
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-[Bebas_Neue] text-5xl md:text-7xl tracking-tight"
        >
          Brands I've shaped.
        </motion.h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
        {brands.map((b, i) => (
          <motion.div
            key={b.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ scale: 1.02 }}
            className="bg-background aspect-square flex items-center justify-center p-6 group overflow-hidden relative"
          >
            <img
              src={b.img}
              alt={b.name}
              className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.3em] text-white/40 group-hover:text-[var(--gold)] transition">
              {b.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="results" className="px-6 md:px-12 py-24 md:py-32 border-t border-white/10">
      <div className="mb-14">
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-3">
          03 — Real Results
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-[Bebas_Neue] text-5xl md:text-7xl tracking-tight"
        >
          Numbers that
          <br />
          <span className="italic font-serif text-[var(--gold)]">don't</span> lie.
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {results.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="border border-white/10 bg-white/[0.02] overflow-hidden group"
          >
            <div className="aspect-[3/4] overflow-hidden bg-white/5 flex items-center justify-center">
              <img
                src={r.img}
                alt={r.label}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-5 border-t border-white/10">
              <div className="font-[Bebas_Neue] text-3xl tracking-wider text-[var(--gold)]">
                {r.label}
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/50 mt-1">{r.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-24 md:py-32 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-3">04 — About</p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-[Bebas_Neue] text-6xl md:text-8xl tracking-tight leading-none"
          >
            The
            <br />
            Maker.
          </motion.h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg md:text-xl text-white/80 leading-relaxed">
          <p>
            I'm Mohamed Ali — a content creative obsessed with the moment a brand stops sounding
            like a brand and starts sounding like a person.
          </p>
          <p className="text-white/60 text-base">
            From concept to camera to caption, I build stories that earn attention instead of buying
            it. I work with founders, agencies and labels to ship work that's loud, specific, and
            honest.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
            {[
              { n: "60+", l: "Projects" },
              { n: "12", l: "Brands" },
              { n: "4yr", l: "Experience" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-[Bebas_Neue] text-4xl md:text-5xl text-[var(--gold)]">
                  {s.n}
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-white/50 mt-1">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const socials = [
    { label: "WhatsApp", value: "+20 109 019 6974", href: WHATSAPP },
    { label: "Instagram", value: "@mohamad_ali.official", href: INSTAGRAM },
    { label: "LinkedIn", value: "mohamedeibrahim", href: LINKEDIN },
    { label: "Facebook", value: "mohamed.aly", href: FACEBOOK },
  ];
  return (
    <section id="contact" className="px-6 md:px-12 py-24 md:py-32 border-t border-white/10">
      <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-6">05 — Contact</p>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-[Bebas_Neue] text-6xl md:text-[12vw] leading-[0.85] tracking-tight"
      >
        Got a story
        <br />
        <span className="italic font-serif text-[var(--gold)]">worth</span> telling?
      </motion.h2>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-12 font-[Bebas_Neue] text-2xl md:text-3xl tracking-widest border-b-2 border-[var(--gold)] pb-2 hover:text-[var(--gold)] transition"
      >
        START A PROJECT →
      </a>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
        {socials.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-background p-4 md:p-5 group hover:bg-[var(--gold)] hover:text-black transition-colors"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/50 group-hover:text-black/60 mb-2">
              {s.label}
            </div>
            <div className="font-[Bebas_Neue] text-base md:text-lg tracking-wider truncate">
              {s.value}
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition">
              Open →
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 md:px-12 py-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-white/40">
      <div>© {new Date().getFullYear()} Mohamed Ali</div>
      <div>Content Creative · Director · Storyteller</div>
    </footer>
  );
}
