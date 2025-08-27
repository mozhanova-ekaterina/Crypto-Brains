import { Divider } from "@/shared/ui/Dividers/Divider";
import type { Coin } from "@/features/coins/types";
import { CoinCard } from "@/features/coins/ui/CoinCard";

export const Market = ({ coins }: { coins: Coin[] }) => {
  return (
    <section className="flex gap-5 container">
      {coins.map((coin) => (
        <div className="flex gap-5">
          <CoinCard.Mini coin={coin} key={coin.id} />
          <Divider />
        </div>
      ))}
    </section>
  );
};
