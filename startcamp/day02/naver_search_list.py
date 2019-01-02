import requests
import bs4

response = requests.get('https://www.naver.com/').text
soup = bs4.BeautifulSoup(response, 'html.parser')
keyword= soup.select('div.PM_CL_realtimeKeyword_list_base span.ah_k')
rank= soup.select('div.PM_CL_realtimeKeyword_list_base span.ah_r')
for i,j in zip(rank,keyword): 
    print(i.text,j.text)
