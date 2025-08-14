export const suspiciousKeywords = [
  "shocking",
  "urgent",
  "breaking",
  "miracle",
  "you won't believe",
  "viral",
  "exclusive",
  "leaked",
];

export function highlightSuspicious(text) {
  if (!text) return "";
  let out = text;
  for (const kw of suspiciousKeywords) {
    const re = new RegExp(`\\b${kw.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}\\b`, "gi");
    out = out.replace(re, (m) => `**${m}**`);
  }
  return out;
}

export function toPercent(score) {
  // Accepts 0..1 or 0..100; returns 0..100
  if (score <= 1) return Math.round(score * 100);
  return Math.round(score);
}