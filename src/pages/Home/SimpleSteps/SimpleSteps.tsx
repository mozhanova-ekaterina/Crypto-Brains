import styles from "./SimpleSteps.module.scss";
import { SectionDivider } from "@/shared/ui/Dividers/SectionDivider";
import { steps } from "./steps-mocks";
import { StepCard } from "./StepCard";
import { SectionHeader } from "@/shared/ui/Typography/SectionHeader";

export const SimpleSteps = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.inner + " container"}>
        <SectionHeader
          className={styles.header}
          title="Start Trading In Simple Process"
          text="Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <SectionDivider />
        <div className={styles.list}>
          {steps.map((step) => (
            <StepCard {...step} key={step.title} />
          ))}
        </div>
      </section>
    </div>
  );
};
