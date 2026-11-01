"use client";
import { useContext } from "react";
import { Button } from "../../../components/button";
import { QuoteText } from "../../../components/typography/quote";
import { AuthorName } from "../../../components/typography/author";
import { UnlikeIcon } from "@/app/components/icons";

import { QuotesContext, userId } from "../../../context/quotesContextProvider";

export default function LikedQuotes() {
  const { quotes, handleLike } = useContext(QuotesContext);

  const likedQuotes = quotes.filter((quote) => quote.likedBy.includes(userId));
  return (
    <main className="flex flex-col items-center m-auto ">
      <h1 className="text-2xl font-bold text-zinc-800">Liked Quotes</h1>
      <section>
        {likedQuotes.length === 0 && <p className="text-zinc-800">You haven't liked any Quotes yet.</p>}
        {likedQuotes.map((quotes) => (
          <div
            key={quotes.id}
            className="border-md bg-olive-300 shadow-2xl max-w-150 m-auto mt-15 rounded-2xl text-m px-10 py-15 flex flex-col place-content-between h-60"
          >
            <div>
              <QuoteText>{quotes.quote}</QuoteText>
              <AuthorName>{quotes.author}</AuthorName>
            </div>
            <div>
              <Button handleClick={() => handleLike(quotes.id)}>
                <UnlikeIcon/>
              </Button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
