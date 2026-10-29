import React, { useState } from 'react';
import { Plus, Check, Eye, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { formatCurrency } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewDetails,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 1500);
  };

  const pixPrice = product.price * 0.95;
  const installmentValue = product.price / 3;

  return (
    <article className="group relative flex flex-col bg-[#121216] rounded-xl border border-[#27272a] hover:border-[#d4af37]/60 transition-all duration-300 overflow-hidden shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-[#d4af37]/10 flex-1">
      {/* Top Media slot: 65-70% height with dark background */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0d0d10] flex items-center justify-center">
        {/* Subtle Luxury Tag - Unboxed text (Zero-Pill discipline) */}
        {product.tag && (
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#09090b]/80 backdrop-blur-md border border-[#d4af37]/40 text-[11px] font-medium tracking-wider uppercase text-[#d4af37]">
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            <span>{product.tag}</span>
          </div>
        )}

        {/* Quick view button on hover */}
        <button
          onClick={() => onViewDetails(product)}
          aria-label={`Ver detalhes de ${product.name}`}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-[#09090b]/80 backdrop-blur-md border border-[#27272a] text-[#a1a1aa] hover:text-[#d4af37] hover:border-[#d4af37] transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Fallback container if image errors */}
        {imageError ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#18181b] to-[#0c0c0e]">
            <div className="w-16 h-16 rounded-full border border-[#d4af37]/30 flex items-center justify-center mb-2">
              <span className="font-serif-luxury text-lg font-bold text-[#d4af37]">M</span>
            </div>
            <p className="font-serif-luxury text-sm font-semibold text-[#f4f4f5]">
              {product.name}
            </p>
            <p className="text-xs text-[#a1a1aa]">{product.brand}</p>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Delicate dark gradient overlay on bottom of image */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#121216] to-transparent pointer-events-none" />
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-5 space-y-3">
        {/* Unboxed Metadata with Typographic Separators */}
        <div className="flex items-center gap-2 text-xs text-[#a1a1aa] uppercase tracking-wider font-medium">
          <span className="text-[#d4af37]">{product.brand}</span>
          <span aria-hidden="true" className="text-[#3f3f46]">·</span>
          <span>{product.volume}</span>
          <span aria-hidden="true" className="text-[#3f3f46]">·</span>
          <span>{product.gender}</span>
        </div>

        {/* Product Title */}
        <h3
          onClick={() => onViewDetails(product)}
          className="font-serif-luxury text-base font-semibold text-[#f4f4f5] hover:text-[#d4af37] transition-colors cursor-pointer line-clamp-1 text-balance"
          title={product.name}
        >
          {product.name}
        </h3>

        {/* Olfactory snippet */}
        <p className="text-xs text-[#71717a] line-clamp-2 leading-relaxed">
          {product.olfactoryFamily || product.description}
        </p>

        {/* Price and Installments with 5% Pix Discount */}
        <div className="pt-2.5 mt-auto border-t border-[#27272a]/60">
          <div className="space-y-1">
            <div className="flex items-center justify-between gap-1">
              <span className="text-[11px] font-semibold text-[#22c55e] flex items-center gap-1.5 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block animate-pulse" />
                no Pix
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#22c55e]/15 border border-[#22c55e]/30 text-[#22c55e] font-mono">
                5% OFF
              </span>
            </div>
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-2xl font-bold font-mono text-[#f7e2a9] tabular-nums leading-none">
                {formatCurrency(pixPrice)}
              </span>
              <div className="text-right">
                <span className="text-xs text-[#a1a1aa] line-through font-mono">
                  {formatCurrency(product.price)}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-[#71717a] pt-0.5">
              <span>ou até 3x de {formatCurrency(installmentValue)}</span>
              <span className="text-[#a1a1aa]">sem juros</span>
            </div>
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-3 grid grid-cols-2 gap-2">
          <button
            onClick={() => onViewDetails(product)}
            className="w-full py-2 px-3 rounded-lg bg-[#18181b] hover:bg-[#202026] border border-[#27272a] hover:border-[#3f3f46] text-xs font-medium text-[#d4d4d8] transition-colors cursor-pointer text-center whitespace-nowrap"
          >
            Ver Detalhes
          </button>

          <button
            onClick={handleAdd}
            aria-label={`Adicionar ${product.name} ao carrinho`}
            className={`w-full py-2 px-3 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap ${
              justAdded
                ? 'bg-[#22c55e] text-white shadow-md'
                : 'bg-[#d4af37] hover:bg-[#e2be4a] text-[#09090b] shadow-sm shadow-[#d4af37]/20'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Adicionado!</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Adicionar</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
