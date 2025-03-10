"use client";
import styles from "@/app/page.module.css";
import { Code } from "@geist-ui/core";
// import json from "./page.json";
import data from "./snippets.json";

export default function Home() {
  return (
    <div className={styles.content}>
      <h1>Options Menu</h1>
      {/* New Content */}
      <h2>Notes</h2>
      <p>
        The options menu is the primary collection of menu items for an
        activity. It&apos;s where you should place actions that have a global
        impact on the app. The options menu is displayed when the user presses
        the Menu button on the device. You can add items to the options menu
        from the XML file by adding a <code>&lt;menu&gt;</code>
        element to your XML layout file. Each item in the options menu is
        represented by a <code>&lt;item&gt;</code> element and can provide
        additional actions for the user
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
