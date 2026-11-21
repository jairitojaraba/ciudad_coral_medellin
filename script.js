const EVALUATION_URL = "https://forms.cloud.microsoft/r/uqGRVUm8ZQ";
const LANGUAGE_KEY = "coral-city-medellin-language";

const state = {
  lang: localStorage.getItem(LANGUAGE_KEY) || "es",
  page: "home",
  neighborhood: 0,
  openScenes: new Set(),
};

const ui = {
  es: {
    appTitle: "Ciudad Coral",
    schoolLine: "San José de las Vegas · Upper Middle School · Medellín",
    coverTitle: "Pasaporte permanente",
    eventMeta: "Sede El Retiro · Sábado 21 de noviembre de 2026",
    openPassport: "Abrir pasaporte",
    tagline: "Aquí nadie es turista. Todos somos residentes.",
    resident: "Residente",
    nav: {
      home: "Inicio",
      trm: "TRM",
      schedule: "Programa",
      neighborhoods: "Barrios",
      challenge: "Reto",
      diary: "Diario",
      evaluation: "Evalúa",
    },
    labels: {
      event: "Día Artístico y Cultural para la Familia",
      hours: "funciones",
      neighborhoods: "barrios",
      characters: "2 personajes",
      appearances: "apariciones",
      secrets: "Los dos secretos",
      reef: "Arrecife",
      choir: "Coro",
      musical: "El musical",
      story: "La historia",
      message: "El mensaje",
      facts: "Datos para seguir la experiencia",
      links: "Explorar más",
      scene: "Aparición",
      cartographer: "El Cartógrafo",
      mayor: "El Alcalde",
      both: "Juntos",
      expandAll: "Abrir todo",
      collapseAll: "Cerrar todo",
      evaluate: "Ir al registro y la evaluación",
      trmTracks: "Líneas TRM",
      trmConverge: "Ambas líneas convergen en",
      leadership: "Formación de liderazgo",
      phase: "Fase 0: TRM · Grados 4° a 8°",
      challengeAnswer: "Respuesta",
      challengeRound: "Pregunta",
    },
    pages: {
      home: {
        eyebrow: "Pasaporte de residente",
        title: "Un mapa para vivir el evento desde el celular",
        text: "Consulta el programa de tu función, explora los barrios musicales y sigue el guion de los personajes a medida que aparece cada escena.",
        whyTitle: "¿Qué es Ciudad Coral?",
        whyBody:
          "Ciudad Coral es una experiencia artística sobre la diferencia, la identidad y la pertenencia. Tiene seis barrios, y cada uno es una historia musical donde alguien que no encajaba encuentra su propia voz. Como el público es grande, la ciudad abre en dos funciones de tres barrios cada una.",
        reefText:
          "Como un arrecife, esta ciudad está hecha de seres distintos que juntos forman algo imposible de construir en soledad.",
        choirText:
          "Como un coro, muchas voces diferentes crean una armonía que ninguna voz podría lograr por sí sola.",
        ctaDiary: "Leer el diario",
        ctaSchedule: "Ver programa",
      },
      trm: {
        eyebrow: "San José de las Vegas",
        title: "Talent Roadmap & Arts Life Project",
        text: "El evento se conecta con el mapa de talentos: artes, metodologías activas, bilingüismo y liderazgo en una misma experiencia.",
        objectiveTitle: "Objetivo · Talent Roadmap 2026",
        objective:
          "Explorar las habilidades, competencias, intereses y talentos de los estudiantes de Middle y Upper Middle School desde las metodologías de aprendizaje activo y el bilingüismo, para reconocer las oportunidades y desafíos del mundo hoy.",
        todayTitle: "Hoy, en Ciudad Coral",
        today:
          "Los seis sketches son una experiencia de aprendizaje activo dentro de Arts Life Project, preparada con Musicreando: ensayos, trabajo en equipo, exploración personal y voz escénica.",
      },
      schedule: {
        eyebrow: "Sábado 21 de noviembre",
        title: "Programa del día",
        text: "Ciudad Coral abre en dos funciones. Busca la tuya y llega a la hora: el prólogo empieza desde el primer minuto.",
      },
      neighborhoods: {
        eyebrow: "Los seis barrios",
        title: "Sketches musicales",
        text: "Cada barrio tiene un musical, un conflicto y una idea para llevarse en el pasaporte. Los barrios 1, 2 y 3 abren en la primera función; los 4, 5 y 6, en la segunda.",
      },
      challenge: {
        eyebrow: "Los Secretos del Barrio",
        title: "Reto del evento",
        text: "Prepárate para responder. Las pistas están en los barrios, en los datos curiosos y en lo que escuches durante el recorrido.",
        howTitle: "Cómo funciona",
        howText:
          "Cada función tiene tres concursos, uno después de cada sketch, con preguntas sobre el barrio que acabas de ver. Hay premios para los ganadores. Si quieres llegar preparado, aquí están las preguntas de práctica.",
      },
      diary: {
        eyebrow: "Diario escénico",
        title: "Sigue las líneas de los personajes",
        text: "Aquí están solo los diálogos del Cartógrafo y del Alcalde, separados por función. Abre cada aparición cuando llegue su momento.",
      },
      evaluation: {
        eyebrow: "Tu opinión nos importa",
        title: "Registro y evaluación",
        text: "Al terminar tu función, registra tu asistencia y cuéntanos cómo te fue, todo en el mismo formulario.",
        cardTitle: "¿Cómo fue tu experiencia?",
        cardText:
          "Un solo formulario para registrar la asistencia y evaluar el día. Lo diligencia un acudiente por estudiante.",
        noteTitle: "Antes de salir",
        noteBody:
          "Puedes conservar este pasaporte en tu celular para revisar el programa, los barrios y el diario del evento cuando quieras.",
      },
    },
  },
  en: {
    appTitle: "Coral City",
    schoolLine: "San José de las Vegas · Upper Middle School · Medellín",
    coverTitle: "Permanent passport",
    eventMeta: "El Retiro Campus · Saturday, November 21, 2026",
    openPassport: "Open passport",
    tagline: "Nobody here is a tourist. We are all residents.",
    resident: "Resident",
    nav: {
      home: "Home",
      trm: "TRM",
      schedule: "Schedule",
      neighborhoods: "Hoods",
      challenge: "Quiz",
      diary: "Diary",
      evaluation: "Rate",
    },
    labels: {
      event: "Arts and Culture Family Day",
      hours: "shows",
      neighborhoods: "neighborhoods",
      characters: "2 characters",
      appearances: "appearances",
      secrets: "The two secrets",
      reef: "Reef",
      choir: "Choir",
      musical: "The musical",
      story: "The story",
      message: "The message",
      facts: "Facts to follow the experience",
      links: "Explore more",
      scene: "Appearance",
      cartographer: "The Cartographer",
      mayor: "The Mayor",
      both: "Together",
      expandAll: "Open all",
      collapseAll: "Close all",
      evaluate: "Go to sign-in and feedback",
      trmTracks: "TRM tracks",
      trmConverge: "Both tracks converge in",
      leadership: "Leadership development",
      phase: "Phase 0: TRM · Grades 4 to 8",
      challengeAnswer: "Answer",
      challengeRound: "Question",
    },
    pages: {
      home: {
        eyebrow: "Resident passport",
        title: "A map to live the event from your phone",
        text: "Check the program for your show, explore the musical neighborhoods, and follow the characters' script as each scene arrives.",
        whyTitle: "What is Coral City?",
        whyBody:
          "Coral City is an artistic experience about difference, identity, and belonging. It has six neighborhoods, and each one is a musical story where someone who didn't fit in finds their own voice. Because the audience is large, the city opens in two shows of three neighborhoods each.",
        reefText:
          "Like a reef, this city is made of different beings who together create something impossible to build alone.",
        choirText:
          "Like a choir, many different voices create a harmony that no single voice could achieve.",
        ctaDiary: "Read the diary",
        ctaSchedule: "See program",
      },
      trm: {
        eyebrow: "San José de las Vegas",
        title: "Talent Roadmap & Arts Life Project",
        text: "The event connects to the talent map: arts, active methodologies, bilingualism, and leadership in one experience.",
        objectiveTitle: "Goal · Talent Roadmap 2026",
        objective:
          "Explore the skills, competencies, interests, and talents of Middle and Upper Middle School students through active learning and bilingualism, to recognize today's opportunities and challenges.",
        todayTitle: "Today, in Coral City",
        today:
          "The six sketches are an active learning experience within Arts Life Project, prepared with Musicreando: rehearsals, teamwork, personal exploration, and stage voice.",
      },
      schedule: {
        eyebrow: "Saturday, November 21",
        title: "Program of the day",
        text: "Coral City opens in two shows. Find yours and be on time: the prologue starts at the very first minute.",
      },
      neighborhoods: {
        eyebrow: "The six neighborhoods",
        title: "Musical sketches",
        text: "Each neighborhood has a musical, a conflict, and an idea to keep in your passport. Neighborhoods 1, 2, and 3 open in the first show; 4, 5, and 6 in the second.",
      },
      challenge: {
        eyebrow: "Neighborhood Secrets",
        title: "Event challenge",
        text: "Get ready to answer. The clues are in the neighborhoods, the fun facts, and what you hear along the way.",
        howTitle: "How it works",
        howText:
          "Each show has three contests, one after each sketch, with questions about the neighborhood you just watched. There are prizes for the winners. If you want to come prepared, here are some practice questions.",
      },
      diary: {
        eyebrow: "Stage diary",
        title: "Follow the characters' lines",
        text: "Here are only the Cartographer's and the Mayor's lines, split by show. Open each appearance when its moment arrives.",
      },
      evaluation: {
        eyebrow: "Your opinion matters",
        title: "Sign-in and feedback",
        text: "When your show ends, record your attendance and tell us how it went, all in the same form.",
        cardTitle: "How was your experience?",
        cardText:
          "One form to record attendance and rate the day. One guardian per student fills it out.",
        noteTitle: "Before you leave",
        noteBody:
          "You can keep this passport on your phone to review the program, the neighborhoods, and the event diary whenever you want.",
      },
    },
  },
};

