import os
import logging

def install_plugins ():
    if os.system ("vagrant plugin install vagrant-vmware-esxi") !=0:
        logging.exception("Plugin failed to install")
    if os.system("vagrant plugin install vagrant-winrm-syncedfolders") !=0:
        logging.exception("Plugin failed to install")
    if os.system("vagrant plugin install vagrant-reload") !=0:
        logging.exception("Plugin failed to install")

if __name__ == "__main__":
    install_plugins()
