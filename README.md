Dockerized `Django-React-Redux` app with `HMR`
==============================================
This [`Docker Compose`] project provides a multi container [`Docker`] application with a modern full stack web development environment.

Instructions
============
At the time of writing you need to `run npm install` outside the `node` container, and the `node` container will have the `node_modules` folder mapped so the following may work:

At host (assuming host's ip is `192.168.1.46`, if it is not the case, change `webpack.config.js` accordingly)

```
cd template_project/static/src/js
npm install
cd ../../../../
docker-compose build && docker-compose up
```

Access `192.168.1.46:8000` and enjoy your high-productive `Django-React-Redux` dev environment.


Dependencies management for webpack
===================================
You need to add dependencies manually and build the node container, so in order to know the version to install you can spawn a shell into the running container

```
docker run -it node:argon /bin/bash
```

query the npm registry to find the version

```
npm v <package_name> | grep version
```

and add the entry either at dependencies or devDependencies

```
'<pagckage_name>': '^<version_number>'
```

Lacking a better solution it is recomended to delete the intermediate node containers and build them from scratch, because package.json may not be updated.

Documentation
=============
The generation of the documentation is not yet implemented in the Docker application. In order to build the sample documentation go to `docs` folder and run

```
sphinx-build -b html . ../static/dist/docs/
```

The documentation should be avaiable at the `static/docs/index.html' url

Stack
========

* [`Django`] powered backend
  * [`SQLAlchemy`] ORM for [`PostgreSQL`] database
  * [`Celery`] for asynchronous tasks
    * [`RabbitMQ`] as broker
    * [`Redis`] as result backend
* [`React`]
  * [`React Hot Loader`] (Experimental)
  * [`Redux`] with [`Redux devtools`]
* [`Babel`] with [`ES2015`] support
* [`SASS-Loader`] and [`Bootstrap 4`]
* [`Sphinx`] for project documentation


References
==========
* https://www.syncano.io/blog/configuring-running-django-celery-docker-containers-pt-1/
* http://owaislone.org/blog/webpack-plus-reactjs-and-django/


[`Babel`]: https://babeljs.io/
[`Bootstrap 4`]: https://v4-alpha.getbootstrap.com/
[`Celery`]: http://www.celeryproject.com
[`Django`]: https://www.djangoproject.com/
[`Docker Compose`]: https://docs.docker.com/compose/
[`Docker`]: https://docs.docker.com/
[`ES2015`]: https://babeljs.io/learn-es2015/
[`PostgreSQL`]: https://www.postgresql.org/
[`RabbitMQ`]: https://www.rabbitmq.com/
[`React Hot Loader`]: https://github.com/gaearon/react-hot-loader
[`React`]: https://facebook.github.io/react/
[`Redis`]: https://redis.io/
[`Redux devtools`]: https://github.com/gaearon/redux-devtools
[`Redux`]: http://redux.js.org/
[`SASS-Loader`]: https://github.com/jtangelder/sass-loader
[`SQLAlchemy`]: http://www.sqlalchemy.org/
[`Sphinx`]: http://www.sphinx-doc.org/en/1.5.1/
