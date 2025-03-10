"use client";
import styles from "@/app/page.module.css";
import { Code } from "@geist-ui/core";
// import json from "./page.json";
import data from "./snippets.json";

export default function Home() {
  return (
    <div className={styles.content}>
      <h1>Intents</h1>
      {/* New Content */}
      <h2>Notes</h2>
      <p>
        Intents are messages that allow components to request functionality from
        other components. They are used to start activities, services, and
        broadcast receivers. Intents are also used to pass data between
        components.
      </p>

      {data.snippets.map((snippet) => (
        <Code
          key={snippet.codeblockTitle}
          name={snippet.codeblockTitle}
          my={0}
          mt={2}
          block
        >
          {snippet.code}
        </Code>
      ))}
    </div>
  );
}
