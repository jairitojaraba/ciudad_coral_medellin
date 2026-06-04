const EVALUATION_URL = "https://forms.cloud.microsoft/r/miFSh18LBW";
const LANGUAGE_KEY = "coral-city-language";

const state = {
  lang: localStorage.getItem(LANGUAGE_KEY) || "es",
  page: "home",
  neighborhood: 0,
  openScenes: new Set(["1"]),
};

const ui = {
  es: {
    appTitle: "La Ciudad Coral",
    schoolLine: "San José de las Vegas · Upper Middle School",
    coverTitle: "Pasaporte permanente",
    eventMeta: "Sede El Retiro · Sábado 6 de junio de 2026",
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
      hours: "8:00 a.m. a 12:00 m.",
      neighborhoods: "5 barrios",
      characters: "2 personajes",
      appearances: "9 apariciones",
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
      evaluate: "Ir a la evaluación",
      trmTracks: "Líneas TRM",
      trmConverge: "Ambas líneas convergen en",
      leadership: "Formación de liderazgo",
      phase: "Fase 0: TRM · Grados 4° a 8°",
      challengeAnswer: "Respuesta",
      challengeRound: "Ronda",
    },
    pages: {
      home: {
        eyebrow: "Pasaporte de residente",
        title: "Un mapa para vivir el evento desde el celular",
        text: "Consulta el programa, explora los barrios musicales y sigue el guion de los personajes a medida que aparece cada escena.",
        whyTitle: "¿Qué es La Ciudad Coral?",
        whyBody:
          "La Ciudad Coral es una experiencia artística sobre la diferencia, la identidad y la pertenencia. Cada barrio representa una historia musical donde alguien que no encajaba encuentra una voz propia.",
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
        todayTitle: "Hoy, en La Ciudad Coral",
        today:
          "Los cinco sketches son una experiencia de aprendizaje activo dentro de Arts Life Project, preparada con Musicreando: ensayos, trabajo en equipo, exploración personal y voz escénica.",
      },
      schedule: {
        eyebrow: "Sábado 6 de junio",
        title: "Programa del día",
        text: "Una guía rápida para llegar a cada momento sin perder el hilo de la historia.",
      },
      neighborhoods: {
        eyebrow: "Los cinco barrios",
        title: "Sketches musicales",
        text: "Cada barrio tiene un musical, un conflicto y una idea para llevarse en el pasaporte.",
      },
      challenge: {
        eyebrow: "Los Secretos del Barrio",
        title: "Reto del evento",
        text: "Prepárate para responder. Las pistas están escondidas en los barrios, los datos curiosos y lo que escuches durante el recorrido.",
        howTitle: "Cómo funciona",
        howText:
          "Ronda 1 después del primer sketch: Barrio 1. Ronda 2 después del tercer sketch: Barrios 1, 2 y 3. Gran final después del cuarto sketch: todos los barrios y premiación.",
      },
      diary: {
        eyebrow: "Diario escénico",
        title: "Sigue las líneas de los personajes",
        text: "Aquí están solo los diálogos del Cartógrafo y del Alcalde. Abre cada aparición cuando llegue su momento en el evento.",
      },
      evaluation: {
        eyebrow: "Tu opinión nos importa",
        title: "Evalúa tu visita",
        text: "Al terminar el recorrido, responde la evaluación desde el enlace oficial.",
        cardTitle: "¿Cómo fue tu experiencia?",
        cardText:
          "Tres minutos. Siete preguntas. Tu respuesta ayuda a que La Ciudad Coral sea mejor cada año.",
        noteTitle: "Antes de salir",
        noteBody:
          "Puedes conservar este pasaporte en tu celular para revisar el programa, los barrios y el diario del evento cuando quieras.",
      },
    },
  },
  en: {
    appTitle: "The Coral City",
    schoolLine: "San José de las Vegas · Upper Middle School",
    coverTitle: "Permanent passport",
    eventMeta: "El Retiro Campus · Saturday, June 6, 2026",
    openPassport: "Open passport",
    tagline: "Nobody is a tourist here. We are all residents.",
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
      event: "Family Artistic and Cultural Day",
      hours: "8:00 a.m. to 12:00 p.m.",
      neighborhoods: "5 neighborhoods",
      characters: "2 characters",
      appearances: "9 appearances",
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
      evaluate: "Go to evaluation",
      trmTracks: "TRM tracks",
      trmConverge: "Both tracks converge in",
      leadership: "Leadership formation",
      phase: "Phase 0: TRM · Grades 4 to 8",
      challengeAnswer: "Answer",
      challengeRound: "Round",
    },
    pages: {
      home: {
        eyebrow: "Resident passport",
        title: "A mobile map for the whole event",
        text: "Check the schedule, explore the musical neighborhoods, and follow the characters' script as each scene unfolds.",
        whyTitle: "What is The Coral City?",
        whyBody:
          "The Coral City is an artistic experience about difference, identity, and belonging. Each neighborhood represents a musical story where someone who did not fit in finds a voice of their own.",
        reefText:
          "Like a reef, this city is made of different beings that together create something impossible to build alone.",
        choirText:
          "Like a choir, many different voices create a harmony that no single voice could achieve by itself.",
        ctaDiary: "Read the diary",
        ctaSchedule: "View schedule",
      },
      trm: {
        eyebrow: "San José de las Vegas",
        title: "Talent Roadmap & Arts Life Project",
        text: "The event connects with the talent map: arts, active methodologies, bilingualism, and leadership in one experience.",
        objectiveTitle: "Objective · Talent Roadmap 2026",
        objective:
          "Explore the skills, competencies, interests, and talents of Middle and Upper Middle School students through active learning methodologies and bilingualism, recognizing the opportunities and challenges of today's world.",
        todayTitle: "Today, in The Coral City",
        today:
          "The five sketches are an active learning experience within Arts Life Project, prepared with Musicreando: rehearsals, teamwork, personal exploration, and stage voice.",
      },
      schedule: {
        eyebrow: "Saturday, June 6",
        title: "Event schedule",
        text: "A quick guide to each moment so the story stays easy to follow.",
      },
      neighborhoods: {
        eyebrow: "The five neighborhoods",
        title: "Musical sketches",
        text: "Each neighborhood has a musical, a conflict, and an idea to carry in the passport.",
      },
      challenge: {
        eyebrow: "The Neighborhood Secrets",
        title: "Event quiz",
        text: "Get ready to answer. The clues are hidden in the neighborhoods, the fun facts, and what you hear during the journey.",
        howTitle: "How it works",
        howText:
          "Round 1 after the first sketch: Neighborhood 1. Round 2 after the third sketch: Neighborhoods 1, 2, and 3. Grand final after the fourth sketch: all neighborhoods and award ceremony.",
      },
      diary: {
        eyebrow: "Stage diary",
        title: "Follow the characters' lines",
        text: "Only the Cartographer and Mayor dialogue is included here. Open each appearance when its moment arrives during the event.",
      },
      evaluation: {
        eyebrow: "Your feedback matters",
        title: "Evaluate your visit",
        text: "At the end of the journey, answer the evaluation through the official link.",
        cardTitle: "How was your experience?",
        cardText:
          "Three minutes. Seven questions. Your answer helps make The Coral City better every year.",
        noteTitle: "Before you leave",
        noteBody:
          "You can keep this passport on your phone to revisit the schedule, neighborhoods, and event diary whenever you want.",
      },
    },
  },
};

