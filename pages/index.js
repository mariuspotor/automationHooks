import styles from "../styles/Home.module.css";
import Header from "./Header";
import { WELCOME, HEADER } from "../automationHooks.json";
import { hook } from "./hookUtil";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header dataHook={HEADER.hook} />
        <h1 className={styles.title} {...hook(WELCOME.hook, "primary")}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h2 {...hook(WELCOME.hook, "second")}>Second header</h2>
      </main>
    </div>
  );
}
