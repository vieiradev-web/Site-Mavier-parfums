import React from 'react';
import { Award, CreditCard, Sparkles, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-[#0f0f12] border-b border-[#27272a]/80 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#18181b] border border-[#27272a] flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#f4f4f5]">100% Originais</p>
              <p className="text-[11px] text-[#71717a]">Frascos lacrados e importados</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#18181b] border border-[#27272a] flex items-center justify-center shrink-0">
              <CreditCard className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#f4f4f5]">PIX, Crédito & Débito</p>
              <p className="text-[11px] text-[#71717a]">Facilidade no fechamento</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#18181b] border border-[#27272a] flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#f4f4f5]">Fixação Marcante</p>
              <p className="text-[11px] text-[#71717a]">Projeção e silagem superior</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#18181b] border border-[#27272a] flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#f4f4f5]">WhatsApp VIP</p>
              <p className="text-[11px] text-[#71717a]">{STORE_INFO.whatsappDisplay}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
