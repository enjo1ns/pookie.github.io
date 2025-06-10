
# GitHub Pages Deployment Guide

## Method 1: Automated Deployment (Recommended)

1. Push your code to the main branch
2. GitHub Actions will automatically build and deploy your site
3. Go to your repository Settings → Pages
4. Set Source to "GitHub Actions"
5. Your site will be available at: `https://yourusername.github.io/your-repository-name/`

## Method 2: Manual Deployment

1. Update the `base` path in `vite.config.ts`:
   ```typescript
   base: '/your-actual-repository-name/'
   ```

2. Run the deployment script:
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

3. Go to repository Settings → Pages
4. Set Source to "Deploy from a branch"
5. Select "gh-pages" branch

## Important Notes

- Replace `your-repository-name` in `vite.config.ts` with your actual GitHub repository name
- The repository name is case-sensitive
- After deployment, your routes will work correctly (e.g., `/shop`, `/about`)
- Images and assets will load properly

## Troubleshooting

- If you see a blank page, check that the `base` path in `vite.config.ts` matches your repository name exactly
- Make sure GitHub Pages is enabled in your repository settings
- It may take a few minutes for changes to appear after deployment
