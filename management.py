import os
import logging



environment = os.environ.get("environment")

def determine_environment (environment):
    logging.info("The environment is " + environment)

    if environment == "development":
        logging.info("Depploying the development environment")
        if os.system("vagrant up development-vm1") !=0:
            logging.exception("Vagrant failed to deploy")
        if os.system("vagrant up development-vm2") !=0:
            logging.exception("Vagrant failed to deploy")
    elif environment == "main":
        if  os.system("vagrant up main-vm1") !=0:
           logging.exception("Vagrant failed to deploy")
        if os.system("vagrant up main-vm2") !=0:
           logging.exception("Vagrant failed to deploy")
    elif environment == "production":
        if os.system("vagrant up production-vm1") !=0:
            logging.exception("Vagrant failed to deploy")
        if os.system("vagrant up production-vm2") !=0:
            logging.exception("Vagrant failed to deploy")
    else:
        logging.info("There was no environment called")

if __name__ == "__main__":
    determine_environment(environment)



