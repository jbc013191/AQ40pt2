import React, { useState } from 'react';

const RaidDashboard = () => {
  const [raidData, setRaidData] = useState([]);

  const handleFileUpload = (e) => {
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        setRaidData(json.raidDrop || []);
      } catch (err) {
        alert("Invalid JSON file.");
      }
    };
    fileReader.readAsText(e.target.files[0]);
  };

  // Organize by partyId
  const parties = Array.from({ length: 8 }, (_, i) =>
    raidData.filter(p => p.partyId === i + 1)
  );

  return (
    <div className="p-8">
      <h1 className="text-4xl text-pink-500 font-bold underline mb-6">Raid Dashboard</h1>

      <input type="file" accept=".json" onChange={handleFileUpload} className="mb-6" />

      <div className="grid grid-cols-4 gap-4">
        {parties.map((party, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Group {i + 1}</h2>
            {party.map((player, j) => (
              <div
                key={j}
                className="p-1 my-1 rounded text-sm text-white"
                style={{ backgroundColor: player.color }}
              >
                {player.name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RaidDashboard;