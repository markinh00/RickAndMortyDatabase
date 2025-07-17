# 🥼 Rick and Morty Database

**RickAndMortyDatabase** is a full‑stack demonstration project built on top of the challenge proposed in [Roga Labs’ Junior Developer test](https://github.com/RogaLabs/teste-desenvolvedor-junior). Its goal is to exemplify a modern, **type‑safe**, and **container‑ready** architecture that you can fork, study, or extend.

---

## ✨ What’s inside?

| Layer        | Highlights                                                   |
| ------------ | ------------------------------------------------------------ |
| **Backend**  | Fastify · TypeScript · Zod validation · Swagger/OpenAPI docs |
| **Frontend** | Next.js · React · Tailwind CSS                               |
| **DevOps**   | Docker & Docker Compose · Hot‑reload                         |

The API serves the list of **living Rick and Morty characters**, enriched with the number of appearances per season (S01–S03) and in total, already **sorted** by appearances (desc) and name (asc).

---

## 🚀 Quick start

### Clone the repository

```bash
git clone https://github.com/markinh00/RickAndMortyDatabase.git
cd RickAndMortyDatabase
```

### Using Docker (recommended)

```bash
docker compose up --build
```

- API → [http://localhost:8000/](http://localhost:8000/)
- Docs → [http://localhost:8000/docs](http://localhost:8000/docs)
- Web → [http://localhost:3000/](http://localhost:3000/)

### Without Docker

Open two terminals in the project root.

**Backend**

```bash
cd backend
npm install    # or pnpm / yarn
npm run dev
```

**Frontend**

```bash
cd frontend
npm install
npm run dev
```

---

## 📖 Project structure

```
RickAndMortyDatabase
├─ backend/          # Fastify service
│  ├─ src/
│  └─ ...
├─ frontend/         # Next.js client
│  ├─ src/
│  └─ ...
└─ docker-compose.yml
```

---

## 📝 Original challenge

> Return a static page (_Node + Express_) listing **only living characters** with the following data:\
> name · gender · status · appearances per season · total appearances.\
> Sort by **appearances (desc)** then **name (asc)**.\
> 31 episodes across 3 seasons (11 + 10 + 10).

This repository re‑implements the same requirements using a richer stack.
