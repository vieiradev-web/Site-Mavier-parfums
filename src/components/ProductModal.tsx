import React, { useState } from 'react';
import { X, ShoppingBag, ShieldCheck, Sparkles, Check, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { formatCurrency } from '../utils/whatsapp';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onBuyNow: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleDirectBuy = () => {
    onBuyNow(product, quantity);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#121216] border border-[#d4af37]/40 rounded-2xl shadow-2xl shadow-black overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar detalhes do perfume"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#09090b]/80 border border-[#27272a] text-[#a1a1aa] hover:text-[#f4f4f5] hover:border-[#d4af37] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Visual Showcase */}
        <div className="md:w-1/2 relative bg-[#09090b] flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#27272a]">
          <div className="relative w-full max-w-sm aspect-[4/3] md:aspect-square overflow-hidden rounded-xl border border-[#27272a]">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {product.tag && (
            <div className="absolute top-5 left-5 flex items-center gap-1.5 px-3 py-1 rounded bg-[#09090b]/90 border border-[#d4af37]/50 text-xs font-semibold tracking-wider uppercase text-[#d4af37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{product.tag}</span>
            </div>
          )}
        </div>

        {/* Right Column: Information & Purchase Module */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col space-y-6">
          {/* Metadata unboxed */}
          <div className="flex items-center gap-2 text-xs text-[#a1a1aa] uppercase tracking-wider font-medium">
            <span className="text-[#d4af37]">{product.brand}</span>
            <span aria-hidden="true" className="text-[#3f3f46]">·</span>
            <span>{product.volume}</span>
            <span aria-hidden="true" className="text-[#3f3f46]">·</span>
            <span>{product.gender}</span>
            {product.concentration && (
              <>
                <span aria-hidden="true" className="text-[#3f3f46]">·</span>
                <span>{product.concentration}</span>
              </>
            )}
          </div>

          <div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f4f4f5] leading-tight">
              {product.name}
            </h2>
            {product.olfactoryFamily && (
              <p className="text-xs text-[#d4af37] mt-1 font-medium tracking-wide">
                Família Olfativa: {product.olfactoryFamily}
              </p>
            )}
          </div>

          {/* Pricing Box */}
          <div className="bg-[#18181b] p-4 rounded-xl border border-[#27272a]">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs text-[#71717a] block">Valor à vista / parcelado:</span>
                <span className="text-3xl font-bold font-mono text-[#f7e2a9] tabular-nums">
                  {formatCurrency(product.price)}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#a1a1aa] font-mono block">
                  3x de {formatCurrency(product.price / 3)}
                </span>
                <span className="text-xs text-[#22c55e] font-medium">
                  Sem acréscimo
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#f4f4f5]">
              Sobre a Fragrância:
            </h4>
            <div className="text-xs text-[#a1a1aa] leading-relaxed whitespace-pre-line space-y-2">
              {product.description}
            </div>
          </div>

          {/* Highlights */}
          {product.highlights && product.highlights.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-[#27272a]">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#d4af37]">
                Destaques da Fragrância:
              </h4>
              <ul className="space-y-1.5 text-xs text-[#d4d4d8]">
                {product.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#d4af37] text-sm leading-none">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Olfactory Pyramid */}
          {product.notes && (
            <div className="space-y-2 pt-2 border-t border-[#27272a] text-xs">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#f4f4f5]">
                Pirâmide Olfativa:
              </h4>
              <div className="space-y-2 bg-[#18181b]/70 p-3.5 rounded-lg border border-[#27272a]">
                {product.notes.top && (
                  <div>
                    <span className="font-semibold text-[#d4af37]">Notas de Topo: </span>
                    <span className="text-[#a1a1aa]">{product.notes.top}</span>
                  </div>
                )}
                {product.notes.heart && (
                  <div>
                    <span className="font-semibold text-[#d4af37]">Notas de Coração: </span>
                    <span className="text-[#a1a1aa]">{product.notes.heart}</span>
                  </div>
                )}
                {product.notes.base && (
                  <div>
                    <span className="font-semibold text-[#d4af37]">Notas de Fundo: </span>
                    <span className="text-[#a1a1aa]">{product.notes.base}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Purchase Actions module */}
          <div className="pt-4 border-t border-[#27272a] space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-wider text-[#a1a1aa] font-medium">
                Quantidade:
              </span>
              <div className="flex items-center bg-[#18181b] border border-[#27272a] rounded-lg">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1.5 text-sm font-bold text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors cursor-pointer"
                >
                  -
                </button>
                <span className="px-3 py-1.5 text-xs font-mono font-bold text-[#f4f4f5]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1.5 text-sm font-bold text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleAdd}
                className={`w-full py-3 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                  added
                    ? 'bg-[#22c55e] text-white'
                    : 'bg-[#18181b] hover:bg-[#222228] border border-[#d4af37] text-[#f7e2a9]'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Adicionado!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Adicionar ao Carrinho</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDirectBuy}
                className="w-full py-3 px-4 rounded-lg bg-[#d4af37] hover:bg-[#e2be4a] text-[#09090b] text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-[#d4af37]/25"
              >
                <span>Finalizar Pedido</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Authenticity guarantee */}
            <div className="flex items-center gap-2 text-[11px] text-[#71717a] pt-1">
              <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>Garantia de originalidade com envio rápido e seguro.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
