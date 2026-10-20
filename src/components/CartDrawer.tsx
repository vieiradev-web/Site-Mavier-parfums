import React from 'react';
import { X, Trash2, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';
import { formatCurrency } from '../utils/whatsapp';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
  onContinueShopping: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onContinueShopping,
}) => {
  if (!isOpen) return null;

  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121216] border-l border-[#27272a] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-[#27272a] flex items-center justify-between bg-[#0e0e11]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#18181b] border border-[#d4af37]/40 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-[#d4af37]" />
              </div>
              <div>
                <h2 className="font-serif-luxury text-base font-bold text-[#f4f4f5]">
                  Seu Carrinho
                </h2>
                <p className="text-[11px] text-[#71717a]">
                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'itens'}{' '}
                  selecionado{totalItemsCount === 1 ? '' : 's'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Fechar carrinho"
              className="p-2 rounded-lg text-[#71717a] hover:text-[#f4f4f5] hover:bg-[#18181b] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-[#18181b] border border-[#27272a] flex items-center justify-center">
                  <ShoppingBag className="w-7 h-7 text-[#71717a]" />
                </div>
                <div className="space-y-1">
                  <p className="font-serif-luxury text-base font-semibold text-[#f4f4f5]">
                    Seu carrinho está vazio
                  </p>
                  <p className="text-xs text-[#71717a] max-w-[220px]">
                    Navegue pelos nossos perfumes árabes e escolha sua assinatura olfativa.
                  </p>
                </div>
                <button
                  onClick={onContinueShopping}
                  className="px-5 py-2.5 rounded-lg bg-[#d4af37] text-[#09090b] text-xs font-semibold uppercase tracking-wider hover:bg-[#e2be4a] transition-colors cursor-pointer"
                >
                  Explorar Catálogo
                </button>
              </div>
            ) : (
              items.map((item) => {
                const itemTotal = item.product.price * item.quantity;
                return (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-3.5 rounded-xl bg-[#18181b]/80 border border-[#27272a] relative group"
                  >
                    {/* Item Image */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#0d0d10] border border-[#27272a] shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="pr-6">
                        <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-medium block">
                          {item.product.brand} · {item.product.volume}
                        </span>
                        <h4 className="font-serif-luxury text-xs font-semibold text-[#f4f4f5] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <span className="text-xs font-mono font-medium text-[#f7e2a9] tabular-nums mt-0.5 block">
                          {formatCurrency(item.product.price)} un.
                        </span>
                      </div>

                      {/* Stepper and Subtotal */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center bg-[#09090b] border border-[#27272a] rounded-md">
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.product.id, item.quantity - 1)
                            }
                            aria-label="Diminuir quantidade"
                            className="px-2 py-0.5 text-xs text-[#a1a1aa] hover:text-[#f4f4f5] cursor-pointer"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-mono font-semibold text-[#f4f4f5]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.product.id, item.quantity + 1)
                            }
                            aria-label="Aumentar quantidade"
                            className="px-2 py-0.5 text-xs text-[#a1a1aa] hover:text-[#f4f4f5] cursor-pointer"
                          >
                            +
                          </button>
                        </div>

                        <span className="text-xs font-bold font-mono text-[#f4f4f5] tabular-nums">
                          {formatCurrency(itemTotal)}
                        </span>
                      </div>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      aria-label={`Remover ${item.product.name} do carrinho`}
                      className="absolute top-2 right-2 p-1.5 text-[#52525b] hover:text-[#ef4444] transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer with Subtotal & Proceed */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#27272a] bg-[#0e0e11] space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#a1a1aa]">
                  <span>Subtotal de produtos</span>
                  <span className="font-mono text-[#f4f4f5] tabular-nums font-semibold">
                    {formatCurrency(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-[#71717a]">
                  <span>Entrega / Frete</span>
                  <span className="text-[#d4af37]">A confirmar via WhatsApp</span>
                </div>
                <div className="pt-2 border-t border-[#27272a] flex justify-between items-baseline">
                  <span className="text-sm font-semibold text-[#f4f4f5]">
                    Total Estimado
                  </span>
                  <span className="text-xl font-bold font-mono text-[#f7e2a9] tabular-nums">
                    {formatCurrency(subtotal)}
                  </span>
                </div>
                <p className="text-[11px] text-[#71717a] font-mono">
                  ou 3x de {formatCurrency(subtotal / 3)} sem juros no cartão
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={onProceedToCheckout}
                  className="w-full py-3.5 px-4 rounded-lg bg-[#d4af37] hover:bg-[#e2be4a] text-[#09090b] text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#d4af37]/20"
                >
                  <span>Fechar Pedido</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onContinueShopping}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#18181b] hover:bg-[#202026] border border-[#27272a] text-xs font-medium text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors cursor-pointer text-center"
                >
                  Continuar Comprando
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#71717a]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Pedido enviado diretamente para o WhatsApp oficial</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
