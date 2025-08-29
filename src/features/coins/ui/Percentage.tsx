import clsx from "clsx";
import styles from "./Coin.module.scss";
import type { Coin } from "../types";

export const Percentage = ({
  coin,
  style,
}: {
  coin: Coin;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      style={style}
      className={clsx(
        styles.percentage,
        coin.price_change_percentage_24h > 0 ? styles.green : styles.red
      )}
    >
      <Arrow up={coin.price_change_percentage_24h > 0} />
      {coin.price_change_percentage_24h.toFixed(2)}%
    </div>
  );
};

const Arrow = ({ up }: { up: boolean }) => {
  return up ? (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.7102 3.53975C16.9299 3.75942 16.9299 4.11558 16.7102 4.33525L9.96025 11.0852C9.74058 11.3049 9.38442 11.3049 9.16475 11.0852L6.75 8.6705L2.08525 13.3352C1.86558 13.5549 1.50942 13.5549 1.28975 13.3352C1.07008 13.1156 1.07008 12.7594 1.28975 12.5398L6.35225 7.47725C6.57192 7.25758 6.92808 7.25758 7.14775 7.47725L9.5625 9.892L15.9148 3.53975C16.1344 3.32008 16.4906 3.32008 16.7102 3.53975Z"
        fill="#06B470"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.25 3.9375C11.25 3.62684 11.5018 3.375 11.8125 3.375H16.3125C16.6232 3.375 16.875 3.62684 16.875 3.9375V8.4375C16.875 8.74816 16.6232 9 16.3125 9C16.0018 9 15.75 8.74816 15.75 8.4375V4.5H11.8125C11.5018 4.5 11.25 4.24816 11.25 3.9375Z"
        fill="#06B470"
      />
    </svg>
  ) : (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.78975 4.66475C2.00942 4.44508 2.36558 4.44508 2.58525 4.66475L7.25 9.3295L9.66475 6.91475C9.88442 6.69508 10.2406 6.69508 10.4602 6.91475L17.2102 13.6648C17.4299 13.8844 17.4299 14.2406 17.2102 14.4602C16.9906 14.6799 16.6344 14.6799 16.4148 14.4602L10.0625 8.108L7.64775 10.5227C7.42808 10.7424 7.07192 10.7424 6.85225 10.5227L1.78975 5.46025C1.57008 5.24058 1.57008 4.88442 1.78975 4.66475Z"
        fill="#F74E2C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.8125 9C17.1232 9 17.375 9.25184 17.375 9.5625V14.0625C17.375 14.3732 17.1232 14.625 16.8125 14.625H12.3125C12.0018 14.625 11.75 14.3732 11.75 14.0625C11.75 13.7518 12.0018 13.5 12.3125 13.5H16.25V9.5625C16.25 9.25184 16.5018 9 16.8125 9Z"
        fill="#F74E2C"
      />
    </svg>
  );
};
