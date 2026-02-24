"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("inicio");
  const pathname = usePathname();
  const router = useRouter();
  const obsRef = useRef<IntersectionObserver | null>(null);

  const sections = [
    { id: "inicio", label: "Inicio" },
    { id: "servicios", label: "Servicios" },
    { id: "faq", label: "FAQ" }
  ];

  useEffect(() => {
    if (pathname !== "/") {
      setActive("");
      return;
    }

    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    obsRef.current?.disconnect();
    obsRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: [0.15, 0.4, 0.6] }
    );

    els.forEach((el) => obsRef.current?.observe(el));

    return () => obsRef.current?.disconnect();
  }, [pathname]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleInternal = async (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    if (pathname === "/") {
      scrollToId(id);
      return;
    }
    // navigate to home then scroll after render
    await router.push("/");
    // small delay to ensure DOM painted
    setTimeout(() => scrollToId(id), 120);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-[#0B1829] to-[#153047] text-white backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-cyan-600 via-cyan-700 to-blue-700 shadow-xl drop-shadow-lg ring-2 ring-cyan-300/60 p-2 hover:shadow-2xl hover:ring-cyan-200 transition-all duration-300">
              <img src="/logo-sin-fondo.png" alt="Backup Tecno" className="w-10 h-10 object-contain drop-shadow-2xl filter brightness-200 contrast-150 saturate-150" />
            </div>
            <span className="text-lg font-bold text-white">Backup Tecno</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={(e) => handleInternal(e, s.id)}
              className={`relative px-2 py-1 font-medium transition text-sm ${active === s.id ? 'text-cyan-200' : 'text-white/90 hover:text-cyan-200'}`}
            >
              {s.label}
              <span className={`absolute left-0 -bottom-2 h-0.5 bg-cyan-200 transition-all ${active === s.id ? 'w-full' : 'w-0'}`}></span>
            </button>
          ))}

          <Link href="/proyectos" className="text-white/90 hover:text-cyan-200 font-medium">Proyectos</Link>
          <Link href="/nosotros" className="text-white/90 hover:text-cyan-200 font-medium">Nosotros</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" onClick={(e) => { e.preventDefault(); handleInternal(e, 'servicios'); }} className="px-4 py-2 bg-white text-[#0B1829] rounded-full font-bold shadow hover:scale-105 transition-transform">Contactar</a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Abrir menú" className="p-2 rounded-md bg-white/10 hover:bg-white/20">
            <div className="w-6 h-6 relative">
              <span className={`block absolute left-0 right-0 h-0.5 bg-white transform transition duration-300 ${open ? 'rotate-45 top-2.5' : 'top-1'}`}></span>
              <span className={`block absolute left-0 right-0 h-0.5 bg-white transform transition duration-300 ${open ? 'opacity-0' : 'top-2.5'}`}></span>
              <span className={`block absolute left-0 right-0 h-0.5 bg-white transform transition duration-300 ${open ? '-rotate-45 top-2.5' : 'top-4'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-gradient-to-r from-[#0B1829] to-[#153047] border-t border-transparent">
          <div className="px-6 py-6 flex flex-col gap-4">
            <button onClick={(e) => { e.preventDefault(); setOpen(false); router.push('/'); }} className="text-white text-left">Inicio</button>
            <button onClick={(e) => handleInternal(e, 'servicios')} className="text-white text-left">Servicios</button>
            <button onClick={(e) => handleInternal(e, 'faq')} className="text-white text-left">FAQ</button>
            <Link href="/proyectos" onClick={() => setOpen(false)} className="text-white">Proyectos</Link>
            <Link href="/nosotros" onClick={() => setOpen(false)} className="text-white">Nosotros</Link>
            <a href="#" onClick={(e) => { e.preventDefault(); setOpen(false); handleInternal(e, 'servicios'); }} className="mt-2 inline-block px-4 py-2 bg-white text-[#0B1829] rounded-full font-bold">Contactar</a>
          </div>
        </div>
      )}
    </nav>
  );
}
