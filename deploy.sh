sudo kill $(sudo netstat -anp | awk '/ LISTEN / {if($4 ~ ":80$") { gsub("/.*","",$7); print $7; exit } }')
sudo kill $(sudo netstat -anp | awk '/ LISTEN / {if($4 ~ ":443$") { gsub("/.*","",$7); print $7; exit } }')
git fetch origin
git reset --hard origin/master
npm install
npm run build
sudo npm run serve