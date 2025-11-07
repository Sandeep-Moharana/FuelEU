# FuelEU Maritime Compliance Platform

A full-stack implementation of the **FuelEU Maritime Compliance Module**, built using a clean Hexagonal Architecture.
This project includes a React frontend and a Node.js + PostgreSQL backend that implements Routes, Comparison, Banking, and Pooling features.

## Tech Stack
- **Frontend**: React, TypeScript, Vite, TailwindCSS
- **Backend**: Node.js, TypeScript, Express
- **Database**: PostgreSQL + Prisma
- **Architecture**: Hexagonal (Ports & Adapters)
- **Testing**: Jest + Supertest

## Monorepo Structure
```
fuel-eu/
  backend/
    src/
    prisma/
    tests/
  frontend/
    src/
```

## Setup & Run

### 1) Start Database (Docker)
```bash
cd backend
docker compose up -d
```

### 2) Backend
```bash
npm install
npx prisma migrate dev
npm run prisma:seed
npm run dev      # http://localhost:4000
```

### 3) Frontend
```bash
cd ../frontend
npm install
npm run dev      # http://localhost:5173
```

## Tests
```bash
cd backend
npm test
```
