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
  { src: "https://picsum.photos/id/10/1200/800", alt: "Vista geral do apartamento", category: "apartment" },
  { src: "https://picsum.photos/id/42/800/600", alt: "Sala de estar iluminada", category: "apartment" },
  { src: "https://picsum.photos/id/16/800/600", alt: "Quarto confortável", category: "apartment" },
  { src: "https://picsum.photos/id/20/800/600", alt: "Cozinha equipada", category: "apartment" },
  { src: "https://picsum.photos/id/24/800/600", alt: "Banheiro moderno", category: "apartment" },
  { src: "https://picsum.photos/id/48/1200/800", alt: "Área de coworking do prédio", category: "building" },
  { src: "https://picsum.photos/id/56/800/600", alt: "Piscina no rooftop", category: "building" },
  { src: "https://picsum.photos/id/60/800/600", alt: "Academia completa", category: "building" },
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
    image: "https://picsum.photos/id/56/800/600",
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
    image: "https://picsum.photos/id/60/800/600",
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
    image: "https://picsum.photos/id/30/800/600", // Generic building entrance/hall
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
    image: "https://picsum.photos/id/40/800/600", // Generic city street
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
    image: "https://picsum.photos/id/48/800/600",
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
    image: "https://picsum.photos/id/90/800/600", // Generic texture closer to laundry vibes
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
    image: "https://picsum.photos/id/120/400/300",
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
    image: "https://picsum.photos/id/121/400/300",
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
    image: "https://picsum.photos/id/122/400/300",
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
    image: "https://picsum.photos/id/123/400/300",
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
    image: "https://picsum.photos/id/124/400/300",
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
    image: "https://picsum.photos/id/125/400/300",
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
    image: "https://picsum.photos/id/126/400/300",
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
    image: "https://picsum.photos/id/127/400/300",
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
    image: "https://picsum.photos/id/128/400/300",
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
    image: "https://picsum.photos/id/129/400/300",
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
    image: "https://picsum.photos/id/130/400/300",
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
    image: "https://picsum.photos/id/131/400/300",
    address: "R. João Brícola, 24 - Centro Histórico de São Paulo, São Paulo - SP",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Bar+do+Cofre+SubAstor",
    curiosities: [
      "Fica dentro do antigo cofre-forte do Banespa, com portas circulares de aço maciço originais.",
      "Mantém as caixas de depósito individuais dos antigos clientes como parte da decoração."
    ]
  },
];