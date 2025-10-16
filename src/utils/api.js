// Two modes:
// 1) MOCK: returns fake ideas (default = true for easy start).
// 2) REAL: set VITE_AI_MODE=real and VITE_OPENAI_API_KEY in .env to call OpenAI.
//    You can swap to any AI provider easily (HuggingFace, Gemini) here.

const MODE = import.meta.env.VITE_AI_MODE ?? "mock"; // "mock" | "real"

export async function generateIdeas(topic) {
  if (MODE === "mock") {
    await delay(600); // mimic network
    return [
      `Niche newsletter: "${topic}" weekly playbook with monetized templates`,
      `Micro-SaaS: automate "${topic}" data collection + dashboards`,
      `Chrome extension: quick "${topic}" prompts + snippets`,
      `Landing page generator for "${topic}" with AI copy & images`,
      `Community toolkit: curated tools, job board, and prompts for "${topic}"`,
    ];
  }

  // REAL MODE (OpenAI Chat Completions)
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  if (!apiKey) throw new Error("Missing VITE_OPENAI_API_KEY");

  const prompt = `Give me 5 concise startup ideas for the topic: "${topic}". 
Each idea should be one sentence, practical, and unique. Return as a plain numbered list.`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini", // or any chat-capable model you have access to
      messages: [
        {
          role: "system",
          content: "You are a concise startup idea generator.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`AI request failed: ${err}`);
  }

  const data = await res.json();
  const text = data.choices?.[0]?.message?.content ?? "";
  // Split by lines and clean
  const ideas = text
    .split("\n")
    .map(s => s.replace(/^\d+[.\s-]?\s*/, "").trim())
    .filter(Boolean)
    .slice(0, 5);

  return ideas.length ? ideas : ["No ideas returned. Try another topic."];
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
