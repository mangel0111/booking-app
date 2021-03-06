#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# commit changes
git init
git remote add origin https://github.com/mangel0111/booking-app.git
git checkout -b gh-pages
git add -A
git commit -m 'deploy'

git push origin gh-pages