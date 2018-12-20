from flask import Flask,render_template , request
import requests
import random
app = Flask(__name__)

@app.route("/")     #decorator
def hello():
    return "Hello World!"

@app.route("/ping") 
def ping():
    return render_template('ping.html')

@app.route('/pong')
def pong():
    ball = (request.args['ball'])
    images=["http://post.phinf.naver.net/MjAxODA1MjFfMjc4/MDAxNTI2ODkyMjYwNzU4.DCGBjOePRA5JfSOlQzM3UBoOTlT1e2fi4PQPYFaUD-sg.eB8GiXKtCyi2jUea0uAvWCQR_NMFc2gjqXGXXiAgjTEg.JPEG/IhBnNNEtIZ98F_6e5PBHh2AnbU-k.jpg","http://blogfiles.naver.net/20160909_134/pu9373_14733955206135IozT_JPEG/P090901004.jpg","https://t1.daumcdn.net/cfile/tistory/2765F54B529AE0ED34","https://image.fmkorea.com/files/attach/new/20180129/486616/906776284/924004830/11d4ab0fadb3567492b0fd4e95a5fd5c.jpg","http://imgnews.naver.net/image/144/2010/02/02/20100202000943_r.jpg","http://post.phinf.naver.net/MjAxODAzMjNfNzEg/MDAxNTIxNzY0OTI3NTIw.fAcMRc2PDn-gVFcdkosQZFCJwqGWRSZ9aNCtX2oAaGgg.QXeyPjPneJmpPBQox66tLfFpNG4NxwldSVfDFI3kHIAg.JPEG/IQOH6WyCq7KoWzBeJqVdo4RezePI.jpg"]
    image = random.choice(images)
    print("abccc",image)
    return render_template('pong.html',ball_in_html=ball,result=image)

@app.route('/lotto/<int:num>')
def lotto(num):
    url = f'https://dhlottery.co.kr/common.do?method=getLottoNumber&drwNo={num}'
    response = requests.get(url)
    lotto = response.json()
    winner = []
    for i in range(1,7):
        winner.append(lotto[f'drwtNo{i}'])
    bonus = lotto["bnusNo"]
    return render_template('lotto.html',w=winner,b=bonus,n=num)