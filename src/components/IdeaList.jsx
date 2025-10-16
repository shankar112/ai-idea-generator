export default function IdeaList({ ideas, loading }) {
  if (loading) {
    return <div className="card">Thinking up ideas…</div>;
  }

  if (!ideas.length) {
    return <div className="muted">Your ideas will appear here.</div>;
  }

  return (
    <section className="grid">
      {ideas.map((idea, idx) => (
        <article key={idx} className="card">
          <div className="badge">#{idx + 1}</div>
          <p>{idea}</p>
          <div className="row">
            <button
              className="ghost"
              onClick={() => navigator.clipboard.writeText(idea)}
              title="Copy to clipboard"
            >
              Copy
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}
