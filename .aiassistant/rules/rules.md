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

- **Animations (own components):** Prefer the new native API — use `animate.enter` / `animate.leave` with CSS classes; **do not** add legacy triggers or `BrowserAnimationsModule`.
  - Why: `@angular/animations`, `provideAnimations()` and `provideAnimationsAsync()` are **deprecated in v20.2** and planned for removal in v23. Native CSS + `animate.*` reduces bundle size and complexity.
  - Note: If a 3rd-party (e.g., PrimeNG 20) still needs Angular’s engine, keep `provideAnimations()` at app level, but **write new code with `animate.*`**.

**Example**
```html
<!-- template -->
<button (click)="open.set(!open())">Toggle</button>

@if (open()) {
  <div class="card" animate.enter="fade-in" animate.leave="fade-out">
    Hello!
  </div>
}
```
```css
/* styles.scss (or component css) */
.fade-in   { animation: slide-fade-in 200ms ease-out both; }
.fade-out  { animation: slide-fade-out 180ms ease-in  both; }

@keyframes slide-fade-in  { from { opacity:0; transform:translateY(8px) } to { opacity:1; transform:none } }
@keyframes slide-fade-out { from { opacity:1; transform:none }         to { opacity:0; transform:translateY(8px) } }
```

**Sources:** Angular deprecates `provideAnimations*` and introduces `animate.enter/leave` (v20.2) and migration guide. 

➡ **Extended guidance:** [docs/ai/best-practices.md](../../docs/ai/best-practices.md)
