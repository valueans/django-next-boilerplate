# [Kapoor Software Solutions](https://kapoorsoftware.com)


Kapoor Software Solution django-next-boilerplate with automatic ssl generation and renewal

### features
1. user authentication module
2. sendgrid integration
3. celery, celery beat and celery flower setup
4. otp verification setup
5. Next JS Setup
6. Automatic SSL generation and renewal


License: MIT

## How to start this project

### using virtualenv
1. pip install virtualenv
2. virtualenv venv
3. source venv/bin/activate (on linux and mac)
4. source venv/Script/activate (on windows)
5. pip install -r requirement.txt

### using docker
1. cd django-next-boilerplate
2. docker-compose -f local.yml build
3. docker-compose -f local.yml up
if you want to create a superuser you can run 
4. docker-compose -f local.yml run --rm web python manage.py createsuperuser

### using in production
1. run ```cd django-next-boilerplate```
2. rename .env.example to .env
3. replace all the required .env variable <>
3. ```docker-compose -f production.yml build```
4. ```docker-compose -f production.yml up -d```


### Celery

This app comes with Celery.

To run a celery worker:

``` bash
cd django-react-boilerplate
celery -A kapoorsoftwaresolutions worker -l info
```

To run a celery  beat:

``` bash
cd django-react-boilerplate
celery -A kapoorsoftwaresolutions beat -l info
```

Please note: For Celery's import magic to work, it is important *where* the celery commands are run. If you are in the same folder with *manage.py*, you should be right.
