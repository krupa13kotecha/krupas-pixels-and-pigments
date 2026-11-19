# Krupas Pixels And Pigments

Build a multi-page personal portfolio website for Krupa Kotecha, a CSE undergrad (AI/ML and web dev) who is also a watercolor artist. The site must feel handmade, warm, whimsical and elegant, with creative animations and hover interactions, while staying professional. It must look and behave identically on phone and desktop (mobile-first, responsive).

## Tech
React + TypeScript + Tailwind CSS + React Router + Framer Motion + lucide-react icons. Four separate routes: / (Home), /about, /projects, /artwork. All nav links navigate between them. Put all colors, spacing, fonts and motion timings in design tokens (CSS variables / Tailwind theme) so each page can switch themes cleanly. Make content easy to edit: store projects and artworks in data arrays so I can add an item without touching layout code.

## Fonts
- Headings and logo: Playfair Display (elegant high-contrast serif), 500/700 plus italic.
- Body: DM Sans.
- Small handwritten annotations: Caveat.
Use fluid type with clamp(): H1 about 2.25rem on phones up to 4.5rem on desktop; body at least 16px, line-height 1.6.

## Color palette (use exactly these)
Space Cadet #25344F, Slate Gray #617891, Tan #D5B893, Coffee #6F4D38, Caput Mortuum #632024, plus added Cream #F7F0E3, Sage #98A67C and Moss Mist #E4E7D2, Deep Olive #4E5A2F (small accent only).

Each page has its own theme:
- HOME: background Cream fading into Tan. Headings Caput Mortuum, body Coffee. Header Tan.
- ABOUT: background Sage #98A67C. Headings Caput Mortuum. Long text sits on Moss Mist / Cream cards in Coffee. Header Deep Olive with cream text. Deep Olive used for stickers and borders.
- PROJECTS: background Space Cadet. Headings Tan, body Cream. Slate Gray for card borders, media boxes and icons (never for text on navy). Header Tan with Space Cadet text.
- ARTWORK: page background Caput Mortuum with Tan headings and Cream text. The Watercolor and Resin sections are full-width Tan bands with Caput Mortuum headings. Painting cards are Cream. Header starts Tan with Caput Mortuum text. Footer on this page is Tan with Caput Mortuum text.
- FOOTER on all other pages: Coffee background, Cream text, Tan links.
Keep text contrast WCAG AA.

## Header (all pages)
- Sticky. "Krupa" logo (Playfair, bold) on the left, links Projects, Artwork, About CENTERED in the header. On phones: logo left, "Menu" button right, dropdown with centered links.
- The bottom edge of the header is a hand-drawn WAVY line (SVG, stretches full width, colored the same as the header).
- The current page is shown by a filled pill INSIDE the header (not an underline): pill uses the header's text color as background and the header's background color as text. The pill slides smoothly between links (Framer Motion layoutId).
- On the Artwork page the header changes color while scrolling: it turns dark (Caput Mortuum background, Tan pill and text) when it is over the Tan Watercolor and Resin sections and the Tan footer, and turns light (Tan background, Caput Mortuum text) when over the Caput Mortuum Canvas and Pottery sections. Fade the change over about 0.4s, including the wavy edge.

## Buttons (sticker style)
Pill-shaped, 2.5px solid outline, solid offset shadow (4px 4px 0, same color as outline), slight alternating tilt (-1deg / +1deg). Hover: lift up-left and grow the shadow to 6px. Press: sink down-right and shrink shadow to 1px. Home/About outline and shadow Space Cadet, Projects Slate Gray, Artwork Cream. Button fill: Caput Mortuum with Cream text (Home, About), Tan with Space Cadet text (Projects), Tan with Caput Mortuum text (Artwork). Minimum height 48px.

## Pages and content

### HOME
Full-screen hero (use 100svh). Left: Krupa's photo in a rounded frame with a dashed hand-drawn outline offset, slightly tilted, straightening on hover (placeholder: "Your photo here"). Right: handwritten note "welcome to my corner of the internet", big heading "Hi, I'm Krupa Kotecha", subtitle "CSE undergrad, AI/ML and web dev, artist", italic tagline "I build projects, question everything, and this is where it all lives.", a row of social links (GitHub, LinkedIn, Email, Substack), and three sticker CTA buttons: Projects, Artwork, About me. On mobile the photo stacks above the text and buttons go full width.
Extras: floating doodle stickers around the hero (paintbrush, palette, laptop, F1 helmet, table tennis paddle) with slow gentle float, never covering text; an optional slow scrolling marquee strip reading "currently learning: LLMs and RAG pipelines".

### ABOUT
Heading "About me". Layout: text left, photo right (photo above text on mobile), with a handwritten note under the photo: "F1, table tennis, running, books, paint". Content, word for word:

"Hi, I'm Krupa, welcome to my corner of the internet!"
"I'm a CSE undergrad who lives somewhere between code and color. Some days that means debugging code until it finally behaves; other nights it's a watercolor painting or a sketch. This place holds both sides: my tech projects, and my paintings across whatever mediums I'm curious about that month."
"Away from the screen, I'm usually found in one of a few places: glued to an F1 race weekend (I even ended up designing rollcage parts for my university's formula racing team), playing table tennis, a sport I've played all my life, out on a run, a habit I've only just picked up and am still negotiating with, or spiraling down a book."
Two cards side by side: CURRENTLY: "Still an undergrad, sharpening my AI/ML skills and diving deep into LLMs and RAG pipelines by trying to build projects." PREVIOUSLY: "Web Dev Intern at Trinity Unicepts Pvt. Ltd., Rajkot (on-site), where I worked with the team on live website projects."
Closing card: "Here I'll be sharing what I'm learning and what I've built along the way. If any of it resonates, I'd love to connect. I love meeting new people."

