import React from 'react';
import { Search, SlidersHorizontal, RotateCcw, Sparkles } from 'lucide-react';
import { CATEGORIES, BRANDS, PRICE_MIN, PRICE_MAX } from '../data/products';
import { formatCurrency } from '../utils/whatsapp';

export interface FilterOptions {
  category: string;
  brand: string;
  maxPrice: number;
  pricePreset: 'all' | 'under220' | '220to270' | 'above270';
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'name-asc';
  searchQuery: string;
}

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  totalProductsCount: number;
  filteredCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange,
  totalProductsCount,
  filteredCount,
}) => {
  const isFiltered =
    filters.category !== 'Todos' ||
    filters.brand !== 'Todas' ||
    filters.maxPrice < PRICE_MAX ||
    filters.pricePreset !== 'all' ||
    filters.searchQuery.trim() !== '' ||
    filters.sortBy !== 'featured';

  const handleReset = () => {
    onFilterChange({
      category: 'Todos',
      brand: 'Todas',
      maxPrice: PRICE_MAX,
      pricePreset: 'all',
      sortBy: 'featured',
      searchQuery: '',
    });
  };

  const handlePricePreset = (preset: 'all' | 'under220' | '220to270' | 'above270') => {
    let maxP = PRICE_MAX;
    if (preset === 'under220') maxP = 220;
    else if (preset === '220to270') maxP = 270;
    else if (preset === 'above270') maxP = PRICE_MAX;

    onFilterChange({
      ...filters,
      pricePreset: preset,
      maxPrice: maxP,
    });
  };

  return (
    <div className="bg-[#121216] border border-[#27272a] rounded-xl p-5 mb-8 shadow-xl shadow-black/40 space-y-5">
      {/* Search and Sort row */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#71717a] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar por perfume, marca (Lattafa, Armaf...), notas..."
            value={filters.searchQuery}
            onChange={(e) =>
              onFilterChange({ ...filters, searchQuery: e.target.value })
            }
            className="w-full bg-[#18181b] border border-[#27272a] focus:border-[#d4af37] text-xs sm:text-sm text-[#f4f4f5] pl-10 pr-4 py-2.5 rounded-lg outline-none transition-colors placeholder:text-[#52525b]"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange({ ...filters, searchQuery: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#71717a] hover:text-[#f4f4f5] cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-wider text-[#71717a] whitespace-nowrap hidden sm:inline">
            Ordenar:
          </span>
          <select
            value={filters.sortBy}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                sortBy: e.target.value as FilterOptions['sortBy'],
              })
            }
            className="bg-[#18181b] border border-[#27272a] focus:border-[#d4af37] text-xs sm:text-sm text-[#f4f4f5] px-3.5 py-2.5 rounded-lg outline-none transition-colors cursor-pointer"
          >
            <option value="featured">Destaques Mavier</option>
            <option value="price-asc">Menor Preço</option>
            <option value="price-desc">Maior Preço</option>
            <option value="name-asc">Nome (A - Z)</option>
          </select>
        </div>
      </div>

      <div className="h-[1px] bg-[#27272a]/60" />

      {/* Categories & Genders Tabs */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-[#a1a1aa] font-medium">
            Filtrar por Categoria / Público:
          </span>
          {isFiltered && (
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 text-xs text-[#d4af37] hover:text-[#f7e2a9] cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Limpar filtros</span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = filters.category === cat;
            const isDecantTab = cat === 'Decants (5ml)';
            return (
              <button
                key={cat}
                onClick={() => onFilterChange({ ...filters, category: cat })}
                className={`px-3.5 py-1.5 rounded-md text-xs font-medium tracking-wide transition-all duration-150 cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#d4af37] text-[#09090b] font-semibold shadow-sm'
                    : isDecantTab
                    ? 'bg-[#18181b] text-[#f7e2a9] hover:text-white border border-[#d4af37]/50 shadow-sm shadow-[#d4af37]/10'
                    : 'bg-[#18181b] text-[#a1a1aa] hover:text-[#f4f4f5] border border-[#27272a]'
                }`}
              >
                {isDecantTab && <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />}
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Brand Tabs */}
      <div className="space-y-2">
        <span className="text-xs uppercase tracking-wider text-[#a1a1aa] font-medium block">
          Marca Árabe:
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {BRANDS.map((brand) => {
            const isActive = filters.brand === brand;
            return (
              <button
                key={brand}
                onClick={() => onFilterChange({ ...filters, brand: brand })}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-150 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#27272a] text-[#f7e2a9] border border-[#d4af37]'
                    : 'bg-[#18181b] text-[#71717a] hover:text-[#d4d4d8] border border-[#27272a]'
                }`}
              >
                {brand}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Filter Area */}
      <div className="pt-2 border-t border-[#27272a]/60 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#a1a1aa] font-medium">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Filtro de Valor Máximo:</span>
            <span className="font-mono text-sm text-[#f7e2a9] font-bold">
              {formatCurrency(filters.maxPrice)}
            </span>
          </div>

          {/* Quick price presets */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => handlePricePreset('all')}
              className={`px-2.5 py-1 text-[11px] rounded transition-colors cursor-pointer ${
                filters.pricePreset === 'all' && filters.maxPrice >= PRICE_MAX
                  ? 'bg-[#d4af37]/20 text-[#f7e2a9] border border-[#d4af37]/40 font-medium'
                  : 'bg-[#18181b] text-[#71717a] hover:text-[#f4f4f5]'
              }`}
            >
              Todos os Valores
            </button>
            <button
              onClick={() => handlePricePreset('under220')}
              className={`px-2.5 py-1 text-[11px] rounded transition-colors cursor-pointer ${
                filters.pricePreset === 'under220'
                  ? 'bg-[#d4af37]/20 text-[#f7e2a9] border border-[#d4af37]/40 font-medium'
                  : 'bg-[#18181b] text-[#71717a] hover:text-[#f4f4f5]'
              }`}
            >
              Até R$ 220
            </button>
            <button
              onClick={() => handlePricePreset('220to270')}
              className={`px-2.5 py-1 text-[11px] rounded transition-colors cursor-pointer ${
                filters.pricePreset === '220to270'
                  ? 'bg-[#d4af37]/20 text-[#f7e2a9] border border-[#d4af37]/40 font-medium'
                  : 'bg-[#18181b] text-[#71717a] hover:text-[#f4f4f5]'
              }`}
            >
              Até R$ 270
            </button>
            <button
              onClick={() => handlePricePreset('above270')}
              className={`px-2.5 py-1 text-[11px] rounded transition-colors cursor-pointer ${
                filters.pricePreset === 'above270'
                  ? 'bg-[#d4af37]/20 text-[#f7e2a9] border border-[#d4af37]/40 font-medium'
                  : 'bg-[#18181b] text-[#71717a] hover:text-[#f4f4f5]'
              }`}
            >
              Acima de R$ 270
            </button>
          </div>
        </div>

        {/* Interactive Slider */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-[#71717a]">R$ {PRICE_MIN}</span>
          <input
            type="range"
            min={PRICE_MIN}
            max={PRICE_MAX}
            step={5}
            value={filters.maxPrice}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                maxPrice: Number(e.target.value),
                pricePreset: 'all',
              })
            }
            className="flex-1 accent-[#d4af37] h-1.5 bg-[#27272a] rounded-lg cursor-pointer"
          />
          <span className="text-xs font-mono text-[#71717a]">R$ {PRICE_MAX}</span>
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between text-xs text-[#71717a] pt-1">
        <span>
          Mostrando{' '}
          <strong className="text-[#f4f4f5] font-semibold">{filteredCount}</strong>{' '}
          de <strong className="text-[#f4f4f5]">{totalProductsCount}</strong> perfumes
        </span>
        {isFiltered && (
          <span className="text-[#d4af37] text-[11px]">
            Filtros ativos aplicados
          </span>
        )}
      </div>
    </div>
  );
};
