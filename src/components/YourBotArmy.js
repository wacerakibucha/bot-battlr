import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {Array.isArray(army) && army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={releaseBot}
            dischargeBot={dischargeBot}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
