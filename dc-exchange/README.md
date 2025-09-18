# DC-exchange 🚀  
A dummy **exchange platform** that experiments with a hybrid of **centralized + decentralized tech**.  
Built with **Next.js, TailwindCSS, Prisma, Node.js, and Docker**.  

### [in development phase]

This project is not a production-ready exchange—it’s a **learning playground** to understand:  
- How centralized exchanges use order books and matching engines.  
- How decentralized principles can be layered on top (e.g., transparency, smart-contract inspired logic).  
- How to structure a scalable system with both **low-latency in-memory state** and **persistent databases**.  

---

## ⚡ Tech Stack
- **Frontend** → Next.js + TailwindCSS  
- **Backend** → Node.js (Express / API routes)  
- **Database** → Prisma ORM with Postgres  
- **Containerization** → Docker  

---

## 🏗️ Features (planned / in-progress)
- User authentication (demo mode, no real money).  
- Place Buy/Sell orders.  
- Order matching engine (in-memory for speed, persisted via DB).  
- OrderBook view (pending & fulfilled orders).  
- Basic trade history.  
- Docker setup for easy deployment.  

---

## 📚 Learning Goals
- Understand how a **Centralized Exchange (CEX)** architecture works.  
- Explore how decentralized concepts (auditability, pseudo-transparency) can fit into it.  
- Practice full-stack development with modern tools (Next.js, Prisma, Docker).  

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/DC-exchange.git
cd DC-exchange
```

### 2. Install dependencies
```bash
npm install
```

### 3. For now this much is enough-just run "npm run dev" now!!

### not needed now!! 👇👇
### 3. Setup the database
Make sure Postgres is running (you can use Docker).  
Update your `.env` file with your database URL:  

```env
DATABASE_URL="postgresql://user:password@localhost:5432/dc_exchange"
```

Then run:
```bash
npx prisma migrate dev
```

### 4. Run the dev server
```bash
npm run dev
```

The app should now be live at [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Roadmap
- [ ] Authentication system.  
- [ ] Core order-matching logic.  
- [ ] OrderBook UI.  
- [ ] Trade history page.  
- [ ] Dockerized setup.  
- [ ] Explore decentralized add-ons (event logs, verifiable trades).  

---

## ⚠️ Disclaimer
This is a **dummy project** for educational purposes only.  
**Not a real exchange. Do not use it for financial transactions.**

---

## 🤝 Contributing
Contributions, issues, and discussions are welcome!  
Feel free to fork, open PRs, or drop ideas.  

---

## 📜 License
MIT License ©2025
