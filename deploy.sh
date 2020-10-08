git fetch origin
git reset --hard origin/master
npm install
npm run build
node ./src/service.js restart