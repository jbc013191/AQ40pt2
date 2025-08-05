import React, { useState } from "react";

export default function RaidDashboard() {
  const [raidData, setRaidData] = useState([]);
  const [jsonInput, setJsonInput] = useState("");

  const handleJsonPaste = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setRaidData(parsed.raidDrop || []);
    } catch (e) {
      alert("Invalid JSON. Please check formatting.");
    }
  };

  const parties = Array.from({ length: 8 }, (_, i) =>
    raidData.filter((p) => p.partyId === i + 1)
  );

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">AQ40 Raid Dashboard</h1>

      {/* JSON Input Section */}
      <div className="mb-8 bg-gray-800 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Paste JSON Below</h2>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          className="w-full h-40 p-3 bg-gray-900 border border-gray-700 rounded text-white mb-2"
          placeholder='Paste your JSON... e.g. {"raidDrop":[{"name":"Scythn","partyId":1,"color":"#3498db"}]}'
        ></textarea>
        <button
          onClick={handleJsonPaste}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-semibold"
        >
          Import Raid Data
        </button>
      </div>

      {/* Party Groups Display */}
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          {parties.slice(0, 4).map((group, idx) => (
            <PartyGroup key={idx} groupNumber={idx + 1} players={group} />
          ))}
        </div>
        <div className="space-y-4">
          {parties.slice(4).map((group, idx) => (
            <PartyGroup key={idx + 4} groupNumber={idx + 5} players={group} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PartyGroup({ groupNumber, players }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow">
      <h3 className="text-lg font-semibold mb-2">Group {groupNumber}</h3>
      <ul className="space-y-1">
        {players.length > 0
          ? players.map((player, i) => (
              <li
                key={i}
                className="px-3 py-1 rounded border border-gray-700"
                style={{ backgroundColor: player.color }}
              >
                {player.name}
              </li>
            ))
          : [...Array(5)].map((_, i) => (
              <li
                key={i}
                className="bg-gray-900 px-3 py-1 rounded border border-gray-700"
              >
                Player {i + 1}
              </li>
            ))}
      </ul>
    </div>
  );
}