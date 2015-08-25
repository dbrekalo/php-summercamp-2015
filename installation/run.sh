#!/bin/bash
composer install
./app/console assets:install --symlink
./app/console assetic:dump --env=prod

sudo npm install
bower install
