/* ===================================================================
   CONFIGURACIÓN DE LA TIENDA Y MODO DE LANZAMIENTO
   =================================================================== */
export const APP_CONFIG = {
  // 🔥 INTERRUPTOR MAESTRO:
  // false = Muestra ÚNICAMENTE la perfumería Aura Noir (sin ropa ni Vértice).
  // true  = Activa la tienda dual completa (Aura Noir Decants + Vértice Streetwear).
  ENABLE_VERTICE: false,
};

export const PERFUMES_DATA = [
  {
    id: "tf-noir-extreme",
    name: "Tom Ford Noir Extreme",
    brand: "Tom Ford",
    category: "citas",
    categoryLabel: "Citas & Seducción",
    price5ml: 360,
    fullBottlePrice: 4200,
    rating: 4.9,
    reviewsCount: 38,
    badge: "Bestseller Nocturno",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    description: "Una fragancia oriental amaderada impregnada de ámbar con un corazón tentador y delicioso de kulfi indio. Seducción refinada en estado puro.",
    notes: {
      salida: ["Cardamomo", "Nuez Moscada", "Mandarina", "Azafrán"],
      corazon: ["Kulfi Indio", "Rosa", "Jazmín", "Flor de Azahar"],
      fondo: ["Vainilla de Madagascar", "Ámbar Cálido", "Sándalo", "Maderas"]
    },
    metrics: {
      longevidad: "9/10 (8 - 10 hrs)",
      estela: "Pesada / Seductora",
      sprays5ml: "75 atomizaciones",
      ocasion: "Noche, Citas, Clima Fresco / Frío"
    },
    verticePairing: {
      title: "The Midnight Fit",
      description: "Combina este decant con el Hoodie Heavyweight 440 GSM Negro VÉRTICE para máxima presencia nocturna.",
      discount: 200
    }
  },
  {
    id: "creed-aventus",
    name: "Creed Aventus",
    brand: "The House of Creed",
    category: "proyeccion",
    categoryLabel: "Modo Bestia / Estatus",
    price5ml: 490,
    fullBottlePrice: 8900,
    rating: 5.0,
    reviewsCount: 64,
    badge: "Rey del Estatus",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    description: "El perfume masculino más influyente de la era moderna. Piña ahumada, abedul y pachulí que proyectan éxito y liderazgo indiscutible.",
    notes: {
      salida: ["Piña Real", "Bergamota", "Grosella Negra", "Manzana"],
      corazon: ["Abedul Ahumado", "Pachulí", "Jazmín de Marruecos"],
      fondo: ["Almizcle", "Musgo de Roble", "Ámbar Gris", "Vainilla"]
    },
    metrics: {
      longevidad: "10/10 (10 - 12 hrs)",
      estela: "Enorme / Firma Inolvidable",
      sprays5ml: "75 atomizaciones",
      ocasion: "Eventos Clave, Negocios, Citas Importantes"
    },
    verticePairing: {
      title: "The Executive Minimalist",
      description: "Usa Aventus con la Heavyweight Boxy Tee Blanca VÉRTICE y pantalón cargo arquitectónico.",
      discount: 200
    }
  },
  {
    id: "lv-imagination",
    name: "Louis Vuitton Imagination",
    brand: "Louis Vuitton",
    category: "clean",
    categoryLabel: "Clean Boy / Día",
    price5ml: 480,
    fullBottlePrice: 7800,
    rating: 4.9,
    reviewsCount: 51,
    badge: "Lujo Contemporáneo",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    description: "La frescura elevada al pináculo de la alta costura. Té negro chino infundido con cítricos italianos y ambroxan brillante de grado puro.",
    notes: {
      salida: ["Cidra", "Bergamota de Calabria", "Naranja Siciliana"],
      corazon: ["Té Negro de Ceilán", "Neroli de Túnez", "Jengibre"],
      fondo: ["Ambroxan", "Incienso", "Canela"]
    },
    metrics: {
      longevidad: "9/10 (8 - 9 hrs)",
      estela: "Luminosa & Sofisticada",
      sprays5ml: "75 atomizaciones",
      ocasion: "Día a día, Calor, Salidas casuales de lujo"
    },
    verticePairing: {
      title: "The Daylight Clean",
      description: "La frescura limpia de Imagination eleva la caída estructurada de los sweatpants VÉRTICE.",
      discount: 200
    }
  },
  {
    id: "pdm-percival",
    name: "Parfums de Marly Percival",
    brand: "Parfums de Marly",
    category: "clean",
    categoryLabel: "Clean Boy / Versátil",
    price5ml: 420,
    fullBottlePrice: 6500,
    rating: 4.8,
    reviewsCount: 29,
    badge: "Versatilidad Suprema",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    description: "Una fragancia fresca pero con un cuerpo aristocrático aromático y amaderado. Para el hombre que busca proyectar pulcritud y confianza absoluta.",
    notes: {
      salida: ["Lavanda", "Mandarina", "Bergamota", "Pimienta Rosa"],
      corazon: ["Geranio", "Cardamomo", "Canela", "Hedione"],
      fondo: ["Ambroxan", "Maderas Claras", "Abeto Balsámico", "Almizcle"]
    },
    metrics: {
      longevidad: "8.5/10 (7 - 9 hrs)",
      estela: "Moderada / Proyecta magnetismo",
      sprays5ml: "75 atomizaciones",
      ocasion: "Gym de élite, Universidad, Oficina, Todo el año"
    },
    verticePairing: {
      title: "The High Density Tee Fit",
      description: "Viste la Heavyweight Tee Negra VÉRTICE + Percival para un aura de pulcritud insuperable.",
      discount: 200
    }
  },
  {
    id: "xerjoff-naxos",
    name: "Xerjoff Naxos 1861",
    brand: "Xerjoff",
    category: "gourmand",
    categoryLabel: "Nicho Gourmand / Lujo",
    price5ml: 460,
    fullBottlePrice: 6200,
    rating: 5.0,
    reviewsCount: 43,
    badge: "Joya Italiana Nicho",
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80",
    description: "Homenaje a Sicilia. Dulzura dorada de miel de abeja y hojas de tabaco rubio combinadas con cítricos mediterráneos y un fondo cremoso de vainilla.",
    notes: {
      salida: ["Bergamota", "Limón", "Lavanda Fina"],
      corazon: ["Miel Silvestre", "Canela", "Jazmín Sambac", "Cachemira"],
      fondo: ["Hojas de Tabaco", "Haba Tonka", "Vainilla Bourbon"]
    },
    metrics: {
      longevidad: "10/10 (12+ hrs en piel)",
      estela: "Pesada / Opulenta",
      sprays5ml: "75 atomizaciones",
      ocasion: "Cenas formales, Noches frías, Bodas, Alta ocasión"
    },
    verticePairing: {
      title: "The Aristocratic Layer",
      description: "El tabaco y miel de Naxos con el tacto de 440 GSM de VÉRTICE definen una presencia impenetrable.",
      discount: 200
    }
  },
  {
    id: "kilian-angels-share",
    name: "Kilian Angels' Share",
    brand: "Kilian Paris",
    category: "citas",
    categoryLabel: "Citas & Noche",
    price5ml: 450,
    fullBottlePrice: 5900,
    rating: 4.9,
    reviewsCount: 37,
    badge: "Bohemio & Magnético",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    description: "Inspirado en la herencia de Hennessy. Esencia de coñac destilada que se funde con canela, haba tonka y madera de roble.",
    notes: {
      salida: ["Esencia de Coñac Francés"],
      corazon: ["Canela de Ceilán", "Haba Tonka", "Roble"],
      fondo: ["Praliné", "Vainilla", "Sándalo"]
    },
    metrics: {
      longevidad: "9/10 (9 - 11 hrs)",
      estela: "Íntima pero contundente",
      sprays5ml: "75 atomizaciones",
      ocasion: "Citas a solas, Bares lounge, Conversaciones nocturnas"
    },
    verticePairing: {
      title: "The Noir Encounter",
      description: "Añade la Gorra estructurada VÉRTICE con bordado 3D plateado.",
      discount: 200
    }
  },
  {
    id: "baccarat-540-extrait",
    name: "Baccarat Rouge 540 Extrait",
    brand: "Maison Francis Kurkdjian",
    category: "proyeccion",
    categoryLabel: "Modo Bestia / Estatus",
    price5ml: 540,
    fullBottlePrice: 11500,
    rating: 5.0,
    reviewsCount: 58,
    badge: "El Santo Grial",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
    description: "La concentración Extrait magnifica el resplandor de los tres alientos de la fragancia. Almendra amarga de Marruecos, azafrán y el legendario ámbar gris mineral.",
    notes: {
      salida: ["Almendra Amarga", "Azafrán Rojo"],
      corazon: ["Jazmín Grandiflorum de Egipto", "Cedro"],
      fondo: ["Ámbar Gris", "Maderas Ambarinas", "Almizcle Caliente"]
    },
    metrics: {
      longevidad: "10/10 (14+ hrs)",
      estela: "Nuclear / Imborrable",
      sprays5ml: "75 atomizaciones",
      ocasion: "Cualquier lugar donde quieras ser el centro de atención"
    },
    verticePairing: {
      title: "The Sovereign Standard",
      description: "El aroma más imponente del mundo junto a las piezas numeradas VÉRTICE.",
      discount: 200
    }
  },
  {
    id: "nishane-hacivat",
    name: "Nishane Hacivat",
    brand: "Nishane Istanbul",
    category: "proyeccion",
    categoryLabel: "Modo Bestia / Versátil",
    price5ml: 440,
    fullBottlePrice: 6300,
    rating: 4.8,
    reviewsCount: 31,
    badge: "Proyección Nuclear",
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80",
    description: "Una explosión vibrante de piña natural con un fondo imponente de musgo de roble y maderas densas. Duración extrema que se queda en la ropa días enteros.",
    notes: {
      salida: ["Piña", "Pomelo", "Bergamota"],
      corazon: ["Cedro Blanco", "Pachulí", "Jazmín"],
      fondo: ["Musgo de Roble", "Maderas Densas"]
    },
    metrics: {
      longevidad: "10/10 (12+ hrs)",
      estela: "Modo Bestia / Dejar rastro",
      sprays5ml: "75 atomizaciones",
      ocasion: "Climas cálidos a templados, Fiestas, Aire Libre"
    },
    verticePairing: {
      title: "The Urban Vanguard",
      description: "Usa Hacivat con el Set de Hoodie y Jogger VÉRTICE.",
      discount: 200
    }
  }
];

