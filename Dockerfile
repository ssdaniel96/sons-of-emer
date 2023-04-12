FROM python:latest
WORKDIR /app
RUN pip install fastapi
RUN pip install uvicorn
COPY . .
CMD ["uvicorn", "api.main:app", "--proxy-headers", "--host", "0.0.0.0", "--port", "80"]
