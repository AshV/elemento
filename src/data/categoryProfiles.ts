export interface CategoryProfile {
  slug: string;
  name: string;
  summary: string;
  essay: string;
  themes: string[];
}

export const categoryProfiles: Record<string, CategoryProfile> = {
  'sabiduria-filosofia': {
    slug: 'sabiduria-filosofia',
    name: 'Sabiduría y Filosofía',
    summary: 'La búsqueda de la verdad fundamental, el autoconocimiento y la serenidad del alma.',
    essay: 'La filosofía no es un mero ejercicio dialéctico ni una especulación abstracta; es el arte supremo de examinar la vida. Desde los filósofos grecorromanos como Séneca y Marco Aurelio hasta los grandes pensadores hispanos e universales, la verdadera sabiduría consiste en distinguir lo que está bajo nuestro control de lo que no, liberando la mente de la turbación y cultivando una comprensión lúcida y compasiva de la condición humana.',
    themes: ['Filosofía estoica', 'Autoconocimiento', 'Verdad universal', 'Serenidad interior', 'Reflexión vital'],
  },
  'coraje-accion': {
    slug: 'coraje-accion',
    name: 'Coraje y Determinación',
    summary: 'La fuerza interior para enfrentar la adversidad, superar el miedo y actuar con rectitud.',
    essay: 'El valor auténtico no consiste en carecer de temores, sino en decidir con firmeza que hay principios y propósitos superiores al miedo mismo. El coraje moral y existencial nos empuja a levantarnos tras cada caída, a defender la dignidad propia y ajena frente a la adversidad, y a convertir los obstáculos del camino en el propio sendero de crecimiento.',
    themes: ['Valentía', 'Fuerza de voluntad', 'Resiliencia', 'Acción consciente', 'Perseverancia'],
  },
  'paz-interior': {
    slug: 'paz-interior',
    name: 'Paz Interior y Serenidad',
    summary: 'El sosiego de la mente, la quietud en el momento presente y el descanso del ruido mundano.',
    essay: 'La paz duradera nunca se encuentra en la ausencia de tormentas externas, sino en la calma inquebrantable del centro de nuestro ser. Cuando aprendemos a soltar el peso del pasado y la angustia por el porvenir, el instante presente se abre como un santuario de lucidez, gratitud y plenitud silenciosa.',
    themes: ['Atención plena', 'Calma mental', 'Desapego', 'Silencio interior', 'Aceptación'],
  },
  'amor-compasion': {
    slug: 'amor-compasion',
    name: 'Amor y Compasión',
    summary: 'La empatía universal, la entrega desinteresada y la conexión profunda con todos los seres.',
    essay: 'El amor genuino disuelve las barreras del egoísmo y nos hermana con la totalidad de la vida. En la compasión activa descubrimos que la alegría ajena multiplica la nuestra y que aliviar el sufrimiento de un semejante es la expresión más elevada y noble de la inteligencia humana.',
    themes: ['Amor fraternal', 'Empatía', 'Bondad', 'Humanidad', 'Solidaridad'],
  },
  'tiempo-vida': {
    slug: 'tiempo-vida',
    name: 'El Tiempo y la Vida',
    summary: 'La fugacidad de los días, el arte de vivir plenamente y el valor imperecedero de cada instante.',
    essay: 'Como bien señaló Séneca, no tenemos poco tiempo, sino que perdemos mucho. La conciencia de nuestra finitud no debe ser motivo de pesadumbre, sino el estímulo más luminoso para no malgastar las horas en banalidades y consagrarlas a lo que verdaderamente trasciende y nos dignifica.',
    themes: ['Apreciar el tiempo', 'Finitud humana', 'Propósito', 'Vivir conscientemente', 'Memoria'],
  },
  'etica-virtud': {
    slug: 'etica-virtud',
    name: 'Ética y Virtud',
    summary: 'La integridad moral, la rectitud del carácter y la búsqueda del bien común.',
    essay: 'El carácter de una persona es su verdadero destino. La rectitud de intención, la justicia en el trato cotidiano y la coherencia entre lo que se piensa, se dice y se hace constituyen el cimiento infranqueable de una vida digna de ser recordada.',
    themes: ['Justicia', 'Integridad', 'Honestidad', 'Nobleza de espíritu', 'Virtud cívica'],
  },
  'conocimiento-lectura': {
    slug: 'conocimiento-lectura',
    name: 'Conocimiento y Aprendizaje',
    summary: 'El poder transformador de los libros, la curiosidad insaciable y la humildad del sabio.',
    essay: 'Quien lee y reflexiona dialoga con las mentes más preclaras de todos los siglos. El conocimiento verdadero no engendra vanidad, sino asombro constante y una profunda humildad ante los infinitos misterios que aún nos restan por descubrir.',
    themes: ['Amor por los libros', 'Curiosidad', 'Humildad intelectual', 'Experiencia viva', 'Sabiduría práctica'],
  },
};

export function getCategoryProfile(slug: string, fallbackName?: string): CategoryProfile {
  if (categoryProfiles[slug]) {
    return categoryProfiles[slug];
  }
  const cleanName = fallbackName || slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    slug,
    name: cleanName,
    summary: `Reflexiones filosóficas seleccionadas sobre ${cleanName}.`,
    essay: `Explora el significado, los principios fundamentales y la sabiduría atemporal reunida en torno a ${cleanName}.`,
    themes: [cleanName, 'Sabiduría', 'Filosofía'],
  };
}
