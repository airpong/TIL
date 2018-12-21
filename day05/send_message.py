import requests
import os
text="공부좀해라"
token_chang=os.getenv('TELEGRAM_BOT_TOKEN')
chat_id_chang=os.getenv('CHAT_ID')
requests.get(f'https://api.telegram.org/bot{token_chang}/sendMessage?chat_id={chat_id_chang}&text={text}')
