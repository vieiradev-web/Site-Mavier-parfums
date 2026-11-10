import { Product } from '../types';

export const STORE_INFO = {
  name: 'Mavier Parfums',
  tagline: 'Alta Perfumaria Árabe & Criações Exclusivas',
  whatsappDisplay: '(55) 81 9 8125-2680',
  whatsappNumber: '5581981252680', // clean number for wa.me link
  city: 'Recife / PE',
  guaranteeText: 'Fragrâncias 100% Originais, Lacradas e Importadas com Pronta Entrega',
  heroImage: './image/colecao_lattafa.jpg',
  logo: './image/logo.jpeg',
};

const BASE_PRODUCTS: Product[] = [
  {
    id: 'asad-tradicional',
    name: 'Asad Tradicional Lattafa 100 ML',
    category: 'Perfume Árabe',
    brand: 'Lattafa',
    gender: 'Masculino',
    price: 287.90,
    soldOut: true,
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
    soldOut: true,
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
    soldOut: true,
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
    soldOut: true,
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
    soldOut: true,
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
    soldOut: true,
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
    name: 'Bareeq Al Dhahab Al Wataniah 100ml',
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
  // -------------------------------------------------------------
  // DECANTS (5ml) — Frações Exclusivas em Frascos de Vidro Premium
  // Preços: R$ 35 (Asad, Club de Nuit, Yara Rosa, Raneen) e R$ 30 (demais).
  // -------------------------------------------------------------
  {
    id: 'decant-asad-tradicional',
    name: 'Decant 5ml — Asad Tradicional Lattafa',
    category: 'Decant',
    brand: 'Lattafa',
    gender: 'Masculino',
    price: 35,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Oriental Especiado & Amadeirado',
    image: './image/decant_asad_tradicional.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    description: `Decant de 5ml fracionado diretamente do frasco original lacrado do aclamado Asad Tradicional Lattafa.
Apresentado em frasco de vidro de alta qualidade com spray pump dourado luxuoso, rendendo entre 70 e 80 borrifadas completas.
Ideal para você experimentar na sua pele toda a evolução, intensidade e rastro dessa fragrância especiada oriental icônica antes de adquirir o frasco de 100ml.`,
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
    price: 35,
    volume: '5 ml',
    concentration: 'Eau de Parfum Elixir (Fração 5ml)',
    olfactoryFamily: 'Amadeirada · Aromática · Especiada Oriental',
    image: './image/decant_asad_elixir.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    description: `Decant de 5ml oficial do cobiçado Asad Elixir Lattafa, o grande lançamento da casa árabe.
Fracionado com rigor e precisão em elegante frasco de vidro de 5ml com borrifador dourado (~70 a 80 borrifadas).
Experimente a versão mais densa, magnética e poderosa da linha Asad, sentindo o calor do tabaco, açafrão nobre e madeiras preciosas.`,
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
    price: 35,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Floral Gourmand Envolvente',
    image: './image/decant_yara_rosa.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    description: `Decant de 5ml do mais adorado perfume feminino da perfumaria árabe: Yara Rosa Lattafa.
Extraído diretamente do frasco original lacrado para um frasco de vidro travel-size de 5ml com spray dourado de fino acabamento.
Permite sentir na própria pele sua abertura aveludada com frutas tropicais, orquídea e o famoso fundo de baunilha e sândalo cremoso.`,
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
    price: 30,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Floral Frutado Tropical & Cremoso',
    image: './image/decant_yara_tous.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    description: `Decant de 5ml fracionado do exótico e ensolarado Yara Tous Amarelo da Lattafa.
Embalagem de vidro resistente com spray pump dourado de alta precisão (~70-80 borrifadas).
Descubra a combinação deliciosa de manga madura, coco e maracujá com flor de laranjeira e baunilha cremosa na sua pele.`,
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
    price: 35,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Amadeirado Especiado Cítrico',
    image: './image/decant_club_de_nuit_man.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    description: `Decant de 5ml do lendário Club De Nuit Intense Man da prestigiada casa Armaf.
Fracionado cuidadosamente a partir do frasco original lacrado para frasco travel de vidro com borrifador metálico dourado.
Sinta o poder da abertura de limão e abacaxi seguida pelo coração esfumado de bétula e base de âmbar cinzento.`,
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
    price: 35,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Chipre Floral Envolvente',
    image: './image/decant_club_de_nuit_woman.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    description: `Decant de 5ml da sofisticada fragrância feminina Club de Nuit Intense Woman da Armaf.
Retirada com absoluta pureza do frasco lacrado para um frasco de vidro de 5ml com tampa e spray dourados.
Uma fragrância sedutora, misteriosa e potente da família chipre floral com rosas escuras, açafrão, especiarias e fundo de oud e patchouli.`,
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
    price: 30,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Oriental Gourmand & Resinoso Esfumado',
    image: './image/decant_khamrah_dukhan.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    description: `Decant de 5ml do misterioso e opulento Khamrah Dukhan da Lattafa.
Fracionado artesanalmente com rigor a partir do frasco original lacrado para frasco de vidro 5ml com válvula dourada.
Aprecie as nuances ricas de incenso sagrado, tabaco nobre, pralinê e especiarias quentes com projeção arrasadora.`,
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
    price: 35,
    soldOut: true,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Floral Frutado Gourmand',
    image: './image/decant_raneen.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    description: `Decant de 5ml do encantador lançamento Raneen da casa Asdaaf (linha de luxo Lattafa).
Disponibilizado em frasco de vidro de alta qualidade de 5ml com borrifador spray dourado (~70 a 80 borrifadas).
Descubra a combinação floral moderna com notas luminosas de pitaia rosada, pera fresca, flor de laranjeira e fava tonka.`,
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
    name: 'Decant 5ml — L\'Intrude Maison Alhambra',
    category: 'Decant',
    brand: 'Maison Alhambra',
    gender: 'Feminino',
    price: 30,
    soldOut: true,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Floral Branco Amadeirado Sofisticado',
    image: './image/decant_l_intrude.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    description: `Decant de 5ml do aclamado L'Intrude Maison Alhambra, fragrância feminina que transborda elegância.
Fracionado diretamente do frasco original para um travel atomizer de vidro 5ml com acabamento dourado.
Experimente o buquê magnífico de tuberosa e jasmim sambac com notas de topo de pera e fundo amadeirado de vetiver e patchouli.`,
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
    price: 30,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Cítrico Frutado Ambarado',
    image: './image/decant_philos_pura.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    description: `Decant de 5ml do versátil e apaixonante Philos Pura Maison Alhambra.
Apresentado em frasco de vidro de 5ml com spray dourado de alto padrão (~70 a 80 borrifadas).
Fragrância unissex vibrante com explosão cítrica mediterrânea de laranja e limão sicilianos combinados a frutas maduras, baunilha de Madagascar e âmbar.`,
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
    price: 30,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Doce Especiado & Âmbar Precioso',
    image: './image/decant_luxe_gold.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    description: `Decant de 5ml da refinada fragrância Luxe Gold Maison Alhambra.
Fracionado diretamente do frasco lacrado para frasco travel em vidro 5ml com válvula e tampa dourada.
Apresenta rastro doce especiado inebriante com açafrão, canela, rosa damascena, âmbar dourado e oud suave.`,
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
    price: 30,
    volume: '5 ml',
    concentration: 'Eau de Parfum (Fração 5ml)',
    olfactoryFamily: 'Oriental Amadeirado & Frutado Imperial',
    image: './image/decant_bareeq_dhahab.jpg',
    tag: 'Decant 5ml',
    isDecant: true,
    description: `Decant de 5ml do majestoso Bareeq Al Dhahab da casa árabe Al Wataniah.
Extraído diretamente do frasco original lacrado para um frasco de vidro de 5ml com spray pump dourado.
Conheça na sua pele toda a riqueza oriental do açafrão, pimenta rosa, incenso nobre, âmbar e madeiras preciosas.`,
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

// =====================================================================
// BLACK FRIDAY
// Chave geral: true = promoções ligadas, false = desligadas.
// Os preços originais acima nunca são alterados: com a chave desligada o
// catálogo volta sozinho aos preços normais.
// =====================================================================
export const BLACK_FRIDAY_ATIVA = true;

// Preço promocional de cada produto (valor de tabela, antes dos 5% de desconto no Pix).
const PRECOS_BLACK_FRIDAY: Record<string, number> = {
  'khamrah-dukhan': 227,
  'luxe-gold-alhambra': 207,
  'bareeq-al-dhahab': 227,
  'yara-tous': 237,
  'yara-rosa': 267,
  'club-de-nuit-intense-woman': 257,
};

// Desconto (%) aplicado a todos os decants que não estão na lista acima.
const DESCONTO_DECANTS_BLACK_FRIDAY = 10;

export const PRODUCTS: Product[] = BASE_PRODUCTS.map((product) => {
  if (!BLACK_FRIDAY_ATIVA || product.isPricePending) return product;

  let promoPrice: number | undefined = PRECOS_BLACK_FRIDAY[product.id];
  if (promoPrice === undefined && product.isDecant) {
    promoPrice = Math.round(product.price * (1 - DESCONTO_DECANTS_BLACK_FRIDAY / 100) * 100) / 100;
  }
  if (promoPrice === undefined || promoPrice >= product.price) return product;

  return { ...product, price: promoPrice, originalPrice: product.price };
});

// Limites do filtro de valor, calculados a partir dos preços reais do catálogo.
// Assim, um perfume mais caro (ou mais barato) cadastrado no futuro nunca fica escondido.
const pricedValues = PRODUCTS.filter((p) => !p.isPricePending && p.price > 0).map((p) => p.price);
export const PRICE_MIN = pricedValues.length ? Math.floor(Math.min(...pricedValues) / 5) * 5 : 0;
export const PRICE_MAX = pricedValues.length ? Math.ceil(Math.max(...pricedValues) / 10) * 10 : 100;

export const CATEGORIES = [
  'Todos',
  'Decants (5ml)',
  'Frascos Originais (100ml)',
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