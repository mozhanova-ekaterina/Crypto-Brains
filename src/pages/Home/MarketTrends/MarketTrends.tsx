import styles from "./MarketTrends.module.scss";
import type { Filter } from "@/features/coins/types";
import { CoinCard } from "@/features/coins/ui/CoinCard";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import { SectionDivider } from "@/shared/ui/Dividers/SectionDivider";
import { Filters } from "./Filters";
import { useState } from "react";
import { useGetCoins } from "@/features/coins/hooks/useGetCoins";
import { Button } from "@/shared/ui/Button/Button";

export const MarketTrends = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const { coins } = useGetCoins(filter, 6);

  return (
    <section className={styles.inner + " container"}>
      <div className={styles.header}>
        <SectionTitle>Market Trends</SectionTitle>
        <Filters current={filter} handleFilters={(value) => setFilter(value)} />
      </div>
      <SectionDivider />
      <div className="flex gap-[30px]">
        {coins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
      <div className="mx-auto">
        <Button className="w-[240px]" variant="primary">
          See All Market
        </Button>
      </div>
    </section>
  );
};
