import os
import logging



environment = os.environ.get("environment")
print (environment)

def determine_environment (environment):
    logging.info("The environment is " + environment)

    if environment == "development":
        logging.info("Depploying the development environment")
        os.system("vagrant up development-vm1")
        os.system ("sleep 30")
        os.system("vagrant up development-vm2")

    if environment != "development" or "main" or "production":
        logging.error("Invalid choice")

    elif environment == "development":
        logging.info("Depploying the development environment")
        

    else:
        ""

if __name__ == "__main__":
    determine_environment(environment)



