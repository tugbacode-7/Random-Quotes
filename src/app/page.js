"use client";
import { Button } from "./components/button";
import { quotes as initialQuotes } from "@/quotes";
import { useState } from "react";
import { QuoteText } from "./components/typography/quote";
import { AuthorName } from "./components/typography/author";
import { Card } from "./components/card";
import { userAgent } from "next/server";
import { LikeIcon, NextIcon, PrevIcon } from "./components/icons";

export default function Home() {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [index, setIndex] = useState(0);
  const userId = "User_1";

  const currentQuote = quotes[index];
  const isLiked = currentQuote.likedBy.includes(userId);

  function handleclick() {
    setIndex((prevIndex) => (prevIndex += 1));
    console.log("Button is clicked");
  }

  function likeBtn() {
    setQuotes((prevQuotes) =>
      prevQuotes.map((quote, quoteIndex) => {
        if (quoteIndex !== index) return quote;
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

  function previousButton() {
    setIndex((preIndex) => {
      if (preIndex == 0) {
        return preIndex;
      } else {
        return (preIndex -= 1);
      }
    });
  }

  return (
    <main>
      <Card>
        <QuoteText className={"text-zinc-800"} liked={isLiked}>
          {quotes[index].quote}
        </QuoteText>

        <AuthorName className={"text-zinc-500"}>
          {quotes[index].author}
        </AuthorName>

        <div className="flex">
          <Button handleClick={likeBtn}>
            <LikeIcon liked={isLiked}></LikeIcon>
          </Button>

          <div className="flex justify-end ml-auto gap-10">
            <Button handleClick={previousButton}>
              <PrevIcon></PrevIcon>
            </Button>

            <Button handleClick={handleclick}>
              <NextIcon></NextIcon>
            </Button>
          </div>
        </div>
      </Card>
    </main>
  );
}
