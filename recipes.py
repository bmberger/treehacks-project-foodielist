import requests
import json
import sys

# Query is supplied as an argument.
queryString = " ".join(sys.argv[1:])

# Perform GET request searching for the query.
payload = {'apiKey' : '2152c92e2c6749e182553d24f111ef70', 'query' : queryString}
r = requests.get("https://api.spoonacular.com/recipes/search", params=payload)

info = json.loads(r.text)

# Print out the titles of the matching recipes.
for result in info['results']:
    print(result['title'])
