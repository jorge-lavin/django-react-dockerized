Dockerized `Django-React-Redux` app with `HMR`
==========================================

Now you need to `run npm install` outside the `node` container, and the `node` container will have the `node_modules` folder mapped so the following may work:

At host (assuming host's ip is `192.168.1.46`, if it is not the case, change `webpack.config.js` accordingly)

```
cd template_project/static/src/js
npm install
cd ../../../../
docker-compose build && docker-compose up
```

Access `192.168.1.46:8000` and (probably) enjoy your high-productive `Django-React-Redux` dev environment.

References
==========
* https://www.syncano.io/blog/configuring-running-django-celery-docker-containers-pt-1/
* http://owaislone.org/blog/webpack-plus-reactjs-and-django/
