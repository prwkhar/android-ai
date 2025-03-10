"use client";
import styles from "@/app/page.module.css";
import { Code } from "@geist-ui/core";
import data from "./snippets.json";
export default function Home() {
  return (
    <div className={styles.content}>
      <h1>Android Developer Guide</h1>
      {/* New Content */}
      <h2>Initializing Views and Setting Up Button Listeners</h2>
      <p>
        Below is an example of how to initialize views and set up button
        listeners in an Android app:
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
