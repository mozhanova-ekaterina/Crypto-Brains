import { SectionTitle } from "@/shared/ui/SectionTitle";
import styles from "./SimpleSteps.module.scss";
import { SectionDescription } from "@/shared/ui/SectionDescription";
import { SectionDivider } from "@/shared/ui/Dividers/SectionDivider";
import { steps } from "./steps-mocks";
import { StepCard } from "./StepCard";

export const SimpleSteps = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.inner + " container"}>
        <div className={styles.header}>
          <SectionTitle>Start Trading In Simple Process</SectionTitle>
          <SectionDescription>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </SectionDescription>
        </div>
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
