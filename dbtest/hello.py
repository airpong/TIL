import pymysql
conn = pymysql.connect(host='recoderdbinstance.crnm0s8emitk.ap-northeast-2.rds.amazonaws.com', user='recoder', password='shdudtka123', db='recoderdb', charset='utf8')
curs = conn.cursor()
sql = "SELECT * FROM test"
curs.execute(sql)

rows = curs.fetchall()
