import requests
import json
import sys

# Returns an HTML string summarizing the recipe with the given id.
def summarizeRecipe(idNum, apiKey):
    payload = {'apiKey' : apiKey}
    r = requests.get("https://api.spoonacular.com/recipes/{}/summary".format(idNum), params=payload)
    return json.loads(r.text)['summary']

# Query is supplied as an argument.
queryString = " ".join(sys.argv[1:])

apiKey = '2152c92e2c6749e182553d24f111ef70'

# Perform GET request searching for the query.
payload = {'apiKey' : apiKey, 'query' : queryString, 'number' : 3}
r = requests.get("https://api.spoonacular.com/recipes/search", params=payload)

results = json.loads(r.text)
numResults = results['totalResults']

# Print out the titles of the first 3 matching recipes.
for result in results['results']:
    print(result['title'] + ": " + str(result['id']))
    print("Summary: {}".format(summarizeRecipe(result['id'], apiKey)))
    print("")
