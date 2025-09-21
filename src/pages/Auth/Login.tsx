import { Title } from "@/shared/ui/Typography/Title"
import styles from "./Auth.module.scss"

export const Login = () => {
  return (
    <div className={styles.wrapper}>
      <Title className={styles.title}>Login</Title>
    </div>
  )
}
