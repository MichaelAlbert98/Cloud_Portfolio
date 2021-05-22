import requests
import json
import unittest

url = "http://127.0.0.1:3000/DynamoDBManager"


class TestDatabase(unittest.TestCase):

    def test_queries(self):
        # create item in database
        f = open('test/create.json')
        data = json.load(f)
        f.close()
        self.assertEqual(requests.post(url, json=data).text, "0", "Item creation failed.")

        # increment item
        f = open('test/update.json')
        data = json.load(f)
        f.close()
        self.assertEqual(requests.post(url, json=data).text, "1", "Increment failed.")

        # read item
        f = open('test/read.json')
        data = json.load(f)
        f.close()
        self.assertEqual(requests.post(url, json=data).text, "1", "Read failed.")


if __name__ == "__main__":
    unittest.main()

