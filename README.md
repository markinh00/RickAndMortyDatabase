# 🥼 Rick and Morty Database

**RickAndMortyDatabase** is a project inspired on [this test for junior devs](https://github.com/RogaLabs/teste-desenvolvedor-junior)

This project is an example of a modern and scalable backend and frontend architecture.

---

## 🚀 Technologies

- [Fastify](https://www.fastify.io/): fast and efficient web framework.
- [TypeScript](https://www.typescriptlang.org/): static typing for JavaScript.
- [Zod](https://zod.dev/): schema validation.
- [Swagger](https://swagger.io/): interactive API documentation.
- [Docker](https://www.docker.com/): containerization for a consistent environment.

---

## ⚙️ Prerequisites

- [Docker](https://www.docker.com/get-started) (`optional`)
- [Node.js](https://nodejs.org/) LTS
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

---

## 🐳 Running with Docker

Follow these steps to run the project using Docker:

### 1. Clone the repository:

```bash
git clone https://github.com/markinh00/RickAndMortyDatabase.git
cd RickAndMortyDatabase
```

### 2. Run the docker container:

```bash
docker-compose up --build
```

### 3. Done!

With this the container will

- create the backend at `http://localhost:8000/`
- create the frontend at `http://localhost:3000/`

## 🛠️ Running without Docker

Follow these steps to run the project without Docker:

### 1. Clone the repository:

```bash
git clone https://github.com/markinh00/RickAndMortyDatabase.git
cd RickAndMortyDatabase
```

Then open another terminal on the same folder or split the current into two terminals

### 2. Start the backend:

In one terminal run the command bellow:

```bash
cd backend
npm install
npm run dev
```

### 2. Start the frontend:

In the other terminal run the command bellow:

```bash
cd frontend
npm install
npm run dev
```

### 3. Done!

With this:

- the backend will be created at `http://localhost:8000/`
- the frontend will be created at `http://localhost:3000/`

## 📄 Swagger Documentation

To see the swagger documentation for the backend go to: `http://localhost:8000/docs`
