import unittest
import os, sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import management
from management import determine_environment


class management_test(unittest.TestCase):
   
   # return True or False
   def test_development(self):
      self.assertTrue(determine_environment(environment="development"))
   
   def test_bad_environment(self):
      self.assertFalse(determine_environment(environment="bad"))
         
# running the test

if __name__ == "__main__":
   unittest.main()