import type { Coin } from "../types";
import styles from "./Coin.module.scss";
import { Percentage } from "./Percentage";
import chartDanger from "@images/ChartDanger.svg";
import chart from "@images/Chart.svg";

export const CoinCard = ({ coin }: { coin: Coin }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={coin.image} alt={coin.name} />
      <div className={styles.name}>
        <div>{coin.name}</div>
        <Percentage coin={coin} />
      </div>
      <div className={styles.price}>$ {coin.current_price}</div>
      <Chart danger={coin.price_change_percentage_24h < 0} />
    </div>
  );
};

const Mini = ({ coin }: { coin: Coin }) => {
  return (
    <div>
      <div className="flex gap-5">
        <div>{coin.symbol.toUpperCase()} / USD</div>
        <Percentage style={{ fontSize: "14px" }} coin={coin} />
      </div>
      <div className={`${styles.price} ${styles.mini}`}>
        $ {coin.current_price}
      </div>
    </div>
  );
};
CoinCard.Mini = Mini;

function Chart({ danger = false }: { danger?: boolean }) {
  return <img src={danger ? chartDanger : chart} alt="chart-image" />;
}
