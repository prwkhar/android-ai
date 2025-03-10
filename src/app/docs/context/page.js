"use client";
import styles from "@/app/page.module.css";
import { Code } from "@geist-ui/core";
// import json from "./page.json";
import data from "./snippets.json";

export default function Home() {
  return (
    <div className={styles.content}>
      <h1>Android Developer Guide</h1>
      {/* New Content */}
      <h2>Notes</h2>
      <p>
        Layout Files: Ensure that your layout XML files (e.g.,
        activity_main.xml, fragment_expense.xml, fragment_income.xml, and
        activity_summary.xml) define the required views with matching IDs (such
        as viewPager, tabLayout, expense1, etIncome, etc.). Validation: You
        might want to add proper input validation (e.g., check for empty fields)
        and handle exceptions as needed. Navigation: The example uses an
        explicit Intent in IncomeFragment to launch SummaryActivity.
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
