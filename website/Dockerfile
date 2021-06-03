FROM centos
RUN yum update -y
RUN yum install python3 -y
RUN yum install python39-pip-20.2.4-3.module_el8.4.0+680+7b309a77.noarch -y
RUN pip3 install flask  
COPY app.py /opt/app.py
COPY templates /opt/templates

ENTRYPOINT FLASK_APP=/opt/app.py flask run --host=0.0.0.0
