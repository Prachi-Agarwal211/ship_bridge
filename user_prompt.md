<USER_REQUEST>
# SHIPBRIDGE — FINAL SURGICAL FIX PROMPT
## One Definitive Document. Execute Phase by Phase. Do Not Skip Anything.

---

## CRITICAL READING BEFORE YOU TOUCH ONE FILE

You are working on a **Next.js 16 + React 19 + TypeScript + CSS Modules** website.
- Package manager: npm
- Smooth scroll: `lenis/react` (ReactLenis)
- Animations: `gsap` + `@gsap/react` + `framer-motion`
- **No Tailwind**. Only CSS Modules.
- Every CSS change must go in the correct `.module.css` file.
- Every component that uses `window`, `document`, `gsap`, or `lenis` must be `'use client'`.

**COLOR SYSTEM — NEVER DEVIATE:**
```
--color-bg:       #000000
--color-surface:  #08080a
--color-orange:   #f97316
--color-green:    #22c55e
--color-text:     #ffffff
--color-text-muted: rgba(255,255,255,0.65)
--color-border:   rgba(255,255,255,0.06)
```

---

## PHASE 0 — BREAKING BUG FIXES (DO THESE FIRST — NOTHING ELSE RUNS CORRECTLY WITHOUT THEM)

### FIX 0.1 — Double RAF Bug (causes 2× scroll speed)

**File: `src/app/layout.tsx`**

FIND this line:
```tsx
<ReactLenis root options={{ lerp: 0.08, duration: 1.2, syncTouch: false, autoRaf: true }}>
```
REPLACE WITH:
```tsx
<ReactLenis root options={{ lerp: 0.08, duration: 1.2, syncTouch: false, autoRaf: false }}>
```

**Why:** `autoRaf: true` + the GSAP ticker in `GSAPProvider.tsx` both call `lenis.raf()` — scroll runs at 2× speed. Setting `autoRaf: false` makes GSAP the single RAF driver.

---

### FIX 0.2 — AboutCompany Broken ScrollTrigger Pin (freezes entire page mid-scroll)

**File: `src/components/AboutCompany.tsx`**

FIND AND DELETE this entire block (inside the `useGSAP` callback):
```tsx
// Deck of Cards sticky effect
ScrollTrigger.create({
  trigger: sectionRef.current,
  start: 'top top',
  end: '+=100%',
  pin: true,
  pinSpacing: false,
});
```

DELETE the `sectionRef` declaration too:
```tsx
const sectionRef = useRef<HTMLElement>(null);
```

And remove `ref={sectionRef}` from the `<section>` elem
<truncated 45215 bytes>
n>
              </div>
            </div>
            <div className={styles.cardProgress}>
              {STEPS.map((_, pi) => (
                <div key={pi} className={`${styles.progressDot} ${pi <= i ? styles.progressDotActive : ''}`} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile List */}
      <div className={styles.mobileList}>
        {STEPS.map((step) => (
          <div key={step.num} className={styles.mobileItem}>
            <div className={styles.mobileNum} style={{ color: step.color }}>{step.num}</div>
            <div className={styles.mobileContent}>
              <span className={styles.mobileLabel}>{step.label}</span>
              <h3 className={styles.mobileTitle}>{step.title}</h3>
              <p className={styles.mobileBody}>{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

**`src/components/Process.module.css` — Complete Replacement:**

```css
.section {
  padding: var(--space-section) 0;
  position: relative;
  color: #fff;
}

.header {
  max-width: 1400px;
  margin: 0 auto 5rem auto;
  padding: 0 clamp(1.5rem, 5vw, 4rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.overline {
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-orange);
}

.title {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -1.5px;
}

.orange { color: var(--color-orange); }

.subtitle {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.6);
  max-width: 50ch;
  line-height: 1.6;
}

/* Desktop Stack */
.stackWrap {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 4rem);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
<truncated 16296 bytes>

NOTE: The output was truncated because it was too long. Use a more targeted query or a smaller range to get the information you need.