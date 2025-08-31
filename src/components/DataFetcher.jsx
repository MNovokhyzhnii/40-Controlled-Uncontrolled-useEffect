import { useEffect, useState } from "react";

export default function DataFetcher() {
  const [state, setState] = useState({ loading: true, error: null, data: [] });

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        setState((s) => ({ ...s, loading: true, error: null }));
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setState({ loading: false, error: null, data: json });
      } catch (err) {
        if (err.name === "AbortError") return;
        setState({ loading: false, error: err.message || "Помилка", data: [] });
      }
    }

    load();
    return () => controller.abort();
  }, []);

  if (state.loading) return <div className="card">Завантаження…</div>;
  if (state.error)
    return <div className="card error">Помилка: {state.error}</div>;

  return (
    <ul className="card list">
      {state.data.map((u) => (
        <li key={u.id}>
          <strong>{u.name}</strong> — {u.email}
        </li>
      ))}
    </ul>
  );
}
