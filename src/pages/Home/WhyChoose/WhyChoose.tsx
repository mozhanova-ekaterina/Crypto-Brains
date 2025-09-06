import styles from "./WhyChoose.module.scss";
import { SectionDivider } from "@/shared/ui/Dividers/SectionDivider";
import { whyChooseItems } from "./why-choose-mocks";
import { SectionHeader } from "@/shared/ui/Typography/SectionHeader";
import { ListItem } from "./ListItem";
import whuChooseImage from "./whyChoose-images/R19 1.png";

export const WhyChoose = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.inner + " container"}>
        <SectionHeader
          title="Why Choose Crypto Brains!"
          text="When an unknown printer took a galley of type and scrambled it to
            make a type specimen book."
        />
        <SectionDivider />
        <div className={styles.content}>
          <ol className={styles.list}>
            {whyChooseItems.map((item, i) => (
              <ListItem number={i + 1} key={item.title} {...item} />
            ))}
          </ol>
          <div className={styles.image}>
            <img src={whuChooseImage} alt="image" />
          </div>
        </div>
      </section>
    </div>
  );
};
