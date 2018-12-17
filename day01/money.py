import requests
import bs4
response = requests.get('https://finance.naver.com/marketindex/').text
# ctrl + ``
soup = bs4.BeautifulSoup(response, 'html.parser')
result= soup.select_one('#exchangeList > li.on > a.head.usd > div > span.value').text
print('미국 환율은 '+result+' 입니다')
print("미국 환율은 {0} 입니다.".format(result))