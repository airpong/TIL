from flask import Flask,render_template
import random
app = Flask(__name__)

@app.route("/")     #decorator
def hello():
    return "Hello World!"

@app.route("/ssafy")
def ssafy():
    return "This is SSAFY!"

@app.route("/greeting/<string:name>")
def greeting(name):
    return f'{name}님 반갑습니다.'

@app.route("/cube/<int:num>")
def cube(num):
    return f'{pow(num,3)}입니당.'       #flask 에서 return 이 가능한것 : string, flask 만의 객체

@app.route("/lunch/<int:person>")
def lunch(person):
    result=[]
    menu = ["김치찌개","된장찌개","순두부찌개","돼지찌개","마라탕"]
    for i in range(person):
        ran=random.choice(menu)
        result.append(ran)
        menu.remove(ran)
    return str(result)#string

@app.route("/html")
def httt():
    return '''
        <h1>여기는 </h1>
    '''
@app.route("/html_file")
def heml_file():
    return render_template('html_file.html')

@app.route("/hi/<string:name>")
def hi(name):
    return render_template('hi.html',name=name)


@app.route("/fake_naver")
def fake():
    return render_template('fake_naver.html')
