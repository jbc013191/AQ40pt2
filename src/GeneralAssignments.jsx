import React, { useState } from "react";

export default function GeneralAssignments() {
  const [assignments, setAssignments] = useState({
    tanks: [
      { icon: "", role: "MT", tank: "", healer1: "", healer2: "" },
      { icon: "", role: "OT", tank: "", healer1: "", healer2: "" },
      { icon: "", role: "T3", tank: "", healer1: "", healer2: "" },
      { icon: "", role: "T4", tank: "", healer1: "", healer2: "" },
      { icon: "", role: "T5", tank: "", healer1: "", healer2: "" },
      { icon: "", role: "Slayer Packs", tank: "", healer1: "", healer2: "" },
    ],
    buffs: [
      { groups: "1-3", caster: "" },
      { groups: "4-6", caster: "" },
      { groups: "7-8", caster: "" },
      { groups: "1-8", caster: "" },
    ],
    criticalDebuffs: [
      { debuff: "Demoralizing Shout", player: "" },
      { debuff: "Expose Armor", player: "" },
      { debuff: "Curse of Recklessness", player: "" },
      { debuff: "Curse of Elements", player: "" },
      { debuff: "Faerie Fire", player: "" },
    ],
  });

  const handleChange = (section, index, field, value) => {
    const updated = { ...assignments };
    updated[section][index][field] = value;
    setAssignments(updated);
  };

  const raidIcons = [
    "skull.png",
    "cross.png",
    "square.png",
    "moon.png",
    "triangle.png",
    "diamond.png",
    "star.png",
    "circle.png",
  ];

  return (
    <div className="bg-gray-900 p-6 rounded-lg text-white space-y-10 font-sans">
      <h2 className="text-2xl font-bold text-center mb-4 text-white tracking-wide">
        GENERAL ASSIGNMENTS
      </h2>

      {/* Raid Target Icons */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {raidIcons.map((icon, idx) => (
          <img
            key={idx}
            src={`/icons/${icon}`}
            alt={icon.replace(".png", "")}
            className="w-10 h-10"
            title={icon.replace(".png", "")}
          />
        ))}
      </div>

      {/* Tanks Table */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Tanks, Tank Healers & Debuffs</h3>
        <table className="w-full text-sm border border-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="border p-2">Icon</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Tank</th>
              <th className="border p-2">Healer 1</th>
              <th className="border p-2">Healer 2</th>
            </tr>
          </thead>
          <tbody>
            {assignments.tanks.map((row, i) => (
              <tr key={i}>
                {['icon', 'role', 'tank', 'healer1', 'healer2'].map((field) => (
                  <td className="border p-1 text-black" key={field}>
                    <input
                      className="bg-white p-1 w-full border border-gray-400 rounded text-black font-medium text-sm"
                      value={row[field] || ""}
                      onChange={(e) => handleChange('tanks', i, field, e.target.value)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buffs Table */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Buff + PI / Innervate</h3>
        <table className="w-full text-sm border border-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="border p-2">Groups</th>
              <th className="border p-2">Caster</th>
            </tr>
          </thead>
          <tbody>
            {assignments.buffs.map((row, i) => (
              <tr key={i}>
                {['groups', 'caster'].map((field) => (
                  <td className="border p-1 text-black" key={field}>
                    <input
                      className="bg-white p-1 w-full border border-gray-400 rounded text-black font-medium text-sm"
                      value={row[field] || ""}
                      onChange={(e) => handleChange('buffs', i, field, e.target.value)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Critical Debuffs Table */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Critical Raid Debuffs</h3>
        <table className="w-full text-sm border border-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="border p-2">Debuff</th>
              <th className="border p-2">Player</th>
            </tr>
          </thead>
          <tbody>
            {assignments.criticalDebuffs.map((row, i) => (
              <tr key={i}>
                {['debuff', 'player'].map((field) => (
                  <td className="border p-1 text-black" key={field}>
                    <input
                      className="bg-white p-1 w-full border border-gray-400 rounded text-black font-medium text-sm"
                      value={row[field] || ""}
                      onChange={(e) => handleChange('criticalDebuffs', i, field, e.target.value)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}