/* eslint-disable @next/next/no-img-element */
"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { getTopArtists } from "@/lib/actions";
import { useState } from "react";
import { LASTFM_ARTIST } from "@/lib/types";

export default function Home() {
  const [data, setData] = useState<LASTFM_ARTIST[]>([]);

  const formAction = async (formData: FormData) => {
    const data = await getTopArtists(formData);
    setData(data.topartists.artist);
  };
  
  return (
    <div className="bg-background min-w-screen min-h-screen flex flex-col gap-4 justify-start items-center p-4">
      <form
        action={formAction}
        className="flex flex-col gap-2 w-full lg:w-1/2 p-4 rounded-lg shadow-lg border border-zinc-200"
      >
        <div>
          <Label htmlFor="username">Username</Label>
          <Input name="username" placeholder="Enter username" />
        </div>
        <Button type="submit" className="max-w-max">
          Submit
        </Button>
      </form>
      {data.length > 0 && (
        <div className="flex flex-col gap-2 w-full lg:w-1/2 p-4 rounded-lg shadow-lg border border-zinc-200">
          <h2 className="text-2xl font-semibold">Top Artists</h2>
          {data.map((artist, index) => (
            <div
              key={index}
              className="flex gap-2 p-4 rounded-lg shadow-lg border border-zinc-200 w-full"
            >
              <img src={artist.image[1]["#text"]} alt={artist.name} />
              <div className="flex flex-col gap-2">
                <a
                  href={artist.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-bold"
                >
                  {artist.name}
                </a>
                <p>Playcount: {artist.playcount}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
