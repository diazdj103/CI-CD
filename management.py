import os
import logging

TEST_FLAG = os.environ.get("TEST_FLAG")
environment = os.environ.get("environment")

def determine_environment (environment):
    logging.info("The environment is " + environment)
    if TEST_FLAG == "true" and environment != "bad":
        if os.system("vagrant up unit_test") !=0:
            logging.exception("Unittest failed")
        else:
            os.system("vagrant destroy unit_test")
            return True 
    elif environment == "development":
        logging.info("Depploying the development environment")
        if os.system("vagrant up development-vm1") !=0:
            logging.exception("Vagrant failed to deploy")
        if os.system("vagrant up development-vm2") !=0:
            logging.exception("Vagrant failed to deploy")
        else:
            return True
    elif environment == "main":
        if  os.system("vagrant up main-vm1") !=0:
           logging.exception("Vagrant failed to deploy")
        if os.system("vagrant up main-vm2") !=0:
           logging.exception("Vagrant failed to deploy")
        else:
            return True
    elif environment == "production":
        if os.system("vagrant up production-vm1") !=0:
            logging.exception("Vagrant failed to deploy")
        if os.system("vagrant up production-vm2") !=0:
            logging.exception("Vagrant failed to deploy")
        else:
            return True
    else:
        logging.exception("The wrong environment was called")

if __name__ == "__main__":
    determine_environment(environment)



