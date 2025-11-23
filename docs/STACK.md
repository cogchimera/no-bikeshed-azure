# No-Bikeshed Azure Stack

**Every technology decision explained.**

---

## Philosophy

This stack is optimized for:
1. **AI code generation quality** - Claude generates best code for these tools
2. **Enterprise readiness** - Azure compliance, security, scalability
3. **Zero configuration** - No decisions, just start building
4. **Transparent costs** - Know exactly what you're paying

---

## Technology Decisions

### Frontend Stack

*(Same as Supabase - see below)*

#### TypeScript (not JavaScript)
- **Why:** AI generates higher-quality typed code
- **Why:** Catch errors at compile-time, not runtime
- **Why:** Better autocomplete, refactoring, and tooling
- **Cost:** None - it's JavaScript with types

#### React 18 (not Vue, Svelte, Angular)
- **Why:** Most training data for AI models = best code generation
- **Why:** Largest ecosystem and community
- **Why:** Hooks model perfect for AI to understand
- **Cost:** None - open source

#### Vite (not Create React App, Next.js)
- **Why:** Fast dev server and build times
- **Why:** Simpler than Next.js for AI to reason about
- **Why:** ESM-native, modern tooling
- **Cost:** None - open source

#### Tailwind CSS (not CSS Modules, Styled Components)
- **Why:** AI excels at generating utility classes
- **Why:** No context switching between files
- **Why:** Consistent design system built-in
- **Cost:** None - open source

#### shadcn/ui (not Material-UI, Chakra, Ant Design)
- **Why:** Copy-paste components, not npm dependencies
- **Why:** Full control - you own the code
- **Why:** Built on Radix (accessible by default)
- **Cost:** None - open source

#### React Router v6 (not Next.js router)
- **Why:** Simple, well-understood by AI
- **Why:** Client-side routing sufficient
- **Cost:** None - open source

#### React Query / TanStack Query (not Redux, Zustand)
- **Why:** Server state belongs separate from client state
- **Why:** Automatic caching, refetching, optimistic updates
- **Why:** AI generates excellent React Query code
- **Cost:** None - open source

#### React Hook Form (not Formik)
- **Why:** Best performance (uncontrolled inputs)
- **Why:** AI generates clean form code
- **Why:** Pairs perfectly with Zod validation
- **Cost:** None - open source

#### Zod (not Yup, Joi)
- **Why:** TypeScript-first validation
- **Why:** Share schemas between frontend and backend
- **Why:** AI generates excellent Zod schemas
- **Cost:** None - open source

---

### Backend Stack (Azure)

#### Node.js + TypeScript (not Python, Go, C#)
- **Why:** Same language as frontend
- **Why:** AI generates excellent TypeScript
- **Why:** Largest ecosystem (npm)
- **Why not Python:** Less TypeScript code reuse
- **Why not Go:** Harder for AI, less ecosystem
- **Why not C#:** Less AI training data
- **Cost:** None - open source

#### Fastify (not Express, Koa, Hapi)
- **Why:** Fastest Node.js framework
- **Why:** TypeScript-first design
- **Why:** JSON schema validation built-in
- **Why:** AI generates clean Fastify code
- **Why not Express:** Slower, callback-based, not TypeScript-native
- **Cost:** None - open source

#### PostgreSQL (Azure Database)
- **Why:** Most powerful open-source database
- **Why:** ACID compliance, complex queries
- **Why:** AI generates good SQL
- **Why not SQL Server:** Licensing costs
- **Why not CosmosDB:** NoSQL harder for complex queries
- **Cost:** Azure managed: ~$20-100/month depending on size

#### node-pg-migrate (not Prisma Migrate, Drizzle Kit)
- **Why:** SQL-first migrations (readable)
- **Why:** Version-controlled SQL files
- **Why:** No ORM required
- **Cost:** None - open source

#### Raw SQL with pg Pool (no ORM)
- **Why:** More readable for humans and AI
- **Why:** Better performance
- **Why:** Easier to review AI queries
- **Why not Prisma:** Abstraction makes AI confused
- **Cost:** None

#### Azure SignalR (not Socket.io, Pusher)
- **Why:** Managed service (no server to maintain)
- **Why:** Scales automatically
- **Why:** Integrates with Azure
- **Cost:** Free tier: 20 concurrent connections

#### Azure AD B2C (not Auth0, Clerk)
- **Why:** Enterprise SSO integration
- **Why:** Compliance (GDPR, SOC2)
- **Why:** Integrates with Azure ecosystem
- **Cost:** Free: 50K monthly active users

