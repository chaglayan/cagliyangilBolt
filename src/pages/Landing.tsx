import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { personHref } from '../lib/links';

export default function Landing() {
  const [hover, setHover] = useState<'left' | 'right' | null>(null);
  const mehmetHref = personHref('mehmet');
  const mariaHref = personHref('maria');

  return (
    <div className="relative w-full min-h-[100svh] overflow-hidden bg-stone-900 text-white flex flex-col">
      <div className="absolute inset-0">
        <img
          src="/IMG_4780.jpg"
          alt="Mehmet and Maria at sunset by the sea in Bodrum"
          className="hidden md:block w-full h-full object-cover kenburns object-center"
        />
        <img
          src="/IMG_3058.jpg"
          alt="Maria and Mehmet"
          className="md:hidden w-full h-full object-cover kenburns object-[30%_center]"
        />
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            hover === 'left'
              ? 'bg-gradient-to-r from-amber-900/50 via-black/25 to-black/55'
              : hover === 'right'
              ? 'bg-gradient-to-l from-amber-900/50 via-black/25 to-black/55'
              : 'bg-gradient-to-t from-black/75 via-black/25 to-black/40'
          }`}
        />
      </div>

      <div className="pointer-events-none absolute top-5 md:top-6 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 text-white/90">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
          <span className="font-display text-sm tracking-wide">cagliyangil.com</span>
        </div>
      </div>

      <div className="relative z-20 pointer-events-none flex-1 flex flex-col items-center justify-center px-6 text-center animate-fade-in pt-20 pb-6">
        <div className="text-[11px] uppercase tracking-[0.35em] text-amber-200/90">
          Bodrum · Türkiye
        </div>
        <h1 className="mt-5 font-display text-[2.75rem] leading-[1] sm:text-6xl md:text-8xl md:leading-[0.95] tracking-tight drop-shadow-lg text-balance">
          <span className="md:hidden">
            Maria <span className="italic font-light">&amp;</span> Mehmet
          </span>
          <span className="hidden md:inline">
            Mehmet <span className="italic font-light">&amp;</span> Maria
          </span>
        </h1>
        <p className="mt-5 max-w-xl text-sm sm:text-base md:text-lg text-stone-100/90 leading-relaxed drop-shadow">
          Two remote professionals based in Bodrum — building, leading, and
          working on what we care about from the Aegean coast.
        </p>
        <div className="mt-8 hidden md:flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/70">
          <span className={`transition-opacity ${hover === 'left' ? 'opacity-100' : 'opacity-60'}`}>
            ← Mehmet
          </span>
          <span className="w-8 h-px bg-white/40" />
          <span className={`transition-opacity ${hover === 'right' ? 'opacity-100' : 'opacity-60'}`}>
            Maria →
          </span>
        </div>
      </div>

      <a
        href={mariaHref}
        className="group md:hidden absolute top-0 bottom-0 left-0 w-1/2 z-10 focus:outline-none"
        aria-label="Visit Maria's page"
      >
        <div className="absolute inset-y-0 left-0 w-full flex items-end justify-start pb-[max(1.5rem,env(safe-area-inset-bottom))] pl-5 pr-3">
          <div className="flex items-center gap-2 text-white/90">
            <ArrowRight size={14} className="rotate-180" />
            <span className="font-display text-sm">
              maria<span className="text-amber-200">.</span>cagliyangil.com
            </span>
          </div>
        </div>
      </a>

      <a
        href={mehmetHref}
        className="group md:hidden absolute top-0 bottom-0 right-0 w-1/2 z-10 focus:outline-none"
        aria-label="Visit Mehmet's page"
      >
        <div className="absolute inset-y-0 right-0 w-full flex items-end justify-end pb-[max(1.5rem,env(safe-area-inset-bottom))] pr-5 pl-3">
          <div className="flex items-center gap-2 text-white/90">
            <span className="font-display text-sm">
              mehmet<span className="text-amber-200">.</span>cagliyangil.com
            </span>
            <ArrowRight size={14} />
          </div>
        </div>
      </a>

      <div className="md:hidden pointer-events-none absolute inset-y-0 left-1/2 z-10 w-px bg-white/20" />

      <a
        href={mehmetHref}
        onMouseEnter={() => setHover('left')}
        onMouseLeave={() => setHover(null)}
        className="group absolute top-0 left-0 z-10 w-1/2 h-full hidden md:block focus:outline-none"
        aria-label="Visit Mehmet's page"
      >
        <div className="absolute inset-y-0 left-0 w-full flex items-end justify-start p-6 md:p-10">
          <div
            className={`flex items-center gap-3 text-white transition-all duration-500 ${
              hover === 'left' ? 'translate-x-2 opacity-100' : 'opacity-80'
            }`}
          >
            <div className="font-display text-xl md:text-2xl">
              mehmet<span className="text-amber-200">.</span>cagliyangil.com
            </div>
            <ArrowRight
              size={18}
              className={`transition-transform duration-500 rotate-180 ${
                hover === 'left' ? '-translate-x-0' : '-translate-x-1'
              }`}
            />
          </div>
        </div>
      </a>

      <a
        href={mariaHref}
        onMouseEnter={() => setHover('right')}
        onMouseLeave={() => setHover(null)}
        className="group absolute top-0 right-0 z-10 w-1/2 h-full hidden md:block focus:outline-none"
        aria-label="Visit Maria's page"
      >
        <div className="absolute inset-y-0 right-0 w-full flex items-end justify-end p-6 md:p-10">
          <div
            className={`flex items-center gap-3 text-white transition-all duration-500 ${
              hover === 'right' ? '-translate-x-2 opacity-100' : 'opacity-80'
            }`}
          >
            <div className="font-display text-xl md:text-2xl">
              maria<span className="text-amber-200">.</span>cagliyangil.com
            </div>
            <ArrowRight
              size={18}
              className={`transition-transform duration-500 ${
                hover === 'right' ? 'translate-x-1' : ''
              }`}
            />
          </div>
        </div>
      </a>

      <div
        className={`pointer-events-none absolute inset-y-0 left-1/2 z-10 w-px hidden md:block transition-all duration-500 ${
          hover ? 'bg-white/40' : 'bg-white/15'
        }`}
      />
    </div>
  );
}
