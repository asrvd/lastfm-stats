"use server";

import { LASTFM_TOP_ARTISTS_RESPONSE } from "./types";

const lastfmBaseURL = "https://ws.audioscrobbler.com/2.0/";

export async function getTopArtists(
  formData: FormData
): Promise<LASTFM_TOP_ARTISTS_RESPONSE> {
  const username = formData.get("username") as string;
  const response = await fetch(
    `${lastfmBaseURL}?method=user.gettopartists&user=${username}&api_key=${process.env.LASTFM_API_KEY}&format=json`
  );
  const data = await response.json();
  return data;
}