const schedule = {
  es: [
    { section: "Apertura" },
    { time: "8:00", title: "Apertura de La Ciudad Coral", detail: "Oración · Bienvenida de Rectoría y Dirección General", color: "#ff8c42" },
    { section: "Primer y segundo barrio" },
    { time: "8:15", title: "Sketch 1 · Familia Addams", detail: "Grupos 6A y 6B", color: "#7c3aed" },
    { time: "8:30", title: "Los Secretos del Barrio · Ronda 1", detail: "Concurso · Barrio 1", color: "#10b981" },
    { time: "8:45", title: "Sketch 2 · Newsies", detail: "Grupo 6C", color: "#0ea5e9" },
    { time: "9:10", title: "Gran Entretiempo", detail: "Conciertos · Ventas familiares · Actividades", color: "#c084fc" },
    { section: "Tercer, cuarto y quinto barrio" },
    { time: "10:05", title: "Sketch 3 · Grease", detail: "Grupos 7A y 8A", color: "#ec4899" },
    { time: "10:20", title: "Los Secretos del Barrio · Ronda 2", detail: "Barrios 1, 2 y 3", color: "#10b981" },
    { time: "10:40", title: "Sketch 4 · In the Heights", detail: "Grupos 7B y 7C", color: "#f97316" },
    { time: "10:55", title: "Los Secretos del Barrio · Gran final", detail: "Todos los barrios · Premiación", color: "#10b981" },
    { time: "11:15", title: "Sketch 5 · Les Misérables", detail: "Grupos 8B y 8C", color: "#ef4444" },
    { section: "Cierre" },
    { time: "11:30", title: "Cierre de La Ciudad Coral", detail: "Palabras de cierre · Foto final", color: "#ff8c42" },
    { time: "12:00", title: "Fin del evento", detail: "Hasta la próxima edición", color: "#ff6b6b" },
  ],
  en: [
    { section: "Opening" },
    { time: "8:00", title: "Opening of The Coral City", detail: "Prayer · Welcome from Administration", color: "#ff8c42" },
    { section: "First and second neighborhood" },
    { time: "8:15", title: "Sketch 1 · Addams Family", detail: "Groups 6A and 6B", color: "#7c3aed" },
    { time: "8:30", title: "Neighborhood Secrets · Round 1", detail: "Contest · Neighborhood 1", color: "#10b981" },
    { time: "8:45", title: "Sketch 2 · Newsies", detail: "Group 6C", color: "#0ea5e9" },
    { time: "9:10", title: "Grand Intermission", detail: "Concerts · Family sales · Activities", color: "#c084fc" },
    { section: "Third, fourth, and fifth neighborhood" },
    { time: "10:05", title: "Sketch 3 · Grease", detail: "Groups 7A and 8A", color: "#ec4899" },
    { time: "10:20", title: "Neighborhood Secrets · Round 2", detail: "Neighborhoods 1, 2, and 3", color: "#10b981" },
    { time: "10:40", title: "Sketch 4 · In the Heights", detail: "Groups 7B and 7C", color: "#f97316" },
    { time: "10:55", title: "Neighborhood Secrets · Grand Final", detail: "All neighborhoods · Award ceremony", color: "#10b981" },
    { time: "11:15", title: "Sketch 5 · Les Misérables", detail: "Groups 8B and 8C", color: "#ef4444" },
    { section: "Closing" },
    { time: "11:30", title: "Closing of The Coral City", detail: "Closing words · Final photo", color: "#ff8c42" },
    { time: "12:00", title: "End of event", detail: "See you next time", color: "#ff6b6b" },
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
    {
      color: "#7c3aed",
      neighborhood: "Familia Addams",
      question: "¿En qué año apareció por primera vez la Familia Addams?",
      answer: "1938, en la revista The New Yorker.",
    },
    {
      color: "#0ea5e9",
      neighborhood: "Newsies",
      question: "¿En qué año ocurrió la huelga real de los newsboys?",
      answer: "1899, en las calles de Nueva York.",
    },
    {
      color: "#ec4899",
      neighborhood: "Grease",
      question: "¿En qué década está ambientada Grease?",
      answer: "En los años 50, específicamente 1959.",
    },
    {
      color: "#f97316",
      neighborhood: "In the Heights",
      question: "¿Quién escribió In the Heights?",
      answer: "Lin-Manuel Miranda, también creador de Hamilton.",
    },
    {
      color: "#ef4444",
      neighborhood: "Les Misérables",
      question: "¿En qué año publicó Victor Hugo Los Miserables?",
      answer: "1862. Tardó 33 años en escribir la novela.",
    },
  ],
  en: [
    {
      color: "#7c3aed",
      neighborhood: "Addams Family",
      question: "In what year did the Addams Family first appear?",
      answer: "1938, in The New Yorker magazine.",
    },
    {
      color: "#0ea5e9",
      neighborhood: "Newsies",
      question: "In what year did the real newsboys' strike take place?",
      answer: "1899, in the streets of New York City.",
    },
    {
      color: "#ec4899",
      neighborhood: "Grease",
      question: "What decade is Grease set in?",
      answer: "The 1950s, specifically 1959.",
    },
    {
      color: "#f97316",
      neighborhood: "In the Heights",
      question: "Who wrote In the Heights?",
      answer: "Lin-Manuel Miranda, also creator of Hamilton.",
    },
    {
      color: "#ef4444",
      neighborhood: "Les Misérables",
      question: "In what year did Victor Hugo publish Les Misérables?",
      answer: "1862. It took him 33 years to write the novel.",
    },
  ],
};

