import React, { useRef, useState, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  img: string;
  stack: string[];
}

interface Props {
  project: Project;
  onOpen: (p: Project) => void;
}

export default function ProjectCard({ project, onOpen }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState('perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
  const [shinePos, setShinePos] = useState({ x: 50, y: 50 });
  const [imgOffset, setImgOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    return () => setTransform('perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
  }, []);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1; // -1 .. 1
    const py = (y / rect.height) * 2 - 1; // -1 .. 1

    const rotateY = px * 6; // degrees
    const rotateX = -py * 6; // degrees
    const translateZ = 12;

    setTransform(`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`);
    setShinePos({ x: (px + 1) * 50, y: (py + 1) * 50 });
    // parallax: move image slightly opposite to cursor for depth
    const moveX = -px * 12; // px
    const moveY = -py * 10; // px
    setImgOffset({ x: moveX, y: moveY });
  };

  const handleLeave = () => {
    setTransform('perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
    setShinePos({ x: 50, y: 50 });
    setImgOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform }}
      className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg overflow-hidden transition-shadow duration-500 hover:shadow-2xl border border-slate-200 will-change-transform"
    >
      <button onClick={() => onOpen(project)} className="w-full text-left focus:outline-none">
        <div className="relative w-full h-56 overflow-hidden">
          <div
            className="absolute inset-0 bg-center bg-cover transition-transform duration-700 ease-out"
            style={{
              backgroundImage: `url(${project.img})`,
              willChange: 'transform',
              transform: `translate(${imgOffset.x}px, ${imgOffset.y}px) scale(1.06)`
            }}
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70"
            style={{ mixBlendMode: 'multiply' }}
          />

          <div
            className="absolute -left-16 -top-16 w-40 h-40 rounded-full opacity-20 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.35), transparent 40%)',
              transform: `translate(${(shinePos.x - 50) * 0.6}px, ${(shinePos.y - 50) * 0.6}px)`
            }}
          />

          <div className="absolute top-4 left-4 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm font-semibold">Portafolio</div>
        </div>

        <div className="p-6 bg-white">
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">{project.title}</h3>
          <p className="text-slate-600 mb-4 leading-relaxed text-sm md:text-base">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="text-xs md:text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">{s}</span>
            ))}
          </div>
        </div>
      </button>

      <style jsx>{`
        div[style] { /* keep scoped rule minimal */ }
      `}</style>
    </div>
  );
}
