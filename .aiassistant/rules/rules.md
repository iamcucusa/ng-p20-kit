---
apply: always
---

# Project AI Guidelines (TL;DR)

**Use:** Summarize + review; never paste secrets; cite sources; prefer diff-only code; respect licenses.  
**Style:** Angular 20 / PrimeNG 20; standalone APIs; OnPush/trackBy; modern template control flow; Tailwind tokens.

## Musts
- No secrets / tokens / customer data in prompts.
- Prefer minimal, copy/pasteable diffs.
- Cite upstream sources for non-trivial code.
- Match repo tooling (TS/ESLint/Prettier, Angular 20 patterns).

## When generating Angular code
- Standalone components; `OnPush`; `trackBy` on lists.
- Prefer signals & new control flow (`@if/@for`) where safe.
- PrimeNG 20 APIs only; avoid deprecated components.

➡ **Extended guidance:** [docs/ai/best-practices.md](../../docs/ai/best-practices.md)
