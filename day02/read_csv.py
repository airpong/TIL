import csv
with open('lunch.csv', 'r',encoding='utf8') as f:
    # lines = f.readlines()
    csv_reader=csv.reader(f)
    for i in csv_reader:
        print(i)
    print(type(csv_reader))
    # for line in lines:
    #     print(line.strip().split(','))