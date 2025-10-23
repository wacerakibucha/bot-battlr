import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch bots from JSON Server
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        // Ensure we always get an array
        const botsArray = Array.isArray(data) ? data : [];
        console.log("Fetched bots:", botsArray); // ✅ log fetched bots
        setBots(botsArray);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching bots:", err);
        setLoading(false);
      });
  }, []);

  // Add bot to army (only once)
  const addToArmy = (bot) => {
    if (!army.find((member) => member.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Release bot from army
  const releaseBot = (bot) => {
    setArmy(army.filter((member) => member.id !== bot.id));
  };

  // Delete bot completely
  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setArmy(army.filter((member) => member.id !== bot.id));
        setBots(bots.filter((b) => b.id !== bot.id));
      })
      .catch((err) => console.error("Error deleting bot:", err));
  };

  // Show loading message if bots are not fetched yet
  if (loading) {
    return <h2>Loading bots...</h2>;
  }

  return (
    <div className="App">
      <h1>⚔️ Bot Battlr ⚔️</h1>
      <YourBotArmy
        army={army}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
      <BotCollection bots={bots} addToArmy={addToArmy} />
    </div>
  );
}

export default App;
