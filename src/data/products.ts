import { Product } from '../types';

export const STORE_INFO = {
  name: 'Mavier parfums',
  tagline: 'Alta Perfumaria Árabe & Criações Exclusivas',
  whatsappDisplay: '(55) 81 9 8125-2680',
  whatsappNumber: '5581981252680', // clean number for wa.me link
  city: 'Recife / PE',
  guaranteeText: 'Fragrâncias 100% Originais, Lacradas e Importadas com Pronta Entrega',
  heroImage: './image/colecao_lattafa.jpg',
  logo: './image/logo.jpeg',
};

export const PRODUCTS: Product[] = [
  {
    id: 'asad-tradicional',
    name: 'Asad Tradicional Lattafa 100 ML',
    category: 'Perfume Árabe',
    brand: 'Lattafa',
    gender: 'Masculino',
    price: 287.90,
    volume: '100 ml',
    concentration: 'Eau de Parfum',
    olfactoryFamily: 'Oriental Especiado & Amadeirado',
    image: './image/asad-tradicional.jpeg',
    tag: 'Mais Vendido',
    description: `Asad — Lattafa
Intenso, marcante e extremamente envolvente, o Asad é uma fragrância masculina para quem gosta de presença e personalidade.
Sua composição combina um lado especiado, quente e amadeirado, criando um aroma sofisticado e poderoso. Na evolução, revela nuances adocicadas e envolventes, deixando uma assinatura olfativa elegante e muito marcante.
É aquele tipo de perfume que transmite confiança, força e presença, perfeito para noites, encontros, eventos e ocasiões especiais — especialmente em dias mais frescos.`,
    highlights: [
      'Perfume masculino e marcante',
      'Perfil especiado, amadeirado e levemente adocicado',
      'Excelente presença e projeção superior',
      'Ideal para noites e ocasiões especiais',
      'Um dos maiores destaques mundiais da perfumaria árabe',
    ],
    notes: {
      top: 'Pimenta preta, Tabaco, Abacaxi',
      heart: 'Patchouli, Café, Íris refinada',
      base: 'Baunilha, Âmbar, Madeira seca, Benjoim',
    },
  },
  {
    id: 'asad-elixir',
    name: 'Asad Elixir Lattafa 100 ML',
    category: 'Perfume Árabe',
    brand: 'Lattafa',
    gender: 'Masculino',
    price: 297.90,
    volume: '100 ml',
    concentration: 'Eau de Parfum Elixir',
    olfactoryFamily: 'Amadeirada · Aromática · Especiada Oriental',
    image: './image/asad_elixir.webp',
    tag: 'Lançamento',
    description: `Descubra o poder e a sofisticação do novo Asad Elixir, o mais recente lançamento da prestigiada casa árabe Lattafa Perfumes. Inspirado na força, elegância e presença marcante do homem moderno, o Asad Elixir é uma fragrância intensa, refinada e inconfundível — feita para quem quer ser notado.
Essa combinação cria um perfume elegante e magnético, com um início vibrante e picante, um corpo encorpado e quente, e um fundo amadeirado e resinoso que transmite luxo e poder.`,
    highlights: [
      'Lançamento recente de prestígio Lattafa',
      'Abertura vibrante com toque especiado e grapefruit',
      'Coração encorpado de tabaco, cedro e baunilha',
      'Fixação e projeção de alta densidade',
    ],
    notes: {
      top: 'Pimenta-rosa, açafrão nobre e grapefruit cítrico',
      heart: 'Tabaco aromático, cedro majestoso e baunilha',
      base: 'Patchouli, olíbano (resina/incenso), cashmeran e âmbar seco',
    },
  },
  {
    id: 'yara-rosa',
    name: 'Yara Rosa Lattafa Eau De Perfume 100 Ml',
    category: 'Perfume Árabe',
    brand: 'Lattafa',
    gender: 'Feminino',
    price: 287.90,
    volume: '100 ml',
    concentration: 'Eau de Parfum',
    olfactoryFamily: 'Floral Gourmand Envolvente',
    image: './image/yara_rosa.jpg',
    tag: 'Favorito Feminino',
    description: `Yara, da Lattafa, é um eau de parfum feminino que combina presença marcante com um perfil floral envolvente. Sua proposta é valorizar a rotina de quem busca uma fragrância elegante, versátil e com identidade própria.
A família olfativa floral traz um toque delicado e ao mesmo tempo expressivo, ideal para acompanhar momentos de trabalho, encontros e ocasiões em que se deseja uma assinatura mais refinada.
Produzido nos Emirados Árabes Unidos, este perfume também se destaca por ser livre de crueldade e acompanhar estojo com acabamento cuidadoso.`,
    highlights: [
      'Fragrância feminina, elegante e versátil',
      'Acorde cremoso e floral aveludado',
      'Estojo nobre com apresentação primorosa',
      'Produzido nos Emirados Árabes Unidos (Cruelty Free)',
    ],
    notes: {
      top: 'Orquídea heliotrópio, Tangerina doce',
      heart: 'Acorde Gourmand Tropical, Frutas silvestres',
      base: 'Baunilha de Madagascar, Sândalo cremoso, Almíscar',
    },
  },
  {
    id: 'yara-tous',
    name: 'Yara Tous 100ml Eau De Perfume',
    category: 'Perfume Árabe',
    brand: 'Lattafa',
    gender: 'Feminino',
    price: 257.90,
    volume: '100 ml',
    concentration: 'Eau de Parfum',
    olfactoryFamily: 'Floral Frutado Tropical & Cremoso',
    image: './image/yara_tous.jpg',
    tag: 'Sucesso de Vendas',
    description: `Perfume Yara Tous — Lattafa
Uma fragrância feminina, delicada e envolvente, perfeita para quem ama perfumes doces, frutados e sofisticados.
O Yara Tous combina notas tropicais e florais em uma composição alegre e marcante. A fragrância traz uma abertura refrescante e frutada, evoluindo para um coração floral delicado e um fundo cremoso e aconchegante.
Sensação: tropical, feminina, cremosa e irresistível. Ideal para o dia a dia, encontros e momentos especiais.`,
    highlights: [
      'Destaques: manga, coco, maracujá, flores brancas e baunilha',
      'Sensação tropical, aveludada e irresistível',
      'Versatilidade perfeita do dia para a noite',
    ],
    notes: {
      top: 'Manga madura, Coco fresco, Maracujá exótico',
      heart: 'Jasmim, Flor de laranjeira, Flores brancas',
      base: 'Baunilha cremosa, Cashmeran, Almíscar delicado',
    },
  },
  {
    id: 'club-de-nuit-intense-man',
    name: 'Club De Nuit Intense Da Armaf Edt 105ml Masculino',
    category: 'Perfume Árabe',
    brand: 'Armaf',
    gender: 'Masculino',
    price: 297.90,
    volume: '105 ml',
    concentration: 'Eau de Toilette',
    olfactoryFamily: 'Amadeirado Especiado Cítrico',
    image: './image/club_de_nuit_man.webp',
    tag: 'Clássico Imponente',
    description: `Club de Nuit Intense da Armaf é uma fragrância masculina com perfil marcante e envolvente, pensada para quem aprecia fragrâncias com presença e personalidade. Sua composição combina notas frutadas e cítricas com fundo amadeirado e especiado, criando uma assinatura olfativa intensa e equilibrada.
Na saída, abacaxi, bergamota, limão, maçã, casis e ruibarbo trazem frescor e vibração, enquanto o jasmim acrescenta suavidade ao conjunto. No corpo e no fundo, a presença de bétula reforça o lado amadeirado, trazendo profundidade e fixação inconfundível.`,
    highlights: [
      'Ícone consagrado da perfumaria masculina global',
      'Abertura explosiva de abacaxi, bergamota e limão',
      'Secagem amadeirada nobre com bétula e âmbar cinzento',
      'Elogiado por sua projeção e rastro magnético',
    ],
    notes: {
      top: 'Limão siciliano, Abacaxi fresco, Bergamota, Groselha preta, Maçã',
      heart: 'Bétula esfumada, Jasmim, Rosa da Bulgária',
      base: 'Almíscar cinzento, Patchouli, Âmbar, Baunilha',
    },
  },
  {
    id: 'club-de-nuit-intense-woman',
    name: 'Armaf Club De Nuit Intense 105 ml Edp - Feminino',
    category: 'Perfume Árabe',
    brand: 'Armaf',
    gender: 'Feminino',
    price: 297.90,
    volume: '105 ml',
    concentration: 'Eau de Parfum',
    olfactoryFamily: 'Chipre Floral Envolvente',
    image: './image/club_de_nuit_woman.jpg',
    tag: 'Luxo Sedutor',
    description: `Club de Nuit Intense Woman é um perfume feminino da Armaf, em eau de parfum e apresentação em spray de 105 ml.
Sua fragrância pertence à família olfativa chipre floral e tem duração aproximada de 8 horas. Acompanha estojo de luxo. Uma opção indispensável para quem busca uma fragrância feminina marcante, sofisticada e misteriosa.`,
    highlights: [
      'Eau de Parfum sofisticado com duração de mais de 8 horas',
      'Família chipre floral com assinatura nobre e sedutora',
      'Apresentação impecável com estojo luxuoso',
    ],
    notes: {
      top: 'Rosa nobre, Gerânio, Açafrão',
      heart: 'Noz-moscada, Violeta, Pimenta, Alcaravia',
      base: 'Patchouli, Baunilha, Âmbar, Agarwood (Oud)',
    },
  },
  {
    id: 'khamrah-dukhan',
    name: 'Khamrah Dukhan - Lattafa',
    category: 'Perfume Árabe',
    brand: 'Lattafa',
    gender: 'Unissex',
    price: 247.90,
    volume: '100 ml',
    concentration: 'Eau de Parfum Original',
    olfactoryFamily: 'Oriental Gourmand & Resinoso Esfumado',
    image: './image/khamrah_dukhan.webp',
    tag: 'Opulência Noturna',
    description: `O Khamrah Dukhan representa a vertente mais intensa, misteriosa e imponente da aclamada linha Khamrah da Lattafa. Criado para quem aprecia fragrâncias de forte personalidade, este Eau de Parfum mescla acordes densos de tabaco, incenso e especiarias quentes com a assinatura doce e envolvente da marca.
Destinado a quem busca sofisticação e sobriedade, entrega uma experiência olfativa profunda, sofisticada e de altíssimo padrão.`,
    highlights: [
      'Excepcional fixação prolongada na pele e tecidos (> 8h)',
      'Rastro olfativo denso e envolvente de alta densidade',
      'Notas quentes de tabaco, pralinê, âmbar e especiarias',
    ],
    notes: {
      top: 'Especiarias quentes, Pimenta da Jamaica (Pimento), Mandarina vibrante',
      heart: 'Incenso sagrado, Ládano, Flor de Laranjeira, Patchouli refinado',
      base: 'Tabaco rico, Pralinê doce, Âmbar balsâmico, Fava Tonka, Benjoim',
    },
  },
  {
    id: 'raneen-asdaaf',
    name: 'Raneen Asdaaf 80ml Feminino Floral',
    category: 'Perfume Árabe',
    brand: 'Asdaaf',
    gender: 'Feminino',
    price: 267.90,
    volume: '80 ml',
    concentration: 'Eau de Parfum',
    olfactoryFamily: 'Floral Frutado Gourmand',
    image: './image/raneen.jpg',
    tag: 'Novidade 2025',
    description: `Raneen de Asdaaf é um perfume Floral Frutado Gourmand Feminino. Esta é uma nova e encantadora fragrância lançada em 2025.
Sua saída combina o frescor moderno da pitaia e pera com a mandarina suculenta, desabrochando em um coração floral acetinado de jasmim, flor de laranjeira e frésia sobre uma cama cremosa de baunilha e fava tonka.`,
    highlights: [
      'Lançamento recente 2025 com acorde exclusivo de pitaia e pera',
      'Corpo floral acetinado com jasmim e frésia',
      'Fundo doce aveludado com fava tonka e almíscar',
    ],
    notes: {
      top: 'Pitaia rosada, Pera suculenta e Mandarina fresca',
      heart: 'Flor de Laranjeira, Jasmim nobre e Frésia branca',
      base: 'Almíscar suave, Baunilha quente, Âmbar dourado e Fava Tonka',
    },
  },
  {
    id: 'maison-alhambra-intrude',
    name: 'Maison Alhambra Intrude Edp 100ml',
    category: 'Perfume Árabe',
    brand: 'Maison Alhambra',
    gender: 'Feminino',
    price: 197.90,
    volume: '100 ml',
    concentration: 'Eau de Parfum',
    olfactoryFamily: 'Floral Branco Amadeirado Sofisticado',
    image: './image/l_intrude.webp',
    tag: 'Melhor Custo-Benefício',
    description: `O Perfume Intrude Maison Alhambra Edp - 100ml é uma fragrância feminina encantadora e elegante. Com sua versão Eau de Parfum, possui intensidade e durabilidade admiráveis.
Seu formato em spray facilita a aplicação generosa. O Intrude Maison Alhambra é perfeito para mulheres que buscam sofisticação e elegância em cada detalhe do seu dia e da sua noite.`,
    highlights: [
      'Eau de Parfum com alta durabilidade e custo acessível',
      'Assinatura floral intensa e sofisticada',
      'Design requintado para todas as ocasiões',
    ],
    notes: {
      top: 'Pêra, Bergamota radiante',
      heart: 'Tuberosa, Flor de Laranjeira, Jasmim Sambac',
      base: 'Patchouli, Vetiver, Baunilha, Ambroxan',
    },
  },
  {
    id: 'philos-pura',
    name: 'Philos Pura 100ml Edp',
    category: 'Perfume Árabe',
    brand: 'Maison Alhambra',
    gender: 'Unissex',
    price: 207.90,
    volume: '100 ml',
    concentration: 'Eau de Parfum',
    olfactoryFamily: 'Cítrico Frutado Ambarado',
    image: './image/philos_pura.webp',
    tag: 'Versatilidade Total',
    description: `Philos Pura é elegância sem esforço. Eau de parfum unissex cítrico frutado ambarado.
A abertura é uma explosão solar de cítricos do Mediterrâneo — laranja siciliana, limão siciliano e bergamota da Calábria entram juntas, criando aquela sensação imediata de frescor suculento e luminoso, como sol de manhã.
O coração desenvolve um conjunto de frutas maduras que trazem vitalidade sem enjoar. No fundo, baunilha de Madagascar, âmbar e almíscar branco constroem uma base quente, cremosa e sensual.
Fresco na entrada, quente na permanência. Um dos perfumes mais fáceis de se apaixonar — perfeito de dia e de noite, no verão e no inverno.`,
    highlights: [
      'Explosão solar de cítricos italianos com frutas suculentas',
      'Transição para baunilha de Madagascar e âmbar aveludado',
      'Ultra versátil: adapta-se com perfeição ao clima brasileiro',
    ],
    notes: {
      top: 'Laranja siciliana, Limão siciliano, Bergamota da Calábria',
      heart: 'Acorde de Frutas maduras do Mediterrâneo',
      base: 'Baunilha de Madagascar, Âmbar quente, Almíscar branco',
    },
  },
  {
    id: 'luxe-gold-alhambra',
    name: 'Luxe Gold Maison Alhambra Edp 100ml',
    category: 'Perfume Árabe',
    brand: 'Maison Alhambra',
    gender: 'Unissex',
    price: 237.90,
    volume: '100 ml',
    concentration: 'Eau de Parfum',
    olfactoryFamily: 'Doce Especiado & Âmbar Precioso',
    image: './image/luxe_gold.webp',
    tag: 'Pura Elegância',
    description: `Descubra o perfume Maison Alhambra Luxe Gold EDP, uma fragrância que transcende gêneros e se destaca pela sua essência doce e especiada.
Com 100 ml de pura elegância, este Eau de Parfum é ideal para quem busca uma experiência olfativa marcante e duradoura, com uma fixação de aproximadamente 8 horas.
A embalagem sofisticada e dourada protege a fragrância e a torna uma peça de destaque em qualquer coleção. Um perfume livre de crueldade e repleto de requinte.`,
    highlights: [
      'Essência nobre doce e especiada com rastro aveludado',
      'Aproximadamente 8 horas de excelente fixação',
      'Apresentação luxuosa em dourado polido',
      'Fórmula ética e livre de crueldade animal',
    ],
    notes: {
      top: 'Açafrão aromático, Canela fina, Mandarina',
      heart: 'Rosa damascena, Âmbar dourado, Especiarias suaves',
      base: 'Oud suave, Baunilha Bourbon, Couro macio, Almíscar',
    },
  },
  {
    id: 'bareeq-al-dhahab',
    name: 'Bareeq Al Dhahab Al Wataniah 100m',
    category: 'Perfume Árabe',
    brand: 'Al Wataniah',
    gender: 'Unissex',
    price: 247.90,
    volume: '100 ml',
    concentration: 'Eau de Parfum',
    olfactoryFamily: 'Oriental Amadeirado & Frutado Imperial',
    image: './image/bareeq_dhahab.webp',
    tag: 'Ouro Oriental',
    description: `O Perfume Bareeq Al Dhahab 100ml Al Wataniah é uma fragrância sofisticada, luxuosa e marcante, desenvolvida para quem aprecia perfumes orientais intensos com um equilíbrio perfeito entre notas frutadas, florais e amadeiradas.
Sua composição revela uma evolução elegante e envolvente, proporcionando uma presença memorável em qualquer ocasião.
Com excelente projeção e fixação, o Bareeq Al Dhahab entrega uma experiência olfativa refinada, unindo frescor, doçura e profundidade em uma fragrância versátil tanto para o dia quanto para a noite.`,
    highlights: [
      'Equilíbrio supremo entre notas frutadas, florais e amadeiradas',
      'Projeção refinada que chama atenção sem excesso',
      'Frasco majestoso dourado com brasão real Al Wataniah',
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
  'Perfume Árabe',
  'Masculino',
  'Feminino',
  'Unissex',
];

export const BRANDS = [
  'Todas',
  'Lattafa',
  'Armaf',
  'Maison Alhambra',
  'Al Wataniah',
  'Asdaaf',
];
