import { SectionHeader } from "@/shared/ui/Typography/SectionHeader";
import styles from "./AppDownload.module.scss";
import { AppStore } from "@/shared/images/icons/AppStore";
import { PlayStore } from "@/shared/images/icons/PlayStore";
import { QR } from "@/shared/images/icons/QR";
import { Button } from "@/shared/ui/Button/Button";
import bgNoteBook from "./images/NoteBook.png";
import bgSmartPhone from "./images/SmartPhone.png";

export const AppDownload = () => {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <SectionHeader
            className={styles.header}
            align="left"
            direction="column"
            title="Never Miss Trading, Download Our Application"
            text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          <div className={styles.actions}>
            <Button
              w="180px"
              variant="outline"
              className={styles.button}//???:
              iconL={<AppStore />}
            >
              App Store
            </Button>
            <Button w="180px" variant="outline" iconL={<PlayStore />}>
              Play Store
            </Button>
            <Button w="80px" variant="outline" iconL={<QR />} />
          </div>
        </div>

        <div className={styles.bg}>
          <img src={bgSmartPhone} className={styles.imageL} alt="smartphone" />
          <img src={bgNoteBook} className={styles.imageR} alt="notebook" />
        </div>
      </div>
    </section>
  );
};
