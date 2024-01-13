# {{ cookiecutter.project_name }}

## What is this repository for

- Backend code for {{ cookiecutter.project_name }}.
- Version 0.1.0

## How do I get set up

All Python package dependencies are specified in `Pipfile` and `Pipfile.lock` instead of `requirements.txt` since we are using
[pipenv](https://pipenv.pypa.io/en/latest/). To install these packages use the following command

    pipenv install --dev

If you are using not `python3.11` use the following command instead

    pipenv install --dev --python python3.X

Where `X` should be replaced with which every version you are using

To install `React`

    npm install

### Activate the environment

    pipenv shell

### How to run the local server

with the env active use following commands to run local server

    python manage.py migrate
    python manage.py createsuperuser
    python manage.py runserver

Alternately, Use these commands if you don't want a active python env in your terminal

    pipenv run migrate
    pipenv run superuser
    pipenv run server

refer to the `Pipfile [scripts]` section for [more info](https://pipenv-fork.readthedocs.io/en/latest/advanced.html#custom-script-shortcuts)

### Other development tools

- [flake8](https://flake8.readthedocs.io/en/latest/) - for linting and ensure python best practice are meet
- [yapf](https://github.com/google/yapf) - for code formatting and provide consistent code styling
