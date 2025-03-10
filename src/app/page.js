import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.content}>
      <h1>Android Developer Guide</h1>
      <p className={styles.introduction}>
        Welcome to the Android developer guide. Here you&apos;ll find
        documentation, tutorials, and code samples to help you build Android
        apps.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h2>Build your first app</h2>
          <p>Create an Android app from scratch using Android Studio</p>
          <a href="#" className={styles.cardLink}>
            Get started →
          </a>
        </div>
        <div className={styles.card}>
          <h2>Learn the fundamentals</h2>
          <p>Understand Android app architecture and core concepts</p>
          <a href="#" className={styles.cardLink}>
            Learn more →
          </a>
        </div>
        <div className={styles.card}>
          <h2>Build your first app</h2>
          <p>Create an Android app from scratch using Android Studio</p>
          <a href="#" className={styles.cardLink}>
            Get started →
          </a>
        </div>
        <div className={styles.card}>
          <h2>Learn the fundamentals</h2>
          <p>Understand Android app architecture and core concepts</p>
          <a href="#" className={styles.cardLink}>
            Learn more →
          </a>
        </div>
        <div className={styles.card}>
          <h2>Build your first app</h2>
          <p>Create an Android app from scratch using Android Studio</p>
          <a href="#" className={styles.cardLink}>
            Get started →
          </a>
        </div>
        <div className={styles.card}>
          <h2>Learn the fundamentals</h2>
          <p>Understand Android app architecture and core concepts</p>
          <a href="#" className={styles.cardLink}>
            Learn more →
          </a>
        </div>
      </div>
    </div>
  );
}
