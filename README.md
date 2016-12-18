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


Documentation
=============

The generation of the documentation is not yet implemented in the Docker application. In order to build the sample documentation go to `docs` folder and run

```
sphinx-build -b html . ../static/dist/docs/
```

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
* [`Sphinx`] for project documentation


References
==========
* https://www.syncano.io/blog/configuring-running-django-celery-docker-containers-pt-1/
* http://owaislone.org/blog/webpack-plus-reactjs-and-django/


[`Babel`]: https://babeljs.io/
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
[`SQLAlchemy`]: http://www.sqlalchemy.org/
[`Sphinx`]: http://www.sphinx-doc.org/en/1.5.1/

