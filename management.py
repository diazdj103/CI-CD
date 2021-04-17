import os
import logging



environment = os.environ.get("environment")
print (environment)

def determine_environment (environment):
    logging.info("The environment is " + environment)

    if environment == "development":
        logging.info("Depploying the development environment")
        os.system("vagrant up development-vm1")
        os.system("vagrant up development-vm2")

    elif environment == "main":
        os.system("vagrant up main-vm1")
        os.system("vagrant up main-vm2")

    elif environment == "production":
        os.system("vagrant up production-vm1")
        os.system("vagrant up production-vm2")

    else:
        ""

if __name__ == "__main__":
    determine_environment(environment)



