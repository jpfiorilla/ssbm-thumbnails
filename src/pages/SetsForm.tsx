import { extractEventSlug } from "@/utils";
import { useState } from "react";

interface StreamedSet {
  id: string;
  round: string;
  players: string[];
}

export default function SetsForm() {
  const [url, setUrl] = useState(
    "https://www.start.gg/tournament/nycmelee-s-stock-exchange-12/event/melee-singles"
  );
  const [loading, setLoading] = useState(false);
  const [sets, setSets] = useState<StreamedSet[]>([]);

  const handleFetch = async () => {
    const slug = extractEventSlug(url);
    console.log({ slug });
    if (!slug) {
      alert("Invalid Start.gg URL");
      return;
    }

    setLoading(true);
    try {
      console.log({ slug });
      const rawSets = await window.startgg.fetchStreamedSets(slug);
      console.log({ rawSets });
      setSets(rawSets);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch sets");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = (
    index: number,
    field: keyof StreamedSet,
    value: any
  ) => {
    const updated = [...sets];
    (updated[index] as any)[field] = value;
    setSets(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Fetch Streamed Sets</h2>
      <input
        type="text"
        placeholder="Paste Start.gg tournament URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "400px", marginRight: "10px" }}
      />
      <button onClick={handleFetch} disabled={loading}>
        {loading ? "Loading..." : "Fetch"}
      </button>

      {sets.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Edit Sets</h3>
          {sets.map((set, i) => (
            <div
              key={set.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <input
                value={set.round}
                onChange={(e) => handleUpdate(i, "round", e.target.value)}
                placeholder="Round"
              />
              {set.players.map((p, idx) => (
                <input
                  key={idx}
                  value={p}
                  onChange={(e) => {
                    const players = [...set.players];
                    players[idx] = e.target.value;
                    handleUpdate(i, "players", players);
                  }}
                  placeholder={`Player ${idx + 1}`}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
