import React, { useState } from "react";
import GeneralAssignments from "./GeneralAssignments";

export default function RaidDashboard() {
  const [raidData, setRaidData] = useState([]);
  const [jsonInput, setJsonInput] = useState("");
  const [showImportBox, setShowImportBox] = useState(false);

  const handleJsonPaste = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setRaidData(parsed.raidDrop || []);
      setShowImportBox(false);
    } catch (e) {
      alert("Invalid JSON. Please check formatting.");
    }
  };

  const parties = Array.from({ length: 8 }, (_, i) =>
    raidData.filter((p) => p.partyId === i + 1)
  );

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-center w-full">AQ40 Raid Dashboard</h1>
        <button
          onClick={() => setShowImportBox(true)}
          className="absolute right-6 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-semibold"
        >
          Import JSON
        </button>
      </div>

      {/* JSON Input Modal */}
      {showImportBox && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-2">Paste JSON Below</h2>
            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              className="w-full h-40 p-3 bg-gray-900 border border-gray-700 rounded text-white mb-4"
              placeholder='Paste your JSON... e.g. {"raidDrop":[{"name":"Scythn","partyId":1,"color":"#3498db"}]}'
            ></textarea>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowImportBox(false)}
                className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleJsonPaste}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
              >
                Import
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Party Groups */}
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

      {/* General Assignments Section */}
      <div className="mt-10 max-w-6xl mx-auto">
        <GeneralAssignments />
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
                className="px-3 py-1 rounded border border-gray-700 text-black"
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