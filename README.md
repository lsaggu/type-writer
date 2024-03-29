# Python: Getting Started

A barebones Django app, which can easily be deployed to and run on Heroku. Looking at making it an add-on to [type-recorder](https://www.type-recorder.com/).

This application accepts text input and then replays that text being typed out on the screen.

# Usage

## Prerequisites

1. Python 3.8+
2. Pip
3. Heroku CLI

## Install
1. Clone the repository
2. Install the requirements/dependencies
	`pip install -r requirements.txt`
3. Setup Django to use local assets
	`python manage.py collectstatic`
4. Launch using Heroku CLI to run locally
	`heroku local web -f Procfile.windows`
	- Leave out the `-f Procfile.windows` if you are running on a Unix system

# Resources

- This application was put together using the [Getting Started with Python on Heroku](https://devcenter.heroku.com/articles/getting-started-with-python) article - check it out.
- [Caprturing browser screens](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Initial Inspiration](https://www.circularbit.com/rewritetext/)

- [Keyboard typing sound effect](https://www.youtube.com/watch?v=l7UAvZ3jbY8)

# Changelog

- 11/18/2022 - Updating Heroku stack to Heroku-22, and updating Python runtime to 3.10.8


