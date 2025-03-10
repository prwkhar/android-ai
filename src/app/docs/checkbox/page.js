"use client";
import styles from "@/app/page.module.css";
import { Code } from "@geist-ui/core";
// import json from "./page.json";
import data from "./snippets.json";

export default function Home() {
  return (
    <div className={styles.content}>
      <h1>Checkbox</h1>
      {/* New Content */}
      <h2>Notes</h2>
      <p>
        Checkboxes allow users to select multiple options from a set. Use
        checkboxes when the user needs to see all available options. If the user
        needs to select only one option from a set, use radio buttons instead.
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
