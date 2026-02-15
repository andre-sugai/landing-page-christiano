import { 
  Wifi, 
  Monitor, 
  Coffee, 
  Utensils, 
  Wind, 
  Waves, 
  Dumbbell, 
  ShieldCheck, 
  MapPin,
  Briefcase,
  Laptop,
  WashingMachine
} from 'lucide-react';
import { Attraction, Amenity, Photo, Testimonial } from './types';

export const AIRBNB_LINK = "https://www.airbnb.com.br/rooms/1007950539871196333";

export const PHOTOS: Photo[] = [
  { src: "/images/airbnb-boulevard-arouche28.webp", alt: "Detalhes do Apartamento", category: "building" },
  { src: "/images/airbnb-boulevard-arouche29.webp", alt: "Detalhes do Apartamento", category: "building" },
  { src: "/images/airbnb-boulevard-arouche30.webp", alt: "Detalhes do Apartamento", category: "building" },
  { src: "/images/airbnb-boulevard-arouche31.webp", alt: "Detalhes do Apartamento", category: "building" },
  { src: "/images/airbnb-boulevard-arouche32.webp", alt: "Detalhes do Apartamento", category: "building" },
  { src: "/images/airbnb-boulevard-arouche33.webp", alt: "Detalhes do Apartamento", category: "building" },
  { src: "/images/airbnb-boulevard-arouche34.webp", alt: "Detalhes do Apartamento", category: "building" },
  { src: "/images/airbnb-boulevard-arouche35.webp", alt: "Detalhes do Apartamento", category: "building" },
  { src: "/images/airbnb-boulevard-arouche36.webp", alt: "Detalhes do Apartamento", category: "building" },
  { src: "/images/airbnb-boulevard-arouche37.webp", alt: "Detalhes do Apartamento", category: "building" },
  { src: "/images/airbnb-boulevard-arouche38.webp", alt: "Mirante", category: "building" },
  { src: "/images/airbnb-boulevard-arouche39.webp", alt: "Mirante", category: "building" },
  { src: "/images/airbnb-boulevard-arouche40.webp", alt: "Academia", category: "building" },
  { src: "/images/airbnb-boulevard-arouche41.webp", alt: "Coworking", category: "building" },
  { src: "/images/airbnb-boulevard-arouche42.webp", alt: "Playground para Crianças", category: "building" },
  { src: "/images/airbnb-boulevard-arouche43.webp", alt: "Lavanderia", category: "building" },
  { src: "/images/airbnb-boulevard-arouche44.webp", alt: "Bicicletário", category: "building" },
  { src: "/images/airbnb-boulevard-arouche45.webp", alt: "Hall de Entrada", category: "building" },
  { src: "/images/airbnb-boulevard-arouche46.webp", alt: "Entrada do Prédio", category: "building" },
  { src: "/images/airbnb-boulevard-arouche47.webp", alt: "Piscina", category: "building" },
  { src: "/images/airbnb-boulevard-arouche1.webp", alt: "Detalhes do Apartamento", category: "apartment" },
  { src: "/images/airbnb-boulevard-arouche2.webp", alt: "Detalhes do Apartamento", category: "apartment" },
  { src: "/images/airbnb-boulevard-arouche3.webp", alt: "Detalhes do Apartamento", category: "apartment" },
  { src: "/images/airbnb-boulevard-arouche4.webp", alt: "Detalhes do Apartamento", category: "apartment" },
  { src: "/images/airbnb-boulevard-arouche5.webp", alt: "Detalhes do Apartamento", category: "apartment" },
  { src: "/images/airbnb-boulevard-arouche6.webp", alt: "Detalhes do Apartamento", category: "building" },
  { src: "/images/airbnb-boulevard-arouche7.webp", alt: "Detalhes do Apartamento", category: "building" },
  { src: "/images/airbnb-boulevard-arouche8.webp", alt: "Detalhes do Apartamento", category: "building" },
  { src: "/images/airbnb-boulevard-arouche9.webp", alt: "Detalhes do Apartamento", category: "building" },
  { src: "/images/airbnb-boulevard-arouche10.webp", alt: "Detalhes do Apartamento", category: "building" },
  { src: "/images/airbnb-boulevard-arouche11.webp", alt: "Detalhes do Apartamento", category: "building" },
  { src: "/images/airbnb-boulevard-arouche12.webp", alt: "Detalhes do Apartamento", category: "building" },
  { src: "/images/airbnb-boulevard-arouche13.webp", alt: "Detalhes do Apartamento", category: "building" },
  { src: "/images/airbnb-boulevard-arouche14.webp", alt: "Detalhes do Apartamento", category: "building" },
  { src: "/images/airbnb-boulevard-arouche15.webp", alt: "Detalhes do Apartamento", category: "apartment" },
  { src: "/images/airbnb-boulevard-arouche16.webp", alt: "Detalhes do Apartamento", category: "apartment" },
  { src: "/images/airbnb-boulevard-arouche17.webp", alt: "Detalhes do Apartamento", category: "apartment" },
  { src: "/images/airbnb-boulevard-arouche18.webp", alt: "Detalhes do Apartamento", category: "apartment" },
  { src: "/images/airbnb-boulevard-arouche19.webp", alt: "Detalhes do Apartamento", category: "apartment" },
  { src: "/images/airbnb-boulevard-arouche20.webp", alt: "Detalhes do Apartamento", category: "apartment" },
  { src: "/images/airbnb-boulevard-arouche21.webp", alt: "Detalhes do Apartamento", category: "apartment" },
  { src: "/images/airbnb-boulevard-arouche22.webp", alt: "Detalhes do Apartamento", category: "apartment" },
  { src: "/images/airbnb-boulevard-arouche23.webp", alt: "Detalhes do Apartamento", category: "apartment" },
  { src: "/images/airbnb-boulevard-arouche24.webp", alt: "Detalhes do Apartamento", category: "apartment" },
  { src: "/images/airbnb-boulevard-arouche25.webp", alt: "Detalhes do Apartamento", category: "apartment" },
  { src: "/images/airbnb-boulevard-arouche26.webp", alt: "Detalhes do Apartamento", category: "apartment" },
  { src: "/images/airbnb-boulevard-arouche27.webp", alt: "Detalhes do Apartamento", category: "apartment" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mariana Silva",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    comment: "A estadia foi maravilhosa! O apartamento é exatamente como nas fotos, muito limpo, moderno e organizado. A localização é perfeita para explorar o centro histórico a pé.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Carlos Eduardo",
    location: "Belo Horizonte, MG",
    rating: 5,
    comment: "Excelente infraestrutura do prédio. A piscina no rooftop tem uma vista incrível e a academia é muito bem equipada. O anfitrião foi super atencioso.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sophie Dupont",
    location: "Paris, França",
    rating: 5,
    comment: "Un appartement charmant au coeur de São Paulo. Très bien équipé, sécurisé et proche du métro. Je recommande vivement pour les touristes!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export const AMENITIES: Amenity[] = [
  { icon: Wifi, label: "Wi-Fi de Alta Velocidade", description: "Ideal para home office e streaming" },
  { icon: Wind, label: "Ar Condicionado", description: "Climatização quente e frio" },
  { icon: Monitor, label: "Smart TV", description: "Com acesso a Netflix e YouTube" },
  { icon: Utensils, label: "Cozinha Completa", description: "Fogão, microondas e utensílios" },
  { icon: Coffee, label: "Cafeteira Nespresso", description: "Para os amantes de café" },
  { icon: Briefcase, label: "Espaço de Trabalho", description: "Mesa confortável para trabalhar" },
];

export const BUILDING_FEATURES: Amenity[] = [
  { 
    icon: Waves, 
    label: "Piscina", 
    description: "Rooftop com vista panorâmica",
    image: "/images/airbnb-boulevard-arouche9.webp",
    details: "Relaxe e recarregue as energias em nossa piscina no terraço. Com uma vista de tirar o fôlego do skyline de São Paulo, é o lugar perfeito para apreciar o pôr do sol ou dar um mergulho refrescante após um dia explorando a cidade. Sinta-se à vontade para usar as espreguiçadeiras e aproveitar o sol.",
    rules: [
      "Horário de funcionamento: 06:00 às 22:00.",
      "Não é permitido levar vidros ou garrafas para a área da piscina.",
      "É obrigatório o uso da ducha antes de entrar na água.",
      "Crianças devem estar sempre acompanhadas por responsáveis."
    ]
  },
  { 
    icon: Dumbbell, 
    label: "Academia", 
    description: "Equipamentos modernos",
    image: "/images/airbnb-boulevard-arouche10.webp",
    details: "Não deixe sua rotina de exercícios de lado durante a viagem! Nossa academia é completa, moderna e climatizada, preparada para treinos de musculação e cardio. Mantenha o corpo em movimento com conforto e segurança sem precisar sair do prédio.",
    rules: [
      "Horário de funcionamento: 24 horas.",
      "Higienize os aparelhos após o uso com o álcool disponível.",
      "Guarde os pesos e colchonetes no lugar após o uso.",
      "Use roupas e calçados adequados para prática esportiva."
    ]
  },
  { 
    icon: ShieldCheck, 
    label: "Portaria 24h", 
    description: "Segurança total",
    image: "/images/airbnb-boulevard-arouche11.webp", // Generic building entrance/hall
    details: "Sua segurança e tranquilidade são nossa prioridade. O edifício conta com portaria presencial 24 horas por dia e monitoramento por câmeras. Nossa equipe é treinada para receber você com cordialidade e auxiliar no que for preciso durante sua chegada e saída.",
    rules: [
      "Identifique-se sempre ao entrar no condomínio.",
      "Entregas de comida (iFood/Rappi) devem ser retiradas na portaria.",
      "Visitantes só são permitidos com autorização prévia do anfitrião."
    ]
  },
  { 
    icon: MapPin, 
    label: "Localização Central", 
    description: "Próximo ao metrô",
    image: "/images/airbnb-boulevard-arouche12.webp", // Generic city street
    details: "Você estará no coração pulsante de São Paulo! Nossa localização permite que você faça quase tudo a pé. Estamos a poucos passos da estação de Metrô República, facilitando o acesso a qualquer ponto da cidade, além de estarmos cercados pelos melhores restaurantes e teatros.",
    rules: [
      "Aproveite para explorar o bairro a pé durante o dia.",
      "Utilize o metrô (Estação República - Linha Vermelha e Amarela) para deslocamentos rápidos."
    ]
  },
  { 
    icon: Laptop, 
    label: "Coworking", 
    description: "Ambiente para trabalho remoto",
    image: "/images/airbnb-boulevard-arouche13.webp",
    details: "Precisa focar no trabalho? Temos um espaço de coworking dedicado, silencioso e com internet rápida, perfeito para reuniões virtuais ou para finalizar aquele projeto importante. Um ambiente profissional e inspirador sem sair do prédio.",
    rules: [
      "Horário de funcionamento: 08:00 às 22:00.",
      "Mantenha o silêncio e use fones de ouvido para chamadas.",
      "Não deixe pertences pessoais nas mesas ao sair.",
      "Mantenha o espaço limpo e organizado."
    ]
  },
  { 
    icon: WashingMachine, 
    label: "Lavanderia", 
    description: "Máquinas de lavar e secar",
    image: "/images/airbnb-boulevard-arouche14.webp", // Generic texture closer to laundry vibes
    details: "Viaje leve! O prédio conta com uma lavanderia OMO moderna e prática. Com máquinas de lavar e secar profissionais, você cuida das suas roupas de forma rápida e eficiente, garantindo que tudo esteja limpo e cheiroso para o seu próximo passeio.",
    rules: [
      "O serviço é pago à parte via aplicativo da OMO Lavanderia.",
      "Retire suas roupas da máquina assim que o ciclo terminar.",
      "Respeite a vez dos outros hóspedes caso haja fila.",
      "Não utilize produtos que não sejam os indicados pelas máquinas."
    ]
  },
];

export const ATTRACTIONS: Attraction[] = [
  // Cultura e Museus
  {
    name: "Pinacoteca de São Paulo",
    description: "Museu de arte com foco em pinturas e esculturas brasileiras do século XIX. Prédio histórico e estrutura completa.",
    type: "culture",
    image: "/images/airbnb-boulevard-arouche-turismo1.webp",
    address: "Praça da Luz, 2 - Luz, São Paulo - SP",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Pinacoteca+de+Sao+Paulo",
    curiosities: [
      "É o museu de arte mais antigo de São Paulo, fundado em 1905.",
      "O prédio foi projetado por Ramos de Azevedo e sofreu uma reforma premiada de Paulo Mendes da Rocha nos anos 90."
    ]
  },
  {
    name: "Estação Pinacoteca",
    description: "Espaço expositivo ligado à Pinacoteca, no Largo General Osório, com arte contemporânea.",
    type: "culture",
    image: "/images/airbnb-boulevard-arouche-turismo2.webp",
    address: "Largo General Osório, 66 - Santa Efigênia, São Paulo - SP",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Estacao+Pinacoteca",
    curiosities: [
      "O prédio já sediou o DOPS (Departamento de Ordem Política e Social) durante a ditadura militar.",
      "Abriga o Memorial da Resistência, preservando a memória política do período."
    ]
  },
  {
    name: "Museu Catavento",
    description: "Museu de ciências interativo no Parque Dom Pedro II, excelente para crianças e adultos.",
    type: "culture",
    image: "/images/airbnb-boulevard-arouche-turismo3.webp",
    address: "Av. Mercúrio, s/n - Parque Dom Pedro II, São Paulo - SP",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Museu+Catavento",
    curiosities: [
      "O edifício, conhecido como Palácio das Indústrias, já foi sede da Prefeitura de São Paulo.",
      "Possui um borboletário e uma sala que simula uma viagem ao fundo do mar."
    ]
  },
  {
    name: "Theatro Municipal",
    description: "Um dos mais importantes teatros do Brasil e cartão postal da cidade.",
    type: "culture",
    image: "/images/airbnb-boulevard-arouche-turismo4.webp",
    address: "Praça Ramos de Azevedo, s/n - República, São Paulo - SP",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Theatro+Municipal+de+Sao+Paulo",
    curiosities: [
      "Foi palco da Semana de Arte Moderna de 1922, marco do modernismo no Brasil.",
      "Sua construção foi inspirada na Ópera de Paris."
    ]
  },
  
  // Parques
  {
    name: "Praça da República",
    description: "Feira de artesanato e comidas, prédios históricos e fácil acesso a pé.",
    type: "park",
    image: "/images/airbnb-boulevard-arouche-turismo5.webp",
    address: "Praça da República - República, São Paulo - SP",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Praca+da+Republica+Sao+Paulo",
    curiosities: [
      "Já foi palco de touradas no século XIX.",
      "Aos domingos, abriga uma das feiras de artesanato e artes plásticas mais tradicionais da cidade."
    ]
  },
  {
    name: "Parque Augusta",
    description: "Refúgio verde em meio ao centro, ótimo para relaxar.",
    type: "park",
    image: "/images/airbnb-boulevard-arouche-turismo6.webp",
    address: "R. Augusta, 200 - Consolação, São Paulo - SP",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Parque+Augusta",
    curiosities: [
      "Foi fruto de uma luta de décadas de moradores e ativistas para virar parque público.",
      "Abriga ruínas do antigo Colégio Des Oiseaux e um bosque com espécies nativas da Mata Atlântica."
    ]
  },
  
  // Gastronomia
  {
    name: "A Casa do Porco",
    description: "Eleito um dos melhores restaurantes do mundo. Cozinha criativa focada em carne suína.",
    type: "food",
    image: "/images/airbnb-boulevard-arouche-turismo7.webp",
    address: "R. Araújo, 124 - República, São Paulo - SP",
    mapLink: "https://www.google.com/maps/search/?api=1&query=A+Casa+do+Porco",
    curiosities: [
      "Frequentemente listado entre os 50 melhores restaurantes do mundo.",
      "O chef Jefferson Rueda cria pratos utilizando o porco inteiro, sem desperdícios."
    ]
  },
  {
    name: "Bar da Dona Onça",
    description: "Liderado pela chef Janaína Torres, no icônico Edifício Copan.",
    type: "food",
    image: "/images/airbnb-boulevard-arouche-turismo8.webp",
    address: "Av. Ipiranga, 200 - lojas 27-29 - Centro Histórico de São Paulo",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Bar+da+Dona+Onca",
    curiosities: [
      "Fica no térreo do Edifício Copan, obra icônica de Oscar Niemeyer.",
      "A chef Janaína Torres Rueda é conhecida por reinventar a comida popular brasileira."
    ]
  },
  {
    name: "Terraço Itália",
    description: "Vista panorâmica incrível da cidade e culinária italiana sofisticada.",
    type: "food",
    image: "/images/airbnb-boulevard-arouche-turismo9.webp",
    address: "Av. Ipiranga, 344 - 41º e 42º - República, São Paulo - SP",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Terraco+Italia",
    curiosities: [
      "Possui uma das vistas mais altas e completas de São Paulo (160 metros de altura).",
      "O edifício levou 5 anos para ser construído e foi inaugurado em 1965."
    ]
  },
   {
    name: "Esther Rooftop",
    description: "No rooftop de um edifício tombado de 1930, harmoniza pratos franceses com vista.",
    type: "food",
    image: "/images/airbnb-boulevard-arouche-turismo10.webp",
    address: "R. Basílio da Gama, 29 - República, São Paulo - SP",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Esther+Rooftop",
    curiosities: [
      "Localizado no primeiro prédio modernista de São Paulo, o Edifício Esther.",
      "O chef Olivier Anquier transformou seu antigo apartamento neste restaurante."
    ]
  },

  // Vida Noturna
  {
    name: "Tokyo",
    description: "Bares, karaokês, música e restaurante em um prédio de 9 andares.",
    type: "nightlife",
    image: "/images/airbnb-boulevard-arouche-turismo11.webp",
    address: "R. Maj. Sertório, 110 - Vila Buarque, São Paulo - SP",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Tokyo+011",
    curiosities: [
      "Inspirado na cultura pop japonesa e no filme 'Encontros e Desencontros'.",
      "O prédio possui salas de karaokê privativas temáticas."
    ]
  },
  {
    name: "Bar do Cofre",
    description: "Localizado no antigo cofre do Banco do Estado, no subsolo do Farol Santander.",
    type: "nightlife",
    image: "/images/airbnb-boulevard-arouche-turismo12.webp",
    address: "R. João Brícola, 24 - Centro Histórico de São Paulo, São Paulo - SP",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Bar+do+Cofre+SubAstor",
    curiosities: [
      "Fica dentro do antigo cofre-forte do Banespa, com portas circulares de aço maciço originais.",
      "Mantém as caixas de depósito individuais dos antigos clientes como parte da decoração."
    ]
  },
];