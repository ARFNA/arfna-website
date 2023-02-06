echo "About to shut down!"
sudo kill $(sudo lsof -t -i:8080)
deployment_dir=/deployment
echo "Removing old deployment directory"
sudo rm -rf ${deployment_dir}
