#!venv/bin/python
from flask import Flask, jsonify

thing = "thing"

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    return thing

if __name__ == '__main__':
    app.run(debug=True)
