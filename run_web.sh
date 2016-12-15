#!/bin/sh
# wait for PSQL server to start
sleep 10

cd template_project
# prepare init migration
su -m manager -c "python manage.py makemigrations template_project"
# migrate db, so we have the latest db schema
su -m manager -c "python manage.py migrate"
# start development server on public ip interface, on port 8000
su -m manager -c "python manage.py runserver 0.0.0.0:8000"
