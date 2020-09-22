import requests
import boto3
import uuid
import json
# # 다운받을 이미지 url
# url = "https://dispatch.cdnser.be/cms-content/uploads/2020/04/09/a26f4b7b-9769-49dd-aed3-b7067fbc5a8c.jpg"

# # request.get 요청


s3 = boto3.resource("s3")




# with open("./restaurant_origin.json") as json_file:
#   json_data = json.load(json_file)
#   for i in range(2):
#     print(json_data[i])
#     print("hello")
# print(str(uuid.uuid4()))
def loadImageFromNaver(url):
  try:
    res = requests.get(url)
    return res.content
  except:
    print("네이버에서 크롤링중 에러 발생!!")
    
def imageUpload(content):
  name = str(uuid.uuid4())
  s3.Bucket("momelet").put_object(Body=content, Key=f'restaurant/images/{name}.jpeg')
  return f'https://s3.console.aws.amazon.com/s3/object/momelet/restaurant/images/{name}'

def load_restaurant(index,hm):
  print(f'{index}라인 부터 {hm}개 줄에 대해서 작업 시작.')
  restaurants = []
  nowIndex = index
  matchResult = []
  with open('./restaurant_origin.json') as json_file:
    restaurants = json.load(json_file)
  # print(type(restaurants[0]))
  for idx in range(index,index+hm):
    thumUrl = restaurants[nowIndex]["thumUrl"]
    # print(thumUrl)
    content = loadImageFromNaver(thumUrl)
    name = imageUpload(content)
    restaurants[nowIndex]["thumUrl"] = name
    nowIndex+=1
  with open("./index.txt",'w') as index_file:
    index_file.write(str(nowIndex+1))
  print(f'작업 정상 종료. 현재 작업 진행 상황 : {nowIndex} 까지 작업 완료.')
    

  
stratIndex = 0
with open('./index.txt','r') as index_file:
  for line in index_file:
    startIndex = int(line)
load_restaurant(startIndex,5)
# name = "helo"
# print(f'my name is {name}')