import React from "react";

function BotCard({ bot, handleClick, dischargeBot }) {
  return (
    <div className="bot-card" onClick={() => handleClick(bot)}>
      <img src={bot.avatar_url} alt={bot.name} width="150" />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      {dischargeBot && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            dischargeBot(bot);
          }}
          style={{ backgroundColor: "red", color: "white" }}
        >
          X
        </button>
      )}
    </div>
  );
}

export default BotCard;
