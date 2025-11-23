# 🚀 Welcome to No-Bikeshed Azure!

**Decisions made. Start building.**

This template eliminates tech stack decisions so you can focus on building your app.

---

## 🤖 AI Assistant Setup (5 minutes)

**Use Cline + Claude 3.5 Sonnet.** This combination generates the highest-quality TypeScript/React code.

### Setup Steps:

**1. Install Cline Extension**
```bash
# Open VS Code
# Go to Extensions (Cmd/Ctrl + Shift + X)
# Search: "Cline"
# Click Install
```

**2. Get Claude API Key**
- Go to: https://console.anthropic.com
- Sign up / Log in
- Click "Get API Keys"
- Create new key
- Copy the key
- Add $20 credit to your account

**3. Configure Cline**
- Click Cline icon in VS Code sidebar
- Click settings gear icon
- Select provider: "Anthropic"
- Paste your API key
- Select model: "Claude 3.5 Sonnet"
- Enable auto-approve:
  - ✅ Read files
  - ✅ Safe commands
  - ❌ Edit files (keep manual for now)

**4. Open This Project**
```bash
code .
```

**5. Start AI-Guided Setup**

Click Cline icon in sidebar and paste this prompt:

```
I just cloned the no-bikeshed-azure template.
Guide me through complete setup:

1. Check if prerequisites are installed
2. Help configure accounts (Azure, SendGrid, Sentry, Stripe)
3. Set up local development environment with Docker
4. Configure environment variables
5. Run the application locally
6. Create my first feature

Stack: React + TypeScript + Fastify + Azure + PostgreSQL

Ask ONE question at a time. Wait for my answer before proceeding.
Start by checking my prerequisites.
```

**Cost: ~$20-30/month** (typical usage, pay-as-you-go)

---

## 📋 Prerequisites

You need:
- [ ] Node.js 20+ (`nvm install 20 && nvm use 20`)
- [ ] pnpm (`npm install -g pnpm`)
- [ ] Docker Desktop (running)
- [ ] Git
- [ ] VS Code
- [ ] Azure account (credit card required, free tier available)

---

## 🏃 Quick Start (If Skipping AI Setup)

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

---

## 📚 What's Included

**Frontend:**
- React 18 + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- React Router + React Query
- React Hook Form + Zod

**Backend:**
- Node.js + TypeScript + Fastify
- PostgreSQL (Azure Database)
- OpenAPI/Swagger docs
- Azure SignalR (realtime)

**Infrastructure:**
- Feature flags (database)
- Analytics events
- User feedback system
- Email templates (React Email)
- Multi-tenancy ready (dormant)

**Development:**
- Testing (Vitest + Playwright)
- CI/CD (GitHub Actions)
- Error tracking (Sentry)
- Synthetic monitoring
- Docker Compose (local dev)

---

## 🎯 Project Structure

```
no-bikeshed-azure/
├── READMEFIRST.md         # You are here
├── frontend/              # React app
├── backend/               # Fastify API
├── shared/                # Shared types/schemas (Zod)
├── emails/                # Email templates (React Email)
├── tests/                 # E2E and synthetic tests
├── docker-compose.yml     # Local development
└── docs/                  # Documentation
    ├── backlog.md         # Your feature backlog
    ├── guides/            # Setup, prompts, deployment
    └── checklists/        # Code review, pre-deploy
```

---

## 🔑 Required Accounts

**Azure Services:**
- Azure Database for PostgreSQL (free tier: $0-5/month)
- Azure Static Web Apps (free tier: unlimited)
- Azure Container Apps (free tier: limited)
- Azure SignalR Service (free tier: 20 connections)
- Azure Key Vault (free tier: $0-1/month)
- Azure AD B2C (free tier: 50K MAU)

**Supporting Services:**
- **GitHub** - Version control + CI/CD (free)
- **Sentry** - Error tracking (free: 5K errors/month)
- **Resend** - Email service (free: 3K emails/month)
- **Stripe** - Payments (test mode free)

---

## 💰 Monthly Costs

**MVP (Minimal Use):**
- Azure: $20-50/month (depending on usage)
- Resend: $0 (free tier)
- Sentry: $0 (free tier)
- Claude API: $20-30
- **Total: $40-80/month**

**Growth (Production Scale):**
- Azure: $100-300/month
- Resend: $20/month (if exceed free tier)
- Sentry: $26/month
- Claude API: $30-50/month
- **Total: $175-400/month**

---

## 🎓 AI-Assisted Workflow

1. Add feature idea to `docs/backlog.md`
2. Ask AI to generate feature spec
3. Review spec, iterate with AI
4. AI generates code + tests
5. Review code using `docs/checklists/code-review.md`
6. Deploy to staging → test → promote to production

**See `docs/guides/ai-prompts.md` for prompt templates.**

---

## 📖 Key Documentation

- **AI Prompts:** `docs/guides/ai-prompts.md` - Prompt templates for common tasks
- **Setup Guide:** `docs/guides/setup-local-dev.md` - Detailed local setup
- **Stack Decisions:** `docs/STACK.md` - Why we chose each technology
- **Deployment:** `docs/guides/deployment.md` - How to deploy to Azure
- **Code Review:** `docs/checklists/code-review.md` - Review checklist
- **Troubleshooting:** `docs/guides/troubleshooting.md` - Common issues

---

## 🆘 Troubleshooting

**Docker won't start?**
- Check Docker Desktop is running
- Check ports 3001, 5432 aren't in use
- Try: `docker-compose down && docker-compose up -d`

**Migrations fail?**
- Check PostgreSQL container is running: `docker ps`
- Test connection: `psql postgresql://postgres:postgres@localhost:5432/wstack`

**pnpm install fails?**
- Verify Node 20+: `node --version`
- Try: `pnpm install --force`

**Cline not working?**
- Check Claude API key is valid
- Check you have credit on Anthropic account
- Restart VS Code

**More help:** See `docs/guides/troubleshooting.md`

---

## 🎯 Next Steps

1. ✅ Complete AI-guided setup (use prompt above)
2. 📖 Read `docs/guides/ai-prompts.md`
3. 🎨 Customize branding (colors in `frontend/tailwind.config.js`)
4. 🚀 Build your first feature with AI
5. 📦 Deploy to staging
6. 🎉 Ship to production

---

## 🤝 Contributing

Want to improve this template?

Read `CONTRIBUTING.md` first. This template is **intentionally opinionated** - we don't add choices, we eliminate them.

---

## 📞 Support

- 📚 Documentation: `docs/`
- 🐛 Issues: GitHub Issues
- 💬 Discussions: GitHub Discussions

---

**Ready to build?** Start with the AI setup prompt above! 🚀

**No bikeshedding. Just shipping.** ⚡
