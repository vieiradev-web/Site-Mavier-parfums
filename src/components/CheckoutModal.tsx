import React, { useState } from 'react';
import {
  X,
  ArrowLeft,
  MessageCircle,
  MapPin,
  User,
  CreditCard,
  QrCode,
  ShieldCheck,
  Loader2,
  Sparkles,
} from 'lucide-react';
import { CartItem, CustomerOrderInfo, PaymentMethod } from '../types';
import {
  formatCurrency,
  fetchAddressByCep,
  generateOrderWhatsAppMessage,
  buildWhatsAppUrl,
} from '../utils/whatsapp';
import { STORE_INFO } from '../data/products';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted: (orderSummary: {
    message: string;
    customerInfo: CustomerOrderInfo;
    items: CartItem[];
    subtotal: number;
    whatsappUrl: string;
  }) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderCompleted,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  // Address fields
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('PE');
  const [reference, setReference] = useState('');
  const [isSearchingCep, setIsSearchingCep] = useState(false);

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('pix');
  const [notes, setNotes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  // CEP lookup handler
  const handleCepChange = async (value: string) => {
    // Only numbers
    const clean = value.replace(/\D/g, '').slice(0, 8);
    // Format as 00000-000
    let formatted = clean;
    if (clean.length > 5) {
      formatted = `${clean.slice(0, 5)}-${clean.slice(5)}`;
    }
    setCep(formatted);

    if (clean.length === 8) {
      setIsSearchingCep(true);
      try {
        const address = await fetchAddressByCep(clean);
        if (address && !address.error) {
          if (address.street) setStreet(address.street);
          if (address.neighborhood) setNeighborhood(address.neighborhood);
          if (address.city) setCity(address.city);
          if (address.state) setState(address.state);
        }
      } finally {
        setIsSearchingCep(false);
      }
    }
  };

  // Phone mask
  const handlePhoneChange = (value: string) => {
    const clean = value.replace(/\D/g, '').slice(0, 11);
    let formatted = clean;
    if (clean.length > 2) {
      formatted = `(${clean.slice(0, 2)}) ${clean.slice(2)}`;
    }
    if (clean.length > 7) {
      formatted = `(${clean.slice(0, 2)}) ${clean.slice(2, 7)}-${clean.slice(7)}`;
    }
    setCustomerPhone(formatted);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!customerName.trim()) {
      setErrorMessage('Por favor, informe seu nome completo.');
      return;
    }
    if (!customerPhone.trim() || customerPhone.replace(/\D/g, '').length < 10) {
      setErrorMessage('Por favor, informe um telefone/WhatsApp válido com DDD.');
      return;
    }
    if (!street.trim() || !number.trim()) {
      setErrorMessage('Por favor, informe o endereço completo (Rua e Número).');
      return;
    }
    if (!neighborhood.trim() || !city.trim()) {
      setErrorMessage('Por favor, informe o Bairro e a Cidade.');
      return;
    }

    const customerInfo: CustomerOrderInfo = {
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      address: {
        cep: cep.trim(),
        street: street.trim(),
        number: number.trim(),
        complement: complement.trim() || undefined,
        neighborhood: neighborhood.trim(),
        city: city.trim(),
        state: state.trim() || 'PE',
        reference: reference.trim() || undefined,
      },
      paymentMethod,
      notes: notes.trim() || undefined,
    };

    const whatsappMessage = generateOrderWhatsAppMessage(items, customerInfo);
    const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

    // Open WhatsApp
    try {
      window.open(whatsappUrl, '_blank');
    } catch {
      // In case window.open is blocked, user will have the direct button on success screen
    }

    onOrderCompleted({
      message: whatsappMessage,
      customerInfo,
      items,
      subtotal,
      whatsappUrl,
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#121216] border border-[#d4af37]/40 rounded-2xl shadow-2xl shadow-black overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#27272a] bg-[#0d0d10] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              aria-label="Voltar para o carrinho"
              className="p-1.5 rounded-lg text-[#a1a1aa] hover:text-[#f4f4f5] hover:bg-[#18181b] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#f4f4f5]">
                Finalizar Pedido Mavier
              </h2>
              <p className="text-xs text-[#a1a1aa]">
                Preencha seus dados para envio imediato do resumo no WhatsApp
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Fechar formulário"
            className="p-2 text-[#71717a] hover:text-[#f4f4f5] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmitOrder} className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-7">
          {errorMessage && (
            <div className="p-3.5 rounded-lg bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
              <span className="font-bold">Atenção:</span> {errorMessage}
            </div>
          )}

          {/* Section 1: Customer Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
              <User className="w-4 h-4 text-[#d4af37]" />
              <span>1. Identificação do Cliente</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#d4d4d8] mb-1.5">
                  Seu Nome Completo <span className="text-[#d4af37]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo Silva"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#18181b] border border-[#27272a] focus:border-[#d4af37] text-sm text-[#f4f4f5] px-3.5 py-2.5 rounded-lg outline-none transition-colors placeholder:text-[#52525b]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#d4d4d8] mb-1.5">
                  WhatsApp para Contato <span className="text-[#d4af37]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(81) 98765-4321"
                  value={customerPhone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className="w-full bg-[#18181b] border border-[#27272a] focus:border-[#d4af37] text-sm text-[#f4f4f5] px-3.5 py-2.5 rounded-lg outline-none transition-colors placeholder:text-[#52525b]"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Address Info */}
          <div className="space-y-4 pt-4 border-t border-[#27272a]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span>2. Endereço de Entrega</span>
              </div>
              <span className="text-[11px] text-[#71717a]">
                Digite o CEP para preenchimento rápido
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#d4d4d8] mb-1.5">
                  CEP
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="00000-000"
                    value={cep}
                    onChange={(e) => handleCepChange(e.target.value)}
                    className="w-full bg-[#18181b] border border-[#27272a] focus:border-[#d4af37] text-sm text-[#f4f4f5] px-3.5 py-2.5 rounded-lg outline-none transition-colors placeholder:text-[#52525b] font-mono"
                  />
                  {isSearchingCep && (
                    <Loader2 className="w-4 h-4 text-[#d4af37] animate-spin absolute right-3 top-1/2 -translate-y-1/2" />
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-[#d4d4d8] mb-1.5">
                  Rua / Avenida <span className="text-[#d4af37]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Av. Boa Viagem"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full bg-[#18181b] border border-[#27272a] focus:border-[#d4af37] text-sm text-[#f4f4f5] px-3.5 py-2.5 rounded-lg outline-none transition-colors placeholder:text-[#52525b]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#d4d4d8] mb-1.5">
                  Número <span className="text-[#d4af37]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: 1200"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="w-full bg-[#18181b] border border-[#27272a] focus:border-[#d4af37] text-sm text-[#f4f4f5] px-3.5 py-2.5 rounded-lg outline-none transition-colors placeholder:text-[#52525b]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#d4d4d8] mb-1.5">
                  Complemento
                </label>
                <input
                  type="text"
                  placeholder="Apto 402, Bloco B"
                  value={complement}
                  onChange={(e) => setComplement(e.target.value)}
                  className="w-full bg-[#18181b] border border-[#27272a] focus:border-[#d4af37] text-sm text-[#f4f4f5] px-3.5 py-2.5 rounded-lg outline-none transition-colors placeholder:text-[#52525b]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#d4d4d8] mb-1.5">
                  Bairro <span className="text-[#d4af37]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Boa Viagem"
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  className="w-full bg-[#18181b] border border-[#27272a] focus:border-[#d4af37] text-sm text-[#f4f4f5] px-3.5 py-2.5 rounded-lg outline-none transition-colors placeholder:text-[#52525b]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#d4d4d8] mb-1.5">
                  Cidade / UF <span className="text-[#d4af37]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Recife / PE"
                  value={city ? `${city} - ${state}` : ''}
                  onChange={(e) => {
                    const parts = e.target.value.split('-');
                    setCity(parts[0]?.trim() || e.target.value);
                    if (parts[1]) setState(parts[1].trim());
                  }}
                  className="w-full bg-[#18181b] border border-[#27272a] focus:border-[#d4af37] text-sm text-[#f4f4f5] px-3.5 py-2.5 rounded-lg outline-none transition-colors placeholder:text-[#52525b]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#d4d4d8] mb-1.5">
                Ponto de Referência (opcional)
              </label>
              <input
                type="text"
                placeholder="Ex: Próximo ao Shopping Recife, portaria 24h"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                className="w-full bg-[#18181b] border border-[#27272a] focus:border-[#d4af37] text-sm text-[#f4f4f5] px-3.5 py-2.5 rounded-lg outline-none transition-colors placeholder:text-[#52525b]"
              />
            </div>
          </div>

          {/* Section 3: Payment Method Selection */}
          <div className="space-y-4 pt-4 border-t border-[#27272a]">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
              <CreditCard className="w-4 h-4 text-[#d4af37]" />
              <span>3. Forma de Pagamento</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* PIX */}
              <button
                type="button"
                onClick={() => setPaymentMethod('pix')}
                className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  paymentMethod === 'pix'
                    ? 'bg-[#18181b] border-[#22c55e] shadow-lg shadow-[#22c55e]/10'
                    : 'bg-[#141418] border-[#27272a] hover:border-[#3f3f46]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-[#f4f4f5]">PIX</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#22c55e]/20 border border-[#22c55e]/40 text-[#22c55e] font-mono">
                      5% OFF
                    </span>
                  </div>
                  <QrCode className="w-4 h-4 text-[#22c55e]" />
                </div>
                <p className="text-[11px] text-[#a1a1aa] leading-relaxed">
                  Confirmação instantânea com 5% de desconto automático no valor do pedido!
                </p>
                <span className="inline-block mt-2 text-[10px] uppercase font-semibold text-[#22c55e]">
                  Total: {formatCurrency(subtotal * 0.95)} · Mais Rápido
                </span>
              </button>

              {/* Cartão de Crédito */}
              <button
                type="button"
                onClick={() => setPaymentMethod('credit')}
                className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  paymentMethod === 'credit'
                    ? 'bg-[#18181b] border-[#d4af37] shadow-lg shadow-[#d4af37]/10'
                    : 'bg-[#141418] border-[#27272a] hover:border-[#3f3f46]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-[#f4f4f5]">
                    Cartão de Crédito
                  </span>
                  <CreditCard className="w-4 h-4 text-[#d4af37]" />
                </div>
                <p className="text-[11px] text-[#a1a1aa] leading-relaxed">
                  Parcelamento facilitado em até 3x sem juros (ou até 12x). Link seguro enviado no WhatsApp.
                </p>
                <span className="inline-block mt-2 text-[10px] uppercase font-semibold text-[#d4af37]">
                  Até 3x sem juros
                </span>
              </button>

              {/* Cartão de Débito */}
              <button
                type="button"
                onClick={() => setPaymentMethod('debit')}
                className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  paymentMethod === 'debit'
                    ? 'bg-[#18181b] border-[#d4af37] shadow-lg shadow-[#d4af37]/10'
                    : 'bg-[#141418] border-[#27272a] hover:border-[#3f3f46]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-[#f4f4f5]">
                    Cartão de Débito
                  </span>
                  <CreditCard className="w-4 h-4 text-[#71717a]" />
                </div>
                <p className="text-[11px] text-[#a1a1aa] leading-relaxed">
                  Pagamento via maquininha na entrega presencial (Recife) ou link de débito online.
                </p>
                <span className="inline-block mt-2 text-[10px] uppercase font-semibold text-[#a1a1aa]">
                  Débito à vista
                </span>
              </button>
            </div>
          </div>

          {/* Section 4: Notes */}
          <div className="space-y-2 pt-4 border-t border-[#27272a]">
            <label className="block text-xs font-medium text-[#d4d4d8]">
              Observações Adicionais (opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Ex: Embalar para presente, ligar antes de entregar..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#18181b] border border-[#27272a] focus:border-[#d4af37] text-xs text-[#f4f4f5] p-3 rounded-lg outline-none transition-colors placeholder:text-[#52525b]"
            />
          </div>

          {/* Section 5: Order Summary Review */}
          <div className="bg-[#18181b] p-4 rounded-xl border border-[#27272a] space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#f4f4f5] flex items-center justify-between">
              <span>Resumo do Pedido ({items.length} fragrância{items.length === 1 ? '' : 's'})</span>
              <span className="text-[#d4af37] font-mono font-bold text-sm">
                Total: {formatCurrency(paymentMethod === 'pix' ? subtotal * 0.95 : subtotal)}
              </span>
            </h4>

            <div className="divide-y divide-[#27272a] text-xs text-[#a1a1aa] max-h-36 overflow-y-auto pr-2 space-y-1">
              {items.map((item) => (
                <div key={item.product.id} className="pt-1.5 pb-1 flex justify-between items-center">
                  <span className="line-clamp-1 pr-2">
                    {item.quantity}x {item.product.name}
                  </span>
                  <span className="font-mono text-[#f4f4f5] tabular-nums whitespace-nowrap">
                    {formatCurrency(item.product.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {paymentMethod === 'pix' && (
              <div className="pt-2 border-t border-[#27272a] flex justify-between items-center text-xs text-[#22c55e]">
                <span className="flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                  Desconto especial Pix (5%):
                </span>
                <span className="font-mono font-bold">- {formatCurrency(subtotal * 0.05)}</span>
              </div>
            )}

            <div className="pt-2 border-t border-[#27272a] flex items-center justify-between text-xs">
              <span className="text-[#71717a]">Número WhatsApp de Envio:</span>
              <span className="font-semibold text-[#25D366] font-mono">
                {STORE_INFO.whatsappDisplay}
              </span>
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-2 space-y-3">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#09090b] font-bold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer shadow-xl shadow-[#25D366]/20 hover:shadow-[#25D366]/40"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Enviar Resumo Completo para o WhatsApp</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#71717a]">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>
                Atendimento direto e seguro com o especialista da Mavier Parfums.
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