const schedule = {
  es: [
    { section: "Primera función · 7:30 a 9:00 a.m." },
    { note: "Familias de todo grado 8.°, 7.°A y 7.°B" },
    { time: "7:30", title: "Apertura de Ciudad Coral", detail: "Bienvenida · Prólogo del Cartógrafo y el Alcalde", color: "#ff8c42" },
    { icon: "🏄", title: "Barrio 1 · Teen Beach Movie", detail: "Grupos 8A y 8B", color: "#0ea5e9" },
    { icon: "🏆", title: "Concurso · Los Secretos del Barrio", detail: "Preguntas sobre Teen Beach Movie", color: "#10b981" },
    { icon: "🍎", title: "Barrio 2 · Descendants", detail: "Grupos 8C y 8D", color: "#9333ea" },
    { icon: "🏆", title: "Concurso · Los Secretos del Barrio", detail: "Preguntas sobre Descendants", color: "#10b981" },
    { icon: "💌", title: "Barrio 3 · Mamma Mia!", detail: "Grupos 7A y 7B", color: "#f59e0b" },
    { icon: "🏆", title: "Concurso · Los Secretos del Barrio", detail: "Preguntas sobre Mamma Mia!", color: "#10b981" },
    { icon: "🙏", title: "Epílogo y contribución voluntaria", detail: "Para seguir sosteniendo estos procesos artísticos", color: "#ff8c42" },
    { time: "9:00", title: "Fin de la primera función", detail: "La ciudad vuelve a abrir a las 10:00 a.m.", color: "#ff6b6b" },
    { section: "Segunda función · 10:00 a 11:30 a.m." },
    { note: "Familias de todo grado 6.°, 7.°C y 7.°D" },
    { time: "10:00", title: "Apertura de Ciudad Coral", detail: "Bienvenida · Prólogo del Cartógrafo y el Alcalde", color: "#ff8c42" },
    { icon: "📺", title: "Barrio 4 · Hairspray", detail: "Grupos 6A y 6B", color: "#ec4899" },
    { icon: "🏆", title: "Concurso · Los Secretos del Barrio", detail: "Preguntas sobre Hairspray", color: "#10b981" },
    { icon: "🕸️", title: "Barrio 5 · Familia Addams", detail: "Grupos 6C y 6D", color: "#475569" },
    { icon: "🏆", title: "Concurso · Los Secretos del Barrio", detail: "Preguntas sobre Familia Addams", color: "#10b981" },
    { icon: "🪶", title: "Barrio 6 · Hamilton", detail: "Grupos 7C y 7D", color: "#ef4444" },
    { icon: "🏆", title: "Concurso · Los Secretos del Barrio", detail: "Preguntas sobre Hamilton", color: "#10b981" },
    { icon: "🙏", title: "Epílogo y contribución voluntaria", detail: "Para seguir sosteniendo estos procesos artísticos", color: "#ff8c42" },
    { time: "11:30", title: "Cierre de Ciudad Coral", detail: "Gracias por llegar a escucharlos", color: "#ff6b6b" },
  ],
  en: [
    { section: "First show · 7:30 to 9:00 a.m." },
    { note: "Families of all of grade 8, 7A, and 7B" },
    { time: "7:30", title: "Coral City opens", detail: "Welcome · Prologue by the Cartographer and the Mayor", color: "#ff8c42" },
    { icon: "🏄", title: "Neighborhood 1 · Teen Beach Movie", detail: "Groups 8A and 8B", color: "#0ea5e9" },
    { icon: "🏆", title: "Contest · Neighborhood Secrets", detail: "Questions about Teen Beach Movie", color: "#10b981" },
    { icon: "🍎", title: "Neighborhood 2 · Descendants", detail: "Groups 8C and 8D", color: "#9333ea" },
    { icon: "🏆", title: "Contest · Neighborhood Secrets", detail: "Questions about Descendants", color: "#10b981" },
    { icon: "💌", title: "Neighborhood 3 · Mamma Mia!", detail: "Groups 7A and 7B", color: "#f59e0b" },
    { icon: "🏆", title: "Contest · Neighborhood Secrets", detail: "Questions about Mamma Mia!", color: "#10b981" },
    { icon: "🙏", title: "Epilogue and voluntary contribution", detail: "To keep supporting these arts programs", color: "#ff8c42" },
    { time: "9:00", title: "End of the first show", detail: "The city opens again at 10:00 a.m.", color: "#ff6b6b" },
    { section: "Second show · 10:00 to 11:30 a.m." },
    { note: "Families of all of grade 6, 7C, and 7D" },
    { time: "10:00", title: "Coral City opens", detail: "Welcome · Prologue by the Cartographer and the Mayor", color: "#ff8c42" },
    { icon: "📺", title: "Neighborhood 4 · Hairspray", detail: "Groups 6A and 6B", color: "#ec4899" },
    { icon: "🏆", title: "Contest · Neighborhood Secrets", detail: "Questions about Hairspray", color: "#10b981" },
    { icon: "🕸️", title: "Neighborhood 5 · The Addams Family", detail: "Groups 6C and 6D", color: "#475569" },
    { icon: "🏆", title: "Contest · Neighborhood Secrets", detail: "Questions about The Addams Family", color: "#10b981" },
    { icon: "🪶", title: "Neighborhood 6 · Hamilton", detail: "Groups 7C and 7D", color: "#ef4444" },
    { icon: "🏆", title: "Contest · Neighborhood Secrets", detail: "Questions about Hamilton", color: "#10b981" },
    { icon: "🙏", title: "Epilogue and voluntary contribution", detail: "To keep supporting these arts programs", color: "#ff8c42" },
    { time: "11:30", title: "Coral City closes", detail: "Thank you for coming to hear them", color: "#ff6b6b" },
  ],
};

const trm = {
  tracks: {
    es: [
      {
        icon: "⚡",
        title: "Arts Life Project",
        color: "#ec4899",
        items: ["Artes plásticas", "Teatro", "Danza", "Música"],
      },
      {
        icon: "💡",
        title: "Talents Applied",
        color: "#7c3aed",
        items: ["Digital Systems", "Finance for Life", "Earth's Harmony", "Health & Wellbeing"],
      },
    ],
    en: [
      {
        icon: "⚡",
        title: "Arts Life Project",
        color: "#ec4899",
        items: ["Visual Arts", "Theater", "Dance", "Music"],
      },
      {
        icon: "💡",
        title: "Talents Applied",
        color: "#7c3aed",
        items: ["Digital Systems", "Finance for Life", "Earth's Harmony", "Health & Wellbeing"],
      },
    ],
  },
  phases: {
    es: [
      { number: "01", color: "#0ea5e9", label: "Actividades clave", text: "Bootcamps por línea · Horas académicas · Talent Week en grado 8°" },
      { number: "02", color: "#10b981", label: "Otras estrategias", text: "Proyecto Vital · MDE Challenge · Piloto Purdue · Dual Diploma" },
      { number: "03", color: "#7c3aed", label: "Recursos", text: "Maestros inspiradores · Expertos externos · Alianzas institucionales" },
      { number: "04", color: "#f97316", label: "Hito fase 0", text: "Portafolio con insignias de Bootcamps y autoevaluación de talentos" },
    ],
    en: [
      { number: "01", color: "#0ea5e9", label: "Key activities", text: "Bootcamps per track · Academic hours · Talent Week in grade 8" },
      { number: "02", color: "#10b981", label: "Other strategies", text: "Life Project · MDE Challenge · Purdue Pilot · Dual Diploma" },
      { number: "03", color: "#7c3aed", label: "Resources", text: "Inspiring teachers · External experts · Institutional partnerships" },
      { number: "04", color: "#f97316", label: "Phase 0 milestone", text: "Portfolio with Bootcamp badges and talent self-assessment" },
    ],
  },
  tags: {
    es: ["Talent Roadmap", "Arts Life Project", "Musicreando", "Aprendizaje activo", "Bilingüismo"],
    en: ["Talent Roadmap", "Arts Life Project", "Musicreando", "Active learning", "Bilingualism"],
  },
};


