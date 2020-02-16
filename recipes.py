import requests
import json



# Returns an HTML string summarizing the recipe with the given id.
def summarizeRecipe(idNum, apiKey):
    payload = {'apiKey' : apiKey}
    r = requests.get("https://api.spoonacular.com/recipes/{}/summary".format(idNum), params=payload)
    return json.loads(r.text)['summary']

def query(queryString):
    apiKey = '2152c92e2c6749e182553d24f111ef70'

    # Perform GET request searching for the query.
    payload = {'apiKey' : apiKey, 'query' : queryString, 'number' : 3}
    r = requests.get("https://api.spoonacular.com/recipes/search", params=payload)

    results = json.loads(r.text)
    returnString = ""
    for result in results['results']:
        returnString += result['title']
        returnString += '! '
    return returnString
