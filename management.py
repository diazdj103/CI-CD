import os
import logging



environment = os.environ.get("environment")
print (environment)

def determine_environment (environment):
    logging.info("The environment is " + environment)

    if environment == "development":
        logging.info("Depploying the development environment")
        os.system("vagrant up development-vm1 development-vm2")
        
    if environment != "development" or "main" or "production":
        logging.error("Invalid choice")

    elif environment == "development":
        logging.info("Depploying the development environment")
        os.system("vagrant up development-vm1 development-vm2")

    else:
        ""

if __name__ == "__main__":
    determine_environment(environment)