export const DISCOVERY_SETS = [
  {
    id: "box-trio-monarch",
    name: "Aura Noir Monolith Set (3 x 5ml)",
    price: 1190,
    originalValue: 1450,
    badge: "Edición Coleccionista",
    image: "/aura-discovery-box.jpg",
    description: "Caja rígida magnética forrada en negro mate con grabado hot-stamping, cuna de terciopelo y 3 atomizadores metálicos con grabado láser a elegir: Tom Ford Noir Extreme, Creed Aventus y Xerjoff Naxos. Incluye tarjeta VIP VÉRTICE con $150 MXN de crédito.",
    includes: ["3 Atomizadores metálicos grabados con láser", "15 ml de extracto original (225+ sprays)", "Tarjeta física VÉRTICE VIP", "Caja rígida con cierre magnético"]
  }
];

export const VERTICE_DATA = [
  {
    id: "v-tee-black",
    brand: "VÉRTICE",
    name: "Heavyweight Boxy Tee 260 GSM // Noir",
    category: "tees",
    price: 790,
    stockRemaining: 14,
    badge: "Drop 01 // Limitado a 50 pzs",
    image: "/vertice-streetwear.jpg",
    description: "Confeccionada con algodón peinado de fibra larga de 260 gramos por metro cuadrado. Cuello cerrado reforzado en rib de 1 pulgada que no se deforma. Bordado micro-alta definición en pecho y estampa serigráfica táctil en espalda.",
    details: [
      "100% Algodón Peinado Heavyweight 260 GSM",
      "Corte Boxy Drop Shoulder contemporáneo",
      "Bordado HD en hilo plata mate resistente a lavados",
      "Hecho éticamente en México en tirajes cortos"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "v-hoodie-structural",
    brand: "VÉRTICE",
    name: "Structural Hoodie 440 GSM // Carbon",
    category: "hoodies",
    price: 1490,
    stockRemaining: 9,
    badge: "Pieza Arquitectónica",
    image: "/vertice-streetwear.jpg",
    description: "Nuestra pieza más emblemática. 440 GSM de tacto ultra pesado con interior de rizo francés. Capucha doble capa estructurada que se sostiene por sí sola sin necesidad de cordones. Caída limpia e imponente.",
    details: [
      "440 GSM French Terry de alta densidad",
      "Capucha sobredimensionada auto-estructurada",
      "Bordado dorsal 'ELEVATE YOUR STANDARD' en plata mate",
      "Prenda pre-encogida con lavado siliconado premium"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "v-pants-wide",
    brand: "VÉRTICE",
    name: "Wide-Leg Architecture Sweatpants 420 GSM",
    category: "bottoms",
    price: 1190,
    stockRemaining: 11,
    badge: "Corte Escultural",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80",
    description: "Pantalón de caída ancha y recta con drapeado pesado que descansa sobre tus sneakers. Tiro medio-alto con pretina elástica gruesa y herrajes metálicos plateados grabados con láser.",
    details: [
      "420 GSM algodón pesado",
      "Cintura reforzada con ojillos de acero inoxidable",
      "Bolsillos profundos con cierre oculto",
      "Caída recta fluida sin puño inferior"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "obsidian-acid-tee",
    brand: "OBSIDIAN ARCHIVE",
    name: "Acid-Wash Raw Boxy Tee 280 GSM",
    category: "tees",
    price: 850,
    stockRemaining: 8,
    badge: "Colaboración Especial",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    description: "Teñido mineral con efecto lavado al ácido artesanal. Cada prenda presenta variaciones tonales únicas. Gráfica en tipografía gótica plateada en el pecho.",
    details: [
      "280 GSM algodón peinado premium",
      "Lavado ácido artesanal de grano fino",
      "Estampa serigráfica al agua tacto cero",
      "Etiqueta numerada individualmente"
    ],
    sizes: ["M", "L", "XL"]
  },
  {
    id: "atelier-denim-jacket",
    brand: "ATELIER NAYARIT",
    name: "Heavy Raw Denim Overshirt 14oz // Obsidian",
    category: "outerwear",
    price: 1650,
    stockRemaining: 6,
    badge: "Hecho a Mano en Nayarit",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    description: "Mezclilla rígida de 14 onzas sin lavar con orillo japonés. Botones de latón envejecido y costuras reforzadas con remaches de cobre. Silueta boxy moderna.",
    details: [
      "Denim crudo rígido de 14oz 100% algodón",
      "Bolsillos dobles con solapa arquitectónica",
      "Botones metálicos grabados",
      "Confección artesanal en Tepic"
    ],
    sizes: ["S", "M", "L"]
  },
  {
    id: "v-metal-cardholder",
    brand: "VÉRTICE",
    name: "Tactical Brushed Titanium Cardholder",
    category: "accessories",
    price: 520,
    stockRemaining: 18,
    badge: "Metal Goods",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    description: "Tarjetero ultraligero de aleación de titanio cepillado con bloqueo RFID. Grabado láser 'VERTICE // ELEVATE YOUR STANDARD'. Diseñado para llevar lo indispensable sin bultos.",
    details: [
      "Aleación de aluminio y titanio aeroespacial",
      "Bloqueo anti-clonación RFID / NFC",
      "Capacidad para 1 a 12 tarjetas + clip para billetes",
      "Grabado láser inalterable"
    ],
    sizes: ["Única"]
  }
];

export const DEFAULT_PROMOTIONS = {
  comboDiscount: 200,
  freeShippingMin: 600,
  tepicShippingCost: 50,
  nationalShippingCost: 149,
  coupons: [
    { code: "AURA150", discount: 150, description: "Descuento VIP General" },
    { code: "TEPICVIP", discount: 100, description: "Descuento Local Tepic" },
    { code: "VERTICE200", discount: 200, description: "Promoción Especial Streetwear" }
  ]
};

export const ATOMIZER_COLORS = [
  { id: "noir", name: "Matte Black", hex: "#18191c", border: "#333", laserDefaultColor: "#eef2f8" },
  { id: "gunmetal", name: "Gunmetal Smoke", hex: "#32343c", border: "#585b63", laserDefaultColor: "#eef2f8" },
  { id: "gold", name: "Brushed Champagne Gold", hex: "#b89547", border: "#e5c378", laserDefaultColor: "#eef2f8" }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "¿En qué momento quieres que tu aroma tenga el mayor impacto?",
    options: [
      { text: "En citas nocturnas y encuentros a solas", category: "citas", hint: "Seducción, cercanía, maderas y vainilla" },
      { text: "De noche en fiestas, antros o eventos de alto nivel", category: "proyeccion", hint: "Modo bestia, cumplidos inmediatos, estatus" },
      { text: "En el día a día, gym de élite, uni o trabajo impecable", category: "clean", hint: "Limpio, cítrico brillante, té negro y ambroxan" },
      { text: "En cenas formales o eventos donde quiero oler a dinero viejo", category: "gourmand", hint: "Tabaco dulce, miel siciliana, coñac y maderas" }
    ]
  },
  {
    id: 2,
    question: "¿Cuál es tu estilo preferido al vestir?",
    options: [
      { text: "Minimalista oscuro: Hoodie negro pesado, accesorios metálicos", verticePair: "v-hoodie-structural" },
      { text: "Clean contemporáneo: Playera blanca gruesa, sneakers impecables", verticePair: "v-tee-black" },
      { text: "Urban vanguard: Pantalón de corte ancho, siluetas holgadas", verticePair: "v-pants-wide" },
      { text: "Accesorios de alto impacto: Tarjeteros de titanio, cadenas finas", verticePair: "v-metal-cardholder" }
    ]
  },
  {
    id: 3,
    question: "¿Qué duración buscas en tu piel?",
    options: [
      { text: "Duración extrema (10 a 14 horas que no se vaya ni con el viento)", pref: "beast" },
      { text: "Aura íntima pero magnética (que se acerquen a tu cuello para olerte)", pref: "intimate" },
      { text: "Frescura revitalizante y elegante durante todo el día", pref: "fresh" }
    ]
  }
];
