export type Coin = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  price_change_percentage_24h: number;
  current_price: number;
};

export type Filter = "all" | "gainers" | "losers" | "defi" | "metaverse";