const neighborhoods = {
  es: [
    {
      number: "Barrio 1",
      name: "La Mansión del Eco",
      musical: "Familia Addams",
      group: "Grupos 6A y 6B",
      icon: "🕸️",
      color: "#7c3aed",
      soft: "#efe5ff",
      year: "Broadway · 2010",
      description:
        "La Familia Addams nació en 1938 como una caricatura de Charles Addams para The New Yorker. El musical de Broadway abrió en 2010 con música de Andrew Lippa.",
      story:
        "Wednesday Addams tiene novio por primera vez: un joven completamente normal. La historia pregunta qué significa ser fiel a quien uno es cuando el mundo espera otra cosa.",
      message: "Ser diferente no es un defecto. Es el primer paso para ser libre.",
      facts: [
        "El famoso chasquido de dos dedos nació en la serie de televisión de 1964.",
        "Wednesday toma su nombre de un verso inglés: Wednesday's child is full of woe.",
        "El musical corrió 725 funciones en Broadway.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=addams+family+musical+broadway",
      wikiUrl: "https://en.wikipedia.org/wiki/The_Addams_Family_(musical)",
    },
    {
      number: "Barrio 2",
      name: "El Callejón de los Titulares",
      musical: "Newsies",
      group: "Grupo 6C",
      icon: "📰",
      color: "#0ea5e9",
      soft: "#e0f7ff",
      year: "Broadway · 2012",
      description:
        "Newsies está basada en la huelga real de niños vendedores de periódicos de Nueva York en 1899. El musical llegó a Broadway en 2012 con música de Alan Menken.",
      story:
        "Cuando los grandes dueños subieron los precios, los newsboys se organizaron. Su protesta recordó que incluso los más pequeños pueden mover la historia.",
      message: "La justicia también puede cantarse a gritos.",
      facts: [
        "La huelga real duró cerca de dos semanas.",
        "Miles de niños vendedores participaron en la protesta.",
        "El musical ganó premios Tony por partitura y coreografía.",
      ],
      videoUrl: "https://www.youtube.com/watch?v=fHk9AG6X6sQ",
      wikiUrl: "https://en.wikipedia.org/wiki/Newsies_(musical)",
    },
    {
      number: "Barrio 3",
      name: "La Avenida Rydell",
      musical: "Grease",
      group: "Grupos 7A y 8A",
      icon: "🎸",
      color: "#ec4899",
      soft: "#ffe5f2",
      year: "Broadway · 1971",
      description:
        "Grease nació en Chicago en 1971 y luego llegó a Broadway. La película de 1978 convirtió la historia de Danny y Sandy en un clásico mundial.",
      story:
        "Dos jóvenes se enamoran en verano y luego se encuentran en el colegio, atrapados entre lo que sienten y lo que su grupo espera de ellos.",
      message: "Encajar tiene un precio. A veces ese precio eres tú mismo.",
      facts: [
        "Rydell High se inspira en el Taft High School de Chicago.",
        "La historia está ambientada en los años cincuenta.",
        "Grease es uno de los musicales escolares más representados del mundo.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=grease+1978+summer+nights",
      wikiUrl: "https://en.wikipedia.org/wiki/Grease_(musical)",
    },
    {
      number: "Barrio 4",
      name: "Las Alturas del Barrio",
      musical: "In the Heights",
      group: "Grupos 7B y 7C",
      icon: "🌟",
      color: "#f97316",
      soft: "#fff0dc",
      year: "Broadway · 2008",
      description:
        "Lin-Manuel Miranda empezó a escribir In the Heights cuando tenía 19 años. El musical ganó cuatro premios Tony, incluyendo Mejor Musical.",
      story:
        "Washington Heights celebra su identidad latina en medio de apagones, cambios y preguntas sobre el hogar, la memoria y el futuro.",
      message: "La identidad no se pierde cuando sales del barrio. Se lleva.",
      facts: [
        "La música mezcla hip-hop, salsa, merengue, R&B y teatro musical.",
        "Los personajes alternan inglés y español dentro de las canciones.",
        "Lin-Manuel Miranda también creó Hamilton.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=in+the+heights+carnaval+del+barrio+2021",
      wikiUrl: "https://en.wikipedia.org/wiki/In_the_Heights",
    },
    {
      number: "Barrio 5",
      name: "Las Barricadas de la Esperanza",
      musical: "Les Misérables",
      group: "Grupos 8B y 8C",
      icon: "🏴",
      color: "#ef4444",
      soft: "#ffe4e4",
      year: "Broadway · 1987",
      description:
        "Victor Hugo publicó la novela en 1862. El musical de Claude-Michel Schönberg llegó a Broadway en 1987 y se convirtió en un fenómeno internacional.",
      story:
        "Jean Valjean, estudiantes idealistas y un pueblo herido recuerdan que la esperanza más difícil es creer en un mundo más justo.",
      message: "Algunas canciones no pertenecen a un tiempo. Pertenecen a todos los tiempos.",
      facts: [
        "La historia ocurre durante la Rebelión de junio de 1832 en París.",
        "Es un musical sung-through: casi todo se canta.",
        "Do You Hear the People Sing? se ha usado como himno de protestas reales.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=les+miserables+do+you+hear+the+people+sing",
      wikiUrl: "https://en.wikipedia.org/wiki/Les_Mis%C3%A9rables_(musical)",
    },
  ],
  en: [
    {
      number: "Neighborhood 1",
      name: "The Mansion of the Echo",
      musical: "Addams Family",
      group: "Groups 6A and 6B",
      icon: "🕸️",
      color: "#7c3aed",
      soft: "#efe5ff",
      year: "Broadway · 2010",
      description:
        "The Addams Family began in 1938 as a Charles Addams cartoon for The New Yorker. The Broadway musical opened in 2010 with music by Andrew Lippa.",
      story:
        "Wednesday Addams has a boyfriend for the first time: a completely normal young man. The story asks what it means to stay true to yourself when the world expects something else.",
      message: "Being different is not a flaw. It is the first step toward freedom.",
      facts: [
        "The famous two-finger snap came from the 1964 TV series.",
        "Wednesday's name comes from the English verse Wednesday's child is full of woe.",
        "The musical ran for 725 performances on Broadway.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=addams+family+musical+broadway",
      wikiUrl: "https://en.wikipedia.org/wiki/The_Addams_Family_(musical)",
    },
    {
      number: "Neighborhood 2",
      name: "The Headline Alley",
      musical: "Newsies",
      group: "Group 6C",
      icon: "📰",
      color: "#0ea5e9",
      soft: "#e0f7ff",
      year: "Broadway · 2012",
      description:
        "Newsies is based on the real 1899 strike of child newspaper sellers in New York City. The Broadway musical arrived in 2012 with music by Alan Menken.",
      story:
        "When powerful publishers raised prices, the newsboys organized. Their protest proved that even the smallest voices can move history.",
      message: "Justice can also be sung out loud.",
      facts: [
        "The real strike lasted about two weeks.",
        "Thousands of young newspaper sellers joined the protest.",
        "The musical won Tony Awards for score and choreography.",
      ],
      videoUrl: "https://www.youtube.com/watch?v=fHk9AG6X6sQ",
      wikiUrl: "https://en.wikipedia.org/wiki/Newsies_(musical)",
    },
    {
      number: "Neighborhood 3",
      name: "Rydell Avenue",
      musical: "Grease",
      group: "Groups 7A and 8A",
      icon: "🎸",
      color: "#ec4899",
      soft: "#ffe5f2",
      year: "Broadway · 1971",
      description:
        "Grease was born in Chicago in 1971 and later reached Broadway. The 1978 film turned Danny and Sandy's story into a worldwide classic.",
      story:
        "Two young people fall in love during the summer and meet again at school, caught between what they feel and what their group expects.",
      message: "Fitting in has a price. Sometimes that price is yourself.",
      facts: [
        "Rydell High is inspired by Chicago's Taft High School.",
        "The story is set in the nineteen-fifties.",
        "Grease is one of the most performed school musicals in the world.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=grease+1978+summer+nights",
      wikiUrl: "https://en.wikipedia.org/wiki/Grease_(musical)",
    },
    {
      number: "Neighborhood 4",
      name: "The Heights of the Barrio",
      musical: "In the Heights",
      group: "Groups 7B and 7C",
      icon: "🌟",
      color: "#f97316",
      soft: "#fff0dc",
      year: "Broadway · 2008",
      description:
        "Lin-Manuel Miranda began writing In the Heights when he was 19. The musical won four Tony Awards, including Best Musical.",
      story:
        "Washington Heights celebrates Latino identity amid blackouts, change, and questions about home, memory, and the future.",
      message: "Identity does not disappear when you leave the neighborhood. You carry it.",
      facts: [
        "The music blends hip-hop, salsa, merengue, R&B, and musical theater.",
        "Characters switch between English and Spanish in the songs.",
        "Lin-Manuel Miranda also created Hamilton.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=in+the+heights+carnaval+del+barrio+2021",
      wikiUrl: "https://en.wikipedia.org/wiki/In_the_Heights",
    },
    {
      number: "Neighborhood 5",
      name: "The Barricades of Hope",
      musical: "Les Misérables",
      group: "Groups 8B and 8C",
      icon: "🏴",
      color: "#ef4444",
      soft: "#ffe4e4",
      year: "Broadway · 1987",
      description:
        "Victor Hugo published the novel in 1862. Claude-Michel Schönberg's musical reached Broadway in 1987 and became an international phenomenon.",
      story:
        "Jean Valjean, idealistic students, and a wounded people remind us that the hardest hope is believing in a fairer world.",
      message: "Some songs do not belong to one time. They belong to all times.",
      facts: [
        "The story takes place during the June 1832 Rebellion in Paris.",
        "It is a sung-through musical: almost everything is sung.",
        "Do You Hear the People Sing? has been used as an anthem in real protests.",
      ],
      videoUrl: "https://www.youtube.com/results?search_query=les+miserables+do+you+hear+the+people+sing",
      wikiUrl: "https://en.wikipedia.org/wiki/Les_Mis%C3%A9rables_(musical)",
    },
  ],
};

const diary = {
  es: [
    {
      id: "1",
      title: "Prólogo · La llegada del Alcalde",
      time: "8:10 a.m.",
      color: "#c0392b",
      lines: [
        ["m", "¡Un momento! ¡Un momento, por favor!"],
        ["m", "Disculpen la interrupción. Soy el Alcalde Provisional de Territorios No Reconocidos. Fui convocado aquí porque tengo entendido que alguien está a punto de abrir una ciudad. Una ciudad sin registro oficial. Sin formularios. Sin permiso."],
        ["c", "Sin formularios es correcto."],
        ["m", "¿Sin formularios? Eso es un caos, muchacho. Las ciudades necesitan orden. Clasificaciones. Normas que definan qué es aceptable y qué no. ¿Saben dónde están?"],
        ["c", "Están en la entrada de La Ciudad Coral."],
        ["m", "La Ciudad Coral... La Ciudad Coral... No existe en ningún registro oficial."],
        ["c", "Ya lo sé. Por eso la estoy mostrando."],
        ["m", "Este muchacho cree que puede simplemente... inventar una ciudad."],
        ["c", "Nadie inventa una ciudad, Alcalde. Las ciudades las construyen las personas que no caben en ningún otro lugar."],
        ["m", "Está bien. Voy a quedarme. Voy a ver qué tan especial es esta ciudad suya. Pero le advierto: si no me convence... la cierro."],
        ["c", "Soy El Cartógrafo."],
        ["c", "Mi trabajo es trazar mapas de lugares que no aparecen en ningún GPS. Lugares que solo existen cuando las personas se atreven a ser exactamente quienes son."],
        ["c", "Hoy les traigo el mapa de uno de esos lugares."],
        ["m", "Sin formularios. Increíble."],
        ["c", "La Ciudad Coral tiene dos secretos. El primero: como un arrecife de coral en el fondo del mar, está hecha de miles de seres completamente distintos entre sí. Ninguno es igual al otro. Y sin embargo, juntos forman algo de una belleza imposible."],
        ["c", "El segundo: como un coro, esta ciudad tiene muchas voces. Cada una suena diferente. Y es exactamente por eso que juntas pueden crear algo que ninguna voz sola jamás podría."],
        ["c", "En La Ciudad Coral, ser diferente no se tolera. Se necesita."],
        ["m", "Eso... eso es una afirmación muy atrevida."],
        ["c", "Esta ciudad tiene cinco barrios. Cada uno tiene su propia historia. Su propia música. Sus propios personajes que el mundo intentó callar y que eligieron cantar de todos modos. Hoy los vamos a visitar a todos. Y al final de este recorrido, algo en nosotros habrá cambiado."],
        ["m", "Estaré tomando nota."],
        ["b", "Bienvenidos a La Ciudad Coral."],
      ],
    },
    {
      id: "2",
      title: "Barrio 1 · La Mansión del Eco",
      time: "8:20 a.m.",
      color: "#7c3aed",
      lines: [
        ["m", "Dígame que el primer barrio no va a ser demasiado... excéntrico."],
        ["c", "Nuestro primer barrio no aparece en los mapas de las ciudades normales. Está escondido al final de una calle sin nombre, detrás de una reja de hierro, entre árboles que crecen hacia adentro en lugar de hacia arriba."],
        ["c", "Se llama La Mansión del Eco. Y aquí vive una familia que el mundo siempre llamó rara."],
        ["m", "En mis registros, la gente considerada rara generalmente debería esforzarse más en ser... en ser normal."],
        ["c", "¿Y qué sería normal, Alcalde?"],
        ["m", "Pues... ya sabe. Normal es... normal."],
        ["c", "En ningún mapa del mundo existe una definición de normal."],
        ["c", "Lo que sí sabemos es que ser raro es el primer paso para ser libre. Alguien que conoce muy bien este barrio nos va a contar un poco más de su historia."],
        ["m", "Una familia que lo considera perfectamente normal vivir así. Curioso."],
      ],
    },
    {
      id: "3",
      title: "Entretiempo 1 · El Alcalde se resiste",
      time: "8:40 a.m.",
      color: "#c0392b",
      lines: [
        ["m", "Una familia que vive en una mansión oscura y que considera eso perfectamente normal. Eso no está bien."],
        ["c", "¿Qué no está bien?"],
        ["m", "¡Ser así! ¡Tan... tan distintos!"],
        ["c", "¿Distintos de qué?"],
        ["m", "De... de todo el mundo."],
        ["c", "Alcalde. ¿Alguna vez en su vida ha sentido que no encajaba en algún lugar?"],
        ["m", "Eso es completamente irrelevante para esta inspección."],
        ["c", "En La Ciudad Coral, la pregunta no es por qué eres diferente. La pregunta es por qué el mundo tiene tanto miedo de lo que no entiende."],
        ["m", "Quizás... necesito más evidencia antes de concluir algo."],
        ["c", "¿Alguien aquí alguna vez ha peleado por algo que creía justo?"],
        ["c", "El siguiente barrio les va a encantar entonces. Se llama El Callejón de los Titulares. Y aquí, pelear por lo justo no es una opción. Es una canción."],
        ["m", "Barrio uno: familias con personalidades no convencionales. Nota: no se puede concluir con certeza qué es normal."],
        ["m", "Eso no significa que tenga razón."],
        ["c", "Claro que no."],
      ],
    },
    {
      id: "4",
      title: "Barrio 2 · El Callejón de los Titulares",
      time: "8:55 a.m.",
      color: "#0ea5e9",
      lines: [
        ["m", "Niños de periódicos que hacen huelga. En mis registros eso se clasifica como... alteración del orden."],
        ["c", "En mis mapas se clasifica como justicia."],
        ["c", "El Callejón de los Titulares huele a tinta fresca y asfalto mojado. Aquí las noticias no se imprimen. Se gritan."],
        ["c", "En este barrio viven los que nadie esperaba que hablaran. Los que se suponía que debían obedecer. Los que eran demasiado jóvenes, demasiado pobres, demasiado pequeños para que alguien los escuchara."],
        ["m", "Demasiado pequeños. Sí. Eso conozco."],
        ["c", "Y un día decidieron que si el mundo no los escuchaba en voz baja, lo harían cantar a gritos."],
        ["c", "Bienvenidos al segundo barrio de La Ciudad Coral."],
        ["m", "A gritos. Sí."],
      ],
    },
    {
      id: "5",
      title: "Gran Entretiempo · La ciudad sale a las calles",
      time: "9:20 a.m.",
      color: "#a855f7",
      lines: [
        ["c", "Ya visitamos dos barrios de La Ciudad Coral. Hemos conocido a los rarísimos y a los valientes."],
        ["m", "Cartógrafo. ¿Puedo hacerle una pregunta?"],
        ["c", "Tiene tres minutos. Estamos en receso."],
        ["m", "¿Por qué le importa tanto este lugar?"],
        ["c", "Porque en toda mi vida como cartógrafo, ningún otro lugar en el mundo le ha dicho a las personas que pueden llegar exactamente como son."],
        ["c", "La Ciudad Coral no es mi ciudad, Alcalde. Es la ciudad de todos los que alguna vez sintieron que no tenían ciudad."],
        ["m", "Y afuera también hay vida en esta ciudad."],
        ["c", "Siempre. La Ciudad no termina aquí adentro. Los invitamos a salir a explorarla."],
        ["m", "A las diez y cinco..."],
        ["c", "...estas puertas vuelven a abrirse."],
        ["b", "Porque todavía faltan tres barrios. Y los mejores están por llegar."],
      ],
    },
    {
      id: "6",
      title: "Barrio 3 · La Avenida Rydell",
      time: "10:05 a.m.",
      color: "#ec4899",
      lines: [
        ["c", "Bienvenidos de vuelta a La Ciudad Coral."],
        ["m", "Rydell Avenue. Los años cincuenta. Yo fui adolescente..."],
        ["m", "Quiero decir... el contexto histórico es interesante."],
        ["c", "Nuestro tercer barrio no tiene árboles que crecen hacia adentro ni callejones con olor a tinta. Tiene una avenida con rock and roll, autos de colores, y jóvenes que descubrieron que el corazón también tiene su propia manera de ser diferente."],
        ["c", "La Avenida Rydell es el barrio donde nadie encaja del todo con lo que se supone que debe ser. Y eso, en vez de separarlos, los une."],
        ["m", "Nadie encaja del todo. No. Nadie encaja del todo."],
        ["c", "Bienvenidos al tercer barrio de La Ciudad Coral."],
      ],
    },
    {
      id: "7",
      title: "La confesión del Alcalde · Las Alturas del Barrio",
      time: "10:20 a.m.",
      color: "#8b0000",
      lines: [
        ["c", "En La Avenida Rydell aprendimos que incluso cuando todo el mundo espera que seas de una manera, puedes elegir ser de otra. Que el amor, la amistad, y quién eres de verdad no encajan en ningún molde."],
        ["m", "Yo tampoco encajaba."],
        ["m", "Cuando era joven. No encajaba en ningún grupo. Era demasiado serio para los despreocupados y demasiado nervioso para los serios. Así que un día decidí que iba a ser el que ponía las reglas."],
        ["m", "Pensé que si yo ponía las reglas... por fin iba a pertenecer a algo."],
        ["c", "¿Y perteneció?"],
        ["m", "No. Solo aprendí a esconder que no pertenecía."],
        ["c", "Alcalde. Eso es exactamente de lo que trata el próximo barrio."],
        ["m", "Entonces presentémoslo."],
        ["c", "Ahora viajamos a un barrio que sabe algo que los otros apenas están aprendiendo. Este barrio sabe que ser diferente no es solo una rebeldía. Es una herencia. Es todo lo que te dieron tus abuelos, tu idioma, tu comida, tu música. Es de dónde vienes."],
        ["c", "Y cuando alguien intenta que olvides de dónde vienes... ese barrio no llora. Ese barrio se pone a bailar."],
        ["m", "Ojalá yo hubiera llegado a este barrio mucho antes."],
        ["c", "El cuarto barrio de La Ciudad Coral se llama Las Alturas del Barrio. Y quien mejor puede contárnoslo está a punto de tomar el escenario."],
      ],
    },
    {
      id: "8",
      title: "Barrio 5 · Las Barricadas de la Esperanza",
      time: "11:05 a.m.",
      color: "#ef4444",
      lines: [
        ["m", "Cartógrafo."],
        ["c", "¿Alcalde?"],
        ["m", "Vine aquí a cerrar esta ciudad."],
        ["c", "Lo sé."],
        ["m", "No puedo hacerlo."],
        ["c", "Lo sé."],
        ["m", "¿Lo sabía desde el principio?"],
        ["c", "Nadie visita La Ciudad Coral y sale igual. ¿Está listo para el último barrio?"],
        ["m", "El último barrio de los que el mundo intentó silenciar. ¿Saben qué tienen en común todas estas historias? Que la gente que las vive aprendió a cantar cuando el mundo quería silencio."],
        ["c", "Se llama Las Barricadas de la Esperanza. Y aquí vive la esperanza más difícil de todas: que el mundo pueda ser más justo."],
        ["c", "El quinto barrio nos recuerda que la diferencia más profunda no es la de la ropa, ni el idioma, ni el apellido. Es la diferencia entre los que tienen todo y los que no tienen nada. Y que incluso desde ese lugar, el arte encontró la manera de cantar."],
      ],
    },
    {
      id: "9",
      title: "Epílogo · La firma del reconocimiento",
      time: "11:30 a.m.",
      color: "#c0392b",
      lines: [
        ["c", "Hemos llegado al final del mapa."],
        ["m", "De un mapa que no aparece en ningún registro oficial. Y que es más real que cualquier ciudad que yo haya inspeccionado."],
        ["c", "Cinco barrios. Cinco historias. Cinco maneras completamente distintas de existir en el mundo."],
        ["m", "Conocimos a una familia que celebró su rareza cuando el mundo quería que la escondiera."],
        ["c", "Conocimos a jóvenes trabajadores que gritaron cuando el mundo quería que callaran."],
        ["m", "Conocimos a unos enamorados que siguieron a su corazón cuando el mundo les decía a dónde debían ir."],
        ["c", "Conocimos a una comunidad que bailó cuando el mundo quiso borrar su historia."],
        ["m", "Y conocimos a un pueblo que soñó con la justicia cuando el mundo les demostraba todos los días que era imposible."],
        ["c", "¿Saben qué tienen en común todas esas historias?"],
        ["m", "Que ninguna de ellas encajaba."],
        ["c", "Y sin embargo, todos ellos construyeron algo extraordinario. Porque La Ciudad Coral no es un lugar para los que encajan. Es un lugar para los que se atreven a existir exactamente como son, y a hacerle espacio al diferente de al lado."],
        ["m", "Hoy, estos estudiantes que subieron a este escenario no solo nos presentaron musicales famosos."],
        ["c", "Nos recordaron algo que a veces olvidamos: que la diferencia no es un problema que hay que resolver."],
        ["m", "Es la condición más humana que existe."],
        ["m", "Como Alcalde Provisional de Territorios No Reconocidos... y como alguien que tardó demasiados años en llegar a esta ciudad... declaro que La Ciudad Coral es real. Y que cualquiera que haya llegado hasta aquí hoy es, a partir de este momento, residente permanente."],
        ["c", "La Ciudad Coral cierra sus puertas hoy. Pero lo que aprendimos aquí, lo llevamos con nosotros."],
        ["m", "Para siempre."],
        ["c", "Gracias por viajar con nosotros."],
        ["m", "Y gracias por dejarme quedarme."],
      ],
    },
  ],
  en: [
    {
      id: "1",
      title: "Prologue · The Mayor arrives",
      time: "8:10 a.m.",
      color: "#c0392b",
      lines: [
        ["m", "One moment! One moment, please!"],
        ["m", "Sorry for the interruption. I am the Provisional Mayor of Unrecognized Territories. I was summoned here because I understand someone is about to open a city. A city with no official registry. No forms. No permit."],
        ["c", "No forms is correct."],
        ["m", "No forms? That is chaos, young man. Cities need order. Classifications. Rules that define what is acceptable and what is not. Do you know where you are?"],
        ["c", "You are at the entrance of The Coral City."],
        ["m", "The Coral City... The Coral City... It does not exist in any official registry."],
        ["c", "I know. That is why I am showing it."],
        ["m", "This boy thinks he can simply... invent a city."],
        ["c", "Nobody invents a city, Mayor. Cities are built by the people who do not fit anywhere else."],
        ["m", "Very well. I will stay. I will see how special this city of yours really is. But I warn you: if you do not convince me... I will shut it down."],
        ["c", "I am The Cartographer."],
        ["c", "My job is to draw maps of places that do not appear on any GPS. Places that only exist when people dare to be exactly who they are."],
        ["c", "Today I bring you the map of one of those places."],
        ["m", "No forms. Incredible."],
        ["c", "The Coral City has two secrets. The first: like a coral reef at the bottom of the sea, it is made of thousands of beings completely different from one another. None is the same as the other. And yet, together they form something of impossible beauty."],
        ["c", "The second: like a choir, this city has many voices. Each one sounds different. And that is exactly why together they can create something no single voice ever could."],
        ["c", "In The Coral City, being different is not tolerated. It is needed."],
        ["m", "That... that is a very bold claim."],
        ["c", "This city has five neighborhoods. Each one has its own story. Its own music. Its own characters the world tried to silence, who chose to sing anyway. Today we will visit all of them. And by the end of this journey, something in us will have changed."],
        ["m", "I will be taking notes."],
        ["b", "Welcome to The Coral City."],
      ],
    },
    {
      id: "2",
      title: "Neighborhood 1 · The Mansion of the Echo",
      time: "8:20 a.m.",
      color: "#7c3aed",
      lines: [
        ["m", "Please tell me the first neighborhood is not going to be too... eccentric."],
        ["c", "Our first neighborhood does not appear on the maps of normal cities. It is hidden at the end of a nameless street, behind an iron gate, among trees that grow inward instead of upward."],
        ["c", "It is called The Mansion of the Echo. And living here is a family the world has always called weird."],
        ["m", "In my records, people considered weird should generally try harder to be... to be normal."],
        ["c", "And what would normal be, Mayor?"],
        ["m", "Well... you know. Normal is... normal."],
        ["c", "No map in the world contains a definition of normal."],
        ["c", "What we do know is that being weird is the first step toward being free. Someone who knows this neighborhood very well is going to tell us more about its story."],
        ["m", "A family that considers it perfectly normal to live like that. Curious."],
      ],
    },
    {
      id: "3",
      title: "Intermission 1 · The Mayor resists",
      time: "8:40 a.m.",
      color: "#c0392b",
      lines: [
        ["m", "A family that lives in a dark mansion and considers that perfectly normal. That is not right."],
        ["c", "What is not right?"],
        ["m", "Being like that! So... so different!"],
        ["c", "Different from what?"],
        ["m", "From... from everyone."],
        ["c", "Mayor. Have you ever in your life felt that you did not fit in somewhere?"],
        ["m", "That is completely irrelevant to this inspection."],
        ["c", "In The Coral City, the question is not why you are different. The question is why the world is so afraid of what it does not understand."],
        ["m", "Perhaps... I need more evidence before drawing any conclusions."],
        ["c", "Has anyone here ever fought for something they believed was fair?"],
        ["c", "Then you are going to love the next neighborhood. It is called The Headline Alley. And here, fighting for what is right is not an option. It is a song."],
        ["m", "Neighborhood one: families with unconventional personalities. Note: it is not possible to conclude with certainty what normal is."],
        ["m", "That does not mean you are right."],
        ["c", "Of course not."],
      ],
    },
    {
      id: "4",
      title: "Neighborhood 2 · The Headline Alley",
      time: "8:55 a.m.",
      color: "#0ea5e9",
      lines: [
        ["m", "Newspaper boys going on strike. In my records, that is classified as... disruption of order."],
        ["c", "In my maps, it is classified as justice."],
        ["c", "The Headline Alley smells like fresh ink and wet asphalt. Here, the news is not printed. It is shouted."],
        ["c", "This neighborhood is home to the ones nobody expected to speak. The ones who were supposed to obey. The ones who were too young, too poor, too small for anyone to listen."],
        ["m", "Too small. Yes. I know that."],
        ["c", "And one day they decided that if the world would not hear them in a quiet voice, they would make it listen with a roar."],
        ["c", "Welcome to the second neighborhood of The Coral City."],
        ["m", "With a roar. Yes."],
      ],
    },
    {
      id: "5",
      title: "Grand Intermission · The city goes outside",
      time: "9:20 a.m.",
      color: "#a855f7",
      lines: [
        ["c", "We have visited two neighborhoods of The Coral City. We have met the wonderfully weird and the brave."],
        ["m", "Cartographer. May I ask you a question?"],
        ["c", "You have three minutes. We are on break."],
        ["m", "Why does this place matter so much to you?"],
        ["c", "Because in all my life as a cartographer, no other place in the world has told people they can arrive exactly as they are."],
        ["c", "The Coral City is not my city, Mayor. It is the city of everyone who ever felt they had no city at all."],
        ["m", "And outside there is life in this city too."],
        ["c", "Always. The City does not end in here. We invite you to go out and explore it."],
        ["m", "At ten oh five..."],
        ["c", "...these doors open again."],
        ["b", "Because there are still three neighborhoods to go. And the best ones are yet to come."],
      ],
    },
    {
      id: "6",
      title: "Neighborhood 3 · Rydell Avenue",
      time: "10:05 a.m.",
      color: "#ec4899",
      lines: [
        ["c", "Welcome back to The Coral City."],
        ["m", "Rydell Avenue. The nineteen-fifties. I was a teenager once..."],
        ["m", "I mean... the historical context is interesting."],
        ["c", "Our third neighborhood does not have inward-growing trees or alleys that smell like ink. It has an avenue with rock and roll, colorful cars, and young people discovering that the heart also has its own way of being different."],
        ["c", "Rydell Avenue is the neighborhood where nobody quite fits what they are supposed to be. And instead of separating them, that brings them together."],
        ["m", "Nobody quite fits. No. Nobody quite fits."],
        ["c", "Welcome to the third neighborhood of The Coral City."],
      ],
    },
    {
      id: "7",
      title: "The Mayor's confession · The Heights of the Barrio",
      time: "10:20 a.m.",
      color: "#8b0000",
      lines: [
        ["c", "On Rydell Avenue we learned that even when the whole world expects you to be one way, you can choose to be another. That love, friendship, and who you truly are do not fit into any mold."],
        ["m", "I did not fit in either."],
        ["m", "When I was young. I did not fit in with any group. I was too serious for the carefree ones and too anxious for the serious ones. So one day I decided I would be the one who made the rules."],
        ["m", "I thought that if I made the rules... I would finally belong to something."],
        ["c", "And did you belong?"],
        ["m", "No. I only learned to hide that I did not belong."],
        ["c", "Mayor. That is exactly what the next neighborhood is about."],
        ["m", "Then let us present it."],
        ["c", "Now we travel to a neighborhood that knows something the others are only beginning to learn. This neighborhood knows that being different is not only rebellion. It is inheritance. It is everything your grandparents gave you, your language, your food, your music. It is where you come from."],
        ["c", "And when someone tries to make you forget where you come from... that neighborhood does not cry. That neighborhood starts dancing."],
        ["m", "I wish I had arrived in this neighborhood much earlier."],
        ["c", "The fourth neighborhood of The Coral City is called The Heights of the Barrio. And the person who can tell us best is about to take the stage."],
      ],
    },
    {
      id: "8",
      title: "Neighborhood 5 · The Barricades of Hope",
      time: "11:05 a.m.",
      color: "#ef4444",
      lines: [
        ["m", "Cartographer."],
        ["c", "Mayor?"],
        ["m", "I came here to close this city."],
        ["c", "I know."],
        ["m", "I cannot do it."],
        ["c", "I know."],
        ["m", "Did you know from the beginning?"],
        ["c", "Nobody visits The Coral City and leaves the same. Are you ready for the last neighborhood?"],
        ["m", "The last neighborhood of those the world tried to silence. Do you know what all these stories have in common? The people who live them learned to sing when the world wanted silence."],
        ["c", "It is called The Barricades of Hope. And here lives the hardest hope of all: that the world can be more just."],
        ["c", "The fifth neighborhood reminds us that the deepest difference is not clothing, language, or last name. It is the difference between those who have everything and those who have nothing. And even from that place, art found a way to sing."],
      ],
    },
    {
      id: "9",
      title: "Epilogue · The recognition is signed",
      time: "11:30 a.m.",
      color: "#c0392b",
      lines: [
        ["c", "We have reached the end of the map."],
        ["m", "A map that appears in no official registry. And one that is more real than any city I have inspected."],
        ["c", "Five neighborhoods. Five stories. Five completely different ways of existing in the world."],
        ["m", "We met a family that celebrated its weirdness when the world wanted it hidden."],
        ["c", "We met young workers who shouted when the world wanted them silent."],
        ["m", "We met lovers who followed their hearts when the world told them where to go."],
        ["c", "We met a community that danced when the world tried to erase its history."],
        ["m", "And we met a people who dreamed of justice when the world showed them every day that it was impossible."],
        ["c", "Do you know what all those stories have in common?"],
        ["m", "None of them fit in."],
        ["c", "And yet, all of them built something extraordinary. Because The Coral City is not a place for those who fit in. It is a place for those who dare to exist exactly as they are, and to make room for the different person beside them."],
        ["m", "Today, these students who came onto this stage did not only present famous musicals."],
        ["c", "They reminded us of something we sometimes forget: difference is not a problem to be solved."],
        ["m", "It is the most human condition there is."],
        ["m", "As Provisional Mayor of Unrecognized Territories... and as someone who took too many years to arrive in this city... I declare that The Coral City is real. And anyone who has made it here today is, from this moment on, a permanent resident."],
        ["c", "The Coral City closes its doors today. But what we learned here, we carry with us."],
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
        <div class="quick-card"><strong>8-12</strong><span>${escapeHtml(ui[state.lang].labels.hours)}</span></div>
        <div class="quick-card"><strong>5</strong><span>${escapeHtml(ui[state.lang].labels.neighborhoods)}</span></div>
        <div class="quick-card"><strong>9</strong><span>${escapeHtml(ui[state.lang].labels.appearances)}</span></div>
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

      return `
        <article class="schedule-item">
          <div class="schedule-item__time" style="background:${item.color}">${escapeHtml(item.time)}</div>
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
  const cards = challenges[state.lang]
    .map(
      (item, index) => `
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
      `,
    )
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
        state.openScenes = new Set(diary[state.lang].map((scene) => scene.id));
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
