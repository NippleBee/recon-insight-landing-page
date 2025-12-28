I will initialize a Next.js project and set up Tailwind CSS v4 manually to match your requirements, as v4 configuration differs from v3.

### 1. Initialize Project
- Initialize a new Next.js project in the current directory using Bun.
- Command: `bun create next-app . --typescript --eslint --app --src-dir --import-alias "@/*" --use-bun --no-tailwind`
- **Note**: I'm skipping the default Tailwind setup (`--no-tailwind`) to manually install Tailwind v4.

### 2. Install Dependencies
- **Tailwind v4**: Install `tailwindcss`, `@tailwindcss/postcss`, and `postcss`.
- **Icons**: Install `lucide-react`.
- Command: `bun add tailwindcss @tailwindcss/postcss postcss lucide-react`

### 3. Configure Tailwind v4
- Create `postcss.config.mjs` with `@tailwindcss/postcss`.
- Configure `app/globals.css`:
  - Import Tailwind: `@import "tailwindcss";`
  - Define the theme variables in `@theme` block based on `example.html`:
    - **Colors**: `--color-primary`, `--color-secondary`, etc.
    - **Fonts**: `--font-display`, `--font-body`.
    - **Backgrounds**: `--background-image-grid-pattern`, `--background-image-radial-glow`.
  - Add custom utility classes (`.text-glow`, `.glass-panel`, etc.).

### 4. Setup Fonts
- Update `app/layout.tsx`:
  - Import **Space Grotesk** and **Noto Sans** from `next/font/google`.
  - Bind them to CSS variables (`--font-space-grotesk`, `--font-noto-sans`).
  - Apply these variables to the `<body>` tag so Tailwind's `--font-display` and `--font-body` can use them.

### 5. Cleanup & Verification
- Remove default Next.js styles.
- Verify the setup by running `bun run dev`.
