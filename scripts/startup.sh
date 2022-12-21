echo "Installing Required Commands"

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
echo "Activiated nvm"
echo "Installing npm"
nvm install 16
echo "Installing http-server"
npm install http-server -g

current_dir=$(pwd)
deployment_group_deployment_dir=${current_dir}/deployment-root/$DEPLOYMENT_GROUP_ID/$DEPLOYMENT_ID/deployment-archive
deployment_dir=/deployment
log_file=${deployment_dir}/log.txt

echo "Copying files from deployment group directory to root"
website=${deployment_dir}/arfna-website
mkdir ${deployment_dir} && cp -r ${deployment_group_deployment_dir}/arfna-website ${website}

echo "Launching website at port 8080"
http-server ${website} >> ${log_file} 2>&1 &
