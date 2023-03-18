#!/usr/bin/env sh

# abort on errors
set -e

echo "Build"
# build
npm run build

workbox generateSW workbox-config.js

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.ikanpakus.github.io/Attendance-Management' > CNAME
echo "Git Init"

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:IkanPakUs/IkanPakUs.github.io.git main

echo "Push"

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push git@github.com:IkanPakUs/Attendance-Management.git master:gh-pages --force

cd -
