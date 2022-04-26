import unittest

class TestSum(unittest.TestCase):
    def test_sum(self):
        """
        Test that it can sum a list of integers
        """
        data = [1, 2, 3]
        result = sum(data)
        self.assertEqual(sum([1,2,3]) ,6, "should be 6" )

    def test_sum_tuple(self):
        self.assertEqual(sum([1,2,3]) ,6, "should be 6" )

if __name__ == '__main__':
    unittest.main()