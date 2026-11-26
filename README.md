# BrainsBit website (Angular + Tailwind)

Converted from the original HTML / CSS / Bootstrap / JS site. Same structure and
tooling as the NDEGTL project: Angular 17 standalone components, Tailwind CSS 3,
DaisyUI plugin, SSR + prerender, one `.ts` / `.html` / `.css` file per component.

## Run

```bash
npm install
npm start                    # dev server  -> http://localhost:4200
npm run build                # production build + prerender (dist/brainsbit)
npm run serve:ssr:brainsbit  # serve the SSR build (node)
```

## Design system

- **Type:** Funnel Display (headlines), Geist (body), Geist Mono (code in the scenes),
  all self-hosted through `@fontsource-variable/*` (no Google Fonts request).
- **Colour** (`tailwind.config.js`): near-black `ink`, electric `brand` blue (#0072ce),
  `brand-soft` ice tint, `paper`, `line`, `mint` for success, `amber` for rare accents.
- **The stage:** every page's visual lives on a blue `.stage` surface
  (`<app-stage>`). Headers and service sections put a live scene on it, built in
  code (no stock illustrations): a code editor, a browser wireframe, two phones, a
  test run, an orbit of values, a job list, a chat thread.
- **Page header:** title and lead on the left, a stage with the page's scene on the
  right (`<app-page-header scene="...">`). Scenes live in `shared/service-scene`
  and `shared/header-scene`.
- **Motion:** each scene starts only when it scrolls into view (`appInView`), plus
  scroll-reveal (`appReveal`), the hero entrance and self-drawing chart/traces,
  stacked service cards on the home page, and a logo marquee. Everything respects
  `prefers-reduced-motion`.
- **Navbar:** info bar that collapses on scroll, transparent bar that turns frosted
  white, scroll-progress line, Services panel, mobile drawer (staggered links,
  scroll lock, Esc to close). Floating WhatsApp (set the real number in
  `src/app/config/company.config.ts`) and back-to-top buttons.

## Structure

```
src/app
├─ app.routes.ts            AppLayout (navbar + footer) -> lazy HOME_ROUTES
├─ config/company.config.ts company info, WhatsApp, EmailJS keys
├─ data/                    services + service-detail content (single source)
├─ directives/              reveal, in-view (starts scene animations), spotlight
├─ services/                contact (EmailJS), scroll (shared scroll state)
└─ features
   ├─ shared/               app-layout, navbar, footer, page-header, stage,
   │                        service-scene, header-scene, section-heading,
   │                        service-block, feature-grid (cards or numbered steps),
   │                        engagement-model, contact-form, call-us, floating-actions
   └─ home/                 home, hero, hero-showcase, clients-marquee, about-us,
                            services, service-detail (x4), careers, contact
```

## Routes

| Old file                         | New route                                  |
|----------------------------------|--------------------------------------------|
| home.html                        | `/`                                        |
| about.html                       | `/about-us`                                |
| services.html                    | `/services`                                |
| Services/customService.html      | `/services/custom-software-development`    |
| Services/webServices.html        | `/services/web-application-development`    |
| Services/mobileService.html      | `/services/mobile-application-development`  |
| Services/QAService.html          | `/services/quality-assurance-testing`       |
| careers.html                     | `/careers`                                 |
| contact.html                     | `/contact`                                 |

Brand colour is `brand` (#0072ce) in `tailwind.config.js`.
