git fetch origin
git reset --hard origin/master
npm install
npm run build
npx prisma migrate deploy
sudo npm run serve