// CardIndex.tsx
"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import { CardType, HistoryType, ResultType, SwipeType } from "../types/index";
import CARDS from "../data/cards";
import Card from "../components/Card";
import Head from "next/head";

const CardIndex: NextPage = () => {
  const [cards, setCards] = useState(CARDS);
  const [result, setResult] = useState<ResultType>({
    like: 0,
    nope: 0,
    superlike: 0,
  });
  const [history, setHistory] = useState<HistoryType[]>([]);
  const activeIndex = cards.length - 1;

  // Function to reset cards when stack is empty
  const resetCards = () => {
    setCards(CARDS);
  };

  const removeCard = (oldCard: CardType, swipe: SwipeType) => {
    setHistory((current) => [...current, { ...oldCard, swipe }]);
    setCards((current) => {
      const newCards = current.filter((card) => card.id !== oldCard.id);
      // If this was the last card, reset the deck after a short delay
      if (newCards.length === 0) {
        setTimeout(resetCards, 500); // Add delay for smooth transition
      }
      return newCards;
    });
    setResult((current) => ({ ...current, [swipe]: current[swipe] + 1 }));
  };

  const undoSwipe = () => {
    const newCard = history.pop();
    if (newCard) {
      const { swipe } = newCard;
      setHistory((current) =>
        current.filter((card) => card.id !== newCard.id)
      );
      setResult((current) => ({ 
        ...current, 
        [swipe as keyof ResultType]: current[swipe as keyof ResultType] - 1 
      }));
      setCards((current) => [...current, newCard]);
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full gradient">
      <AnimatePresence>
        {cards.map((card, index) => (
          <Card
            key={`${card.id}-${Math.random()}`}
            active={index === activeIndex}
            removeCard={removeCard}
            card={card}
          />
        ))}
      </AnimatePresence>
     
    </div>
  );
};

export default CardIndex;