# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing site for **leaStudios**. Plain HTML, CSS, and a single small JS file — no build system, no package manager, no tests. Served locally via **Laravel Herd** (the parent directory `~/Herd/` is Herd's site root, so this project is reachable at `http://leastudios.test`).

## Local development

- Open `http://leastudios.test` in a browser. Herd serves the directory directly; just edit files and refresh.
- Pretty URLs work because each route is its own subdirectory containing an `index.html`. To add a new page, create `<slug>/index.html` — do not create top-level `.html` files for routed pages.
- There is no build, lint, or test command. Validate changes by loading the affected pages in the browser.

## Structure

- `index.html` — home page.
- `<slug>/index.html` — one directory per routed page. Current routes: `approach/`, `work/`, `agatha-christie-reading-list-support/`, `privacy-policy/`.
- `work/<slug>/index.html` — individual case studies, nested one level deeper. Current: `work/agatha-christie-reading-list/`.
- `css/styles.css` — single shared stylesheet for every page. Edit here, not inline.
- `js/scripts.js` — single shared script (mobile breakpoint, smooth-scroll, active-nav highlighting). Loaded by every page.
- `images/` — shared image assets.

## Conventions to preserve

- **Asset paths are relative, navigation paths are absolute.** Subpages reference assets with `../css/styles.css` (or `../../` from `work/<slug>/`), but link to other pages with absolute paths (`/`, `/work`, `/approach`, etc.). Absolute nav links keep the active-link logic in `js/scripts.js` working.
- **Header, footer, and nav are duplicated across every `index.html` (currently 6 pages).** When adding or renaming a route, update the `<nav>` and `.footer-links` blocks in *every* page, and add a matching branch to the `currentPath` check in `js/scripts.js`. The Work dropdown markup (`.nav-item-work` with its `.work-dropdown` block listing every project) is also duplicated everywhere — when a new project ships, it must be added in all six places. **If we get past ~10 routes or the dropdown gets unwieldy, this is the point at which a build step or include mechanism stops being premature optimization.**
- **The two legacy routes are permanent.** `/privacy-policy` and `/agatha-christie-reading-list-support` are referenced from the App Store and from external bookmarks — never delete them, never redirect them. They can be updated in place. The Agatha case study at `/work/agatha-christie-reading-list` is a *parallel* portfolio entry, not a replacement.
- **Theming is via CSS custom properties** declared on `:root` in `css/styles.css` (`--paper`, `--ink`, `--ink-muted`, `--rule`, `--terracotta`, etc.). Use these instead of hard-coded colors. Avoid inline `style="..."` attributes; add a class to `styles.css` instead.
- **Fonts**: Fraunces (display, with `opsz` variable axis) and Inter (body) loaded from Google Fonts in each `<head>`. Keep the `<link rel="preconnect">` lines and the single combined font URL when creating a new page.

## Web guidelines (project-wide)

- WCAG 2.1 AA minimum; semantic HTML required.

## Obsidian Vault

Vault path: `/Users/adamlea/Library/Mobile Documents/iCloud~md~obsidian/Documents/adam-leastudios`
Project notes: `01-Projects/Web/leastudios/`

### At the end of each session, update the vault:
- Log any architectural decisions to `decisions.md`
- Log any bugs found or fixed to `bugs.md`
- Append a session summary to `notes.md`

### Format for session notes:
## YYYY-MM-DD
**Built / Changed:**
**Decisions:**
**Bugs:**
**Next:**