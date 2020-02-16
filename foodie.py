#!venv/bin/python
from flask import Flask, request, jsonify
from recipes import query

app = Flask(__name__)

@app.route('/')
def index():
    return "Successfully contacted the API!"

@app.route('/api', methods=['GET'])
def get_recipes():
    q = request.args.get('query', None)
    return query(q)

if __name__ == '__main__':
    app.run(debug=True)
