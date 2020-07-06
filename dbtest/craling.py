import requests
from bs4 import BeautifulSoup


def getOpentimeFromNaver(name):
    req = requests.get(
        f"https://store.naver.com/restaurants/detail?entry=plt&id=13150293&query={name}")
    html = req.text
    soup = BeautifulSoup(html, "html.parser")
    # content > div:nth-child(2) > div.bizinfo_area > div > div.list_item.list_item_biztime > div > div > div > div > span.time.highlight > span
    open_time = soup.select(
        '#content > div:nth-child(2) > div.bizinfo_area > div > div.list_item.list_item_biztime > div > div > div > div > span.time.highlight > span'
    )
  return open_time

def getReviewNum()ㅋ

print(open_time[0].get_text())
