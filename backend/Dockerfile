FROM python:3.5

WORKDIR /app
COPY . /app

RUN pip install --upgrade pip \
&& pip install -r requirements.txt --default-timeout=100

RUN python3 manage.py makemigrations \
&& python3 manage.py migrate

RUN python3 manage.py test

CMD ["python3", "manage.py", "runserver"]
EXPOSE 8000