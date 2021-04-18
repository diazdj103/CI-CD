import unittest
import management


class management_test(unittest.TestCase):
   # return True or False
   def test_development(self):
      self.assertTrue(management.determine_environment(developmemt), True)
# running the test

unittest.main()