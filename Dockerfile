<<<<<<< HEAD
FROM python:3.11-slim

WORKDIR /app

COPY . .

RUN pip install flask

EXPOSE 5000

CMD ["python","app.py"]>>>>>>> c0d304f76d0a525ddd28136ded1d58b29e21a8da
