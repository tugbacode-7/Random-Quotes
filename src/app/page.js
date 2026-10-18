"use client";

import { quotes as initialQuotes } from "@/quotes";
import { useState } from "react";
import { QuoteText } from "./components/typography/quote";
import { AuthorName } from "./components/typography/author";
import { LikeButton } from "./components/button/likedButton";
import { NextButton } from "./components/button/nextButton";
import { Card } from "./components/card";
import { userAgent } from "next/server";
import { PreviousBtn } from "./components/button/previousButton";
import { LikeIcon, NextIcon, PrevIcon } from "./components/icons";

export default function Home() {
  const quotes = [...initialQuotes];
  const [index, setIndex] = useState(0);
  const userId = "User 1";
  
  
  const currentQuote = quotes[index];
  const isLiked = currentQuote.likedBy.includes(userId);

  function handleclick() {
    setIndex((prevIndex) => (prevIndex += 1));
    console.log("Button is clicked");
  }

  function likeBtn() {
    if (!quotes[index].likedBy.includes(user)) {
      quotes[index].likedBy.push(user);
      setLiked((isLiked) => !isLiked);
      console.log(quotes[index].likedBy);
    } else {
      let like = quotes[index].likedBy.indexOf(user);
      quotes[index].likedBy.splice(like, 1);
      setLiked((isLiked) => !isLiked);
      console.log(quotes[index].likedBy);
    }
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
          <LikeButton handleClick={likeBtn}>
            <LikeIcon liked={isLiked}></LikeIcon>
          </LikeButton>

          <div className="flex justify-end ml-auto gap-10">
            <PreviousBtn handleClick={previousButton}>
              <PrevIcon></PrevIcon>
            </PreviousBtn>

            <NextButton handleClick={handleclick}>
              <NextIcon></NextIcon>
            </NextButton>
          </div>
        </div>
      </Card>
    </main>
  );
}
