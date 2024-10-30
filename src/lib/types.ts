export type LASTFM_ARTIST = {
  streamable: string;
  image: {
    size: string;
    "#text": string;
  }[];
  mbid: string;
  url: string;
  playcount: string;
  "@attr": {
    rank: string;
  };
  name: string;
};

export type LASTFM_TOP_ARTISTS_RESPONSE = {
  topartists: {
    artist: LASTFM_ARTIST[];
  };
};
