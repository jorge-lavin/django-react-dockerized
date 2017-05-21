Dockerized `Django-React-Redux` app with `HMR`
==============================================
This [`Docker Compose`] project provides a multi container [`Docker`] application with a modern full stack web development environment.

Instructions
============
```
docker-compose build && docker-compose up
```

Access `localhost:8000` and enjoy your high-productive `Django-React-Redux` dev environment.


Dependencies management with webpack
===================================
You need to spawn a shell into the running container

```
docker exec -it djangoreactdockerirez_node_1
```

and `npm install` the dependencies and run `update_package_json.sh` provided.

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
