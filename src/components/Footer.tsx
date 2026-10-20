import React from 'react';
import { MessageCircle, ShieldCheck, Heart } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-[#070709] border-t border-[#27272a] text-[#71717a] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-baseline gap-2">
              <span className="font-serif-luxury text-xl font-bold tracking-[0.2em] text-[#f4f4f5]">
                MAVIER
              </span>
              <span className="text-xs tracking-[0.3em] font-light text-[#d4af37] uppercase">
                PARFUMS
              </span>
            </div>
            <p className="text-xs text-[#a1a1aa] leading-relaxed max-w-sm">
              Sua referência em perfumes árabes de alta fixação e sofisticação.
              Catálogo interativo com fechamento rápido de pedidos via WhatsApp.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#d4af37]">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantia de 100% de Autenticidade em todos os frascos</span>
            </div>
          </div>

          {/* Quick links & Brands */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f4f4f5]">
              Casas Árabes
            </h4>
            <ul className="space-y-2 text-xs text-[#a1a1aa]">
              <li>Lattafa Perfumes</li>
              <li>Armaf Perfumes</li>
              <li>Maison Alhambra</li>
              <li>Al Wataniah</li>
              <li>Asdaaf</li>
            </ul>
          </div>

          {/* Contact and WhatsApp */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f4f4f5]">
              Atendimento Direto
            </h4>
            <p className="text-xs text-[#a1a1aa]">
              Dúvidas sobre fragrâncias, disponibilidade e prazos:
            </p>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#18181b] hover:bg-[#202026] border border-[#27272a] hover:border-[#25D366] text-xs font-medium text-[#f4f4f5] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="font-mono">{STORE_INFO.whatsappDisplay}</span>
            </a>
            <p className="text-[11px] text-[#71717a]">
              Recife - Pernambuco · Enviamos para todo o Brasil
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#18181b] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#52525b]">
          <p>© {new Date().getFullYear()} Mavier Parfums. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 text-[#71717a]">
            <span>Formas de pagamento: PIX · Crédito · Débito</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