### PROJECTS
Heading "Projects" with handwritten note "what I built, and what it taught me". Two full-width project blocks separated by a Slate Gray line. Blocks alternate: media left and text right, then text left and media right (on mobile always media first, then text). Media = demo video or screenshot placeholder (Slate Gray rounded box). Each block: title, bold one-line summary, description, "What I learned", stack chips (pill outlines), and a GitHub sticker button.

Project 1: Resume Parser and Recruitment Platform
Summary: A dual-portal web app that scores resumes and helps recruiters rank and shortlist candidates using ML.
Description: Candidates upload a resume to get an ATS score, skill analysis, and feedback. Recruiters bulk upload resumes, get AI-based rankings, and compare shortlisted candidates. Resume text is extracted with PyMuPDF and classified by job domain using a Random Forest with TF-IDF. A hybrid score (50% rule-based, 50% model confidence) keeps results explainable. A Node.js/Express API connects the Python parser to the frontend.
What I learned: End-to-end ML pipelines, text classification with scikit-learn, designing explainable scoring, and connecting a Python backend to a Node.js API.
Stack: Python, Node.js, scikit-learn, PyMuPDF, HTML/CSS/JS

Project 2: Handwritten Answerscript Evaluation
Summary: An AI platform that reads handwritten answers and grades them automatically.
Description: Handwritten answers are preprocessed with OpenCV and converted to text by a CRNN-based recognition model. The text is then scored using semantic similarity and keyword matching, so grading rewards meaning and not just exact wording. A React frontend, Node/Express APIs, and Python ML models run as one workflow.
What I learned: OCR and image preprocessing, building a CRNN with TensorFlow, NLP-based answer scoring, and integrating ML models into a full-stack app.
Stack: Python, React.js, Node.js, TensorFlow, OpenCV, OCR, NLP

### ARTWORK
Top section on the Caput Mortuum background, NO box or card around the text. Two columns: left the heading "Studio archives" and the text below; right a framed image (placeholder "Featured painting"; image moves above text on mobile).
Text, word for word:
"Hello, and welcome to my studio archives."
"I'm Krupa, an amateur artist from India. This page is a collection of the work I've made across every medium I've tried so far, though watercolor is where I feel like I truly belong."
"Thank you for stopping by. If you have a special memory, a story, or a gift idea you'd like turned into a painting, I'd be delighted to create something unique and work on it together with you. You can reach me at krupa13kotecha@gmail.com."
"If you enjoy my work and would like to support it, you can follow along and find me on Instagram at @whimsyy__waterart."
Two sticker buttons: "Ask for a commission" (mailto:krupa13kotecha@gmail.com) and "Follow on Instagram" (https://instagram.com/whimsyy__waterart).
Then sections in this order: WATERCOLOR (Tan band, 8 placeholder artworks, the hero medium), CANVAS (Caput Mortuum, 2), RESIN ART (Tan band, 1), POTTERY (Caput Mortuum, 2). That is at least 10 artworks total, each a placeholder with image, title and a short description that I will replace later. Grid: 4 columns desktop, 2 tablet, 1 phone. Cards are Cream with rounded corners, alternating slight tilt (-1.5deg / +1.5deg). Clicking a card opens a lightbox with the larger image, title and description, previous/next arrows, swipe on phones, arrow keys and Esc on desktop, scale-and-fade open animation.

### FOOTER (all pages)
Centered. "Thanks for stopping by." Then a centered row with EQUAL spacing of social links, each an icon with its name beside it: GitHub, LinkedIn, Email (mailto:krupa13kotecha@gmail.com), Substack, Instagram (https://instagram.com/whimsyy__waterart). Use placeholder "#" for GitHub, LinkedIn and Substack. They wrap neatly on narrow phones. Then "© 2026 Krupa Kotecha".

## Layout and spacing
Mobile-first. Breakpoints: phone 360-599, tablet 600-1023, desktop 1024+. One centered container, max-width 1200px, side gutters 20px phone, 32px tablet, 48px desktop. 8px-based spacing scale; section padding about 64px phone, 96px tablet, 120px desktop. No horizontal scroll at any width. Touch targets at least 44x44px and every hover effect also works on tap or focus. Wavy SVG dividers between sections, colored like the section they lead into.

## Animations and hover actions (creative but tasteful, same on every device)
- Motion tokens: fast 150ms, base 300-400ms, slow 600-700ms, easing cubic-bezier(0.22, 1, 0.36, 1), stagger 80ms.
- Hero load: heading, tagline, buttons and photo enter in a staggered sequence (about 1 second total).
- Scroll reveal: each section fades in and rises 24px once.
- Photo frames: tilt that straightens on hover or tap.
- Cards and stickers: lift 4px with a soft shadow on hover; doodle stickers wiggle slightly on hover.
- Stack chips pop slightly on hover.
- Social links: icon bounces gently on hover.
- Page transitions: 200ms fade between routes, scroll to top.
- Wavy dividers drift very slowly.
- Animate only transform and opacity, keep 60fps, no animation longer than 800ms, no scroll-jacking.
- Respect prefers-reduced-motion by replacing movement with simple fades or nothing.

## Quality
Semantic HTML, alt text on all images (placeholders for now), visible focus states, lazy-load images, unique page titles and meta descriptions, Lighthouse 90+. Use "Your photo here" and "Image coming soon" placeholders everywhere images will go, plus a clearly marked data file for projects and artworks so I can swap in real content later.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c5541ca5-bad7-4423-87d1-a5bab7d21342).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
