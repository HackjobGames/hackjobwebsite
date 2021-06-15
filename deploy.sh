git fetch origin
git reset --hard origin/master
npm install
npm run build
npx prisma migrate dev --skip-generate
sudo systemctl daemon-reload
sudo systemctl restart hackjobgames.service
sudo journalctl -f -u hackjobgames
