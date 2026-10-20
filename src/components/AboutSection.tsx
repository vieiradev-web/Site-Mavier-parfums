import React from 'react';
import { Sparkles, Shield, Clock, HeartHandshake, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-[#0d0d10] border-t border-[#27272a]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 bg-[#121216] p-8 text-center space-y-6">
              <div className="mx-auto w-20 h-20 rounded-full border-2 border-[#d4af37] flex items-center justify-center bg-[#18181b] shadow-xl shadow-[#d4af37]/15">
                <span className="font-serif-luxury text-3xl font-black text-[#d4af37]">
                  M
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif-luxury text-2xl font-bold tracking-[0.15em] text-[#f4f4f5] uppercase">
                  Mavier Parfums
                </h3>
                <p className="text-xs tracking-[0.25em] text-[#d4af37] uppercase">
                  Alta Perfumaria Oriental
                </p>
              </div>

              <div className="h-[1px] bg-[#27272a] w-24 mx-auto" />

              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Nossa curadoria seleciona exclusivamente perfumes originais, importados
                diretamente dos Emirados Árabes Unidos. Aromas que personificam nobreza,
                autoridade e presença inconfundível.
              </p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-[#09090b] text-xs font-bold uppercase tracking-wider hover:bg-[#20ba5a] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Falar com Consultor Mavier</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>O Fascínio dos Perfumes Árabes</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#f4f4f5] leading-tight">
                Fragrâncias que contam histórias e deixam memórias eternas
              </h2>
              <p className="text-sm text-[#a1a1aa] leading-relaxed font-light">
                A perfumaria árabe se consagrou no mundo inteiro por sua fixação lendária
                e riqueza de matérias-primas raras. Criadas com concentrações nobres de
                essências e óleos essenciais, nossas fragrâncias evoluem na pele ao longo
                de horas, revelando camadas sofisticadas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-[#18181b] border border-[#27272a] flex items-center justify-center text-[#d4af37]">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-[#f4f4f5]">Fixação +8h</h4>
                <p className="text-xs text-[#71717a] leading-relaxed">
                  Alta concentração Eau de Parfum com rastro envolvente e duradouro.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-[#18181b] border border-[#27272a] flex items-center justify-center text-[#d4af37]">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-[#f4f4f5]">Origem Genuína</h4>
                <p className="text-xs text-[#71717a] leading-relaxed">
                  Todos os frascos chegam lacrados de fábrica, com selo de procedência.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-[#18181b] border border-[#27272a] flex items-center justify-center text-[#d4af37]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-[#f4f4f5]">Atendimento VIP</h4>
                <p className="text-xs text-[#71717a] leading-relaxed">
                  Suporte rápido pelo WhatsApp para escolher a fragrância certa para seu estilo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
