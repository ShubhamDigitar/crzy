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
      if (newCards.length === 0) {
        setTimeout(resetCards, 500); // Add delay for smooth transition
      }
      return newCards;
    });
    setResult((current) => ({ ...current, [swipe]: current[swipe] + 1 }));
  };

  // Auto-swipe logic
  useEffect(() => {
    const autoSwipeInterval = setInterval(() => {
      if (cards.length > 0) {
        const swipeDirection: SwipeType = Math.random() > 0.5 ? "like" : "nope"; // Random swipe: left ("nope") or right ("like")
        const cardToSwipe = cards[0]; // Always swipe the top card
        removeCard(cardToSwipe, swipeDirection);
      }
    }, 3000); // Auto-swipe every 3 seconds

    return () => clearInterval(autoSwipeInterval); // Clean up on unmount
  }, [cards]);

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
    <div className="relative flex flex-col justify-center items-center w-full h-[12rem] md:h-[18rem] lg:h-[18rem] xl:h-[22rem] gradient">
    <AnimatePresence>
      {cards.map((card, index) => (
        <Card
          key={`${card.id}-${index}`} // Using index with id for more stable keys
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
