echo "Installing Required Commands"

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
echo "Activiated nvm"
echo "Installing npm"
nvm install 16
echo "Installing http-server"
npm install http-server -g

deployment_group_deployment_dir=/opt/codedeploy-agent/deployment-root/$DEPLOYMENT_GROUP_ID/$DEPLOYMENT_ID/deployment-archive
deployment_dir=/deployment
log_file=${deployment_dir}/log.txt

echo "Copying files from deployment group directory to root"
website=${deployment_dir}/arfna-website
sudo rm -rf ${deployment_dir} && mkdir ${deployment_dir} && sudo cp -r ${deployment_group_deployment_dir}/arfna-website ${deployment_dir}

echo "Installing express 4.18.2 as node-modules must be present"
cd ${website}
npm install express@4.18.2

echo "Launching website at port 8080"
node ${website}/server.js >> ${log_file} 2>&1 &
