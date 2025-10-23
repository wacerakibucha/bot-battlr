# ⚔️ Bot Battlr ⚔️

**Author:** Beatrice Kibucha  
**License:** MIT  

---

## **Project Overview**

**Bot Battlr** is a React-based web application where users can browse a collection of bots, view their details, and enlist them into their personal bot army. This project demonstrates the use of **React components, props, state, events, and data fetching** from a local JSON server.

---

## **Features**

### Core Features
- Display a list of all available bots (`BotCollection`).  
- Enlist a bot into your army (`YourBotArmy`) by clicking on it.  
- Release a bot from your army by clicking it in the army section.  
- Discharge a bot permanently from both the army and the backend using the red “X” button.  

### Advanced Features (Optional)
- Sort bots by **health, damage, or armor**.  
- Filter bots by their class (`Support`, `Medic`, `Assault`, `Defender`, `Captain`, `Witch`).  
- View detailed bot stats in a separate `BotSpecs` component.  

---

## **Project Setup**

### Prerequisites
- Node.js installed
- npm installed
- JSON Server installed globally:  
```bash
npm install -g json-server
Clone the repository:
git clone https://github.com/your-username/bot-battlr.git
cd bot-battlr
Install dependencies:
npm install
Start the JSON server:
json-server --watch db.json --port 8001
Start the React app:npm start
Open http://localhost:3000
 in your browser to view the app.
Technologies Used

React.js

JavaScript (ES6+)

JSON Server (for backend API simulation)

HTML5 & CSS3
License

This project is licensed under the MIT License.
