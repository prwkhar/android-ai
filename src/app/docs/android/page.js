"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import { Input, Button } from "@geist-ui/core";
import data from "./snippets.json";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Home() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchGeminiResponse = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse(""); // Clear previous response
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: query }],
              },
            ],
          }),
        }
      );
      const data = await res.json();
      // Extract candidate text as the code snippet (if available)
      const codeText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response from API";
      setResponse(codeText);
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("Error fetching response.");
    }
    setLoading(false);
  };

  return (
    <div className={styles.content}>
      <h1>Helpers</h1>
      <h2>Notes</h2>
      <p>Helper functions in Kotlin</p>

      {/* Display Kotlin code snippets with syntax highlighting */}
      {data.snippets.map((snippet) => (
        <div key={snippet.codeblockTitle}>
          <h3>{snippet.codeblockTitle}</h3>
          <SyntaxHighlighter language="kotlin">
            {snippet.code}
          </SyntaxHighlighter>
        </div>
      ))}

      {/* Gemini API Interaction */}
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        width="100%"
      />
      <Button className="bg-green-500" mt={1} onClick={fetchGeminiResponse} type="success" disabled={loading}>
        {loading ? "Loading..." : "Help"}
      </Button>

      {response && (
        // Display the Gemini response as formatted Python code.
        <div style={{ marginTop: "1rem" }}>
          <SyntaxHighlighter language="python" style={tomorrow}>
            {response}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}
