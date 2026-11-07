"use client";

import { Button } from "./components/button";
import { useState, useContext } from "react";
import { QuoteText } from "./components/typography/quote";
import { AuthorName } from "./components/typography/author";
import { Card } from "./components/card";
import { LikeIcon, NextIcon, PrevIcon} from "./components/icons";
import { QuotesContext, userId } from "./context/quotesContextProvider";
import Link from "next/link";

export default function Home() {
  const { quotes, handleLike } = useContext(QuotesContext);

  const [index, setIndex] = useState(0);

  const currentQuote = quotes[index];
  const isLiked = currentQuote.likedBy.includes(userId);

  function handleclick() {
    setIndex((prevIndex) =>
      prevIndex < quotes.length - 1 ? prevIndex + 1 : 0,
    );
  }

  function previousButton() {
    setIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : quotes.length - 1,
    );
  }

  return (
    <main>
      <div className="flex justify-center mt-10 mb-8">
        <Link
          href="/user/quotes/liked"
          className="bg-zinc-600 text-white p-6 py-3 rounded-lg text-sm"
        >
          Liked Quotes
        </Link>
      </div>
      <Card>
        <QuoteText className="text-zinc-800" liked={isLiked}>
          {currentQuote.quote}
        </QuoteText>

        <AuthorName className="text-zinc-500">{currentQuote.author}</AuthorName>

        <div className="flex">
          <Button handleClick={() => handleLike(currentQuote.id)}>
            <LikeIcon liked={isLiked} />
          </Button>

          <div className="flex justify-end ml-auto gap-10">
            <Button handleClick={previousButton}>
              <PrevIcon />
            </Button>

            <Button handleClick={handleclick}>
              <NextIcon />
            </Button>
          </div>
        </div>
      </Card>
    </main>
  );
}
