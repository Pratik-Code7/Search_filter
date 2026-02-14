import { useState } from "react";

const App = () => {
  const [search, setsearch] = useState("");
  const items = [
    { id: 1, name: "Barbarian" },
    { id: 2, name: "Archer" },
    { id: 3, name: "Giant" },
    { id: 4, name: "Goblin" },
    { id: 5, name: "Wall Breaker" },
    { id: 6, name: "Balloon" },
    { id: 7, name: "Wizard" },
    { id: 8, name: "Healer" },
    { id: 9, name: "Dragon" },
    { id: 10, name: "P.E.K.K.A" },

    { id: 11, name: "Baby Dragon" },
    { id: 12, name: "Miner" },
    { id: 13, name: "Electro Dragon" },
    { id: 14, name: "Yeti" },
    { id: 15, name: "Dragon Rider" },

    { id: 16, name: "Barbarian King" },
    { id: 17, name: "Archer Queen" },
    { id: 18, name: "Grand Warden" },
    { id: 19, name: "Royal Champion" },

    { id: 20, name: "Lightning Spell" },
    { id: 21, name: "Rage Spell" },
    { id: 22, name: "Freeze Spell" },
    { id: 23, name: "Poison Spell" },
    { id: 24, name: "Healing Spell" },

    { id: 25, name: "Town Hall" },
    { id: 26, name: "Clan Castle" },
    { id: 27, name: "Inferno Tower" },
    { id: 28, name: "Eagle Artillery" },
    { id: 29, name: "X-Bow" },
    { id: 30, name: "Hidden Tesla" },
  ];

  const filter = items.filter((elem) =>
    elem.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  );
  return (
    <div className="h-screen w-screen flex justify-center items-center box">
      <div className="main h-96 w-72 flex  flex-col items-center gap-3 py-5 px-6 overflow-auto scrollbar rounded-2xl ">
        <div className="flex  justify-center items-center w-full main mt-2 mb-2 rounded-md">
          <i className="ri-search-line px-2 py-2"></i>
          <input
            type="text"
            className="w-full p-1   "
            placeholder="Search Here"
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
        {filter.map((elem, idx) => {
          return (
            <div className="w-full  p-2 rounded-2xl main">{elem.name}</div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
