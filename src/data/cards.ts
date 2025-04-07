
export interface Card {
  id: number;
  text: string;
  category: "personal" | "philosophical" | "emotional" | "future" | "past" | "relationships";
}

export const cards: Card[] = [
  {
    id: 1,
    text: "¿Cuál ha sido el momento más reconfortante de tu vida?",
    category: "personal"
  },
  {
    id: 2,
    text: "¿Qué es lo que más te asusta perder?",
    category: "emotional"
  },
  {
    id: 3,
    text: "¿Existe alguna creencia que hayas cambiado radicalmente a lo largo de tu vida?",
    category: "philosophical"
  },
  {
    id: 4,
    text: "Si pudieras viajar a cualquier momento de tu pasado sin poder alterarlo, ¿qué momento revivirías?",
    category: "past"
  },
  {
    id: 5,
    text: "¿Qué mensaje te gustaría que recordara la humanidad dentro de 500 años?",
    category: "philosophical"
  },
  {
    id: 6,
    text: "¿A quién admiras profundamente y por qué?",
    category: "personal"
  },
  {
    id: 7,
    text: "¿Qué consejo te darías a ti mismo hace 10 años?",
    category: "past"
  },
  {
    id: 8,
    text: "¿Cuál ha sido la lección más valiosa que has aprendido de un fracaso?",
    category: "personal"
  },
  {
    id: 9,
    text: "¿Cuál es ese sueño que nunca te has atrevido a perseguir?",
    category: "future"
  },
  {
    id: 10,
    text: "Si pudieras resolver un solo problema mundial, ¿cuál elegirías?",
    category: "philosophical"
  },
  {
    id: 11,
    text: "¿Qué hábito o comportamiento te gustaría cambiar en ti mismo?",
    category: "personal"
  },
  {
    id: 12,
    text: "¿Cuál es tu definición personal de la felicidad?",
    category: "philosophical"
  },
  {
    id: 13,
    text: "¿Qué te hace sentir verdaderamente vivo?",
    category: "emotional"
  },
  {
    id: 14,
    text: "¿Has perdonado alguna vez algo que pensabas que nunca perdonarías?",
    category: "emotional"
  },
  {
    id: 15,
    text: "¿Cuál es la conversación más significativa que has tenido con alguien?",
    category: "relationships"
  },
  {
    id: 16,
    text: "¿Qué momento te hizo cuestionar todo lo que creías saber?",
    category: "philosophical"
  },
  {
    id: 17,
    text: "¿Cómo te gustaría ser recordado?",
    category: "future"
  },
  {
    id: 18,
    text: "¿Qué pregunta te gustaría que alguien te hiciera?",
    category: "personal"
  },
  {
    id: 19,
    text: "¿Hay algo que hayas dado por sentado y ahora valoras profundamente?",
    category: "emotional"
  },
  {
    id: 20,
    text: "¿Qué relación en tu vida ha tenido el mayor impacto en quien eres hoy?",
    category: "relationships"
  }
];
