import React, { useState } from 'react';
import { X, ShoppingBag, ShieldCheck, Sparkles, Check, ChevronRight, MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { STORE_INFO } from '../data/products';
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

          {product.soldOut && (
            <div className="absolute top-5 left-5 z-10 px-3 py-1 rounded bg-[#09090b]/90 border border-[#ef4444]/60 text-xs font-bold tracking-wider uppercase text-[#ef4444]">
              Esgotado
            </div>
          )}
          {product.tag && !product.soldOut && (
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

          {/* Pricing Box with 5% Pix Discount OR Pending Decant Price */}
          {product.isPricePending ? (
            <div className="bg-[#18181b] p-5 rounded-xl border border-[#d4af37]/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#d4af37]/15 border border-[#d4af37]/30 text-xs font-semibold text-[#f7e2a9]">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  Fração Original 5ml
                </span>
                <span className="text-xs font-mono font-medium text-[#a1a1aa]">
                  Valor sob consulta
                </span>
              </div>

              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <span className="text-[11px] text-[#71717a] block uppercase tracking-wider font-medium">
                    Valor do Decant:
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-[#f7e2a9]">
                    Preço a Definir
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#a1a1aa] block">
                    Volume: 5 ml (~75 borrifadas)
                  </span>
                  <span className="text-xs text-[#22c55e] font-medium">
                    Frasco de vidro c/ spray dourado
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#18181b] p-5 rounded-xl border border-[#27272a] space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#22c55e]/15 border border-[#22c55e]/30 text-xs font-semibold text-[#22c55e]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                  5% de Desconto no Pix
                </span>
                <span className="text-xs text-[#a1a1aa] line-through font-mono">
                  {formatCurrency(product.price)}
                </span>
              </div>

              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <span className="text-[11px] text-[#71717a] block uppercase tracking-wider font-medium">
                    Preço à vista no Pix:
                  </span>
                  <span className="text-3xl font-bold font-mono text-[#f7e2a9] tabular-nums">
                    {formatCurrency(product.price * 0.95)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#a1a1aa] font-mono block">
                    ou 3x de {formatCurrency(product.price / 3)}
                  </span>
                  <span className="text-xs text-[#22c55e] font-medium">
                    Sem juros no cartão
                  </span>
                </div>
              </div>
            </div>
          )}

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

          {/* Purchase Actions module OR WhatsApp Consult for Decant */}
          <div className="pt-4 border-t border-[#27272a] space-y-4">
            {product.soldOut ? (
              <div className="space-y-3">
                <div className="w-full py-3.5 px-4 rounded-lg bg-[#27272a] border border-[#3f3f46] text-[#a1a1aa] text-xs sm:text-sm font-bold uppercase tracking-wider text-center">
                  Produto esgotado no momento
                </div>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Olá! Gostaria de ser avisado quando o ${product.name} voltar ao estoque.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-lg bg-[#18181b] hover:bg-[#222228] border border-[#d4af37] text-[#f7e2a9] text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Avise-me quando chegar</span>
                </a>
              </div>
            ) : product.isPricePending ? (
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Olá! Gostaria de consultar o valor e pedir o Decant 5ml de ${product.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-lg bg-[#22c55e] hover:bg-[#16a34a] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#22c55e]/25 text-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Consultar Valor e Pedir no WhatsApp</span>
                </a>
                <p className="text-center text-[11px] text-[#a1a1aa]">
                  Fração original de 5ml em frasco de vidro com spray dourado. Atendimento exclusivo via WhatsApp.
                </p>
              </div>
            ) : (
              <>
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
              </>
            )}

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
