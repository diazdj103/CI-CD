FROM centos

RUN yum update -y
RUN yum install python -y
RUN yum install python-pip -y
RUN pip install -r requirements.tx
RUN cd website
RUN flask run

COPY app.py /opt/app.py

ENTRYPOINT FLASK_APP=/opt/app.py flask run --host=0.0.0.0