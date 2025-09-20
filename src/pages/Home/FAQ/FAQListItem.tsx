import { Title } from "@/shared/ui/Typography/Title";
import styles from "./FAQ.module.scss";
import type { FAQ } from "./mocks";
import { Plus } from "@/shared/images/icons/Plus";
import { Button } from "@/shared/ui/Button/Button";
import { useState } from "react";

export const FAQListItem = ({ item }: { item: FAQ }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className={styles.item}>
      <Title className={styles.question}>{item.question}</Title>
      {open && <p className={styles.answer}>{item.answer}</p>}
      <Button className={styles.openBtn} onClick={() => setOpen(!open)}>
        <Plus />
      </Button>
    </li>
  );
};
