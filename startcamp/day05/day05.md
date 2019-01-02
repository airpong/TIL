# day05

- ##### chatBot with Telegram

  - Telegram 설치후 BotFather 검색, 봇 생성

  - https://api.telegram.org/bot<token>/METHOD_NAME 을 통해 명령 입력

    - token 은 생성시 알려준다

  - 먼저 내 이름을 알아야 하기 때문에 getUpdates 를 통해서 내 id 를 알아낸다.

  - sendMassage  를 통해 나에게 or ID를 아는 누군가에게 메세지를 보낼수 있다.

    - ```
      https://api.telegram.org/bot618277089:AAHEDoY1q7HwSg4TBbN2xxgiBL3PiRyG45c/sendMessage?chat_id=794368074&text=%EB%B0%94%EB%B3%B4
      ```

  - .bash_profile  을 통해 ID or Token 값을 보호할 수 있다.

    - .bash_profile 에 보호를 원하는 값 입력
    - source ~/.bash_profile 입력
    - printenv 치고 동기화 되었는지 확인

  - 보호된 정보와 html을 이용해 내가 인터넷에 친 문자를 나에게 보내주는 챗봇 기능을 만들 수 있다.

  - ``` python
    @app.route('/send')
    def send():
        token_chang=os.getenv('TELEGRAM_BOT_TOKEN')
        chat_id_chang=os.getenv('CHAT_ID')
        text = request.args['message']
        requests.get(f'https://api.telegram.org/bot{token_chang}/sendMessage?chat_id={chat_id_chang}&text={text}')
        return render_template('send.html')
    ```

  - 

- ##### Server with Cloud9

  - 강사님을 통해 받은 Cloud9 사이트에 가입.
  - 모든 작업은 vs code 에서 작성한 것과 동일
  - 실행 시 $ FLASK_APP=app.py flask run --host=$IP --port=$PORT 와 같이 실행하면 cloud9에서 제공하는 서버를 이용하여 만들수있다.