* Remove hardcoded node server ip
* Add testing
* Add enviroment-dependent files
* Check `os.environ` at settings has correct values
* Actually use `Celery`
* Generate the documentation within Docker somehow
* Integrate javascript with sphinx?
* Add dist/docs to gitignore and check if Sphinx does generate the docs folder automatically
* Redesign the building of the node container: It suffices with editing package.json and copying it to the js folder? It seems that building the container always from scrath does consume a lot of hard disk. A further investigation in this matter is required. Having two copies of package.json seems to be a maintenance issue (or at least a potential source of them)
