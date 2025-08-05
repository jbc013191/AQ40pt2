import React from 'react';

const RaidDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl text-pink-500 font-bold underline mb-6">Tailwind Test</h1>
      <div className="grid grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Group {i + 1}</h2>
            {[...Array(5)].map((_, j) => (
              <div key={j} className="bg-gray-700 p-1 my-1 rounded text-sm">Player {j + 1}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RaidDashboard;
