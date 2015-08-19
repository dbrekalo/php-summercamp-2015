#!/bin/bash
composer install
./app/console assets:install --symlink

npm install
bower install
grunt


