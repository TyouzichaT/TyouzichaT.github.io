# Next.js GitHub Pages Site

This is a modern Next.js website configured for deployment on GitHub Pages.

## Features

- Modern Next.js 14 with App Router
- TypeScript support
- Tailwind CSS for styling
- GitHub Pages deployment configuration
- Responsive design

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This site is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch. The deployment is handled by GitHub Actions.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```
2. Export the static site:
   ```bash
   npm run export
   ```

## Configuration

The site is configured with the following settings in `next.config.js`:
- Static site export for GitHub Pages compatibility
- Base path configuration for GitHub Pages subdirectory
- Image optimization settings

## License

MIT
