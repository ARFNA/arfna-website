echo "Installing Required Commands"

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
echo "Activiated nvm"
echo "Installing npm"
nvm install 16
echo "Installing http-server"
npm install http-server -g
