"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import { Input, Button } from "@geist-ui/core";
import data from "./snippets.json";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function Home() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const copyToClipboard = () => {
    if (response) {
      navigator.clipboard.writeText(response);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    }
  };

  return (
    <div className={styles.content}>
      <h1>Android Studio Examples</h1>

      {/* Display Kotlin code snippets with syntax highlighting */}
      {data.snippets.map((snippet) => (
        <div key={snippet.codeblockTitle}>
          <p>{snippet.codeblockTitle}</p>
          <SyntaxHighlighter language="java">{snippet.code}</SyntaxHighlighter>
        </div>
      ))}

      {/* Gemini API Interaction */}
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        width="100%"
      />
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "1rem",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            backgroundColor: "rgba(34, 197, 94, 0.5)", // Green with reduced opacity
            color: "#ffffff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "5px",
            cursor: "pointer",
            opacity: 0.6,
          }}
          onClick={fetchGeminiResponse}
          type="success"
          disabled={loading}
        >
          {loading ? "Loading..." : "Help"}
        </Button>
        <Button
          style={{
            backgroundColor: "rgba(34, 197, 94, 0.5)", // Green with reduced opacity
            color: "#ffffff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "5px",
            cursor: "pointer",
            opacity: 0.6,
          }}
          onClick={copyToClipboard}
        >
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>

      {response && (
        <div style={{ marginTop: "1rem", overflowX: "auto" }}>
          <SyntaxHighlighter language="python">{response}</SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}
