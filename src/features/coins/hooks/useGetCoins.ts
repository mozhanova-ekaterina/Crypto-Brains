import { useEffect, useState } from "react";
import type { Coin, Filter } from "../types";

export const useGetCoins = (filter: Filter = "all", limit: number = 20) => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = "";

    switch (filter) {
      case "all":
        url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1`;
        break;
      case "defi":
        url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=decentralized-finance-defi&per_page=${limit}&page=1`;
        break;
      case "metaverse":
        url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=metaverse&per_page=${limit}&page=1`;
        break;
      case "gainers":
      case "losers":
        url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1`;
        break;
    }

    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (filter === "gainers") {
          data.sort(
            (a: Coin, b: Coin) =>
              b.price_change_percentage_24h - a.price_change_percentage_24h
          );
        }
        if (filter === "losers") {
          data.sort(
            (a: Coin, b: Coin) =>
              a.price_change_percentage_24h - b.price_change_percentage_24h
          );
        }

        setCoins(data.slice(0, limit));
      })
      .finally(() => setLoading(false));
  }, [filter, limit]);

  return { coins, loading };
};
