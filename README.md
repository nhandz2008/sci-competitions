# Science competitions

A Next.js application for browsing science competitions, viewing details, and filtering by age and GPA. Built with TypeScript, React 19, Tailwind CSS, Radix UI, and Swiper.

## Development

Use Node.js 20 or later and npm. Install the versions recorded in the lockfile:

```sh
npm ci
npm run dev
```

Open <http://localhost:3000>. No environment variables are referenced by the current application source.

## Commands

```sh
npm run build       # Production build
npm start           # Serve an existing production build
npm run lint        # Existing Next.js lint command
npx tsc --noEmit     # Type check
```

No test runner or formatter is configured. The existing lint command and build may report pre-existing configuration or source errors; do not treat this documentation update as a fix for those errors.

## Structure

```text
sci-competitions/
├── src/
│   ├── app/          # Home page, layout, and competitions/[id] route
│   ├── components/   # Competition UI and reusable ui/ primitives
│   ├── data/         # JSON imported by the application
│   └── lib/          # Shared utilities
├── data/             # CSV competition source material
├── public/           # Static assets
├── package.json
├── package-lock.json
└── ...               # Framework/tool configuration at the root
```

The app imports `src/data/competitions.json`. The CSV in `data/` is retained separately; no conversion script exists. Review the JSON shape and CSV column alignment before changing data: existing records include nested arrays and extra fields. Keep both files until their intended relationship is resolved.
