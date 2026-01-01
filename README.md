# Atuglife

A time capsule website showcasing tugboat photography taken over several years while working as a vessel boarding agent at BR Anderson and Company, a customs house brokerage and freight forwarder in Seattle, Washington.

This site is built with React, TypeScript, and Vite, using Mantine UI for a clean, maritime-themed design.

## Development

To run the development server:

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
```

The build outputs to the `public/` directory, which is deployed via GitHub Pages.

## Adding Photos

Place your tugboat photos in the `src/assets/images/` directory and update the `photos` array in `src/App.tsx` to include them.

For example:

```tsx
import tug1 from './assets/images/tug1.jpg';
import tug2 from './assets/images/tug2.jpg';

const photos = [
  { id: 1, src: tug1, alt: 'Tugboat in Seattle Harbor' },
  { id: 2, src: tug2, alt: 'Tugboat at sunset' },
];
```

## Deployment

The site is automatically deployed to GitHub Pages on pushes to the `main` branch via the workflow in `.github/workflows/deploy.yml`.
