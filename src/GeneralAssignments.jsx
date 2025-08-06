import React, { useState } from "react";

const iconOptions = [
  "skull",
  "cross",
  "square",
  "moon",
  "triangle",
  "diamond",
  "star",
  "circle",
];

export default function GeneralAssignments() {
  const [assignments, setAssignments] = useState({
    tanks: [
      { icon: "skull", role: "MT", tank: "", healer1: "", healer2: "" },
      { icon: "cross", role: "OT", tank: "", healer1: "", healer2: "" },
      { icon: "square", role: "T3", tank: "", healer1: "", healer2: "" },
      { icon: "moon", role: "T4", tank: "", healer1: "", healer2: "" },
      { icon: "triangle", role: "T5", tank: "", healer1: "", healer2: "" },
      { icon: "skull", role: "Slayer Packs", tank: "", healer1: "", healer2: "" },
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

  return (
    <div className="bg-gray-900 p-6 rounded-lg text-white space-y-10 font-sans">
      <h2 className="text-2xl font-bold text-center mb-4 text-white tracking-wide">
        GENERAL ASSIGNMENTS
      </h2>

      {/* Tanks Table */}
      <div>
        <h3 className="text-lg font-semibold mb-2">
          Tanks, Tank Healers & Debuffs
        </h3>
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
                {/* Icon Selector */}
                <td className="border p-1 text-black text-center">
                  <select
                    value={row.icon}
                    onChange={(e) =>
                      handleChange("tanks", i, "icon", e.target.value)
                    }
                    className="bg-white rounded p-1 text-black text-sm"
                  >
                    {iconOptions.map((icon) => (
                      <option key={icon} value={icon}>
                        {icon}
                      </option>
                    ))}
                  </select>
                  <img
                    src={`/icons/${row.icon}.png`}
                    alt={row.icon}
                    className="mx-auto mt-1 w-6 h-6"
                  />
                </td>

                {/* Role / Tank / Healer fields */}
                {["role", "tank", "healer1", "healer2"].map((field) => (
                  <td className="border p-1 text-black" key={field}>
                    <input
                      className="bg-white p-1 w-full border border-gray-400 rounded text-black font-medium text-sm"
                      value={row[field] || ""}
                      onChange={(e) =>
                        handleChange("tanks", i, field, e.target.value)
                      }
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
                {["groups", "caster"].map((field) => (
                  <td className="border p-1 text-black" key={field}>
                    <input
                      className="bg-white p-1 w-full border border-gray-400 rounded text-black font-medium text-sm"
                      value={row[field] || ""}
                      onChange={(e) =>
                        handleChange("buffs", i, field, e.target.value)
                      }
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
                {["debuff", "player"].map((field) => (
                  <td className="border p-1 text-black" key={field}>
                    <input
                      className="bg-white p-1 w-full border border-gray-400 rounded text-black font-medium text-sm"
                      value={row[field] || ""}
                      onChange={(e) =>
                        handleChange("criticalDebuffs", i, field, e.target.value)
                      }
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