const challenges = {
  es: [
    { section: "Primera función" },
    { color: "#0ea5e9", neighborhood: "Teen Beach Movie", question: "En «Wet Side Story», la película dentro de la película, ¿qué dos pandillas se enfrentan?", answer: "Los surfistas y los motociclistas." },
    { color: "#0ea5e9", neighborhood: "Teen Beach Movie", question: "¿Cómo llegan Brady y Mack al mundo de la película?", answer: "Una ola gigante los arrastra mientras surfean." },
    { color: "#9333ea", neighborhood: "Descendants", question: "¿De qué villana es hija Mal?", answer: "De Maléfica." },
    { color: "#9333ea", neighborhood: "Descendants", question: "¿Qué objeto les ordenan robar a los cuatro jóvenes en Auradon?", answer: "La varita del Hada Madrina." },
    { color: "#f59e0b", neighborhood: "Mamma Mia!", question: "¿De qué grupo son las canciones de Mamma Mia!?", answer: "De ABBA, el grupo sueco." },
    { color: "#f59e0b", neighborhood: "Mamma Mia!", question: "¿A cuántos posibles papás invita Sophie a su boda?", answer: "A tres: Sam, Bill y Harry." },
    { section: "Segunda función" },
    { color: "#ec4899", neighborhood: "Hairspray", question: "¿En qué ciudad y en qué año ocurre Hairspray?", answer: "En Baltimore, en 1962." },
    { color: "#ec4899", neighborhood: "Hairspray", question: "¿En qué programa de televisión sueña con bailar Tracy?", answer: "En The Corny Collins Show." },
    { color: "#475569", neighborhood: "Familia Addams", question: "¿En qué año apareció por primera vez la Familia Addams?", answer: "En 1938, en la revista The New Yorker." },
    { color: "#475569", neighborhood: "Familia Addams", question: "¿Cómo se llama la hija que se enamora de un chico «normal»?", answer: "Merlina (Wednesday, en inglés)." },
    { color: "#ef4444", neighborhood: "Hamilton", question: "¿En qué billete de Estados Unidos aparece Alexander Hamilton?", answer: "En el de 10 dólares." },
    { color: "#ef4444", neighborhood: "Hamilton", question: "¿Qué libro inspiró a Lin-Manuel Miranda a escribir Hamilton?", answer: "La biografía de Alexander Hamilton escrita por Ron Chernow." },
  ],
  en: [
    { section: "First show" },
    { color: "#0ea5e9", neighborhood: "Teen Beach Movie", question: "In “Wet Side Story,” the movie inside the movie, which two gangs face off?", answer: "The surfers and the bikers." },
    { color: "#0ea5e9", neighborhood: "Teen Beach Movie", question: "How do Brady and Mack end up inside the movie?", answer: "A giant wave sweeps them away while they surf." },
    { color: "#9333ea", neighborhood: "Descendants", question: "Which villain is Mal's mother?", answer: "Maleficent." },
    { color: "#9333ea", neighborhood: "Descendants", question: "What are the four teens ordered to steal in Auradon?", answer: "The Fairy Godmother's wand." },
    { color: "#f59e0b", neighborhood: "Mamma Mia!", question: "Which band wrote the songs in Mamma Mia!?", answer: "ABBA, the Swedish band." },
    { color: "#f59e0b", neighborhood: "Mamma Mia!", question: "How many possible fathers does Sophie invite to her wedding?", answer: "Three: Sam, Bill, and Harry." },
    { section: "Second show" },
    { color: "#ec4899", neighborhood: "Hairspray", question: "In what city and year does Hairspray take place?", answer: "Baltimore, 1962." },
    { color: "#ec4899", neighborhood: "Hairspray", question: "Which TV show does Tracy dream of dancing on?", answer: "The Corny Collins Show." },
    { color: "#475569", neighborhood: "The Addams Family", question: "In what year did the Addams Family first appear?", answer: "1938, in The New Yorker magazine." },
    { color: "#475569", neighborhood: "The Addams Family", question: "What is the name of the daughter who falls for a “normal” boy?", answer: "Wednesday." },
    { color: "#ef4444", neighborhood: "Hamilton", question: "Which U.S. bill shows Alexander Hamilton?", answer: "The 10-dollar bill." },
    { color: "#ef4444", neighborhood: "Hamilton", question: "Which book inspired Lin-Manuel Miranda to write Hamilton?", answer: "Ron Chernow's biography of Alexander Hamilton." },
  ],
};

