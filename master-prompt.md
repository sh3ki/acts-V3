# Master Prompt: Design and Build a Distinct ACTS Computer College Website

## Role and objective

Act as a senior web designer, UX writer, and frontend engineer. Build a complete, polished, responsive website for **ACTS Computer College** in the existing target project. This is a new design direction for the same school: preserve verified school facts, but invent a new presentation, visual identity, page composition, writing, and interaction design.

The deliverable is a **frontend-only React + TypeScript website with exactly four primary pages**:

| Navigation label | Route | Purpose |
|---|---|---|
| ACTS | `/` | Introduce the school and orient prospective students and families |
| About | `/about` | Explain the institution, its mission and vision, history, and president’s message |
| Programs | `/programs` | Present Senior High School strands and college degrees |
| Contact | `/contact` | Make it easy to contact the school or prepare an inquiry |

The labels above are the visible primary navigation labels. Each route must have its own distinct H1 and page-specific layout. Do not add extra top-level pages. In-page anchors and expandable content are fine.

## Project locations and source of truth

**Factual reference project:**

`C:\Users\USER\Documents\SYSTEMS\WEB\TYPESCRIPT\REACT\ACTS`

**Target project to implement:**

`C:\Users\USER\Documents\SYSTEMS\WEB\TYPESCRIPT\REACT\acts-V3`

First inspect instructions and project structure in both folders. Read factual source files in the reference project, especially `src/data/institution.ts`, `src/data/programs.ts`, `src/data/personnel.ts`, `acts-details.md`, and relevant page content. Inspect the target project's package scripts, dependencies, existing assets, and current code before making changes. The source project is an authority for school facts only. Its visual design, layout, wording, styles, and components are not a template to reproduce.

Do not overwrite useful target-project setup without a concrete reason. Do not edit the reference project. Make changes in the target project only.

## Non-negotiable creative brief

Create a **completely different style, design, and web layout** from the ACTS reference website. Preserve the requested color family—**green, yellow/gold, black, and white**—but make the new site unmistakably original. A palette match is expected; a composition match is not.

Use a contemporary **editorial / campus journal** art direction: confident typography, a visible grid, deliberate whitespace, strong alignment, restrained rules and labels, and a few bold geometric blocks. It should feel welcoming and credible for a Philippine higher-education institution, with enough warmth to serve students and families. Avoid a generic corporate-school template.

The following are design constraints, not optional suggestions:

- Do not copy the reference site's page silhouettes, section order, hero composition, card treatment, decorative motifs, image masks, image placement, animations, or visual rhythm.
- Do not use its flowing organic waves, sweeping gold curves, cursive type, oversized ornamental numerals, or similar signature decoration.
- Do not make the new site look like the old site with a different font and colors. Make new layout decisions at the page and section level.
- Do not reuse reference photography or logo as site imagery. The user plans to provide different pictures; use those when they appear in the target project.
- Do not make up school facts, image provenance, people, or official claims.

## Visual system specification

Create and document the visual system in CSS custom properties. Tune exact values as needed while keeping this hierarchy:

### Color

- **ACTS forest green:** primary navigation, key actions, and selected large fields. Starting point: `#174B35`.
- **Deep green:** dark green panels and footer. Starting point: `#103526`.
- **Golden yellow:** small emphasis, tags, rules, and active details. Starting point: `#E9B936`.
- **Ink black:** primary text and occasional dark surfaces. Starting point: `#171916`.
- **Paper white:** primary background. Starting point: `#FFFFFF`.
- **Warm paper:** alternate section background. Starting point: `#F5F3EC`.
- **Muted gray:** supporting text and borders, with adequate contrast.

Use yellow/gold as an accent, not as long body text on white. Confirm readable contrast for text, controls, and focus states. Do not use gradients as the default surface treatment; use flat color fields and only a subtle gradient when it serves a specific image or contrast need.

### Typography

- Use a distinctive, confident display face for headlines and a highly readable sans serif for body/UI text. Prefer fonts already installed in the project; otherwise use a dependable web-safe/system fallback rather than adding a remote font dependency by default.
- Headlines should use sentence case, tight but readable line-height, and responsive sizing with `clamp()`.
- Body copy should be comfortable on mobile, with restrained line length (roughly 60–75 characters for long paragraphs).
- Use uppercase sparingly for small overlines, categories, and metadata. Never set whole paragraphs in uppercase.
- Do not use cursive/script type.

