import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then(res => res.json())
      .then(data => setBots(data));
  }, []);

  function addToArmy(bot) {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function removeFromArmy(bot) {
    setArmy(army.filter(b => b.id !== bot.id));
  }

  function deleteBot(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE"
    }).then(() => removeFromArmy(bot));
  }

  return (
    <div>
      <h1>🤖 Bot Battlr</h1>
      <YourBotArmy army={army} onRemove={removeFromArmy} onDelete={deleteBot} />
      <BotCollection bots={bots} onAdd={addToArmy} />
    </div>
  );
}

export default App;
