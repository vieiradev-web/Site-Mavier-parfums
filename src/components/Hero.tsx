import React from 'react';
import { ArrowDown, Sparkles, ShieldCheck, Truck } from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative overflow-hidden bg-[#09090b] border-b border-[#27272a]/60">
      {/* Ambient background gold glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4af37]/8 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Brand copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Alta Perfumaria Oriental & Criações Originais</span>
            </div>

            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f4f4f5] leading-[1.15] text-balance">
              Presença que chega <br />
              <span className="gold-gradient-text">antes de você.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-xl font-light">
              Descubra a intensidade e o requinte das mais prestigiadas casas árabes:
              Lattafa, Armaf, Maison Alhambra, Al Wataniah e Asdaaf. Monte seu pedido
              no catálogo e receba o fechamento direto no seu WhatsApp com atendimento VIP.
            </p>

            {/* Unboxed trust indicators */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#d4d4d8] pt-2">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                100% Lacrados e Originais
              </span>
              <span className="text-[#3f3f46]" aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#d4af37]" />
                Envio Imediato Recife & Brasil
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onExplore}
                className="px-6 py-3.5 rounded-lg bg-[#d4af37] hover:bg-[#e2be4a] text-[#09090b] text-sm font-semibold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-lg shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40"
              >
                <span>Ver Perfumes em Estoque</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Olá! Gostaria de tirar uma dúvida sobre os perfumes árabes da Mavier Parfums.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-lg bg-[#18181b] hover:bg-[#27272a] border border-[#3f3f46] hover:border-[#d4af37] text-sm font-medium text-[#f4f4f5] tracking-wide transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>Tirar Dúvidas</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Showcase Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 bg-[#121216] shadow-2xl shadow-black/80 group">
              <img
                src={STORE_INFO.heroImage}
                alt="Coleção de perfumes árabes luxuosos Mavier Parfums"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  // Fallback styling container
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent pointer-events-none" />

              {/* Discreet luxury caption */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs backdrop-blur-md bg-[#09090b]/75 border border-[#27272a] rounded-lg px-4 py-3">
                <div>
                  <span className="text-[#a1a1aa] block uppercase tracking-wider text-[10px]">
                    Destaque
                  </span>
                  <span className="font-serif-luxury font-semibold text-[#f4f4f5]">
                    Coleção Lattafa Eau de Perfume
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#a1a1aa] block uppercase tracking-wider">
                    Origem
                  </span>
                  <span className="text-[#d4af37] font-medium">Emirados Árabes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
