"use client";
import styles from "@/app/page.module.css";
import { Code } from "@geist-ui/core";
// import json from "./page.json";
import data from "./snippets.json";

export default function Home() {
  return (
    <div className={styles.content}>
      <h1>Radio Buttons</h1>
      {/* New Content */}
      <h2>Notes</h2>
      <p>
        Radio buttons allow users to select one option from a set. Use radio
        buttons when the user needs to see all available options. If available
        options can be collapsed, consider using a dropdown menu because it uses
        less space.
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