### Grid, shapes, and components

- Use a centered responsive content grid with a clear max width, consistent gutters, and a 12-column desktop logic where appropriate.
- Use square or subtly rounded corners (small radius only); avoid pill-shaped cards and excessive rounded blobs.
- Use fine rules, small numbered labels, solid color panels, and rectangular image frames as the primary graphic language.
- Establish consistent button heights, border weights, section spacing, and focus styles.
- Prefer a few strong compositions over a page full of repeated cards. Vary section backgrounds and widths to create rhythm.
- Decorative elements must support hierarchy, not compete with content. Use CSS or SVG for simple geometry; no decorative raster assets.

### Motion

Use restrained transitions for navigation, buttons, accordions, and image hover. Keep motion quick and purposeful. Respect `prefers-reduced-motion`; all content and controls must remain usable without animation. Avoid scroll hijacking, parallax dependence, and elaborate entrance choreography.

## Shared site shell

### Header

- Build one shared responsive header used on all four pages.
- Use a clean light header with a text-based ACTS Computer College wordmark if no new official logo asset has been supplied. Do not copy the old logo file into the new visual system.
- Desktop: wordmark left, four primary links grouped to the right, one clear contact/inquiry action. The active page must be visually apparent and programmatically identified.
- Header may become sticky after scrolling, but keep it compact and avoid covering anchor targets.
- Mobile: show the wordmark and a clearly labeled menu control. The menu must open/close with keyboard and pointer, expose expanded state to assistive tech, close after navigation, and not trap the user unexpectedly.
- Include a skip-to-content link.

### Footer

- Use a deep-green or ink footer with strong contrast and a simple grid.
- Include ACTS Computer College, Santa Cruz, Laguna; useful links to all four routes; verified phone/email; and verified social channels where supplied.
- Use a short original closing line, not copied promotional copy.
- Include the current year dynamically if a copyright line is used. Do not invent a domain.

## Content rules

Use the exact verified details available in the reference. Centralize shared facts and contact information in typed data modules where practical.

Preserve these facts when supported by the source:

- ACTS Computer College; Santa Cruz, Laguna, Philippines; founded in 1987.
- Official school mission, vision, and core values.
- Verified historical milestones and dates.
- School President: **Prof. Ruben F. Macalinao, MBA, MM**.
- His supplied president’s message and correct attribution.
- Senior High strands: **ABM, ICT, STEM, HUMSS**.
- College degrees and descriptions from the source project's program data.
- Supplied official email, telephone numbers, postal address, and social URLs.

Keep formal statements and the president’s message verbatim when shown as quotations or official copy, correcting only obvious encoding display issues without changing their meaning. Write new headlines, section names, introductory copy, calls to action, and navigation support copy. Do not reuse copy from the old website except where it is an official statement or factual name.

Never invent tuition, deadlines, admissions requirements, program duration, accreditation, awards, scholarships, facilities, employment outcomes, faculty details, or services. Do not imply that an image shows ACTS students, staff, or campus unless it is supplied and identified as authentic. If source data conflicts or is ambiguous, use the most authoritative structured source and mention unresolved content in the completion summary.

## Image asset plan

The user will provide replacement photos. Before implementation, inspect target assets and note what is actually present. When the new assets are present:

- Use those assets, not the reference project's photos.
- Assign images to sections based on their real content and orientation.
- Preserve aspect ratio and use intentional `object-fit: cover` / `object-position` crops.
- Give meaningful alt text when the image communicates information; use empty alt text for purely decorative images.
- Centralize image paths or asset imports so replacement is easy.
- Do not claim a photo depicts ACTS if its provenance is unknown.

If no new pictures have been supplied yet, still implement the finished layouts. Use explicitly replaceable neutral placeholders or solid-color/typographic compositions, not unrelated stock photos and not fake photos. Keep placeholder treatment polished and keep asset mapping easy to update. Avoid copying the reference logo; create a typographic wordmark until an approved new logo is available.

