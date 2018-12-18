import csv

lunch = {'간바지': '054-476-9393','와촌식육식당':'054-474-8892','선산곱창':'054-473-5158'}

with open('lunch.csv','w',encoding='utf8',newline='') as f:
    csv_writer = csv.writer(f)
    for item in lunch.items():     #dict.item()는 dict의 요소들의 tuple형태로 list에 저장하는 것. 실제로 list가 아닌 dict_items 라는 자료형이기 때문에 index는 불가. iterable인 객체
        csv_writer.writerow(item)
        #  f.write(f'{item[0]},{item[1]}\n')