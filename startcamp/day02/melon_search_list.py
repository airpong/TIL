import requests
import bs4

headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
}
response = requests.get('https://www.melon.com/chart/index.htm/',headers=headers).text
print(response)
# soup = bs4.BeautifulSoup(response, 'html.parser')
# keyword= soup.select('div.PM_CL_realtimeKeyword_list_base span.ah_k')
# rank= soup.select('div.PM_CL_realtimeKeyword_list_base span.ah_r')
# for i,j in zip(rank,keyword): 
#     print(i.text,j.text)
