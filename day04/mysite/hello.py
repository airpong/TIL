from flask import Flask,render_template , request
import requests
import os
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
    images = []
    if ball == "김유림" :
        images.append("https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA5MjFfMTI0%2FMDAxNTA1OTIxMDA4NjM0.GYpvKzyqxTFQO9Wnm-6OyMVOQUGbljVDiSIDA5xGAg4g.p_nDiO2McvDRsHOlL7d3AjqZlcECWIhs9YOLT9ouc0kg.JPEG.1wisemom%2FIMG_4632.JPG&type=b400 ")
        images.append("http://blogfiles.naver.net/MjAxNzEwMjJfMTM2/MDAxNTA4NjQxNzg0Mjcz.pJoli-sy6XO8U7J6FguYyYx6Uj2aWNwCTp-D9KtJh_8g.iDByej9nO3hKwQWZS8EEJypd_hc3XAYOQU5g7O87a7Ug.PNG.giraffenzookeeper/%BD%BD%B6%F3%C0%CC%B5%E56.PNG")
    elif ball == "김교훈":
        images.append("https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA5MjFfMTI0%2FMDAxNTA1OTIxMDA4NjM0.GYpvKzyqxTFQO9Wnm-6OyMVOQUGbljVDiSIDA5xGAg4g.p_nDiO2McvDRsHOlL7d3AjqZlcECWIhs9YOLT9ouc0kg.JPEG.1wisemom%2FIMG_4632.JPG&type=b400")
    else :
        images=["https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA5MjFfMTI0%2FMDAxNTA1OTIxMDA4NjM0.GYpvKzyqxTFQO9Wnm-6OyMVOQUGbljVDiSIDA5xGAg4g.p_nDiO2McvDRsHOlL7d3AjqZlcECWIhs9YOLT9ouc0kg.JPEG.1wisemom%2FIMG_4632.JPG&type=b400 ","http://blogfiles.naver.net/20140514_232/sakwanamu_1400063223706AttNn_JPEG/IMG_5803.JPG","http://blogfiles.naver.net/MjAxNzEwMjJfMTM2/MDAxNTA4NjQxNzg0Mjcz.pJoli-sy6XO8U7J6FguYyYx6Uj2aWNwCTp-D9KtJh_8g.iDByej9nO3hKwQWZS8EEJypd_hc3XAYOQU5g7O87a7Ug.PNG.giraffenzookeeper/%BD%BD%B6%F3%C0%CC%B5%E56.PNG"]
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

@app.route('/write')
def write():
    return render_template('write.html')


@app.route('/send')
def send():
    token_chang=os.getenv('TELEGRAM_BOT_TOKEN')
    chat_id_chang=os.getenv('CHAT_ID')
    text = request.args['message']
    requests.get(f'https://api.telegram.org/bot{token_chang}/sendMessage?chat_id={chat_id_chang}&text={text}')
    return render_template('send.html')