---

### Development Tools

#### pnpm (not npm, yarn, bun)
- **Why:** Fastest install times
- **Why:** Disk space efficient
- **Why:** Strict dependency resolution
- **Cost:** None

#### Docker Compose (for local dev)
- **Why:** PostgreSQL locally matches production
- **Why:** Consistent environment
- **Why:** Easy to spin up dependencies
- **Cost:** None

#### Vitest (not Jest)
- **Why:** Vite-native, faster
- **Why:** ESM-native, modern
- **Why:** AI generates good tests
- **Cost:** None

#### Playwright (not Cypress)
- **Why:** True browser automation
- **Why:** Multiple browsers
- **Why:** Better for AI
- **Cost:** None

#### ESLint + Prettier
- **Why:** Code quality + formatting
- **Why:** Auto-fix on save
- **Cost:** None

---

### Infrastructure (Azure)

#### Azure Static Web Apps (not Azure App Service)
- **Why:** Optimized for SPAs
- **Why:** Free tier generous
- **Why:** Integrated CDN
- **Why:** Easy GitHub Actions integration
- **Cost:** Free tier unlimited

#### Azure Container Apps (not Azure Functions, App Service)
- **Why:** Docker-based (portable)
- **Why:** Auto-scaling
- **Why:** Microservices-ready (when needed)
- **Why not Functions:** Cold starts, size limits
- **Why not App Service:** More expensive, less flexible
- **Cost:** ~$20-50/month for small workload

#### Azure Key Vault (not hardcoded secrets)
- **Why:** Secure secret storage
- **Why:** Access logging
- **Why:** Enterprise compliance
- **Cost:** ~$0-5/month (minimal usage)

#### GitHub Actions (not Azure DevOps)
- **Why:** Integrated with GitHub
- **Why:** Better for open source
- **Why:** AI generates good workflows
- **Cost:** Free for public, 2K minutes private

#### Sentry (not Application Insights only)
- **Why:** Better developer experience
- **Why:** Source maps, releases, breadcrumbs
- **Why:** Free tier sufficient
- **Why also App Insights:** Azure native, compliance
- **Cost:** Sentry free: 5K errors/month

#### Resend (not SendGrid, Azure Communication Services)
- **Why:** Best developer experience
- **Why:** React Email integration
- **Why:** Simple API, great docs
- **Why not SendGrid:** Harder API, complex
- **Why not Azure Comm Services:** Overkill for email
- **Cost:** Free: 3K emails/month

#### React Email (not MJML)
- **Why:** Write emails as React components
- **Why:** TypeScript support
- **Why:** AI generates excellent React
- **Cost:** None - open source

---

### AI Development

#### Cline (not Cursor, GitHub Copilot)
- **Why:** Model-agnostic
- **Why:** Transparent pricing
- **Why:** Open source
- **Why:** Fine-grained controls
- **Why:** VS Code native
- **Cost:** $0 for extension

#### Claude 3.5 Sonnet (not GPT-4)
- **Why:** Best TypeScript code generation
- **Why:** Best React patterns
- **Why:** Superior error handling
- **Why:** Security-aware
- **Cost:** ~$20-30/month typical usage

---

## Architecture Patterns

### Multi-Tenancy (Dormant)
Every table has `tenant_id UUID REFERENCES tenants(id)` (nullable).

**Why dormant:**
- Enable later for multi-customer scenarios
- No performance cost when unused
- Enterprise-ready when needed

### Feature Flags (Database)
Simple table: `feature_flags (name, enabled, rollout_percentage)`

**Why database:**
- No external service
- Easy admin UI
- Good enough for most cases

### Analytics (Database Events)
Separate `analytics` schema with `events` table.

**Why not Azure App Insights only:**
- Own your data
- Query with SQL
- Custom analysis

**Use both:** App Insights for infrastructure, events table for business metrics.

### User Feedback (Database)
Table: `user_feedback (type, title, description, status)`

**Why not external service:**
- Own your data
- Easy SQL queries
- Build custom admin UI

---

## Deployment Strategy

### Staging → Production
- **main branch** → Auto-deploy to staging
- **Manual promotion** → Deploy to production
- **Why:** Manual QA gate before production

### GitHub Actions CI/CD
- **On PR:** Tests, linting, type-check
- **On merge:** Deploy staging
- **Manual:** Deploy production

### Synthetic Monitoring
GitHub Actions + Playwright every 15 minutes.

