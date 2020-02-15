import requests

r = requests.get("https://api.spoonacular.com/recipes/search?apiKey=2152c92e2c6749e182553d24f111ef70")
print(r.status_code)

