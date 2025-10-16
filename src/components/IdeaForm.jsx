import { useState } from "react";
import styles from "../styles/components/IdeaForm.module.css";
import { generateIdeas } from "../utils/api.js";

export default function IdeaForm({ onStartLoading, onStopLoading, onIdeas, loading }) {
  const [topic, setTopic] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!topic.trim()) return;

    onStartLoading();
    try {
      const list = await generateIdeas(topic.trim());
      onIdeas(list);
    } catch (err) {
      console.error(err);
      onIdeas([
        "Oops — something went wrong. Try again.",
      ]);
    } finally {
      onStopLoading();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="e.g., fitness app for remote workers"
        disabled={loading}
      />
      <button className={styles.button} type="submit" disabled={loading}>
        {loading ? "Generating..." : "Generate Ideas"}
      </button>
    </form>
  );
}
