I will implement the legal pages using `@next/mdx` as requested.

### 1. Install Dependencies
I will install the necessary packages for MDX support in Next.js:
- `@next/mdx`
- `@mdx-js/loader`
- `@mdx-js/react`
- `@types/mdx`

### 2. Configure Next.js for MDX
I will modify `next.config.ts` to enable MDX support.
- Import `createMdx` from `@next/mdx`
- Configure `pageExtensions` to include `js`, `jsx`, `md`, `mdx`, `ts`, `tsx`
- Wrap the configuration with `withMdx`

### 3. Create MDX Components Configuration
I will create `src/mdx-components.tsx` which is required for App Router MDX support. This allows us to define custom components for markdown elements if needed later.

### 4. Implement Privacy Policy Page
- Rename `src/app/legal/privacy-policy/privacy-policy.md` to `content.mdx` to serve as the importable component.
- Update `src/app/legal/privacy-policy/page.tsx` to:
  - Import the MDX content.
  - Render it within a styled container (using standard Tailwind container classes for readability).

### 5. Implement Terms of Service Page
- Rename `src/app/legal/terms-of-service/terms-of-service.md` to `content.mdx`.
- Update `src/app/legal/terms-of-service/page.tsx` to import and render the MDX content similarly to the privacy policy.
