from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/hello')
def say_hello_world():
    return {'result' : "Hallo FSD 2 OCBC Batch 3" }