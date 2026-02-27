# Visit Annaba - Full-Stack Tourism Platform

Production-ready monorepo for a tourism startup platform dedicated to Annaba, Algeria.

## Architecture

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion, i18n + RTL
- **Backend**: Node.js + Express REST API, JWT auth, RBAC, validation, rate limiting
- **Database**: PostgreSQL + Prisma ORM
- **Deployment**: Vercel (web), Render/Railway (API), managed PostgreSQL
- **DevOps**: Dockerfiles + docker-compose

## Folder Structure

```bash
apps/
  web/              # Next.js frontend
  api/              # Express backend
prisma/
  schema.prisma     # Database schema
  seed.ts           # Annaba seed data
.env.example        # Environment template
docker-compose.yml  # Local full stack
```

## Features

- Multi-language: English, French, Arabic (RTL)
- Tourism sections: attractions, hotels, restaurants, events, map
- JWT auth (login/register), admin role
- Admin dashboard with analytics widgets and chart
- Reviews and favorites API foundation
- SEO: metadata, OpenGraph, sitemap.xml, robots.txt
- UI: glassmorphism, dark premium palette, responsive layout

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy env:
   ```bash
   cp .env.example .env
   ```
3. Start Postgres:
   ```bash
   docker compose up -d db
   ```
4. Generate/migrate/seed DB:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate -- --name init
   npm run prisma:seed
   ```
5. Run apps:
   ```bash
   npm run dev:api
   npm run dev:web
   ```

## API Highlights

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/home`
- `GET /api/attractions`
- `GET /api/hotels`
- `GET /api/restaurants`
- `GET /api/events`
- `POST /api/reviews` (auth)
- `GET /api/admin/stats` (admin)
- `POST /api/admin/events` (admin)
- `DELETE /api/admin/events/:id` (admin)

## Deployment

### Frontend on Vercel
- Import repo
- Root directory: `apps/web`
- Set env `NEXT_PUBLIC_API_URL`

### API on Render / Railway
- Root directory: `apps/api`
- Build command: `npm install && npm run build`
- Start command: `npm run start`
- Set `DATABASE_URL`, `JWT_SECRET`, `CORS_ORIGIN`, `API_PORT`

### Database
- Use Neon/Supabase/Railway PostgreSQL
- Run Prisma migrations during deploy pipeline

## Security Checklist

- Helmet headers
- CORS restrictions
- Rate limiting
- Password hashing (bcrypt)
- JWT signed tokens
- Input validation with Zod

## Optional Advanced Add-ons

- PWA manifest + service worker
- AI chatbot guide
- Push notifications
- Real bookings integration
