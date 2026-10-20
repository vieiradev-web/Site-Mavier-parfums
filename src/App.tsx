import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { FilterBar, FilterOptions } from './components/FilterBar';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { PRODUCTS, STORE_INFO } from './data/products';
import { Product, CartItem, CustomerOrderInfo } from './types';
import { formatCurrency } from './utils/whatsapp';
import { ShoppingBag, ArrowUp, Sparkles, MessageCircle } from 'lucide-react';

export default function App() {
  // Cart state stored in memory and localStorage for resilience
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('mavier_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('mavier_cart', JSON.stringify(cartItems));
    } catch {
      // storage quota or private browsing
    }
  }, [cartItems]);

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [orderSuccessData, setOrderSuccessData] = useState<{
    message: string;
    customerInfo: CustomerOrderInfo;
    items: CartItem[];
    subtotal: number;
    whatsappUrl: string;
  } | null>(null);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Filter state
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'Todos',
    brand: 'Todas',
    maxPrice: 320,
    pricePreset: 'all',
    sortBy: 'featured',
    searchQuery: '',
  });

  // Section references for smooth scrolling
  const catalogRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`"${product.name}" adicionado ao carrinho!`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleBuyNow = (product: Product, quantity = 1) => {
    handleAddToCart(product, quantity);
    setSelectedProduct(null);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const cartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const cartSubtotal = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }, [cartItems]);

  // Filtering & Sorting logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category / Gender filter
      if (filters.category !== 'Todos') {
        if (filters.category === 'Perfume Árabe') {
          if (product.category !== 'Perfume Árabe') return false;
        } else if (['Masculino', 'Feminino', 'Unissex'].includes(filters.category)) {
          if (product.gender !== filters.category) return false;
        }
      }

      // Brand filter
      if (filters.brand !== 'Todas') {
        if (product.brand.toLowerCase() !== filters.brand.toLowerCase()) {
          return false;
        }
      }

      // Max price filter
      if (product.price > filters.maxPrice) {
        return false;
      }

      // Search Query
      if (filters.searchQuery.trim() !== '') {
        const q = filters.searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesBrand = product.brand.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesNotes =
          product.notes &&
          ((product.notes.top && product.notes.top.toLowerCase().includes(q)) ||
            (product.notes.heart && product.notes.heart.toLowerCase().includes(q)) ||
            (product.notes.base && product.notes.base.toLowerCase().includes(q)));
        const matchesFamily =
          product.olfactoryFamily &&
          product.olfactoryFamily.toLowerCase().includes(q);

        if (!matchesName && !matchesBrand && !matchesDesc && !matchesNotes && !matchesFamily) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'name-asc') return a.name.localeCompare(b.name);
      return 0; // default featured order
    });
  }, [filters]);

  const scrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-[#f7e2a9]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-5 z-50 bg-[#18181b] border border-[#d4af37] text-[#f4f4f5] px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
          <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
          <span className="text-xs font-medium">{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="text-xs text-[#d4af37] underline font-semibold cursor-pointer ml-1"
          >
            Ver Carrinho
          </button>
        </div>
      )}

      {/* Top Bar Contract (Zone 1, Zone 2, Zone 3 with Category filter in upper right) */}
      <Navbar
        cartCount={cartCount}
        cartSubtotal={cartSubtotal}
        selectedCategory={filters.category}
        onSelectCategory={(cat) => setFilters((prev) => ({ ...prev, category: cat }))}
        onOpenCart={() => setIsCartOpen(true)}
        onScrollToCatalog={scrollToCatalog}
        onScrollToAbout={scrollToAbout}
        onScrollToContact={scrollToContact}
      />

      <main className="flex-1">
        {/* Campaign Hero Showcase */}
        <Hero onExplore={scrollToCatalog} />

        {/* Brand Value & Payment Guarantees */}
        <TrustBar />

        {/* Catalog Section */}
        <section
          ref={catalogRef}
          id="catalogo"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24"
        >
          {/* Section Header with Upper Right Category Filter */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#27272a]/60">
            <div className="text-left space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Coleção Exclusiva Mavier Parfums</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-[#f4f4f5]">
                Catálogo de Alta Perfumaria Árabe
              </h2>
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-xl">
                Adicione os perfumes ao carrinho e finalize seu pedido com envio
                instantâneo do resumo formatado para o nosso WhatsApp.
              </p>
            </div>

            {/* Upper Right Category Filter */}
            <div className="flex flex-col sm:items-end gap-2 shrink-0">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#a1a1aa]">
                Filtro Rápido de Categorias:
              </span>
              <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#121216] border border-[#27272a]">
                {[
                  'Todos',
                  'Perfume Árabe',
                  'Masculino',
                  'Feminino',
                  'Unissex',
                ].map((cat) => {
                  const isActive = filters.category === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setFilters((prev) => ({ ...prev, category: cat }))}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-[#d4af37] text-[#09090b] font-bold shadow-sm'
                          : 'text-[#a1a1aa] hover:text-[#f4f4f5] hover:bg-[#18181b]'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Above Products Filters (Category & Price as requested) */}
          <FilterBar
            filters={filters}
            onFilterChange={setFilters}
            totalProductsCount={PRODUCTS.length}
            filteredCount={filteredProducts.length}
          />

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-[#121216] border border-[#27272a] rounded-2xl p-12 text-center space-y-4 my-8">
              <p className="font-serif-luxury text-lg font-semibold text-[#f4f4f5]">
                Nenhum perfume encontrado com estes filtros
              </p>
              <p className="text-xs text-[#71717a] max-w-sm mx-auto">
                Tente ajustar os filtros de categoria, valor máximo ou o termo buscado.
              </p>
              <button
                onClick={() =>
                  setFilters({
                    category: 'Todos',
                    brand: 'Todas',
                    maxPrice: 320,
                    pricePreset: 'all',
                    sortBy: 'featured',
                    searchQuery: '',
                  })
                }
                className="px-5 py-2.5 rounded-lg bg-[#d4af37] text-[#09090b] text-xs font-semibold uppercase tracking-wider hover:bg-[#e2be4a] transition-colors cursor-pointer"
              >
                Limpar Todos os Filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={(p) => handleAddToCart(p, 1)}
                  onViewDetails={(p) => setSelectedProduct(p)}
                />
              ))}
            </div>
          )}
        </section>

        {/* About & Craftsmanship Section */}
        <div ref={aboutRef}>
          <AboutSection />
        </div>
      </main>

      {/* Floating Cart & WhatsApp Quick Bar for Ultra-Smooth Mobile/Desktop UX */}
      <aside aria-label="Ações rápidas de contato e pedido">
        {cartCount > 0 && (
          <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Abrir carrinho de compras"
              className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#d4af37] hover:bg-[#e2be4a] text-[#09090b] font-bold text-xs uppercase tracking-wider shadow-2xl shadow-black/80 hover:scale-105 transition-all duration-200 cursor-pointer border-2 border-[#f7e2a9]"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#09090b] text-[#f7e2a9] text-[10px] font-bold flex items-center justify-center font-mono">
                  {cartCount}
                </span>
              </div>
              <div className="text-left font-mono">
                <span className="block text-[10px] tracking-tight uppercase opacity-85">
                  Ver Pedido
                </span>
                <span className="text-xs font-bold">
                  {formatCurrency(cartSubtotal)}
                </span>
              </div>
            </button>
          </div>
        )}

        {/* WhatsApp Direct Help Floating Button */}
        <a
          href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
            'Olá! Vim pelo catálogo Mavier Parfums e gostaria de tirar uma dúvida.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Atendimento via WhatsApp"
          className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-black/60 hover:scale-110 transition-all duration-200 flex items-center justify-center cursor-pointer group"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold text-[#09090b] pl-0 group-hover:pl-2">
            Atendimento VIP
          </span>
        </a>
      </aside>

      {/* Footer */}
      <Footer />

      {/* Product Quickview / PDP Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onContinueShopping={() => setIsCartOpen(false)}
      />

      {/* Checkout Form Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderCompleted={(summary) => {
          setIsCheckoutOpen(false);
          setOrderSuccessData(summary);
          // Clear cart after order is finalized
          setCartItems([]);
        }}
      />

      {/* Order Success Confirmation Modal */}
      <OrderSuccessModal
        isOpen={!!orderSuccessData}
        onClose={() => setOrderSuccessData(null)}
        orderData={orderSuccessData}
      />
    </div>
  );
}
