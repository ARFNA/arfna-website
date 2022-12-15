echo "Installing Required Commands"

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
echo "Activiated nvm"
echo "Installing npm"
nvm install 16
echo "Installing http-server"
npm install http-server -g

current_dir=$(pwd)
deployment_dir=${current_dir}/deployment-root/$DEPLOYMENT_GROUP_ID/$DEPLOYMENT_ID/deployment-archive
log_file=${deployment_dir}/log.txt

echo "Launching website at port 8080"
http-server ${deployment_dir}/arfna-website >> ${log_file} 2>&1 &
