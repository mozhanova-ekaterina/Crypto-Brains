import { useGetCoins } from "@/features/coins/hooks/useGetCoins";
import { Hero } from "./Hero/Hero";
import { Market } from "./Market/Market";
import { MarketTrends } from "./MarketTrends/MarketTrends";
import { SimpleSteps } from "./SimpleSteps/SimpleSteps";
import { WhyChoose } from "./WhyChoose/WhyChoose";
import { Testimonials } from "./Testimonials/Testimonials";
import { AppDownload } from "./AppDownload/AppDownload";

export const Home = () => {
  const { coins } = useGetCoins("all", 7);

  if (!coins) return null;
  return (
    <main className="grid gap-[120px]">
      <Hero />
      <Market coins={coins} />
      <MarketTrends />
      <SimpleSteps />
      <WhyChoose />
      <Testimonials/>
      <AppDownload/>
    </main>
  );
};