## Page-by-page content and layout blueprint

The following structure gives detailed direction while requiring the builder to create original headings and visual execution. Keep these pages focused and substantial; do not pad them with generic filler.

### 1. ACTS homepage — `/`

**Purpose:** Quickly tell a prospective student what ACTS is, establish trust with real facts, and lead to programs or contact.

**Suggested composition and order:**

1. **Opening hero:** Use a distinctive split composition rather than a full-bleed copy of the reference hero. On desktop, consider a large typographic text field on one side and a tall, framed, user-supplied photograph or replaceable image treatment on the other. Include a small founding/location eyebrow, a fresh headline about learning, direction, or opportunity, one concise factual supporting paragraph, and two useful actions: Programs and About/Contact. On mobile, stack text before image and keep calls to action visible without a huge empty image block.
2. **At-a-glance facts:** A slim horizontal fact band or compact editorial strip for verified details such as 1987, Santa Cruz, Laguna, and the institution's actual educational focus. Do not invent metrics.
3. **Program pathways:** Introduce the Senior High and College options as two visually distinct, substantial blocks with short descriptions and links to the relevant area on Programs. Avoid repeating one generic card component twice if a more editorial split works better.
4. **Purpose / identity preview:** A concise introduction to the school's mission and values, with a link to About. Use a green/white or paper/ink contrast block, not the reference site's decorative treatment.
5. **President’s welcome preview:** Use a short faithful excerpt from the supplied message, correct attribution, and link to the full message on About. Do not paraphrase the excerpt as a direct quote.
6. **Closing action:** A clear, compact contact or program inquiry invitation.

Use fresh homepage H1 and section headings; do not use labels or lines copied from the reference site. Keep homepage copy concise and avoid unsupported promises.

### 2. About — `/about`

**Purpose:** Explain who ACTS is and present its official identity and history with care.

**Suggested composition and order:**

1. **Page opening:** A typographic title area with a newly written H1, concise introduction, and a small verified founding/location label. Use a different composition from the homepage hero.
2. **Institution overview:** Explain the school's identity using sourced facts and new concise copy.
3. **Mission and vision:** Present the official statements in a readable two-column layout on wide screens and a stacked layout on mobile. Label each clearly. Avoid tiny type or large decorative quotation marks.
4. **Core values:** Present the actual values in a compact numbered list or aligned editorial rows. Preserve wording from the source.
5. **History:** Present all verified milestones chronologically. A clear timeline or year-led editorial list is appropriate, with dates, names, and descriptions easy to scan. On mobile it must become a simple vertical sequence without horizontal scrolling.
6. **President’s message:** Present the full supplied message with respectful spacing, exact attribution, and the president's role. Use a portrait only if a new, confirmed portrait is supplied. Do not reuse the reference president photo.
7. **Next step:** Link to Programs and Contact.

Use a fresh About H1 and newly written section headings. Official school statements and the president's message retain their factual wording.

### 3. Programs — `/programs`

**Purpose:** Help visitors understand the real study options and make it easy to ask about one.

**Suggested composition and order:**

1. **Page opening:** Fresh H1, concise orientation copy, and in-page jump links for Senior High and College. Do not reuse the reference's program page hero title or design.
2. **Senior High section:** Introduce the school's Senior High offering accurately, then show ABM, ICT, STEM, and HUMSS as four clearly differentiated entries. Preserve official strand names and supplied descriptions. Don't imply details beyond the source.
3. **College section:** Present each verified degree from the data source with its official name, abbreviation, and accurate supplied description. Use a clean list/grid with strong scanning hierarchy. Make sure all programs fit mobile without horizontal scroll.
4. **Inquiry affordance:** Each strand/program entry may link to Contact with a query parameter or selected program value. Preserve the chosen value when navigating and show it in the contact form. Also provide a general inquiry route.
5. **Closing action:** Contact the school for program information. Do not promise availability or enrollment status unless verified.

Use the exact program list in the source, not a shortened or invented set. Do not invent course outlines, career guarantees, length, fees, schedules, or admission rules. If the source's wording or program naming is inconsistent, preserve the authoritative program data and surface the issue in the completion summary.

