const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'products.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Normalize CRLF to LF
content = content.replace(/\r\n/g, '\n');

const decantsCode = `  // -------------------------------------------------------------
  // DECANTS (5ml) — Frações Exclusivas em Frascos de Vidro Premium
  // Espaço de preço reservado (isPricePending: true)
  // -------------------------------------------------------------
  {
    id: 'decant-asad-tradicional',
    name: 'Decant 5ml — Asad Tradicional Lattafa',
    category: 'Decant',
    brand: 'Lattafa',
    gender: 'Masculino',
    price: 0,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Oriental Especiado & Amadeirado',
    image: './image/decant_asad_tradicional.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    isPricePending: true,
    description: \`Decant de 5ml fracionado diretamente do frasco original lacrado do aclamado Asad Tradicional Lattafa.
Apresentado em frasco de vidro de alta qualidade com spray pump dourado luxuoso, rendendo entre 70 e 80 borrifadas completas.
Ideal para você experimentar na sua pele toda a evolução, intensidade e rastro dessa fragrância especiada oriental icônica antes de adquirir o frasco de 100ml.\`,
    highlights: [
      'Fração 100% original retirada do frasco autêntico Lattafa',
      'Frasco de vidro de 5ml com spray pump dourado de alta névoa',
      'Rendimento aproximado de 70 a 80 borrifadas',
      'Perfeito para levar no bolso, bolsa e viagens',
    ],
    notes: {
      top: 'Pimenta preta, Tabaco nobre, Abacaxi',
      heart: 'Patchouli, Café arábica, Íris refinada',
      base: 'Baunilha de Madagascar, Âmbar, Madeira seca, Benjoim',
    },
  },
  {
    id: 'decant-asad-elixir',
    name: 'Decant 5ml — Asad Elixir Lattafa',
    category: 'Decant',
    brand: 'Lattafa',
    gender: 'Masculino',
    price: 0,
    volume: '5 ml',
    concentration: 'Eau de Parfum Elixir (Fração 5ml)',
    olfactoryFamily: 'Amadeirada · Aromática · Especiada Oriental',
    image: './image/decant_asad_elixir.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    isPricePending: true,
    description: \`Decant de 5ml oficial do cobiçado Asad Elixir Lattafa, o grande lançamento da casa árabe.
Fracionado com rigor e precisão em elegante frasco de vidro de 5ml com borrifador dourado (~70 a 80 borrifadas).
Experimente a versão mais densa, magnética e poderosa da linha Asad, sentindo o calor do tabaco, açafrão nobre e madeiras preciosas.\`,
    highlights: [
      'Fração 100% original retirada do frasco lacrado Asad Elixir',
      'Atomizador de vidro luxuoso 5ml com tampa e spray dourado',
      'Aproximadamente 70 a 80 aplicações',
      'Teste a fixação extrema antes de investir no frasco grande',
    ],
    notes: {
      top: 'Pimenta-rosa, açafrão nobre e grapefruit cítrico',
      heart: 'Tabaco aromático, cedro majestoso e baunilha',
      base: 'Patchouli, olíbano (resina/incenso), cashmeran e âmbar seco',
    },
  },
  {
    id: 'decant-yara-rosa',
    name: 'Decant 5ml — Yara Rosa Lattafa',
    category: 'Decant',
    brand: 'Lattafa',
    gender: 'Feminino',
    price: 0,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Floral Gourmand Envolvente',
    image: './image/decant_yara_rosa.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    isPricePending: true,
    description: \`Decant de 5ml do mais adorado perfume feminino da perfumaria árabe: Yara Rosa Lattafa.
Extraído diretamente do frasco original lacrado para um frasco de vidro travel-size de 5ml com spray dourado de fino acabamento.
Permite sentir na própria pele sua abertura aveludada com frutas tropicais, orquídea e o famoso fundo de baunilha e sândalo cremoso.\`,
    highlights: [
      'Fração 100% original do Yara Rosa Eau de Parfum',
      'Frasco de vidro 5ml com spray dourado (~70 a 80 borrifadas)',
      'O queridinho da perfumaria árabe para levar sempre com você',
      'Excelente opção para conhecer e presentear',
    ],
    notes: {
      top: 'Orquídea heliotrópio, Tangerina doce',
      heart: 'Acorde Gourmand Tropical, Frutas silvestres',
      base: 'Baunilha de Madagascar, Sândalo cremoso, Almíscar',
    },
  },
  {
    id: 'decant-yara-tous',
    name: 'Decant 5ml — Yara Tous Lattafa',
    category: 'Decant',
    brand: 'Lattafa',
    gender: 'Feminino',
    price: 0,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Floral Frutado Tropical & Cremoso',
    image: './image/decant_yara_tous.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    isPricePending: true,
    description: \`Decant de 5ml fracionado do exótico e ensolarado Yara Tous Amarelo da Lattafa.
Embalagem de vidro resistente com spray pump dourado de alta precisão (~70-80 borrifadas).
Descubra a combinação deliciosa de manga madura, coco e maracujá com flor de laranjeira e baunilha cremosa na sua pele.\`,
    highlights: [
      'Fração autêntica do perfume Yara Tous Lattafa',
      'Atomizador 5ml de vidro premium com acabamento dourado',
      'Sensação tropical cremosa e irresistível para o dia a dia',
      'Rendimento de aproximadamente 75 borrifadas',
    ],
    notes: {
      top: 'Manga madura, Coco fresco, Maracujá exótico',
      heart: 'Jasmim, Flor de laranjeira, Flores brancas',
      base: 'Baunilha cremosa, Cashmeran, Almíscar delicado',
    },
  },
  {
    id: 'decant-club-de-nuit-man',
    name: 'Decant 5ml — Club de Nuit Intense Man Armaf',
    category: 'Decant',
    brand: 'Armaf',
    gender: 'Masculino',
    price: 0,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Amadeirado Especiado Cítrico',
    image: './image/decant_club_de_nuit_man.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    isPricePending: true,
    description: \`Decant de 5ml do lendário Club De Nuit Intense Man da prestigiada casa Armaf.
Fracionado cuidadosamente a partir do frasco original lacrado para frasco travel de vidro com borrifador metálico dourado.
Sinta o poder da abertura de limão e abacaxi seguida pelo coração esfumado de bétula e base de âmbar cinzento.\`,
    highlights: [
      'Fração 100% original retirada do Club de Nuit Intense Man Armaf',
      'Frasco de vidro 5ml com spray dourado de precisão',
      '70 a 80 borrifadas para comprovar o rastro e projeção imbatíveis',
      'Compacto e ideal para retoques em eventos e encontros',
    ],
    notes: {
      top: 'Limão siciliano, Abacaxi fresco, Bergamota, Groselha preta, Maçã',
      heart: 'Bétula esfumada, Jasmim, Rosa da Bulgária',
      base: 'Almíscar cinzento, Patchouli, Âmbar, Baunilha',
    },
  },
  {
    id: 'decant-club-de-nuit-woman',
    name: 'Decant 5ml — Club de Nuit Intense Woman Armaf',
    category: 'Decant',
    brand: 'Armaf',
    gender: 'Feminino',
    price: 0,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Chipre Floral Envolvente',
    image: './image/decant_club_de_nuit_woman.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    isPricePending: true,
    description: \`Decant de 5ml da sofisticada fragrância feminina Club de Nuit Intense Woman da Armaf.
Retirada com absoluta pureza do frasco lacrado para um frasco de vidro de 5ml com tampa e spray dourados.
Uma fragrância sedutora, misteriosa e potente da família chipre floral com rosas escuras, açafrão, especiarias e fundo de oud e patchouli.\`,
    highlights: [
      'Fração pura e original retirada do frasco autêntico Armaf',
      'Atomizador de vidro de 5ml com spray dourado (~70-80 borrifadas)',
      'Fixação impressionante de mais de 8 horas na pele',
      'Tamanho ideal para levar na bolsa em ocasiões especiais',
    ],
    notes: {
      top: 'Rosa nobre, Gerânio, Açafrão',
      heart: 'Noz-moscada, Violeta, Pimenta, Alcaravia',
      base: 'Patchouli, Baunilha, Âmbar, Agarwood (Oud)',
    },
  },
  {
    id: 'decant-khamrah-dukhan',
    name: 'Decant 5ml — Khamrah Dukhan Lattafa',
    category: 'Decant',
    brand: 'Lattafa',
    gender: 'Unissex',
    price: 0,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Oriental Gourmand & Resinoso Esfumado',
    image: './image/decant_khamrah_dukhan.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    isPricePending: true,
    description: \`Decant de 5ml do misterioso e opulento Khamrah Dukhan da Lattafa.
Fracionado artesanalmente com rigor a partir do frasco original lacrado para frasco de vidro 5ml com válvula dourada.
Aprecie as nuances ricas de incenso sagrado, tabaco nobre, pralinê e especiarias quentes com projeção arrasadora.\`,
    highlights: [
      'Fração 100% autêntica do Khamrah Dukhan Lattafa',
      'Frasco de vidro premium de 5ml com spray dourado',
      'Aroma denso e licoroso ideal para noites frias e eventos',
      'Rendimento estimado de 70 a 80 borrifadas',
    ],
    notes: {
      top: 'Especiarias quentes, Pimenta da Jamaica (Pimento), Mandarina vibrante',
      heart: 'Incenso sagrado, Ládano, Flor de Laranjeira, Patchouli refinado',
      base: 'Tabaco rico, Pralinê doce, Âmbar balsâmico, Fava Tonka, Benjoim',
    },
  },
  {
    id: 'decant-raneen',
    name: 'Decant 5ml — Raneen Asdaaf',
    category: 'Decant',
    brand: 'Asdaaf',
    gender: 'Feminino',
    price: 0,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Floral Frutado Gourmand',
    image: './image/decant_raneen.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    isPricePending: true,
    description: \`Decant de 5ml do encantador lançamento Raneen da casa Asdaaf (linha de luxo Lattafa).
Disponibilizado em frasco de vidro de alta qualidade de 5ml com borrifador spray dourado (~70 a 80 borrifadas).
Descubra a combinação floral moderna com notas luminosas de pitaia rosada, pera fresca, flor de laranjeira e fava tonka.\`,
    highlights: [
      'Fração 100% original retirada do frasco original lacrado Asdaaf',
      'Frasco de vidro 5ml com spray dourado de fina pulverização',
      'Aroma fresco, feminino e contemporâneo',
      'Excelente rendimento e praticidade para o dia a dia',
    ],
    notes: {
      top: 'Pitaia rosada, Pera suculenta e Mandarina fresca',
      heart: 'Flor de Laranjeira, Jasmim nobre e Frésia branca',
      base: 'Almíscar suave, Baunilha quente, Âmbar dourado e Fava Tonka',
    },
  },
  {
    id: 'decant-l-intrude',
    name: 'Decant 5ml — L\\'Intrude Maison Alhambra',
    category: 'Decant',
    brand: 'Maison Alhambra',
    gender: 'Feminino',
    price: 0,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Floral Branco Amadeirado Sofisticado',
    image: './image/decant_l_intrude.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    isPricePending: true,
    description: \`Decant de 5ml do aclamado L'Intrude Maison Alhambra, fragrância feminina que transborda elegância.
Fracionado diretamente do frasco original para um travel atomizer de vidro 5ml com acabamento dourado.
Experimente o buquê magnífico de tuberosa e jasmim sambac com notas de topo de pera e fundo amadeirado de vetiver e patchouli.\`,
    highlights: [
      'Fração original 100% pura da Maison Alhambra',
      'Frasco de vidro de 5ml com spray dourado de precisão',
      'Rendimento aproximado de 75 borrifadas',
      'Ideal para ter sempre na bolsa em qualquer ocasião elegante',
    ],
    notes: {
      top: 'Pêra, Bergamota radiante',
      heart: 'Tuberosa, Flor de Laranjeira, Jasmim Sambac',
      base: 'Patchouli, Vetiver, Baunilha, Ambroxan',
    },
  },
  {
    id: 'decant-philos-pura',
    name: 'Decant 5ml — Philos Pura Maison Alhambra',
    category: 'Decant',
    brand: 'Maison Alhambra',
    gender: 'Unissex',
    price: 0,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Cítrico Frutado Ambarado',
    image: './image/decant_philos_pura.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    isPricePending: true,
    description: \`Decant de 5ml do versátil e apaixonante Philos Pura Maison Alhambra.
Apresentado em frasco de vidro de 5ml com spray dourado de alto padrão (~70 a 80 borrifadas).
Fragrância unissex vibrante com explosão cítrica mediterrânea de laranja e limão sicilianos combinados a frutas maduras, baunilha de Madagascar e âmbar.\`,
    highlights: [
      'Fração 100% autêntica retirada do frasco original Philos Pura',
      'Atomizador de vidro 5ml com spray dourado de fina névoa',
      'Perfeito para o clima tropical brasileiro em qualquer época',
      'Rendimento de 70 a 80 borrifadas',
    ],
    notes: {
      top: 'Laranja siciliana, Limão siciliano, Bergamota da Calábria',
      heart: 'Acorde de Frutas maduras do Mediterrâneo',
      base: 'Baunilha de Madagascar, Âmbar quente, Almíscar branco',
    },
  },
  {
    id: 'decant-luxe-gold',
    name: 'Decant 5ml — Luxe Gold Maison Alhambra',
    category: 'Decant',
    brand: 'Maison Alhambra',
    gender: 'Unissex',
    price: 0,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Doce Especiado & Âmbar Precioso',
    image: './image/decant_luxe_gold.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    isPricePending: true,
    description: \`Decant de 5ml da refinada fragrância Luxe Gold Maison Alhambra.
Fracionado diretamente do frasco lacrado para frasco travel em vidro 5ml com válvula e tampa dourada.
Apresenta rastro doce especiado inebriante com açafrão, canela, rosa damascena, âmbar dourado e oud suave.\`,
    highlights: [
      'Fração original 100% autêntica Maison Alhambra',
      'Frasco de vidro 5ml com spray dourado luxuoso',
      'Fixação duradoura de ~8h com aroma doce e envolvente',
      'Rendimento de 70 a 80 aplicações',
    ],
    notes: {
      top: 'Açafrão aromático, Canela fina, Mandarina',
      heart: 'Rosa damascena, Âmbar dourado, Especiarias suaves',
      base: 'Oud suave, Baunilha Bourbon, Couro macio, Almíscar',
    },
  },
  {
    id: 'decant-bareeq-dhahab',
    name: 'Decant 5ml — Bareeq Al Dhahab Al Wataniah',
    category: 'Decant',
    brand: 'Al Wataniah',
    gender: 'Unissex',
    price: 0,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Oriental Amadeirado & Frutado Imperial',
    image: './image/decant_bareeq_dhahab.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    isPricePending: true,
    description: \`Decant de 5ml do majestoso Bareeq Al Dhahab da casa árabe Al Wataniah.
Extraído diretamente do frasco original lacrado para um frasco de vidro de 5ml com spray pump dourado.
Conheça na sua pele toda a riqueza oriental do açafrão, pimenta rosa, incenso nobre, âmbar e madeiras preciosas.\`,
    highlights: [
      'Fração 100% original retirada do frasco Bareeq Al Dhahab Al Wataniah',
      'Atomizador de vidro premium 5ml com spray dourado',
      'Equilíbrio supremo entre notas orientais, amadeiradas e ambaradas',
      'Rendimento estimado de 70 a 80 borrifadas',
    ],
    notes: {
      top: 'Açafrão nobre, Pimenta rosa, Pêra dourada',
      heart: 'Rosa oriental, Incenso leve, Jasmim luminoso',
      base: 'Âmbar rico, Almíscar branco, Patchouli, Notas amadeiradas',
    },
  },
];

export const CATEGORIES = [
  'Todos',
  'Decants (5ml)',
  'Frascos Originais (100ml)',
  'Masculino',
  'Feminino',
  'Unissex',
];`;

const closingProductsIndex = content.lastIndexOf('];\n\nexport const CATEGORIES');
if (closingProductsIndex === -1) {
  console.error('Target closing sequence not found!');
  process.exit(1);
}

const newContent = content.slice(0, closingProductsIndex) + decantsCode + content.slice(content.indexOf('export const BRANDS', closingProductsIndex));

fs.writeFileSync(filePath, newContent, 'utf-8');
console.log('Successfully updated src/data/products.ts with all 12 decants and new CATEGORIES!');
