echo "About to shut down!"
sudo kill $(sudo lsof -t -i:8080)
