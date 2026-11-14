# PW Tools & Resources

A small collection of **unofficial** browser-based tools and utilities for the Potterworld community.

🔗 **Live site:** https://melcodesstuff.github.io/pw/

> ⚠️ **Unofficial.** This project is a fan-made set of utilities and is not affiliated with, endorsed by, or connected to Potterworld. Found a bug or have a request? Ask nicely. 💜

## Tools

| Tool | What it does |
|------|--------------|
| **Post Averages Calculator** | Check per-term post averages and eligibility for twins, 7th+, and adult-created characters. |
| **Term Date Reference** | Quick reference for term start/end dates with the academic calendar. |
| **Thread Title Generator** | Generates themes and titles so you don't have to. |
| **Signature Formatter** | Style text with formatting, colors, letter-by-letter gradients, fonts, and case options; 80+ searchable symbols and aligned images. Outputs clean BBCode. |
| **Tournament Bracket Creator** | Build single-elimination brackets for 3–30 participants with automatic rounds and winner tracking. |
| **House Welcome Generator** | Create formatted house welcome messages from a simple form, with a live preview. |

## Tech

Plain static site — HTML, CSS, and vanilla JavaScript. No build step, no dependencies, no framework.

## Project structure

```
.
├── index.html            # Landing page linking to each tool
├── assets/
│   ├── css/styles.css     # Shared styles
│   ├── data/              # Data files (e.g. term data)
│   ├── img/               # Icons and images
│   └── js/                # Shared scripts
├── pages/                 # Individual tool pages
└── sandbox/               # Work-in-progress / experimental pages
```

## Running locally

No build tools required. Either:

- Open `index.html` directly in a browser, **or**
- Serve the folder so relative paths and `fetch`-based data load reliably:

```bash
# Python 3
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deployment

The site is hosted on **GitHub Pages**. Pushing to the deployment branch publishes the live site automatically.

## Contributing

This is a personal community project. Bug reports and suggestions are welcome via GitHub issues.

---

Made by ✨ **mel** for the community.
