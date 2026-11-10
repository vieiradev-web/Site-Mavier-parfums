# Mavier Parfums — Catálogo online

Catálogo de perfumes árabes com carrinho e fechamento de pedido direto no WhatsApp.
Feito com React, Vite e Tailwind CSS.

## Rodar no computador

```bash
npm install
npm run dev        # abre em http://localhost:3000
```

## Onde mexer

| O que mudar | Arquivo |
| --- | --- |
| Produtos, preços, categorias, marcas, número do WhatsApp | `src/data/products.ts` |
| Mensagem do pedido enviada ao WhatsApp | `src/utils/whatsapp.ts` |
| Fotos | `public/image/` (use o caminho `./image/nome.jpg` no produto) |

- **Preço de um produto:** altere o campo `price`. O carrinho de quem já visitou o site é atualizado sozinho.
- **Produto "sob consulta":** use `price: 0` e `isPricePending: true`; ele mostra o botão de consultar pelo WhatsApp.
- **Black Friday:** em `src/data/products.ts`, a chave `BLACK_FRIDAY_ATIVA` liga (`true`) ou desliga (`false`) todas as promoções. Os preços promocionais ficam em `PRECOS_BLACK_FRIDAY` (id do produto: preço) e o desconto dos decants em `DESCONTO_DECANTS_BLACK_FRIDAY`. Os preços normais não são alterados.
- **Produto esgotado:** adicione `soldOut: true,` no produto. Ele continua no catálogo, com selo "Esgotado" e foto em preto e branco, sem botão de compra (há um link para pedir aviso pelo WhatsApp). Para voltar a vender, apague a linha ou use `soldOut: false`.
- **Filtro de valor:** os limites do controle deslizante são calculados automaticamente a partir dos preços cadastrados.
- **Desconto no Pix:** 5% (aplicado no carrinho, no checkout e na mensagem do WhatsApp).

## Conferir as imagens

```bash
npm run check:images
```

Lista qualquer imagem usada no código que não exista em `public/image/` (inclusive diferenças de maiúsculas e minúsculas, que importam no GitHub Pages).

## Publicar (GitHub Pages)

```bash
npm run build      # gera a pasta dist/
```

Publique o **conteúdo** da pasta `dist/` (o `index.html` e a pasta `assets/`, junto com as imagens) no repositório do site.
Guarde também o código-fonte (`src/`, `public/`, `package.json`, `vite.config.ts` e `index.html` da raiz) em um repositório ou branch, para poder editar o site depois.
