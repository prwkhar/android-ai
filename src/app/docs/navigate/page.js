"use client";
import styles from "@/app/page.module.css";
import { Code } from "@geist-ui/core";
// import json from "./page.json";
import data from "./snippets.json";

export default function Home() {
  return (
    <div className={styles.content}>
      <h1>Navigation</h1>
      {/* New Content */}
      <h2>Notes</h2>
      <p>
        Navigation refers to the interactions that allow users to navigate
        across, into, and back out from the different pieces of content within
        your app. Kotlin Navigation component helps you implement navigation,
        from simple button clicks to more complex patterns, such as app bars and
        the navigation drawer. The Navigation component also ensures a
        consistent and predictable user experience by adhering to an established
        set of principles.
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
