# -*- coding: utf-8 -*-
import requests

a = u"투가리".encode("UTF8")
URL = (
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input="
    + "서울특별시 강남구 논현로94길 29-5"
    + "&inputtype=textquery&key="
    + "AIzaSyD_TKzDxayAtBFk5aToI6TpQ1LfC5lDajc"
)

response = requests.get(URL)

print(response.text)

# URL = "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJVx_U3CSgfDURUXakPefNlMg&fields=icon,review,name,permanently_closed,photo,place_id,plus_code,url,utc_offset,vicinity&key=AIzaSyD_TKzDxayAtBFk5aToI6TpQ1LfC5lDajc"
# response = requests.get(URL)
# print(response.text)
