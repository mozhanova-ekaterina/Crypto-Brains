import styles from "./Footer.module.scss";

import { SectionDivider } from "@/shared/ui/Dividers/SectionDivider";
import { FooterTop } from "./FooterTop";
import { FooterBottom } from "./FooterBottom";
import { footerData } from "./mocks";
import { LinksGroup } from "./LinksGroup";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner + " container"}>
        <FooterTop />
        <SectionDivider />
        <div className={styles.content}>
          {footerData.map((group) => (
            <LinksGroup group={group} />
          ))}
        </div>
        <SectionDivider />
        <FooterBottom />
      </div>
    </footer>
  );
};
