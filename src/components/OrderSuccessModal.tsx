import React, { useState } from 'react';
import { CheckCircle2, MessageCircle, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { CustomerOrderInfo, CartItem } from '../types';
import { STORE_INFO } from '../data/products';
import { formatCurrency } from '../utils/whatsapp';

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: {
    message: string;
    customerInfo: CustomerOrderInfo;
    items: CartItem[];
    subtotal: number;
    whatsappUrl: string;
  } | null;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  isOpen,
  onClose,
  orderData,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !orderData) return null;

  // Mesmo cálculo da mensagem enviada ao WhatsApp: Pix tem 5% de desconto.
  const isPix = orderData.customerInfo.paymentMethod === 'pix';
  const pixDiscount = isPix ? orderData.subtotal * 0.05 : 0;
  const orderTotal = orderData.subtotal - pixDiscount;

  const paymentLabels: Record<string, string> = {
    pix: 'Pix',
    credit: 'Cartão de Crédito',
    debit: 'Cartão de Débito',
  };
  const paymentLabel =
    paymentLabels[orderData.customerInfo.paymentMethod] ??
    orderData.customerInfo.paymentMethod;

  const handleCopy = () => {
    navigator.clipboard.writeText(orderData.message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#121216] border border-[#d4af37] rounded-2xl shadow-2xl shadow-black p-6 sm:p-8 space-y-6 text-center">
        {/* Success Icon */}
        <div className="mx-auto w-16 h-16 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center">
          <CheckCircle2 className="w-9 h-9 text-[#25D366]" />
        </div>

        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] uppercase tracking-wider font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pedido Registrado com Sucesso</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f4f4f5]">
            Obrigado, {orderData.customerInfo.customerName}!
          </h2>
          <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-md mx-auto">
            O resumo completo do seu pedido foi gerado para envio ao WhatsApp oficial da{' '}
            <strong className="text-[#f4f4f5]">{STORE_INFO.name}</strong>.
          </p>
        </div>

        {/* Quick summary strip */}
        <div className="bg-[#18181b] rounded-xl p-4 border border-[#27272a] text-left text-xs space-y-2">
          <div className="flex justify-between items-center text-[#71717a]">
            <span>Destinatário WhatsApp:</span>
            <span className="font-mono text-[#25D366] font-semibold">
              {STORE_INFO.whatsappDisplay}
            </span>
          </div>
          <div className="flex justify-between items-center text-[#71717a]">
            <span>Endereço de Entrega:</span>
            <span className="text-[#f4f4f5] text-right line-clamp-1">
              {orderData.customerInfo.address.street}, {orderData.customerInfo.address.number} - {orderData.customerInfo.address.neighborhood}
            </span>
          </div>
          <div className="flex justify-between items-center text-[#71717a]">
            <span>Forma de Pagamento:</span>
            <span className="text-[#d4af37] font-medium uppercase text-[11px]">
              {paymentLabel}
            </span>
          </div>
          {isPix && (
            <>
              <div className="flex justify-between items-center text-[#71717a]">
                <span>Subtotal:</span>
                <span className="font-mono text-[#f4f4f5]">
                  {formatCurrency(orderData.subtotal)}
                </span>
              </div>
              <div className="flex justify-between items-center text-[#22c55e]">
                <span>Desconto Pix (5%):</span>
                <span className="font-mono font-semibold">
                  - {formatCurrency(pixDiscount)}
                </span>
              </div>
            </>
          )}
          <div className="pt-2 border-t border-[#27272a] flex justify-between items-baseline">
            <span className="font-semibold text-[#f4f4f5]">
              {isPix ? 'Total no Pix:' : 'Total do Pedido:'}
            </span>
            <span className="text-lg font-bold font-mono text-[#f7e2a9]">
              {formatCurrency(orderTotal)}
            </span>
          </div>
        </div>

        {/* Formatted Message Preview Box */}
        <div className="text-left space-y-2">
          <div className="flex items-center justify-between text-xs text-[#71717a]">
            <span>Mensagem enviada para o WhatsApp:</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-[#d4af37] hover:text-[#f7e2a9] cursor-pointer text-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Mensagem</span>
                </>
              )}
            </button>
          </div>
          <div className="bg-[#09090b] p-3.5 rounded-lg border border-[#27272a] font-mono text-[11px] text-[#a1a1aa] whitespace-pre-wrap max-h-36 overflow-y-auto leading-relaxed">
            {orderData.message}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <a
            href={orderData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#09090b] font-bold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Abrir WhatsApp para Concluir Atendimento</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>

          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-lg bg-[#18181b] hover:bg-[#202026] border border-[#27272a] text-xs font-medium text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors cursor-pointer"
          >
            Fechar e Continuar Navegando
          </button>
        </div>
      </div>
    </div>
  );
};
