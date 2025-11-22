# 🚀 Welcome to Your No-Bikeshed Template!

This template gives you a production-ready foundation for building enterprise web applications with AI assistance.

## 🤖 AI-Guided Setup (Recommended)

**Copy this prompt into your AI assistant:**

```
I just cloned this repository. Guide me through complete setup:

1. Check if I have all prerequisites installed
2. Help me create required accounts (Azure, SendGrid, Sentry, Stripe)
3. Configure local development environment with Docker
4. Set up environment variables
5. Run the application locally
6. Understand the project structure
7. Create my first feature using AI

Ask me questions ONE AT A TIME and wait for my answers before proceeding.
Start by checking my prerequisites.
```

## 📋 Prerequisites

Before starting, you need:
- [ ] Node.js 20+ (use nvm: `nvm install 20 && nvm use 20`)
- [ ] pnpm installed (`npm install -g pnpm`)
- [ ] Docker Desktop installed and running
- [ ] Git installed
- [ ] Code editor (VS Code recommended)
- [ ] Azure account (credit card required, free tier available)

## 🏃 Quick Start (DIY)

```bash
# 1. Install dependencies
pnpm install

# 2. Start local services (PostgreSQL + backend)
docker-compose up -d

# 3. Run database migrations
cd backend
pnpm migrate:up

# 4. Copy environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 5. Run the app
pnpm dev

# Frontend: http://localhost:5173
# Backend API: http://localhost:3001
# PostgreSQL: localhost:5432
```

## 📚 What's Included

**Frontend:**
- ✅ React 18 + TypeScript + Vite
- ✅ Tailwind CSS + shadcn/ui components
- ✅ React Router + React Query
- ✅ React Hook Form + Zod validation

**Backend:**
- ✅ Node.js + TypeScript + Fastify
- ✅ PostgreSQL (Azure Database)
- ✅ Azure SignalR (realtime)
- ✅ OpenAPI/Swagger docs

**Infrastructure:**
- ✅ Feature flags system (database-based)
- ✅ Analytics event logging
- ✅ User feedback system
- ✅ Email templates (React Email)
- ✅ Multi-tenancy ready (dormant)

**Development:**
- ✅ Testing (Vitest + Playwright)
- ✅ CI/CD (GitHub Actions)
- ✅ Error tracking (Sentry)
- ✅ Synthetic monitoring
- ✅ Docker Compose for local dev

## 🎯 Key Concepts

**Monorepo Structure:**
```
/
├── frontend/          # React app
├── backend/           # Fastify API
├── shared/            # Shared types/schemas (Zod)
├── emails/            # Email templates (React Email)
└── tests/             # E2E and synthetic tests
```

**AI-Assisted Workflow:**
1. Add idea to `docs/backlog.md`
2. Use AI to generate feature spec
3. AI generates code + tests
4. Human reviews and iterates
5. Deploy to staging → test → promote to production

## 📖 Documentation

- **AI Prompts:** `docs/guides/ai-prompts.md`
- **Setup Guide:** `docs/guides/setup-local-dev.md`
- **Deployment:** `docs/guides/deployment.md`
- **Troubleshooting:** `docs/guides/troubleshooting.md`
- **Runbooks:** `docs/runbooks/`

## 🔑 Required Accounts

**Azure (Primary):**
- Azure Database for PostgreSQL
- Azure Static Web Apps (frontend)
- Azure Container Apps (backend)
- Azure SignalR Service (realtime)
- Azure Key Vault (secrets)
- Azure Application Insights (monitoring)

**Supporting:**
- GitHub (CI/CD)
- Sentry (error tracking - free tier)
- SendGrid (email - 100/day free)
- Stripe (payments - test mode free)

## 💰 Cost Expectations

**MVP:** ~$20-50/month
**Production:** ~$150-350/month

## 🎓 Next Steps

1. ✅ Complete setup (use AI prompt above)
2. 📖 Read `docs/guides/ai-prompts.md`
3. 👀 Review example feature
4. 🚀 Build your first feature with AI
5. 📦 Deploy to staging

## 🆘 Troubleshooting

**Docker won't start?**
- Check Docker Desktop is running
- Check ports 3001, 5432 aren't in use
- Try `docker-compose down && docker-compose up -d`

**Migrations fail?**
- Check PostgreSQL container: `docker ps`
- Test connection: `psql postgresql://postgres:postgres@localhost:5432/wstack`

**More help:** See `docs/guides/troubleshooting.md`

---

**Ready to build?** Start with the AI prompt above! 🚀