**Why not Azure Monitor only:**
- Test actual user flows
- Catch UI breakage
- Free (GitHub Actions)

---

## Security

### Authentication: Azure AD B2C
- **SSO:** SAML, OAuth, OpenID Connect
- **MFA:** Built-in support
- **Compliance:** GDPR, HIPAA, SOC2 ready

### Secrets: Azure Key Vault
- **Encrypted:** At rest and in transit
- **Audit logs:** Who accessed what
- **Rotation:** Automated secret rotation

### Network: Azure Virtual Network
- **Private endpoints:** Database not public
- **Firewall rules:** IP whitelisting
- **DDoS protection:** Built-in

### Input Validation
Zod schemas frontend AND backend.

**Why both:**
- Frontend: Better UX
- Backend: Security

---

## Cost Optimization

### Azure Free Tier
- Static Web Apps: Unlimited
- Container Apps: Limited free compute
- Database: $0-5/month (minimal size)
- Key Vault: $0-5/month
- SignalR: Free 20 connections
- AD B2C: Free 50K MAU

**Total MVP: $40-80/month** (Azure + Claude API)

### Cost Monitoring
- Azure Cost Management (built-in)
- Budget alerts configured
- Resource tagging for attribution

### When to Upgrade
- Database: When exceed free tier storage/compute
- Container Apps: When need more scale
- SignalR: When exceed 20 connections

---

## What We Explicitly DON'T Use

### No Next.js
- **Why:** Overkill, complexity
- **AI:** Harder to navigate

### No Redux
- **Why:** React Query for server state
- **Why:** useState for local state

### No Prisma ORM
- **Why:** Raw SQL more readable
- **Why:** Better performance

### No Azure Functions for API
- **Why:** Cold starts
- **Why:** Container Apps more flexible

### No Microservices (Yet)
- **Why:** Monolith sufficient until scale
- **Why:** Easier for AI
- **When:** Split when bottlenecks emerge

### No GraphQL
- **Why:** REST simpler
- **Why:** OpenAPI/Swagger auto-docs
- **Why:** AI generates better REST

---

## Trade-offs We Accept

### Azure Vendor Lock-in
**Trade-off:** Harder to migrate
**Benefit:** Enterprise features, compliance
**Mitigation:** Docker containers, PostgreSQL portable

### No Server-Side Rendering
**Trade-off:** Worse initial load, SEO
**Benefit:** Simpler architecture
**When to reconsider:** High-traffic content site

### Database for Analytics
**Trade-off:** Less sophisticated
**Benefit:** Own data, query with SQL
**When to upgrade:** Need dashboards

### 20-40% Test Coverage
**Trade-off:** Not comprehensive
**Benefit:** Faster shipping
**Why:** AI-generated CRUD is reliable

---

## Enterprise Considerations

### Compliance
- **GDPR:** Azure is compliant, data export via SQL
- **HIPAA:** Azure Business Associate Agreement available
- **SOC2:** Azure certified

### High Availability
- **Database:** Azure managed (99.99% SLA)
- **Static Web Apps:** Multi-region CDN
- **Container Apps:** Auto-scaling, health checks

### Disaster Recovery
- **Database:** Automated backups, point-in-time restore
- **Secrets:** Key Vault replication
- **Code:** Git version control

### Monitoring
- **Application Insights:** APM, logs, traces
- **Sentry:** Error tracking, releases
- **Synthetic:** Playwright tests

---

## Upgrade Paths

**When you outgrow this:**

- **Search:** Add Azure Cognitive Search
- **Caching:** Add Azure Cache for Redis
- **Analytics:** Power BI integration
- **Multi-region:** Azure Front Door
- **Microservices:** Split to multiple Container Apps
- **Queue:** Azure Service Bus for async tasks
- **CDN:** Azure CDN for static assets

---

## Azure vs Supabase (Our Other Template)

**Choose Azure if:**
- Enterprise customers (compliance)
- Need SSO/SAML
- Azure credits/commitment
- C-suite requires it

**Choose Supabase if:**
- Indie/startup
- Want fastest setup
- Prefer all-in-one platform
- Budget conscious

**Both have:**
- Same frontend stack
- Same AI workflow
- Same code quality

---

## References

- Azure: https://docs.microsoft.com/azure
- Fastify: https://fastify.dev
- React Query: https://tanstack.com/query/latest
- Zod: https://zod.dev
- shadcn/ui: https://ui.shadcn.com
- Cline: https://cline.bot
- Claude: https://anthropic.com

---

**Questions about decisions? Open a GitHub Discussion.**
