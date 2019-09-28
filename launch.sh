#!/bin/bash
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
export FRONT_FOLDER="$DIR/frontend"
export BACK_FOLDER="$DIR/backend"
export BLOCKCHAIN_FOLDER="$DIR/blockchain"

start() {
  docker-compose down
  docker-compose up -d
  cd $BACK_FOLDER
    npm start &
  cd -
  cd $FRONT_FOLDER
    npm start
  cd -
}

setup() {
  sudo apt update
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
  source ~/.bashrc
  nvm install v11
  nvm use v11
  npm install -g etherlime 
  cd $BACK_FOLDER
    npm install
  cd -
  cd $FRONT_FOLDER
    npm install
  cd -
}

case "$1" in
  start)
  start
  ;;
  setup)
  setup
  ;;
  *)
	echo $"Usage: $0 {start || setup}"
	exit 1
esac
exit 0
