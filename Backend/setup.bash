#!/usr/bin/env bash

# Script to automate setting up a Node.js project with MySQL and starting the server
while true; do
    echo "Do you want to start the server in development or production mode?"
    echo "1) for development Mode"
    echo "2) for production Mode"
    read status
    if [ -f .env ]; then
        if [ $status -eq 1 ]; then
            npm run start:dev
            exit 0
        elif [ $status -eq 2 ]; then
            npm run start
            exit 0
        else
            echo "Invalid input"
        fi
    else
        sudo apt-get update
        sudo apt-get install -y nodejs npm
        npm install
        sudo apt-get install -y mysql-server
        sudo service mysql start
        sudo mysql -e "CREATE DATABASE IF NOT EXISTS matjry;"
        echo "Enter the mysql password"
        read -s password  # Read MySQL password securely

        sudo mysql -e "CREATE USER 'matjry'@'localhost' IDENTIFIED BY '$password';"
        sudo mysql -e "GRANT ALL PRIVILEGES ON matjry.* TO 'matjry'@'localhost';"
        sudo mysql -e "FLUSH PRIVILEGES;"

        # Create .env file with MySQL password
        echo "USER_NAME=matjry" > .env
        echo "PASSWORD=$password" >> .env
        echo "DATABASE_NAME=matjry" >> .env
        echo "DATABASE_HOST=localhost" >> .env
        echo "DATABASE_PORT=3306" >> .env

        # Start the server based on user input
        if [ $status -eq 1 ]; then
            npm run start:dev
        elif [ $status -eq 2 ]; then
            npm run start
        else
            echo "Invalid input"
            exit -1
        fi
    fi
done
