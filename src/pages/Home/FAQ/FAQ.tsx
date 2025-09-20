import { SectionDivider } from "@/shared/ui/Dividers/SectionDivider";
import { SectionHeader } from "@/shared/ui/Typography/SectionHeader";
import styles from "./FAQ.module.scss";
import { FAQItems } from "./mocks";
import { FAQListItem } from "./FAQListItem";

export const FAQ = () => {
  return (
    <section className={styles.inner + " container"}>
      <SectionHeader
        title="Frequently Asked Questions"
        text="When an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <SectionDivider />
      <div className={styles.content}>
        <ul className={styles.list}>
          {FAQItems.slice(0, 4).map((item, i) => (
            <FAQListItem item={item} key={i} />
          ))}
        </ul>
        <ul className={styles.list}>
          {FAQItems.slice(4).map((item, i) => (
            <FAQListItem item={item} key={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};
