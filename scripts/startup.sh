echo "About to start up!"
current_dir=$(pwd)
deployment_dir=${current_dir}/deployment-root/$DEPLOYMENT_GROUP_ID/$DEPLOYMENT_ID/deployment-archive

echo "Launching website"
http-server ${deployment_dir}/arfna-website >> ${log_file} 2>&1 &