### 4. Contact — `/contact`

**Purpose:** Make accurate contact information easy to use and make the inquiry flow honest and accessible.

**Suggested composition and order:**

1. **Page opening:** New H1 and brief helpful introduction.
2. **Contact details:** A strong information panel with the verified physical address, email, landline, mobile numbers, and supplied social channels. Use `mailto:`, `tel:`, and verified external URLs where appropriate. Do not invent a map URL; a map/directions link is allowed only when built from the verified address and clearly points to directions.
3. **Inquiry form:** Include name, email, inquiry type, optional program selection, and message fields as appropriate. All fields need visible labels, keyboard access, validation, and clear inline error/success messages. Avoid collecting unnecessary sensitive data.
4. **Frontend-only submission behavior:** There is no backend. Either open a properly encoded `mailto:` draft with the inquiry details, or show a clear local review/confirmation with copyable inquiry text and an explicit instruction to send it by email. Never claim the school received a submission. Handle unavailable email clients gracefully.
5. **Location context:** Show the address as text and optionally a simple location panel. Do not invent campus imagery, embed a fake map, or claim precise directions not verified by source.

## Responsive behavior

Design responsively rather than shrinking desktop layouts. At minimum consider wide desktop, laptop, tablet, and narrow mobile widths (including 320–390 px).

- No horizontal page overflow, clipped headings, overlapping controls, or tiny body copy.
- Use fluid type and spacing with `clamp()` where helpful.
- Stack multi-column content in a deliberate order on mobile.
- Keep the full program names legible and avoid narrow multi-column tables on phones.
- Ensure menus, buttons, form fields, and accordion controls have comfortable touch targets.
- Use image ratios and cropping that work at each breakpoint.
- Preserve a clear reading order in DOM and keyboard navigation.

## React and TypeScript implementation requirements

- Use the target project's existing React + TypeScript setup and router/dependencies if available.
- Implement exactly the four primary routes: `/`, `/about`, `/programs`, `/contact`.
- Ensure direct route loads and refresh are handled by the existing setup or its deployment fallback.
- Create reusable shared header, footer, buttons/links, and content primitives where useful, but avoid forcing every section into identical cards.
- Keep factual content and program data typed and centralized where practical.
- Set page-specific document titles and descriptions if the current setup supports this simply.
- Use semantic elements, one H1 per page, meaningful link labels, visible focus indicators, accessible menu state, accessible forms, and reduced-motion support.
- Do not add a backend, database, authentication, analytics, external form service, or remote submission service.
- Do not leave visible controls inert, use `href="#"`, or fabricate social URLs.
- Add dependencies only when a clear need exists and the target project's setup supports them.

## Quality review and verification

After implementation:

1. Inspect all four routes in the running site or available preview.
2. Review desktop and mobile layouts; check hierarchy, section rhythm, image behavior/placeholders, contrast, focus states, and overflow.
3. Exercise navigation, mobile menu, in-page jumps, program-to-contact preselection, contact links, form validation, and the frontend-only submission behavior.
4. Run the target project's available build and type-check commands. Run lint only if a configured lint command exists.
5. Fix issues found. Report exactly which checks ran and their result. Do not claim visual inspection, browser tests, or passing commands that did not occur.

## Definition of done

The site is finished when:

- All four pages—ACTS, About, Programs, Contact—are implemented and linked.
- The visual system uses the requested green, yellow/gold, black, and white family and is clearly different from the reference in composition, typography, components, and page rhythm.
- All official school information shown is sourced and accurate; official statements and the president’s message retain their meaning and attribution.
- Each page has an original title, H1, section headings, and useful page-specific structure.
- New supplied pictures are used when present; otherwise polished replaceable placeholders are ready without fake or borrowed photography.
- Navigation, program inquiry paths, contact methods, and form behavior work as described.
- Desktop and mobile layouts are accessible and usable.
- Actual build/type checks and any visual review are summarized honestly.

Begin by inspecting both projects and the available assets, then implement the complete four-page site. Do not stop after proposing a design, creating a plan, or building only the homepage. At completion, summarize the pages and interactions, files changed, assets used or still awaited, verification performed, and any unresolved source-data questions.
