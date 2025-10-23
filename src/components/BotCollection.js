import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addToArmy }) {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-list">
        {Array.isArray(bots) && bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleClick={addToArmy} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
