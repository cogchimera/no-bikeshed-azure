# Contributing to No-Bikeshed Templates

## Philosophy: No Bikeshedding

This template exists to **eliminate choices**, not provide them.

### Core Principles

1. **One way to do things** - No "Option A vs Option B"
2. **Decisions made** - We've chosen the best tool for each job
3. **No alternatives** - Don't mention other frameworks/tools
4. **Start building** - Users focus on their app, not setup

### What We're Optimizing For

- **Code quality** - Best AI-generated code (TypeScript/React)
- **Speed to production** - Clone → Setup → Build → Deploy
- **Minimal decisions** - Users make ZERO tech choices
- **Transparency** - Clear costs, no surprises

## Making Changes

### ✅ Good Changes

- Fix bugs
- Improve documentation clarity
- Update dependencies
- Add missing error handling
- Better AI prompts
- Security improvements
- Performance optimizations

### ❌ Bad Changes

- Adding alternative tools ("you could also use X")
- Creating configuration options
- "Make it flexible" (no - keep it opinionated)
- Feature flags for tech choices
- Supporting multiple deployment targets
- Listing pros/cons of different approaches

## Decision Framework

Before adding anything, ask:

1. **Does this ADD a choice?** → ❌ Don't add it
2. **Does this REMOVE a choice?** → ✅ Great
3. **Does this make setup faster?** → ✅ Great
4. **Does this require users to decide?** → ❌ Don't add it

## Current Hard Decisions (DO NOT CHANGE without discussion)

### Stack (Both Templates)

**Frontend:**
- TypeScript (not JavaScript)
- React 18 (not Vue, Svelte, Angular)
- Vite (not Create React App, Next.js)
- Tailwind CSS (not other CSS frameworks)
- shadcn/ui (not Material-UI, Chakra, etc)
- React Hook Form + Zod (not Formik, Yup, etc)
- React Query (not Redux, Zustand for server state)
- React Router v6 (not Next.js router, TanStack Router)

**Development:**
- pnpm (not npm, yarn, bun)
- Node 20+ (specified in .nvmrc)
- ESLint + Prettier (pre-configured)
- Vitest (not Jest)
- Playwright (not Cypress, Testing Library only)

**AI Assistant:**
- Cline + Claude 3.5 Sonnet (not Cursor, Copilot, ChatGPT, etc)

**Deployment:**
- Staging → Production (manual promotion)
- GitHub Actions (not CircleCI, GitLab CI, Jenkins)

### P-Stack (Supabase) Specific

- Supabase (not Firebase, AWS Amplify, PocketBase)
- PostgreSQL (via Supabase)
- Supabase Auth (not Auth0, Clerk, NextAuth)
- Supabase Edge Functions (TypeScript/Deno)
- Vercel (not Netlify, CloudFlare Pages)
- Resend (not SendGrid, Mailgun, AWS SES)

### W-Stack (Azure) Specific

- Azure (not AWS, GCP)
- Fastify (not Express, Koa, Hapi)
- PostgreSQL (Azure Database)
- node-pg-migrate (SQL migrations)
- Azure Static Web Apps (frontend)
- Azure Container Apps (backend)
- Azure AD B2C (auth)
- Azure SignalR (realtime)
- Resend (not SendGrid, Mailgun)

## Changing Core Decisions

If you believe a core decision is wrong:

1. **Open a GitHub Discussion** (not Issue)
2. **Provide data:**
   - Why current choice is measurably worse
   - Why alternative is measurably better
   - How it affects AI code generation quality
   - Cost implications
   - Migration path for existing users
3. **Must demonstrate, not just opinion**
4. **Maintainers will decide**

**High bar:** We don't change unless significantly better for AI-assisted development.

## Documentation Standards

### DO:

- Write clear, direct instructions
- Use imperative mood: "Install Cline" not "You should install Cline"
- Show one way to accomplish tasks
- Explain WHY decisions were made (in docs/STACK.md, not READMEFIRST.md)
- Assume users are using Cline + Claude

### DON'T:

- List alternatives ("You could also use X")
- Say "some people prefer..."
- Use phrases like "optionally" or "alternatively"
- Provide multiple paths to same goal
- Apologize for being opinionated

### Example (Good):

```markdown
## Setup

Install Cline:
1. Open VS Code
2. Extensions → Search "Cline" → Install
```

### Example (Bad):

```markdown
## Setup

You have several options for AI assistants:
- Cline (recommended)
- Cursor (alternative)
- GitHub Copilot (another option)

Choose whichever you prefer...
```

## AI Prompt Guidelines

When writing prompts for users:

- Assume they're using Cline + Claude
- Be specific about tech stack
- Reference actual file paths in template
- Ask questions one at a time
- Wait for answers before proceeding
- Don't offer choices in prompts

## Testing Changes

Before submitting PR:

1. ✅ Actually use the template (don't just read the code)
2. ✅ Follow READMEFIRST.md exactly as written
3. ✅ Build a simple feature with Cline + Claude
4. ✅ Deploy to staging
5. ✅ Confirm no new choices introduced
6. ✅ Check that AI assistant can follow your docs

## Workflow for Template Changes

```bash
# 1. Clone the template
git clone https://github.com/cogchimera/no-bikeshed-supabase.git
cd no-bikeshed-supabase

# 2. Create branch
git checkout -b fix/description-of-fix

# 3. Make changes

# 4. Test with Cline
# Open in VS Code, open Cline, paste:
"I want to test this template. Walk me through setup."

# 5. Build a test feature
# Verify AI understands the stack and can generate good code

# 6. Commit with clear message
git add .
git commit -m "Fix: [clear description of what you fixed]"

# 7. Push and create PR
git push origin fix/description-of-fix
# Then create PR on GitHub
```

## Commit Message Format

Keep it simple:

```
Fix: [what you fixed]
Add: [what you added]
Update: [what you updated]
Remove: [what you removed]
```

Examples:
- `Fix: Supabase health check error handling`
- `Add: Contributing guidelines`
- `Update: Hard Cline+Claude recommendation`
- `Remove: SendGrid references (now using Resend)`

## Version Strategy

- Templates are **living documents**
- No semantic versioning
- Users pull latest when they want updates
- Breaking changes documented in commit message
- Major changes announced in GitHub Discussions

## Pull Request Process

1. **Create PR** with clear description
2. **Fill out PR template** (don't skip it)
3. **Wait for CI** to pass
4. **Respond to feedback** promptly
5. **Maintainer merges** when ready

## Common Rejection Reasons

PRs get rejected if they:

- ❌ Add user choices
- ❌ List alternative tools
- ❌ Make template "flexible"
- ❌ Introduce configuration options
- ❌ Don't follow testing checklist
- ❌ Break existing AI prompts

## Getting Help

- **Questions:** GitHub Discussions
- **Bugs:** GitHub Issues
- **Ideas:** GitHub Discussions first (not Issues)
- **Security:** Email maintainer directly

## Code of Conduct

- Be respectful
- Be constructive
- Understand this template is intentionally opinionated
- Don't argue for flexibility without strong data

## Remember

**This template is opinionated by design.**

If someone wants flexibility, there are hundreds of other templates.
This one is for people who want to **stop deciding and start building**.

We're optimizing for:
1. Best AI-generated code quality
2. Fastest path to production
3. Zero configuration decisions

Not for:
1. Maximum flexibility
2. Supporting every use case
3. Pleasing everyone

---

**Thanks for contributing to No-Bikeshed!** 🚀
