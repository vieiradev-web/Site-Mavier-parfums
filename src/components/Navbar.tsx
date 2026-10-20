import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, MessageCircle, Filter, ChevronDown, Check } from 'lucide-react';
import { STORE_INFO, CATEGORIES } from '../data/products';
import { formatCurrency } from '../utils/whatsapp';

interface NavbarProps {
  cartCount: number;
  cartSubtotal: number;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenCart: () => void;
  onScrollToCatalog: () => void;
  onScrollToAbout: () => void;
  onScrollToContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  cartSubtotal,
  selectedCategory,
  onSelectCategory,
  onOpenCart,
  onScrollToCatalog,
  onScrollToAbout,
  onScrollToContact,
}) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChooseCategory = (cat: string) => {
    onSelectCategory(cat);
    setIsCategoryOpen(false);
    onScrollToCatalog();
  };

  return (
    <header className="sticky top-0 z-40 bg-[#09090b]/95 backdrop-blur-md border-b border-[#27272a]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-8 h-20">
          {/* Zone 1: Single text element wordmark with logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 text-left group cursor-pointer"
            >
              <img
                src="./image/logo_icon.png"
                alt="Logo Mavier Parfums"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-[#d4af37]/40 shadow-md shadow-black/60 group-hover:border-[#d4af37] transition-all shrink-0"
              />
              <div className="flex items-baseline gap-2">
                <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#f4f4f5] group-hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0">
                  MAVIER
                </span>
                <span className="text-xs sm:text-sm tracking-[0.3em] font-light text-[#d4af37] uppercase whitespace-nowrap">
                  PARFUMS
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Clean navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-medium text-[#a1a1aa]">
            <button
              onClick={onScrollToCatalog}
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Catálogo
            </button>
            <button
              onClick={() => handleChooseCategory('Perfume Árabe')}
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Perfumes Árabes
            </button>
            <button
              onClick={onScrollToAbout}
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Sobre a Mavier
            </button>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp VIP</span>
            </a>
          </nav>

          {/* Zone 3: Upper Right Controls (Category Filter + Cart trigger) */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Category Filter Dropdown - Upper Right */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                aria-expanded={isCategoryOpen}
                aria-label="Filtrar por Categoria"
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2.5 rounded-lg border text-xs font-medium transition-all duration-200 cursor-pointer shadow-sm ${
                  selectedCategory !== 'Todos'
                    ? 'bg-[#18181b] border-[#d4af37] text-[#f7e2a9] shadow-[#d4af37]/10'
                    : 'bg-[#141418] border-[#27272a] hover:border-[#3f3f46] text-[#d4d4d8] hover:text-[#f4f4f5]'
                }`}
              >
                <Filter className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="hidden sm:inline text-[#a1a1aa]">Categoria:</span>
                <span className="font-semibold whitespace-nowrap max-w-[90px] sm:max-w-none truncate">
                  {selectedCategory}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#a1a1aa] transition-transform duration-200 ${
                    isCategoryOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isCategoryOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-[#121216] border border-[#d4af37]/50 rounded-xl shadow-2xl shadow-black p-2 z-50 animate-fadeIn">
                  <div className="px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#71717a] border-b border-[#27272a]/60">
                    Filtrar por Categoria
                  </div>

                  <div className="py-1 space-y-0.5">
                    {CATEGORIES.map((category) => {
                      const isSelected = selectedCategory === category;
                      return (
                        <button
                          key={category}
                          onClick={() => handleChooseCategory(category)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer text-left ${
                            isSelected
                              ? 'bg-[#d4af37]/20 text-[#f7e2a9] font-semibold'
                              : 'text-[#a1a1aa] hover:bg-[#18181b] hover:text-[#f4f4f5]'
                          }`}
                        >
                          <span>{category}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#d4af37]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              aria-label="Abrir carrinho de compras"
              className="relative flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2.5 rounded-lg bg-[#18181b] hover:bg-[#202026] border border-[#d4af37]/40 hover:border-[#d4af37] transition-all duration-200 text-[#f4f4f5] group cursor-pointer shadow-lg shadow-black/40"
            >
              <div className="relative">
                <ShoppingBag className="w-4 sm:w-5 h-4 sm:h-5 text-[#d4af37] group-hover:scale-105 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#d4af37] text-[#09090b] text-[10px] font-bold flex items-center justify-center font-mono">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-wider text-[#a1a1aa] leading-none">
                  Meu Pedido
                </span>
                <span className="text-xs font-semibold font-mono text-[#f4f4f5] leading-tight">
                  {cartCount === 0 ? 'Vazio' : formatCurrency(cartSubtotal)}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
