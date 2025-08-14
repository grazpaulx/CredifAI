const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export async function checkCredibility(text) {
  const res = await fetch(`${BASE_URL}/api/check`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || `API error: ${res.status}`);
  }
  return res.json();
}