"use client";
import { createContext, useState } from "react";
import { quotes as initialQuotes } from "@/quotes";

const updatedQuotes = initialQuotes.map((q, index) => ({
  ...q,
  likedBy: [],
  id: index,
}));

export const userId = "user-1234";

export const QuotesContext = createContext({
  quotes: [],
  handleLike: () => {},
});

export function QuotesContextProvider({ children }) {
  const [quotes, setQuotes] = useState(updatedQuotes);

  function handleLike(quoteId) {
    setQuotes((prevQuotes) =>
      prevQuotes.map((quote) => {
        if (quote.id !== quoteId) return quote;

        const isLiked = quote.likedBy.includes(userId);

        return {
          ...quote,
          likedBy: isLiked
            ? quote.likedBy.filter((id) => id !== userId)
            : [...quote.likedBy, userId],
        };
      }),
    );
  }
  return (
    <QuotesContext
      value={{
        quotes,
        handleLike,
      }}
    >
      {children}
    </QuotesContext>
  );
}
