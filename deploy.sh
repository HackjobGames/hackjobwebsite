git fetch origin
git reset --hard origin/master
npm install
npx prisma migrate dev --skip-generate
sudo systemctl daemon-reload
sudo systemctl restart hackjobgames.service
sudo journalctl -f -u hackjobgames
