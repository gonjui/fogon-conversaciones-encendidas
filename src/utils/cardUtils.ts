
import { cards } from "@/data/cards";

export const getRandomCard = (): string => {
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex].text;
};

export const getCardsByCategory = (category: string) => {
  return cards.filter(card => card.category === category);
};
