import pymysql
import requests
API_KEY = "74726454596863753130314e62475545"
API_GOOGLE_KEY = "AIzaSyD_TKzDxayAtBFk5aToI6TpQ1LfC5lDajc"
# URL = f'http://openAPI.gangnam.go.kr:8088/{API_KEY}/json/GnModelRestaurantDesignate/1/3/'
# URL = f'http://openAPI.gangnam.go.kr:8088/{API_KEY}/json/GnFoodHygieneBizRestaurant/1/5/'
# result = requests.get(URL).json()
google_url = f'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=오캄&inputtype=textquery&fields=name,formatted_address,place_id&key={API_GOOGLE_KEY}'
google_result = requests.get(google_url).text
print(google_result)
beforeadd = ""
# for addr in result["GnFoodHygieneBizRestaurant"]["row"]:
#     address = addr["SITE_ADDR_RD"].split(",")[0]
#     NAME = addr["UPSO_NM"]
#     if (address != beforeadd):
#         google_url = f'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=오캄&inputtype=textquery&fields=name,formatted_address,place_id&key={API_GOOGLE_KEY}'
#         google_result = requests.get(google_url).json()
#         print(google_result)
# place_id = google_result["candidates"]["place_id"]
# google_detail_url = f'https://maps.googleapis.com/maps/api/place/details/json?place_id={place_id}&fields=formatted_address,formatted_phone_number,international_phone_number,rating,user_ratings_total,review,price_level&key={API_GOOGLE_KEY}'
# google_detail_result = requests.get(google_detail_url)
# print(google_detail_result.text)
# beforeadd = address


# conn = pymysql.connect(host='recoderdbinstance.crnm0s8emitk.ap-northeast-2.rds.amazonaws.com', user='recoder', password='shdudtka123', db='recoderdb', charset='utf8')
# curs = conn.cursor()
# sql = "SELECT * FROM test"
# curs.execute(sql)

# rows = curs.fetchall()
