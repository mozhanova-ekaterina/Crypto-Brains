import { Telegram } from "@/shared/images/icons/Telegram";
import { Instagram } from "@/shared/images/icons/Instagram";
import { Linkedin } from "@/shared/images/icons/Linkedin";
import { Logo } from "@/shared/ui/Logo";
import styles from "./Footer.module.scss";
import { Youtube } from "@/shared/images/icons/Youtube";
import { SomeIcon } from "@/shared/images/icons/SomeIcon";

export const FooterTop = () => {
  return (
    <div className={styles.footer_top}>
      <Logo />
      <div className={styles.links}>
        Community-
        <a href="#">
          <SomeIcon />
        </a>
        <a href="#">
          <Telegram />
        </a>
        <a href="#">
          <Instagram />
        </a>
        <a href="#">
          <Linkedin />
        </a>
        <a href="#">
          <Youtube />
        </a>
      </div>
    </div>
  );
};
