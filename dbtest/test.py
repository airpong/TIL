#-*- coding:utf-8 -*-

b = "트레디셔널(R) 샌드위치 5,700"
for letter in range(len(b)-1,-1,-1):
  if b[letter] == " ":
    print(b[:letter])
    print(b[letter+1:])
    break
    
