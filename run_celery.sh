#!/bin/sh -x

# wait for RabbitMQ server to start
sleep 15

cd template_project
# run Celery worker for our project template_project with Celery configuration stored in Celeryconf
su -m manager -c "celery worker -A template_project.celeryconf -Q default -n default@%h -l INFO"
