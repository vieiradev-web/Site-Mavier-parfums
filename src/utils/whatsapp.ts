import { CartItem, CustomerOrderInfo } from '../types';
import { STORE_INFO } from '../data/products';

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function formatPaymentMethod(method: 'pix' | 'credit' | 'debit'): string {
  switch (method) {
    case 'pix':
      return 'PIX (Chave rápida com confirmação imediata)';
    case 'credit':
      return 'Cartão de Crédito (Link de pagamento / Máquina)';
    case 'debit':
      return 'Cartão de Débito';
    default:
      return method;
  }
}

export function generateOrderWhatsAppMessage(
  cartItems: CartItem[],
  customerInfo: CustomerOrderInfo
): string {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const itemsList = cartItems
    .map((item, index) => {
      const itemTotal = item.product.price * item.quantity;
      return `${index + 1}. *${item.product.name}*\n   • Qtd: ${item.quantity} un. × ${formatCurrency(
        item.product.price
      )} = *${formatCurrency(itemTotal)}*`;
    })
    .join('\n\n');

  const complementText = customerInfo.address.complement
    ? `\n   • Complemento: ${customerInfo.address.complement}`
    : '';
  const refText = customerInfo.address.reference
    ? `\n   • Ponto de Referência: ${customerInfo.address.reference}`
    : '';
  const notesText = customerInfo.notes
    ? `\n\n📝 *Observações adicionais:*\n"${customerInfo.notes}"`
    : '';

  const message = `✨ *NOVO PEDIDO — ${STORE_INFO.name.toUpperCase()}* ✨
━━━━━━━━━━━━━━━━━━━━━━━

👤 *DADOS DO CLIENTE:*
• *Nome:* ${customerInfo.customerName}
• *WhatsApp de Contato:* ${customerInfo.customerPhone || 'Informado no envio'}

📍 *ENDEREÇO DE ENTREGA:*
   • Logradouro: ${customerInfo.address.street}, Nº ${customerInfo.address.number}${complementText}
   • Bairro: ${customerInfo.address.neighborhood}
   • Cidade / UF: ${customerInfo.address.city} - ${customerInfo.address.state}
   • CEP: ${customerInfo.address.cep}${refText}

💳 *FORMA DE PAGAMENTO SELECIONADA:*
• ${formatPaymentMethod(customerInfo.paymentMethod)}

━━━━━━━━━━━━━━━━━━━━━━━
🛍️ *ITENS DO PEDIDO (${cartItems.reduce((acc, i) => acc + i.quantity, 0)} itens):*

${itemsList}

━━━━━━━━━━━━━━━━━━━━━━━
💰 *VALOR TOTAL DO PEDIDO:*
• *${formatCurrency(subtotal)}*

*(Frete / prazo de entrega a confirmar com o atendente)*${notesText}

━━━━━━━━━━━━━━━━━━━━━━━
_Mensagem gerada pelo catálogo virtual oficial da Mavier Parfums._
_Aguardando confirmação e orientações para pagamento._`;

  return message;
}

export function buildWhatsAppUrl(message: string): string {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodedText}`;
}

export async function fetchAddressByCep(cep: string): Promise<{
  street?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  error?: boolean;
} | null> {
  const cleanCep = cep.replace(/\D/g, '');
  if (cleanCep.length !== 8) return null;

  try {
    const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
    const data = await res.json();
    if (data.erro) {
      return { error: true };
    }
    return {
      street: data.logradouro || '',
      neighborhood: data.bairro || '',
      city: data.localidade || '',
      state: data.uf || '',
      error: false,
    };
  } catch {
    return null;
  }
}
