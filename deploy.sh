git fetch origin
git reset --hard origin/master
npm run build
node ./src/service.js restart