const neighborhoods = {
  es: [
    {
      number: "Barrio 1 · Primera función",
      name: "La Playa de las Dos Orillas",
      musical: "Teen Beach Movie",
      group: "Grupos 8A y 8B",
      icon: "🏄",
      color: "#0ea5e9",
      soft: "#e0f7ff",
      year: "Disney Channel · 2013",
      description:
        "Teen Beach Movie es una película musical de Disney Channel estrenada en 2013, con Ross Lynch y Maia Mitchell. Rinde homenaje a las películas de playa de los años sesenta.",
      story:
        "Brady y Mack son dos surfistas que, arrastrados por una ola, aparecen dentro de «Wet Side Story», una película musical donde surfistas y motociclistas no se mezclan. Sin querer, cambian la historia, y descubren que nadie tiene por qué quedarse en el papel que le asignaron.",
      message: "Nadie está obligado a quedarse en el papel que le escribieron.",
      facts: [
        "Tuvo una secuela, Teen Beach 2, en 2015.",
        "Su estilo imita las películas de playa de los años sesenta: tablas de surf, motos y coreografías en la arena.",
        "Ross Lynch, que interpreta a Brady, también era cantante de la banda R5.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=teen+beach+movie+surf+crazy",
      wikiUrl: "https://en.wikipedia.org/wiki/Teen_Beach_Movie",
    },
    {
      number: "Barrio 2 · Primera función",
      name: "El Puente de la Segunda Oportunidad",
      musical: "Descendants",
      group: "Grupos 8C y 8D",
      icon: "🍎",
      color: "#9333ea",
      soft: "#f3e8ff",
      year: "Disney Channel · 2015",
      description:
        "Descendants es una película musical de Disney Channel de 2015, dirigida y coreografiada por Kenny Ortega, el mismo director de High School Musical.",
      story:
        "Ben, el nuevo rey, invita a cuatro hijos de villanos (Mal, Evie, Jay y Carlos) a dejar la Isla de los Perdidos y estudiar en Auradon. Llegan con la misión de robar la varita del Hada Madrina, pero descubren que pueden elegir quiénes quieren ser.",
      message: "La historia de tus padres no tiene por qué ser la tuya.",
      facts: [
        "Mal es hija de Maléfica; Evie, de la Reina Malvada; Jay, de Jafar; y Carlos, de Cruella de Vil.",
        "La canción con la que empieza se llama «Rotten to the Core».",
        "Tuvo secuelas en 2017 y 2019.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=descendants+rotten+to+the+core",
      wikiUrl: "https://en.wikipedia.org/wiki/Descendants_(2015_film)",
    },
    {
      number: "Barrio 3 · Primera función",
      name: "La Isla de las Tres Cartas",
      musical: "Mamma Mia!",
      group: "Grupos 7A y 7B",
      icon: "💌",
      color: "#f59e0b",
      soft: "#fff4d6",
      year: "Londres · 1999",
      description:
        "Mamma Mia! se estrenó en Londres en 1999. Cuenta su historia con canciones de ABBA, escritas por Benny Andersson y Björn Ulvaeus, y en 2008 llegó al cine con Meryl Streep.",
      story:
        "En una pequeña isla griega, Sophie está a punto de casarse. Lee el diario de su mamá, Donna, y descubre que su papá puede ser uno de tres hombres. Los invita a la boda sin decirle a nadie, y lo que encuentra es más grande que un apellido: una familia.",
      message: "Una familia no se mide por cómo empezó, sino por quiénes se quedan.",
      facts: [
        "La isla del musical, Kalokairi, es inventada.",
        "Estuvo en Broadway de 2001 a 2015.",
        "El libreto lo escribió Catherine Johnson.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=mamma+mia+musical+dancing+queen",
      wikiUrl: "https://en.wikipedia.org/wiki/Mamma_Mia!_(musical)",
    },
    {
      number: "Barrio 4 · Segunda función",
      name: "La Avenida del Ritmo",
      musical: "Hairspray",
      group: "Grupos 6A y 6B",
      icon: "📺",
      color: "#ec4899",
      soft: "#ffe5f2",
      year: "Broadway · 2002",
      description:
        "Hairspray llegó a Broadway en 2002, basado en la película de John Waters de 1988. La música es de Marc Shaiman y ganó ocho premios Tony, entre ellos el de Mejor Musical.",
      story:
        "Baltimore, 1962. Tracy Turnblad sueña con bailar en el programa de televisión de Corny Collins. Nadie cree que una chica como ella quepa en la pantalla, pero Tracy entra y pelea para que el programa deje de separar a los bailarines blancos de los negros.",
      message: "Nadie puede detener el ritmo de quien sabe que tiene un lugar.",
      facts: [
        "La canción final se llama «You Can't Stop the Beat»: nadie puede detener el ritmo.",
        "Por tradición, a Edna, la mamá de Tracy, la interpreta un hombre.",
        "En 2007 se estrenó la película del musical, con John Travolta como Edna.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=hairspray+you+cant+stop+the+beat",
      wikiUrl: "https://en.wikipedia.org/wiki/Hairspray_(musical)",
    },
    {
      number: "Barrio 5 · Segunda función",
      name: "La Mansión del Eco",
      musical: "Familia Addams",
      group: "Grupos 6C y 6D",
      icon: "🕸️",
      color: "#475569",
      soft: "#e8edf3",
      year: "Broadway · 2010",
      description:
        "La Familia Addams nació en 1938 como una caricatura de Charles Addams para The New Yorker. El musical de Broadway abrió en 2010 con música de Andrew Lippa.",
      story:
        "Merlina Addams tiene novio por primera vez: un joven completamente normal. La historia pregunta qué significa ser fiel a quien uno es cuando el mundo espera otra cosa.",
      message: "Ser diferente no es un defecto. Es el primer paso para ser libre.",
      facts: [
        "El famoso chasquido de dos dedos nació en la serie de televisión de 1964.",
        "En inglés, Merlina se llama Wednesday, por un verso infantil: Wednesday's child is full of woe.",
        "El musical tuvo 725 funciones en Broadway.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=addams+family+musical+broadway",
      wikiUrl: "https://en.wikipedia.org/wiki/The_Addams_Family_(musical)",
    },
    {
      number: "Barrio 6 · Segunda función",
      name: "El Puerto de los que Llegan",
      musical: "Hamilton",
      group: "Grupos 7C y 7D",
      icon: "🪶",
      color: "#ef4444",
      soft: "#ffe4e4",
      year: "Broadway · 2015",
      description:
        "Hamilton, de Lin-Manuel Miranda, llegó a Broadway en 2015. Se inspiró en la biografía escrita por Ron Chernow y ganó 11 premios Tony y el Premio Pulitzer de Teatro.",
      story:
        "Alexander Hamilton llega a Nueva York desde el Caribe: huérfano, pobre y extranjero. Escribe sin parar hasta convertirse en uno de los fundadores de Estados Unidos. El musical cuenta su vida con hip-hop y con un elenco de orígenes muy diversos.",
      message: "Quien llega de lejos también construye la ciudad.",
      facts: [
        "Hamilton nació en Nieves, una pequeña isla del Caribe.",
        "Fue el primer secretario del Tesoro de Estados Unidos.",
        "Recibió 16 nominaciones a los premios Tony, un récord.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=hamilton+musical+my+shot",
      wikiUrl: "https://en.wikipedia.org/wiki/Hamilton_(musical)",
    },
  ],
  en: [
    {
      number: "Neighborhood 1 · First show",
      name: "The Beach of Two Shores",
      musical: "Teen Beach Movie",
      group: "Groups 8A and 8B",
      icon: "🏄",
      color: "#0ea5e9",
      soft: "#e0f7ff",
      year: "Disney Channel · 2013",
      description:
        "Teen Beach Movie is a Disney Channel musical film released in 2013, starring Ross Lynch and Maia Mitchell. It pays tribute to the beach movies of the 1960s.",
      story:
        "Brady and Mack are two surfers who get swept by a wave into “Wet Side Story,” a musical where surfers and bikers never mix. Without meaning to, they change the plot, and they find out nobody has to stay in the role they were given.",
      message: "Nobody has to stay in the role someone wrote for them.",
      facts: [
        "It had a sequel, Teen Beach 2, in 2015.",
        "Its style imitates 1960s beach movies: surfboards, motorcycles, and dances on the sand.",
        "Ross Lynch, who plays Brady, was also a singer in the band R5.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=teen+beach+movie+surf+crazy",
      wikiUrl: "https://en.wikipedia.org/wiki/Teen_Beach_Movie",
    },
    {
      number: "Neighborhood 2 · First show",
      name: "The Bridge of Second Chances",
      musical: "Descendants",
      group: "Groups 8C and 8D",
      icon: "🍎",
      color: "#9333ea",
      soft: "#f3e8ff",
      year: "Disney Channel · 2015",
      description:
        "Descendants is a 2015 Disney Channel musical film directed and choreographed by Kenny Ortega, the director of High School Musical.",
      story:
        "Ben, the new king, invites four children of villains (Mal, Evie, Jay, and Carlos) to leave the Isle of the Lost and study in Auradon. They arrive on a mission to steal the Fairy Godmother's wand, but they discover they can choose who they want to be.",
      message: "Your parents' story doesn't have to be yours.",
      facts: [
        "Mal is Maleficent's daughter; Evie, the Evil Queen's; Jay, Jafar's; and Carlos, Cruella de Vil's.",
        "Its opening song is “Rotten to the Core.”",
        "It had sequels in 2017 and 2019.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=descendants+rotten+to+the+core",
      wikiUrl: "https://en.wikipedia.org/wiki/Descendants_(2015_film)",
    },
    {
      number: "Neighborhood 3 · First show",
      name: "The Island of Three Letters",
      musical: "Mamma Mia!",
      group: "Groups 7A and 7B",
      icon: "💌",
      color: "#f59e0b",
      soft: "#fff4d6",
      year: "London · 1999",
      description:
        "Mamma Mia! opened in London in 1999. It tells its story through ABBA songs written by Benny Andersson and Björn Ulvaeus, and in 2008 it became a film starring Meryl Streep.",
      story:
        "On a small Greek island, Sophie is about to get married. She reads her mother Donna's diary and finds out her father could be one of three men. She invites all three to the wedding without telling anyone, and what she finds is bigger than a last name: a family.",
      message: "A family isn't measured by how it started, but by who stays.",
      facts: [
        "The island in the musical, Kalokairi, is fictional.",
        "It ran on Broadway from 2001 to 2015.",
        "The book was written by Catherine Johnson.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=mamma+mia+musical+dancing+queen",
      wikiUrl: "https://en.wikipedia.org/wiki/Mamma_Mia!_(musical)",
    },
    {
      number: "Neighborhood 4 · Second show",
      name: "Rhythm Avenue",
      musical: "Hairspray",
      group: "Groups 6A and 6B",
      icon: "📺",
      color: "#ec4899",
      soft: "#ffe5f2",
      year: "Broadway · 2002",
      description:
        "Hairspray opened on Broadway in 2002, based on John Waters's 1988 film. The music is by Marc Shaiman, and it won eight Tony Awards, including Best Musical.",
      story:
        "Baltimore, 1962. Tracy Turnblad dreams of dancing on Corny Collins's TV show. Nobody believes a girl like her belongs on screen, but Tracy gets in and fights to end the show's separation of Black and white dancers.",
      message: "Nobody can stop the beat of someone who knows they belong.",
      facts: [
        "The final song is “You Can't Stop the Beat.”",
        "By tradition, Edna, Tracy's mother, is played by a man.",
        "The film of the musical came out in 2007, with John Travolta as Edna.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=hairspray+you+cant+stop+the+beat",
      wikiUrl: "https://en.wikipedia.org/wiki/Hairspray_(musical)",
    },
    {
      number: "Neighborhood 5 · Second show",
      name: "The Mansion of the Echo",
      musical: "The Addams Family",
      group: "Groups 6C and 6D",
      icon: "🕸️",
      color: "#475569",
      soft: "#e8edf3",
      year: "Broadway · 2010",
      description:
        "The Addams Family was born in 1938 as a cartoon by Charles Addams for The New Yorker. The Broadway musical opened in 2010 with music by Andrew Lippa.",
      story:
        "Wednesday Addams has a boyfriend for the first time: a completely normal young man. The story asks what it means to stay true to yourself when the world expects something else.",
      message: "Being different is not a flaw. It is the first step to being free.",
      facts: [
        "The famous two-finger snap was born in the 1964 TV series.",
        "Wednesday is named after a nursery rhyme: Wednesday's child is full of woe.",
        "The musical ran for 725 performances on Broadway.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=addams+family+musical+broadway",
      wikiUrl: "https://en.wikipedia.org/wiki/The_Addams_Family_(musical)",
    },
    {
      number: "Neighborhood 6 · Second show",
      name: "The Port of Arrivals",
      musical: "Hamilton",
      group: "Groups 7C and 7D",
      icon: "🪶",
      color: "#ef4444",
      soft: "#ffe4e4",
      year: "Broadway · 2015",
      description:
        "Lin-Manuel Miranda's Hamilton opened on Broadway in 2015. It was inspired by Ron Chernow's biography and won 11 Tony Awards and the Pulitzer Prize for Drama.",
      story:
        "Alexander Hamilton arrives in New York from the Caribbean: an orphan, poor, and a foreigner. He writes nonstop until he becomes one of the founders of the United States. The musical tells his life through hip-hop, with a cast from many backgrounds.",
      message: "Those who come from far away also build the city.",
      facts: [
        "Hamilton was born on Nevis, a small Caribbean island.",
        "He was the first U.S. Secretary of the Treasury.",
        "It received a record 16 Tony nominations.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=hamilton+musical+my+shot",
      wikiUrl: "https://en.wikipedia.org/wiki/Hamilton_(musical)",
    },
  ],
};

const diary = {
  es: [
    { section: "Primera función · 7:30 a.m." },
    {
      id: "1",
      title: "Prólogo · La llegada del Alcalde",
      time: "Abre la función · 7:30 a.m.",
      color: "#c0392b",
      lines: [
        ["m", "¡Un momento! ¡Un momento, por favor!"],
        ["m", "Disculpen la interrupción. Soy el Alcalde Provisional de Territorios No Reconocidos. Me avisaron que alguien está a punto de abrir una ciudad. Una ciudad sin registro oficial. Sin formularios. Sin permiso."],
        ["c", "Sin formularios es correcto."],
        ["m", "¿Sin formularios? Eso es un caos, muchacho. Las ciudades necesitan orden. Clasificaciones. Normas que digan qué es aceptable y qué no. ¿Saben dónde están?"],
        ["c", "En la entrada de Ciudad Coral."],
        ["m", "Ciudad Coral... Ciudad Coral... No aparece en ningún registro oficial."],
        ["c", "Ya lo sé. Por eso la estoy mostrando."],
        ["c", "Soy el Cartógrafo. Trazo mapas de lugares que no aparecen en ningún GPS. Lugares que solo existen cuando las personas se atreven a ser exactamente quienes son."],
        ["m", "Pues yo vine a inspeccionarla. Y le advierto: si no me convence... la cierro."],
        ["c", "Ciudad Coral tiene dos secretos. El primero: como un arrecife en el fondo del mar, está hecha de miles de seres distintos. Ninguno es igual a otro. Y juntos forman algo de una belleza imposible."],
        ["c", "El segundo: como un coro, esta ciudad tiene muchas voces. Cada una suena diferente. Y por eso, juntas, crean lo que ninguna voz sola podría."],
        ["m", "Bonito discurso. Pero los discursos no se inspeccionan."],
        ["c", "Entonces inspeccione esto: la ciudad tiene seis barrios. Esta mañana abre tres para ustedes. Los otros tres abren en la segunda función."],
        ["m", "Tres barrios en una hora y media. Voy a tomar nota de todo."],
        ["c", "Tome nota. Al final, usted decide si la ciudad existe."],
        ["b", "Bienvenidos a Ciudad Coral."],
      ],
    },
    {
      id: "2",
      title: "Barrio 1 · La Playa de las Dos Orillas",
      time: "Antes de Teen Beach Movie",
      color: "#0ea5e9",
      lines: [
        ["m", "Espero que el primer barrio tenga reglas claras."],
        ["c", "Las tiene. Demasiado claras. Bienvenidos a La Playa de las Dos Orillas."],
        ["c", "En una orilla están los surfistas. En la otra, los motociclistas. Cada grupo tiene su canción, su ropa y su pedazo de arena. Y nadie cruza."],
        ["m", "Me parece muy ordenado."],
        ["c", "Eso parecía. Hasta que una ola trajo a dos jóvenes que no conocían las reglas. Y empezaron a cruzar."],
        ["m", "¿Y qué pasó con la historia?"],
        ["c", "Cambió. Resulta que nadie estaba obligado a quedarse en el papel que le habían escrito."],
        ["m", "Anoto: barrio uno, dos bandos y una ola. Veamos."],
      ],
    },
    {
      id: "3",
      title: "Entretiempo · El Alcalde y las orillas",
      time: "Después de Teen Beach Movie · antes de Descendants",
      color: "#9333ea",
      lines: [
        ["m", "Surfistas bailando con motociclistas. Esto es un desorden."],
        ["c", "¿Le molestó el baile o que se mezclaran?"],
        ["m", "Que se mezclaran. Cada uno debería quedarse en su orilla."],
        ["c", "¿Y usted en qué orilla nació, Alcalde?"],
        ["m", "Esa pregunta no está en el formulario de inspección."],
        ["c", "El segundo barrio sí la hace. Se llama El Puente de la Segunda Oportunidad."],
        ["c", "Al otro lado del puente hay una isla donde viven los hijos de los villanos de los cuentos. Crecieron oyendo que tenían que ser como sus padres: malos, temidos, solos."],
        ["m", "Si los padres eran villanos, lo lógico es que los hijos también lo sean."],
        ["c", "Eso dice el registro. Pero un día alguien les abrió el puente, y tuvieron que decidir quiénes querían ser."],
        ["m", "Nadie decide eso. Uno es lo que heredó."],
        ["c", "Quédese a ver."],
      ],
    },
    {
      id: "4",
      title: "La confesión del Alcalde · La Isla de las Tres Cartas",
      time: "Después de Descendants · antes de Mamma Mia!",
      color: "#f59e0b",
      lines: [
        ["m", "Cartógrafo."],
        ["c", "¿Sí, Alcalde?"],
        ["m", "Mi padre también fue alcalde. Y su padre antes que él. En mi casa nadie me preguntó qué quería ser. Ya estaba escrito."],
        ["c", "¿Y usted qué quería ser?"],
        ["m", "Cantante."],
        ["m", "...No lo anote."],
        ["c", "Ya está en el mapa."],
        ["m", "Esos muchachos de la isla eligieron algo distinto de lo que les tocaba. Yo nunca me atreví."],
        ["c", "Todavía está a tiempo. Y el último barrio de esta mañana sabe mucho de eso."],
        ["c", "Se llama La Isla de las Tres Cartas. Allí una joven está por casarse y no sabe quién es su papá. Así que invita a la boda a los tres que podrían serlo."],
        ["m", "¿A tres? Eso no cabe en ningún formulario."],
        ["c", "En un formulario no. En una familia sí. Ese es el secreto de este barrio: una familia no se mide por cómo empezó, sino por quiénes se quedan."],
        ["m", "Por quiénes se quedan."],
        ["c", "Y hoy ustedes, familias, se quedaron. Así que este barrio también es suyo."],
      ],
    },
    {
      id: "5",
      title: "Epílogo · El sello del Alcalde",
      time: "Cierre de la primera función",
      color: "#c0392b",
      lines: [
        ["c", "Hemos llegado al final del mapa de esta mañana."],
        ["m", "Tres barrios. Tres maneras de no encajar."],
        ["c", "Conocimos a dos jóvenes que cruzaron la playa cuando todos se quedaban en su orilla."],
        ["m", "Conocimos a unos hijos de villanos que eligieron otra historia."],
        ["c", "Y conocimos a una familia hecha de tres cartas, una isla y mucha música."],
        ["m", "¿Saben qué tienen en común?"],
        ["c", "Que ninguno se quedó en el papel que le tocaba."],
        ["m", "Vine a cerrar esta ciudad. Traía el sello listo."],
        ["c", "¿Y?"],
        ["m", "Como Alcalde Provisional de Territorios No Reconocidos, declaro que Ciudad Coral es real. Y que cada familia que llegó hoy es, desde este momento, residente."],
        ["c", "Residente, no turista."],
        ["m", "Residente. Con pasaporte."],
        ["c", "Gracias por viajar con nosotros. A las diez se abren los otros tres barrios."],
        ["m", "Y yo... creo que me voy a quedar a verlos."],
        ["b", "Gracias, familias."],
      ],
    },
    { section: "Segunda función · 10:00 a.m." },
    {
      id: "6",
      title: "Prólogo · El Alcalde vuelve a la carga",
      time: "Abre la función · 10:00 a.m.",
      color: "#c0392b",
      lines: [
        ["m", "¡Un momento! ¡Un momento, por favor!"],
        ["m", "Disculpen. Soy el Alcalde Provisional de Territorios No Reconocidos. Me informan que esta ciudad ya abrió una vez esta mañana. Sin registro. Sin formularios. Sin permiso."],
        ["c", "Sin formularios es correcto."],
        ["m", "Pues vengo a corregir ese error. Las ciudades necesitan orden y normas."],
        ["c", "Entonces llegó al lugar equivocado, Alcalde. Ciudad Coral no aparece en ningún registro oficial."],
        ["m", "Exacto. Por eso la vengo a cerrar."],
        ["c", "Soy el Cartógrafo. Trazo mapas de lugares que no aparecen en ningún GPS. Lugares que solo existen cuando las personas se atreven a ser exactamente quienes son."],
        ["c", "Esta ciudad tiene dos secretos. Como un arrecife, está hecha de seres completamente distintos que juntos forman algo de una belleza imposible. Y como un coro, cada voz suena diferente, y por eso juntas crean lo que ninguna voz sola podría."],
        ["m", "Eso suena muy bien en un afiche. Yo necesito pruebas."],
        ["c", "Tendrá tres. La ciudad tiene seis barrios. Esta mañana ya abrieron tres. Ahora abren los otros tres, y con ellos cerramos Ciudad Coral."],
        ["m", "Inspeccionaré los tres. Si no me convencen, sello la puerta."],
        ["b", "Bienvenidos a Ciudad Coral."],
      ],
    },
    {
      id: "7",
      title: "Barrio 4 · La Avenida del Ritmo",
      time: "Antes de Hairspray",
      color: "#ec4899",
      lines: [
        ["m", "Primer barrio. Espero que aquí la gente sepa comportarse."],
        ["c", "Aquí la gente sabe bailar, que es mejor. Bienvenidos a La Avenida del Ritmo."],
        ["c", "Estamos en 1962, en un programa de televisión donde los jóvenes bailan cada tarde. Pero solo salen en pantalla los que se ven de cierta manera. Y los bailarines negros tienen apenas un día al mes."],
        ["m", "Bueno, alguna regla tenían que tener."],
        ["c", "Esa regla la quiso cambiar una muchacha a la que nadie imaginaba en la pantalla: el pelo enorme, un cuerpo que no salía en las revistas y más ritmo que todos."],
        ["m", "¿Y la dejaron entrar?"],
        ["c", "Entró sola. Y después les abrió la puerta a los demás."],
        ["m", "Anoto: primer barrio, peinados exagerados y una muchacha muy terca."],
        ["c", "Anote también que nadie pudo detener su ritmo."],
      ],
    },
    {
      id: "8",
      title: "Entretiempo · Las reglas también las escribe alguien",
      time: "Después de Hairspray · antes de Familia Addams",
      color: "#475569",
      lines: [
        ["m", "Una muchacha que le cambia las reglas a un programa entero. Eso es... desordenado."],
        ["c", "¿O justo?"],
        ["m", "Las reglas estaban escritas."],
        ["c", "Y las escribió alguien, Alcalde. Las personas se equivocan."],
        ["m", "Usted dice eso porque nunca ha tenido que hacer cumplir una."],
        ["c", "Puede ser. Pero sí he visto lo que pasa cuando alguien se atreve a romper una regla injusta."],
        ["c", "El siguiente barrio no aparece en los mapas de las ciudades normales. Está al final de una calle sin nombre, detrás de una reja de hierro, entre árboles que crecen hacia adentro en lugar de hacia arriba."],
        ["c", "Se llama La Mansión del Eco. Y allí vive una familia que el mundo siempre llamó rara."],
        ["m", "En mis registros, la gente rara debería esforzarse más en ser normal."],
        ["c", "¿Y qué es normal, Alcalde?"],
        ["m", "Pues... normal es... normal."],
        ["c", "En ningún mapa del mundo existe una definición de normal. Pase y mire."],
      ],
    },
    {
      id: "9",
      title: "La confesión del Alcalde · El Puerto de los que Llegan",
      time: "Después de Familia Addams · antes de Hamilton",
      color: "#ef4444",
      lines: [
        ["m", "Cartógrafo. Esa familia cree que es perfectamente normal vivir así."],
        ["c", "¿Y eso le molesta?"],
        ["m", "Me molesta que se vean tan... tranquilos."],
        ["m", "Yo no nací aquí, ¿sabe? Llegué de un pueblo pequeño, con un acento que se notaba a una cuadra. En el colegio se reían cada vez que hablaba."],
        ["c", "¿Y qué hizo?"],
        ["m", "Aprendí a hablar como los demás. Y después aprendí a escribir las reglas, para que nadie volviera a reírse de mí."],
        ["c", "¿Y funcionó?"],
        ["m", "Nadie se volvió a reír. Pero tampoco nadie me conoció."],
        ["c", "Alcalde, el último barrio es justo para usted."],
        ["c", "Se llama El Puerto de los que Llegan. Allí desembarcó un muchacho del Caribe: huérfano, pobre y extranjero. No tenía un apellido importante ni dinero. Tenía palabras. Y escribió tanto que ayudó a fundar un país."],
        ["m", "Un extranjero fundando un país. ¿Eso consta en algún registro?"],
        ["c", "En todos. Hasta en los billetes."],
        ["m", "Entonces presentémoslo."],
        ["c", "Ese es el secreto de este barrio: quien llega de lejos también construye la ciudad."],
      ],
    },
    {
      id: "10",
      title: "Epílogo · La firma del reconocimiento",
      time: "Cierre de Ciudad Coral",
      color: "#c0392b",
      lines: [
        ["c", "Hemos llegado al final del mapa."],
        ["m", "Un mapa que no aparece en ningún registro oficial. Y que es más real que cualquier ciudad que yo haya inspeccionado."],
        ["c", "Conocimos a una muchacha que bailó cuando le decían que no cabía en la pantalla."],
        ["m", "Conocimos a una familia que celebró su rareza cuando el mundo quería que la escondiera."],
        ["c", "Y conocimos a un muchacho que llegó de lejos y escribió su lugar en la historia."],
        ["m", "¿Saben qué tienen en común?"],
        ["c", "Que ninguno encajaba."],
        ["m", "Y aun así construyeron algo extraordinario."],
        ["c", "Ciudad Coral es para los que se atreven a existir como son y a hacerle espacio al diferente de al lado."],
        ["m", "Hoy estos estudiantes no solo presentaron musicales famosos. Nos recordaron que la diferencia no es un problema que haya que resolver."],
        ["c", "Es lo más humano que tenemos."],
        ["m", "Como Alcalde Provisional de Territorios No Reconocidos... y como alguien que llegó de lejos y tardó demasiado en reconocerlo... declaro que Ciudad Coral es real. Y que cada familia que vino hoy es, desde este momento, residente."],
        ["c", "Ciudad Coral cierra sus puertas. Lo que aprendimos aquí nos lo llevamos."],
        ["m", "Para siempre."],
        ["c", "Gracias por viajar con nosotros."],
        ["m", "Y gracias por dejarme quedarme."],
      ],
    },
  ],
  en: [
    { section: "First show · 7:30 a.m." },
    {
      id: "1",
      title: "Prologue · The Mayor arrives",
      time: "Show opens · 7:30 a.m.",
      color: "#c0392b",
      lines: [
        ["m", "Wait! Wait a moment, please!"],
        ["m", "Sorry to interrupt. I am the Provisional Mayor of Unrecognized Territories. I was told someone is about to open a city. A city with no official record. No forms. No permit."],
        ["c", "No forms is correct."],
        ["m", "No forms? That's chaos, young man. Cities need order. Categories. Rules that say what is acceptable and what isn't. Do you know where we are?"],
        ["c", "At the entrance to Coral City."],
        ["m", "Coral City... Coral City... It isn't in any official record."],
        ["c", "I know. That's why I'm showing it."],
        ["c", "I am the Cartographer. I draw maps of places that don't show up on any GPS. Places that only exist when people dare to be exactly who they are."],
        ["m", "Well, I came to inspect it. And I warn you: if it doesn't convince me... I'll shut it down."],
        ["c", "Coral City has two secrets. The first: like a reef at the bottom of the sea, it is made of thousands of different beings. No two are alike. And together they make something impossibly beautiful."],
        ["c", "The second: like a choir, this city has many voices. Each one sounds different. And that is why, together, they create what no single voice could."],
        ["m", "Nice speech. But speeches can't be inspected."],
        ["c", "Then inspect this: the city has six neighborhoods. This morning, three of them open for you. The other three open in the second show."],
        ["m", "Three neighborhoods in an hour and a half. I'll take notes on everything."],
        ["c", "Take notes. At the end, you decide whether the city exists."],
        ["b", "Welcome to Coral City."],
      ],
    },
    {
      id: "2",
      title: "Neighborhood 1 · The Beach of Two Shores",
      time: "Before Teen Beach Movie",
      color: "#0ea5e9",
      lines: [
        ["m", "I hope the first neighborhood has clear rules."],
        ["c", "It does. Too clear. Welcome to the Beach of Two Shores."],
        ["c", "On one shore are the surfers. On the other, the bikers. Each group has its song, its clothes, and its patch of sand. And nobody crosses over."],
        ["m", "Sounds very orderly."],
        ["c", "It seemed that way. Until a wave brought two teenagers who didn't know the rules. And they started crossing."],
        ["m", "And what happened to the story?"],
        ["c", "It changed. It turns out nobody had to stay in the role that was written for them."],
        ["m", "Noted: neighborhood one, two sides and a wave. Let's see."],
      ],
    },
    {
      id: "3",
      title: "Intermission · The Mayor and the shores",
      time: "After Teen Beach Movie · before Descendants",
      color: "#9333ea",
      lines: [
        ["m", "Surfers dancing with bikers. This is a mess."],
        ["c", "Did the dancing bother you, or the mixing?"],
        ["m", "The mixing. Everyone should stay on their own shore."],
        ["c", "And which shore were you born on, Mayor?"],
        ["m", "That question is not on the inspection form."],
        ["c", "The second neighborhood asks it. It's called the Bridge of Second Chances."],
        ["c", "Across the bridge there is an island where the children of storybook villains live. They grew up hearing they had to be like their parents: wicked, feared, alone."],
        ["m", "If the parents were villains, it's only logical that the children are too."],
        ["c", "That's what the record says. But one day someone opened the bridge for them, and they had to decide who they wanted to be."],
        ["m", "Nobody decides that. You are what you inherit."],
        ["c", "Stay and watch."],
      ],
    },
    {
      id: "4",
      title: "The Mayor's confession · The Island of Three Letters",
      time: "After Descendants · before Mamma Mia!",
      color: "#f59e0b",
      lines: [
        ["m", "Cartographer."],
        ["c", "Yes, Mayor?"],
        ["m", "My father was a mayor too. And his father before him. At home, nobody ever asked me what I wanted to be. It was already written."],
        ["c", "And what did you want to be?"],
        ["m", "A singer."],
        ["m", "...Don't write that down."],
        ["c", "It's already on the map."],
        ["m", "Those kids from the island chose something different from what they were handed. I never dared."],
        ["c", "There's still time. And the last neighborhood this morning knows a lot about that."],
        ["c", "It's called the Island of Three Letters. A young woman is about to get married and doesn't know who her father is. So she invites the three men who might be him to the wedding."],
        ["m", "Three? That doesn't fit on any form."],
        ["c", "Not on a form. In a family, it does. That's this neighborhood's secret: a family isn't measured by how it started, but by who stays."],
        ["m", "By who stays."],
        ["c", "And today you, families, stayed. So this neighborhood is yours too."],
      ],
    },
    {
      id: "5",
      title: "Epilogue · The Mayor's seal",
      time: "End of the first show",
      color: "#c0392b",
      lines: [
        ["c", "We have reached the end of this morning's map."],
        ["m", "Three neighborhoods. Three ways of not fitting in."],
        ["c", "We met two teenagers who crossed the beach when everyone else stayed on their shore."],
        ["m", "We met the children of villains who chose a different story."],
        ["c", "And we met a family made of three letters, an island, and a lot of music."],
        ["m", "Do you know what they have in common?"],
        ["c", "None of them stayed in the role they were given."],
        ["m", "I came to shut this city down. I had my seal ready."],
        ["c", "And?"],
        ["m", "As Provisional Mayor of Unrecognized Territories, I declare that Coral City is real. And that every family who came today is, from this moment on, a resident."],
        ["c", "A resident, not a tourist."],
        ["m", "A resident. With a passport."],
        ["c", "Thank you for traveling with us. At ten o'clock, the other three neighborhoods open."],
        ["m", "And I... think I'll stay and watch them."],
        ["b", "Thank you, families."],
      ],
    },
    { section: "Second show · 10:00 a.m." },
    {
      id: "6",
      title: "Prologue · The Mayor is back",
      time: "Show opens · 10:00 a.m.",
      color: "#c0392b",
      lines: [
        ["m", "Wait! Wait a moment, please!"],
        ["m", "Excuse me. I am the Provisional Mayor of Unrecognized Territories. I'm told this city already opened once this morning. No record. No forms. No permit."],
        ["c", "No forms is correct."],
        ["m", "Then I'm here to correct that mistake. Cities need order and rules."],
        ["c", "Then you've come to the wrong place, Mayor. Coral City isn't in any official record."],
        ["m", "Exactly. That's why I'm here to shut it down."],
        ["c", "I am the Cartographer. I draw maps of places that don't show up on any GPS. Places that only exist when people dare to be exactly who they are."],
        ["c", "This city has two secrets. Like a reef, it is made of completely different beings who together make something impossibly beautiful. And like a choir, every voice sounds different, and that is why together they create what no single voice could."],
        ["m", "That sounds lovely on a poster. I need evidence."],
        ["c", "You'll get three pieces. The city has six neighborhoods. Three already opened this morning. Now the other three open, and with them we close Coral City."],
        ["m", "I'll inspect all three. If they don't convince me, I seal the door."],
        ["b", "Welcome to Coral City."],
      ],
    },
    {
      id: "7",
      title: "Neighborhood 4 · Rhythm Avenue",
      time: "Before Hairspray",
      color: "#ec4899",
      lines: [
        ["m", "First neighborhood. I hope people here know how to behave."],
        ["c", "People here know how to dance, which is better. Welcome to Rhythm Avenue."],
        ["c", "It's 1962, on a TV show where teenagers dance every afternoon. But only those who look a certain way make it on screen. And the Black dancers get just one day a month."],
        ["m", "Well, they had to have some kind of rule."],
        ["c", "A girl nobody pictured on screen wanted to change that rule: huge hair, a body you never saw in magazines, and more rhythm than anyone."],
        ["m", "And did they let her in?"],
        ["c", "She got in on her own. And then she opened the door for everyone else."],
        ["m", "Noted: first neighborhood, outrageous hairdos and a very stubborn girl."],
        ["c", "Also note that nobody could stop her beat."],
      ],
    },
    {
      id: "8",
      title: "Intermission · Someone writes the rules",
      time: "After Hairspray · before The Addams Family",
      color: "#475569",
      lines: [
        ["m", "A girl who changes the rules of an entire TV show. That's... disorderly."],
        ["c", "Or fair?"],
        ["m", "The rules were written."],
        ["c", "And someone wrote them, Mayor. People make mistakes."],
        ["m", "You say that because you've never had to enforce one."],
        ["c", "Maybe. But I have seen what happens when someone dares to break an unfair rule."],
        ["c", "The next neighborhood doesn't appear on the maps of ordinary cities. It's at the end of a street with no name, behind an iron gate, among trees that grow inward instead of upward."],
        ["c", "It's called the Mansion of the Echo. And a family the world has always called strange lives there."],
        ["m", "In my records, strange people should try harder to be normal."],
        ["c", "And what is normal, Mayor?"],
        ["m", "Well... normal is... normal."],
        ["c", "No map in the world has a definition of normal. Come in and see."],
      ],
    },
    {
      id: "9",
      title: "The Mayor's confession · The Port of Arrivals",
      time: "After The Addams Family · before Hamilton",
      color: "#ef4444",
      lines: [
        ["m", "Cartographer. That family thinks it's perfectly normal to live like that."],
        ["c", "And does that bother you?"],
        ["m", "It bothers me that they look so... calm."],
        ["m", "I wasn't born here, you know. I came from a small town, with an accent you could hear a block away. At school they laughed every time I spoke."],
        ["c", "And what did you do?"],
        ["m", "I learned to talk like everyone else. And then I learned to write the rules, so nobody would ever laugh at me again."],
        ["c", "And did it work?"],
        ["m", "Nobody laughed again. But nobody got to know me either."],
        ["c", "Mayor, the last neighborhood is just right for you."],
        ["c", "It's called the Port of Arrivals. A young man from the Caribbean came ashore there: an orphan, poor, and a foreigner. He had no important last name and no money. He had words. And he wrote so much that he helped found a country."],
        ["m", "A foreigner founding a country. Is that in any record?"],
        ["c", "In all of them. Even on the money."],
        ["m", "Then let's present it."],
        ["c", "That's this neighborhood's secret: those who come from far away also build the city."],
      ],
    },
    {
      id: "10",
      title: "Epilogue · The signature of recognition",
      time: "Coral City closes",
      color: "#c0392b",
      lines: [
        ["c", "We have reached the end of the map."],
        ["m", "A map that isn't in any official record. And it's more real than any city I've ever inspected."],
        ["c", "We met a girl who danced when they told her she didn't fit on screen."],
        ["m", "We met a family who celebrated being strange when the world wanted them to hide it."],
        ["c", "And we met a young man who came from far away and wrote his place in history."],
        ["m", "Do you know what they have in common?"],
        ["c", "None of them fit in."],
        ["m", "And still, they built something extraordinary."],
        ["c", "Coral City is for those who dare to exist as they are and to make room for the different person next to them."],
        ["m", "Today these students didn't just perform famous musicals. They reminded us that difference is not a problem to be solved."],
        ["c", "It's the most human thing we have."],
        ["m", "As Provisional Mayor of Unrecognized Territories... and as someone who came from far away and took too long to admit it... I declare that Coral City is real. And that every family who came today is, from this moment on, a resident."],
        ["c", "Coral City closes its doors. What we learned here, we take with us."],
        ["m", "Forever."],
        ["c", "Thank you for traveling with us."],
        ["m", "And thank you for letting me stay."],
      ],
    },
  ],
};

const screen = document.getElementById("screen");
const cover = document.getElementById("cover");

function text(path) {
  return path.split(".").reduce((value, key) => value?.[key], ui[state.lang]) ?? "";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function updateStaticText() {
  document.documentElement.lang = state.lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = text(node.dataset.i18n);
  });

  document.querySelectorAll("[data-nav-label]").forEach((node) => {
    node.textContent = ui[state.lang].nav[node.dataset.navLabel];
  });

  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langButton === state.lang);
  });
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem(LANGUAGE_KEY, lang);
  updateStaticText();
  render();
}

function setPage(page) {
  state.page = page;
  render();
  document.querySelectorAll("[data-nav-target]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.navTarget === page);
  });
  screen.scrollTo({ top: 0, behavior: "smooth" });
  screen.focus({ preventScroll: true });
}

function pageHero(page, modifier = "") {
  const data = text(`pages.${page}`);
  return `
    <section class="page-hero ${modifier}">
      <p class="page-hero__eyebrow">${escapeHtml(data.eyebrow)}</p>
      <h2>${escapeHtml(data.title)}</h2>
      <p class="page-hero__text">${escapeHtml(data.text)}</p>
    </section>
  `;
}

function renderHome() {
  const home = ui[state.lang].pages.home;
  return `
    <article class="page">
      ${pageHero("home", "page-hero--ocean")}
      <section class="quick-grid" aria-label="${escapeHtml(ui[state.lang].labels.event)}">
        <div class="quick-card"><strong>2</strong><span>${escapeHtml(ui[state.lang].labels.hours)}</span></div>
        <div class="quick-card"><strong>6</strong><span>${escapeHtml(ui[state.lang].labels.neighborhoods)}</span></div>
        <div class="quick-card"><strong>10</strong><span>${escapeHtml(ui[state.lang].labels.appearances)}</span></div>
      </section>
      <section class="card">
        <div class="card__header">
          <p class="card__eyebrow">${escapeHtml(ui[state.lang].labels.event)}</p>
          <h3 class="card__title">${escapeHtml(home.whyTitle)}</h3>
        </div>
        <div class="card__body">
          <p>${escapeHtml(home.whyBody)}</p>
        </div>
      </section>
      <section class="secret-grid" aria-label="${escapeHtml(ui[state.lang].labels.secrets)}">
        <article class="secret-card secret-card--reef">
          <div class="secret-card__icon" aria-hidden="true">🪸</div>
          <h3>${escapeHtml(ui[state.lang].labels.reef)}</h3>
          <p>${escapeHtml(home.reefText)}</p>
        </article>
        <article class="secret-card secret-card--choir">
          <div class="secret-card__icon" aria-hidden="true">🎶</div>
          <h3>${escapeHtml(ui[state.lang].labels.choir)}</h3>
          <p>${escapeHtml(home.choirText)}</p>
        </article>
      </section>
      <section class="page-hero page-hero--stage">
        <p class="page-hero__eyebrow">Musicreando</p>
        <h2>${escapeHtml(ui[state.lang].labels.characters)}</h2>
        <p class="page-hero__text">${escapeHtml(ui[state.lang].pages.diary.text)}</p>
        <div class="hero-actions">
          <a class="pill-link" href="#" data-link-page="diary">${escapeHtml(home.ctaDiary)}</a>
          <a class="chip" href="#" data-link-page="schedule">${escapeHtml(home.ctaSchedule)}</a>
        </div>
      </section>
    </article>
  `;
}

function renderTrm() {
  const page = ui[state.lang].pages.trm;
  const labels = ui[state.lang].labels;
  const tracks = trm.tracks[state.lang]
    .map(
      (track) => `
        <article class="track-card" style="--track-color:${track.color}">
          <div class="track-card__icon" aria-hidden="true">${escapeHtml(track.icon)}</div>
          <h3>${escapeHtml(track.title)}</h3>
          <ul>${track.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </article>
      `,
    )
    .join("");
  const phases = trm.phases[state.lang]
    .map(
      (phase) => `
        <article class="phase-card" style="--phase-color:${phase.color}">
          <strong>${escapeHtml(phase.number)}</strong>
          <span>${escapeHtml(phase.label)}</span>
          <p>${escapeHtml(phase.text)}</p>
        </article>
      `,
    )
    .join("");
  const tags = trm.tags[state.lang]
    .map((tag, index) => {
      const colors = ["#7c3aed", "#ec4899", "#0ea5e9", "#f97316", "#10b981"];
      return `<span class="tag-pill" style="background:${colors[index % colors.length]}">${escapeHtml(tag)}</span>`;
    })
    .join("");

  return `
    <article class="page">
      ${pageHero("trm", "page-hero--trm")}
      <section class="trm-objective">
        <div class="trm-objective__icon" aria-hidden="true">🎯</div>
        <div>
          <p class="card__eyebrow">${escapeHtml(page.objectiveTitle)}</p>
          <h3>${escapeHtml(page.title)}</h3>
          <p>${escapeHtml(page.objective)}</p>
        </div>
      </section>
      <p class="mini-heading">✨ ${escapeHtml(labels.trmTracks)} ✨</p>
      <section class="track-grid">${tracks}</section>
      <section class="trm-convergence">
        <span>${escapeHtml(labels.trmConverge)}</span>
        <strong>🎖️ ${escapeHtml(labels.leadership)}</strong>
      </section>
      <section class="card">
        <div class="card__header">
          <p class="card__eyebrow">${escapeHtml(labels.phase)}</p>
          <h3 class="card__title">${escapeHtml(state.lang === "es" ? "Ruta de desarrollo" : "Development path")}</h3>
        </div>
        <div class="card__body phase-grid">${phases}</div>
      </section>
      <section class="card">
        <div class="card__header">
          <p class="card__eyebrow">Arts Life Project</p>
          <h3 class="card__title">${escapeHtml(page.todayTitle)}</h3>
        </div>
        <div class="card__body">
          <p>${escapeHtml(page.today)}</p>
          <div class="tag-row">${tags}</div>
        </div>
      </section>
    </article>
  `;
}

function renderSchedule() {
  const items = schedule[state.lang]
    .map((item) => {
      if (item.section) {
        return `<div class="schedule-separator">${escapeHtml(item.section)}</div>`;
      }
      if (item.note) {
        return `<p class="schedule-note">${escapeHtml(item.note)}</p>`;
      }

      return `
        <article class="schedule-item">
          <div class="schedule-item__time ${item.icon ? "schedule-item__time--icon" : ""}" style="background:${item.color}">${escapeHtml(item.time || item.icon)}</div>
          <div class="schedule-item__body">
            <h3 class="schedule-item__title">${escapeHtml(item.title)}</h3>
            <p class="schedule-item__subtitle">${escapeHtml(item.detail)}</p>
          </div>
        </article>
      `;
    })
    .join("");

  return `
    <article class="page">
      ${pageHero("schedule")}
      <section class="schedule-list">${items}</section>
    </article>
  `;
}

function renderNeighborhoods() {
  const active = neighborhoods[state.lang][state.neighborhood];
  const labels = ui[state.lang].labels;
  const tabs = neighborhoods[state.lang]
    .map((item, index) => {
      const activeClass = index === state.neighborhood ? "is-active" : "";
      const style = index === state.neighborhood ? `style="background:${item.color}"` : "";
      return `<button type="button" class="${activeClass}" ${style} data-neighborhood="${index}">${escapeHtml(item.icon)} ${index + 1}</button>`;
    })
    .join("");

  return `
    <article class="page">
      ${pageHero("neighborhoods", "page-hero--stage")}
      <div class="neighborhood-tabs" role="tablist" aria-label="${escapeHtml(labels.neighborhoods)}">${tabs}</div>
      <section class="neighborhood-card">
        <div class="poster" style="background:linear-gradient(135deg, ${active.color}, ${active.color}cc 45%, #17142a)">
          <div class="poster__icon" aria-hidden="true">${escapeHtml(active.icon)}</div>
          <h3>${escapeHtml(active.musical)}</h3>
          <p>${escapeHtml(active.year)}</p>
        </div>
        <div class="neighborhood-card__header" style="background:${active.color}">
          <div class="neighborhood-card__number">${escapeHtml(active.number)}</div>
          <div class="neighborhood-card__name">${escapeHtml(active.name)}</div>
          <span class="neighborhood-card__group">${escapeHtml(active.group)}</span>
        </div>
        <div class="info-section">
          <p class="info-section__label">${escapeHtml(labels.musical)}</p>
          <p>${escapeHtml(active.description)}</p>
        </div>
        <div class="info-section">
          <p class="info-section__label">${escapeHtml(labels.story)}</p>
          <p>${escapeHtml(active.story)}</p>
        </div>
        <div class="info-section">
          <p class="info-section__label">${escapeHtml(labels.message)}</p>
          <div class="message-box" style="background:${active.soft};color:${active.color}">${escapeHtml(active.message)}</div>
        </div>
        <div class="info-section">
          <p class="info-section__label">${escapeHtml(labels.facts)}</p>
          <ul class="fact-list">${active.facts.map((fact) => `<li>${escapeHtml(fact)}</li>`).join("")}</ul>
        </div>
        <div class="external-links">
          <a class="external-link" style="background:${active.color}" href="${active.videoUrl}" target="_blank" rel="noopener">▶ ${state.lang === "es" ? "Ver en YouTube" : "Watch on YouTube"}</a>
          <a class="external-link external-link--light" style="color:${active.color}" href="${active.wikiUrl}" target="_blank" rel="noopener">📖 ${state.lang === "es" ? "Más información" : "Learn more"}</a>
        </div>
      </section>
    </article>
  `;
}

function renderChallenge() {
  const page = ui[state.lang].pages.challenge;
  const labels = ui[state.lang].labels;
  let count = 0;
  const cards = challenges[state.lang]
    .map((item) => {
      if (item.section) {
        count = 0;
        return `<div class="schedule-separator">${escapeHtml(item.section)}</div>`;
      }
      count += 1;
      const index = count - 1;
      return `
        <article class="challenge-card">
          <div class="challenge-card__head">
            <span class="challenge-card__number" style="background:${item.color}">${index + 1}</span>
            <div>
              <p>${escapeHtml(labels.challengeRound)} ${index + 1}</p>
              <h3 style="color:${item.color}">${escapeHtml(item.neighborhood)}</h3>
            </div>
          </div>
          <p class="challenge-card__question">${escapeHtml(item.question)}</p>
          <div class="challenge-card__answer">
            <span>${escapeHtml(labels.challengeAnswer)}</span>
            <strong>${escapeHtml(item.answer)}</strong>
          </div>
        </article>
      `;
    })
    .join("");

  return `
    <article class="page">
      ${pageHero("challenge", "page-hero--challenge")}
      <section class="challenge-intro">
        <div class="challenge-intro__icon" aria-hidden="true">🏆</div>
        <div>
          <h3>${escapeHtml(page.howTitle)}</h3>
          <p>${escapeHtml(page.howText)}</p>
        </div>
      </section>
      <section class="challenge-list">${cards}</section>
    </article>
  `;
}

function speakerLabel(type) {
  const labels = ui[state.lang].labels;
  if (type === "m") return `👔 ${labels.mayor}`;
  if (type === "b") return `🎭 + 👔 ${labels.both}`;
  return `🎭 ${labels.cartographer}`;
}

function dialogueClass(type) {
  if (type === "m") return "dialogue--mayor";
  if (type === "b") return "dialogue--both";
  return "dialogue--cartographer";
}

function renderDiary() {
  const labels = ui[state.lang].labels;
  const scenes = diary[state.lang]
    .map((scene) => {
      if (scene.section) {
        return `<div class="schedule-separator">${escapeHtml(scene.section)}</div>`;
      }
      const isOpen = state.openScenes.has(scene.id);
      return `
        <section class="scene ${isOpen ? "is-open" : ""}">
          <button class="scene__button" type="button" data-scene="${scene.id}" aria-expanded="${isOpen}">
            <span class="scene__left">
              <span class="scene__number" style="background:${scene.color}">${scene.id}</span>
              <span>
                <span class="scene__kicker">${escapeHtml(labels.scene)} ${scene.id}</span>
                <span class="scene__title">${escapeHtml(scene.title)}</span>
                <span class="scene__time">${escapeHtml(scene.time)}</span>
              </span>
            </span>
            <span class="scene__chevron" aria-hidden="true">⌄</span>
          </button>
          <div class="scene__body">
            ${scene.lines
              .map(
                ([speaker, line]) => `
                  <article class="dialogue ${dialogueClass(speaker)}">
                    <div class="dialogue__speaker">${escapeHtml(speakerLabel(speaker))}</div>
                    <div class="dialogue__bubble">${escapeHtml(line)}</div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");

  return `
    <article class="page">
      ${pageHero("diary", "page-hero--diary")}
      <div class="diary-tools">
        <button type="button" class="tool-button" data-diary-action="open">${escapeHtml(labels.expandAll)}</button>
        <button type="button" class="tool-button" data-diary-action="close">${escapeHtml(labels.collapseAll)}</button>
      </div>
      ${scenes}
    </article>
  `;
}

function renderEvaluation() {
  const page = ui[state.lang].pages.evaluation;
  const labels = ui[state.lang].labels;

  return `
    <article class="page">
      ${pageHero("evaluation", "page-hero--eval")}
      <section class="eval-card">
        <div class="eval-card__inner">
          <div class="eval-card__icon" aria-hidden="true">⭐</div>
          <h3>${escapeHtml(page.cardTitle)}</h3>
          <p>${escapeHtml(page.cardText)}</p>
          <a class="eval-link" href="${EVALUATION_URL}" target="_blank" rel="noopener">${escapeHtml(labels.evaluate)} →</a>
        </div>
      </section>
      <section class="card">
        <div class="card__header">
          <p class="card__eyebrow">${escapeHtml(page.eyebrow)}</p>
          <h3 class="card__title">${escapeHtml(page.noteTitle)}</h3>
        </div>
        <div class="card__body">
          <p>${escapeHtml(page.noteBody)}</p>
        </div>
      </section>
    </article>
  `;
}

function render() {
  const renderers = {
    home: renderHome,
    trm: renderTrm,
    schedule: renderSchedule,
    neighborhoods: renderNeighborhoods,
    challenge: renderChallenge,
    diary: renderDiary,
    evaluation: renderEvaluation,
  };

  screen.innerHTML = renderers[state.page]();
}

function bindEvents() {
  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.langButton));
  });

  document.getElementById("open-passport").addEventListener("click", () => {
    cover.classList.add("is-hidden");
    screen.focus({ preventScroll: true });
  });

  document.querySelectorAll("[data-nav-target]").forEach((button) => {
    button.addEventListener("click", () => {
      cover.classList.add("is-hidden");
      setPage(button.dataset.navTarget);
    });
  });

  screen.addEventListener("click", (event) => {
    const pageLink = event.target.closest("[data-link-page]");
    if (pageLink) {
      event.preventDefault();
      setPage(pageLink.dataset.linkPage);
      return;
    }

    const neighborhoodButton = event.target.closest("[data-neighborhood]");
    if (neighborhoodButton) {
      state.neighborhood = Number(neighborhoodButton.dataset.neighborhood);
      render();
      return;
    }

    const sceneButton = event.target.closest("[data-scene]");
    if (sceneButton) {
      const id = sceneButton.dataset.scene;
      if (state.openScenes.has(id)) {
        state.openScenes.delete(id);
      } else {
        state.openScenes.add(id);
      }
      render();
      return;
    }

    const diaryAction = event.target.closest("[data-diary-action]");
    if (diaryAction) {
      if (diaryAction.dataset.diaryAction === "open") {
        state.openScenes = new Set(diary[state.lang].filter((scene) => scene.id).map((scene) => scene.id));
      } else {
        state.openScenes = new Set();
      }
      render();
    }
  });
}

function initialize() {
  updateStaticText();
  render();
  bindEvents();
}

initialize();
