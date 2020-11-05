git fetch origin
git reset --hard origin/master
npm install
npm run build
sudo systemctl daemon-reload
sudo systemctl restart hackjobgames.service
sudo journalctl -f -u hackjobgames