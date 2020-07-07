#-*- coding:utf-8 -*-
import pymysql
import requests
API_KEY = "74726454596863753130314e62475545"
API_GOOGLE_KEY = "AIzaSyD_TKzDxayAtBFk5aToI6TpQ1LfC5lDajc"
URL = f'http://openAPI.gangnam.go.kr:8088/{API_KEY}/json/GnModelRestaurantDesignate/1/3/'


def getDataFromSeoul(From,to):     #서울시 공공 데이터 포털에서 음식점 가지고 오는 함수
    beforeAddress = ""
    result = []
    URL = f'http://openAPI.gangnam.go.kr:8088/{API_KEY}/json/GnFoodHygieneBizRestaurant/{From}/{to}/'
    response = requests.get(URL).json()
    for restaurant in response["GnFoodHygieneBizRestaurant"]["row"]:
        restaurantInfo = {}
        restaurantInfo['name'] = restaurant["UPSO_NM"]
        restaurantInfo['address'] = restaurant["SITE_ADDR_RD"].split(',')[0]
        if restaurantInfo['address'] == beforeAddress:
          continue
        result.append(restaurantInfo)
        beforeAddress = restaurantInfo['address']
    return result

def testAddress(From,to):
  URL = f'http://openAPI.gangnam.go.kr:8088/{API_KEY}/json/GnFoodHygieneBizRestaurant/{From}/{to}/'
  response = requests.get(URL).json()
  beforeAddress = ""
  for restaurant in response["GnFoodHygieneBizRestaurant"]["row"]:
    name = restaurant["UPSO_NM"]
    address = restaurant["SITE_ADDR_RD"]
    if address == beforeAddress:
        continue 
    URL = f'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input={name}&inputtype=textquery&fields=formatted_address&key={API_GOOGLE_KEY}'
    response_G = requests.get(URL).json()
    beforeAddress = address
    print(address,response_G['candidates'][0]["formatted_address"],sep = " | ")

def checkAddress(From, to):    #주소 비교 함수
    for letter in From.split(' '):
        if not letter in to:
            return False
    return True


def getDataFromGoogle(restaurantInfos):    #구글 api에서 정보 가지고 오는 함수 / 위도,경도,구글id,가격대,평점 정보 들고옴
    result = []
    for restaurant in restaurantInfos:
        name, address = restaurant.values()
        restaurantInfoFromGoogle = {}
        restaurantInfoFromGoogle["name"] = name
        restaurantInfoFromGoogle["address"] = address
        URL = f'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input={name}&inputtype=textquery&fields=name,formatted_address,place_id,price_level,rating,geometry,opening_hours&key={API_GOOGLE_KEY}'
        response = requests.get(URL).json()
        print("response",address,response)
        if response['candidates']:
            if checkAddress(address, response['candidates'][0]['formatted_address']):     #결과값이 여러개일 경우 비교 x -> 해결해야함   
              restaurantInfoFromGoogle["geometry"] = response['candidates'][0].get('geometry').get("location")
              restaurantInfoFromGoogle["priceLevel"] = response['candidates'][0].get("price_level")
              restaurantInfoFromGoogle["googleRating"] = response['candidates'][0].get("rating")
              restaurantInfoFromGoogle["googleId"] = response['candidates'][0].get("place_id")
              restaurantInfoFromGoogle["openNow"] = response['candidates'][0].get("opening_hours")
              result.append(restaurantInfoFromGoogle)
    return result


def createMenu(menus):
  splitedMenus = menus.split('|')
  results = []
  for menu in splitedMenus:
    menu = menu.strip()
    item = {}
    for letter in range(len(menu)-1,-1,-1):
      if menu[letter] == " ":
        item["name"] = menu[:letter]
        item["price"] = menu[letter+1:]
        results.append(item)
        break
  return results


def crawlingFromNaver(restaurantInfos):
  for restaurant in restaurantInfos:
    name = restaurant['name'] ; lng = restaurant['geometry']['lng'] ; lat = restaurant['geometry']['lat']
    URL = f'https://map.naver.com/v5/api/search?caller=pcweb&query={name}&type=all&searchCoord={lng};{lat}&page=1&displayCount=5&isPlaceRecommendationReplace=true&lang=ko'
    response = requests.get(URL).json()["result"]["place"]["list"]
    for restaurantFromNaver in response:
      if checkAddress(restaurant['address'],restaurantFromNaver["roadAddress"]):
        restaurant["naverId"] = restaurantFromNaver["id"]
        restaurant["tel"] = restaurantFromNaver["tel"]
        restaurant["category"] = restaurantFromNaver["category"]
        restaurant["reviewCount"] = restaurantFromNaver["reviewCount"]
        restaurant["opentime"] = restaurantFromNaver["bizhourInfo"]
        restaurant["menu"] = createMenu(restaurantFromNaver["menuInfo"])
        break
  return restaurantInfos
    
  
testAddress(11,12)

# a = getDataFromSeoul(6,10)
# b = getDataFromGoogle(a)
# c = crawlingFromNaver(b)



def insertIntoDatabase(results):

  conn = pymysql.connect(host='recoderdbinstance.crnm0s8emitk.ap-northeast-2.rds.amazonaws.com', user='recoder', password='shdudtka123', db='recoderdb', charset='utf8')
  curs = conn.cursor()

  for restaurant in results:
    googleId = restaurant["googleId"];naverId = restaurant["naverId"];name = restaurant["name"];naverReviewCount = restaurant["reviewCount"];openTime = restaurant["opentime"];status = "영업중" if restaurant["openNow"]["open_now"] else "영업안함";phone=restaurant["tel"];longitude=restaurant["geometry"]["lng"];latitude=restaurant["geometry"]["lat"];address=restaurant["address"];google_rating=restaurant["googleRating"];price = restaurant["priceLevel"] if restaurant["priceLevel"] else -1
    
    sql = f'insert into restaurant (google_id,naver_id,name,naver_review_count,open_time,status,phone,longitude,latitude,address,google_rating,price) values ("{googleId}",{naverId},"{name}",{naverReviewCount},"{openTime}","{status}","{phone}",{longitude},{latitude},"{address}",{google_rating},{price})'
    
    curs.execute(sql)
    conn.commit()

# rows = curs.fetchall()
