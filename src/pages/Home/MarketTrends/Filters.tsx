import type { Filter } from "@/features/coins/types";
import styles from "./MarketTrends.module.scss";
import { filters } from "./marketTrendsMocks";

export const Filters = ({
  current,
  handleFilters,
}: {
  current: Filter;
  handleFilters: (value: Filter) => void;
}) => {
  return (
    <ul className={styles.filters}>
      {filters.map((filter) => (
        <li
          style={{
            color:
              current === filter.value
                ? "var(--white)"
                : "var(--grey-paragraph-6)",
          }}
          onClick={() => handleFilters(filter.value as Filter)}
          key={filter.value}
        >
          {filter.label}
        </li>
      ))}
    </ul>
  );
};
