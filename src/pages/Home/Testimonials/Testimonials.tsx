import { SectionHeader } from "@/shared/ui/Typography/SectionHeader";
import styles from "./Testimonials.module.scss";
import { SectionDivider } from "@/shared/ui/Dividers/SectionDivider";
import { Slider } from "./Slider";

export const Testimonials = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.inner + " container"}>
        <SectionHeader
          align="left"
          direction="row"
          title="What Traders Saying About Us!"
          text="Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled type specimen book."
        />
        <SectionDivider />
        <Slider />
      </section>
    </div>
  );
};
