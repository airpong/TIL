import requests
import os
text="오늘의 당번은 하창언"
token_chang=os.getenv('TELEGRAM_BOT_TOKEN')
chat_id_chang=os.getenv('CHAT_ID')
requests.get(f'https://api.telegram.org/bot{token_chang}/sendMessage?chat_id={chat_id_chang}&text={text}')
