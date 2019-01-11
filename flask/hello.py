from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/python")
def python():
    return "Hello Warld!"

@app.route("/dictionary/<string:word>")
def dictionary(word):
    ww={'apple':'사과','hippo':'하마'}
    if word in ww:
        return f'{word}는 {ww[word]}'
    else :
        return "바보"