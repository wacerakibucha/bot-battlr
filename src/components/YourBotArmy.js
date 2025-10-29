import BotCard from "./BotCard";

function YourBotArmy({ army, onRemove, onDelete }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.map(bot => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleClick={() => onRemove(bot)}
          onDelete={() => onDelete(bot)}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
