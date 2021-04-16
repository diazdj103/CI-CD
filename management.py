import os
import logging



environment = os.get.environment("environment")

def determine_environment (environment="development"):
    if environment != "development" or "main" or "production":
        logging.error("Invalid choice")

    elif environment == "development":
        logging.info("Depploying the development environment")
        os.system("vagrant up development-vm1 development-vm2")

    else:
        ""

if __name__ == "__main__":
    determine_environment(environment)



