
#!/bin/bash

# GitHub Pages deployment script
echo "Building for production..."
npm run build

echo "Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "Deployment complete!"
