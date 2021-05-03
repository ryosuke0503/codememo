import sqlite3
import pandas as pd
import sys

dbname = "./matchresult.sqlite3"

conn = sqlite3.connect(dbname)
cur = conn.cursor()

# table一覧の取得
tables = []
cur.execute("select * from sqlite_master where type='table'")
for row in cur.fetchall():
    tables.append(row[1])
print(tables)

# totalテーブルがなかったら作成(J1のみ)
J1 = [
"札幌", "仙台","鹿島", "浦和", "柏",
"Ｆ東京","川崎", "横浜Ｍ","横浜Ｃ","湘南", 
"清水","名古屋","Ｇ大阪","Ｃ大阪","神戸", 
"広島", "徳島", "福岡", "鳥栖", "大分" 
]
cur.execute("SELECT * FROM sqlite_master WHERE type='table' and name='total'")
if not cur.fetchone():
    cur.execute('CREATE TABLE total (id int, name text, win int, lose int, draw int, getp int, losep int)')
    cur.execute('INSERT INTO total VALUES (0, "札幌", 0, 0, 0, 0, 0)')
    cur.execute('INSERT INTO total VALUES (1, "仙台", 0, 0, 0, 0, 0)')
    cur.execute('INSERT INTO total VALUES (2, "鹿島", 0, 0, 0, 0, 0)')
    cur.execute('INSERT INTO total VALUES (3, "浦和", 0, 0, 0, 0, 0)')
    cur.execute('INSERT INTO total VALUES (4, "柏", 0, 0, 0, 0, 0)')
    cur.execute('INSERT INTO total VALUES (5, "Ｆ東京", 0, 0, 0, 0, 0)')
    cur.execute('INSERT INTO total VALUES (6, "川崎", 0, 0, 0, 0, 0)')
    cur.execute('INSERT INTO total VALUES (7, "横浜Ｍ", 0, 0, 0, 0, 0)')
    cur.execute('INSERT INTO total VALUES (8, "横浜Ｃ", 0, 0, 0, 0, 0)')
    cur.execute('INSERT INTO total VALUES (9, "湘南", 0, 0, 0, 0, 0)')
    cur.execute('INSERT INTO total VALUES (10, "清水", 0, 0, 0, 0, 0)')
    cur.execute('INSERT INTO total VALUES (11, "名古屋", 0, 0, 0, 0, 0)')
    cur.execute('INSERT INTO total VALUES (12, "Ｇ大阪", 0, 0, 0, 0, 0)')
    cur.execute('INSERT INTO total VALUES (13, "Ｃ大阪", 0, 0, 0, 0, 0)')
    cur.execute('INSERT INTO total VALUES (14, "神戸", 0, 0, 0, 0, 0)')
    cur.execute('INSERT INTO total VALUES (15, "広島", 0, 0, 0, 0, 0)')
    cur.execute('INSERT INTO total VALUES (16, "徳島", 0, 0, 0, 0, 0)')
    cur.execute('INSERT INTO total VALUES (17, "福岡", 0, 0, 0, 0, 0)')
    cur.execute('INSERT INTO total VALUES (18, "鳥栖", 0, 0, 0, 0, 0)')
    cur.execute('INSERT INTO total VALUES (19, "大分", 0, 0, 0, 0, 0)')
    conn.commit()

# 第何回のテーブルの検索
for team in J1:
    points = []
    point=0
    for i in range(len(tables)):
        if(tables[i]=='total'):
            continue
        sql = "SELECT * FROM sqlite_master WHERE type='table' and name='"+tables[i]+"'"
        cur.execute(sql)
        if cur.fetchone():
            #print(tables[i])
            sql = "SELECT * FROM '"+tables[i]+"'"
            cur.execute(sql)
            for row in cur.fetchall():
                #print(row)
                if row[4]==team:
                    idx=row[5].find('-')
                    points.append(row[5][:idx])
                    point += int(row[5][:idx])
                    #print("home: "+row[4]+": "+row[5]+", "+row[5][:idx])
                if row[6]==team:
                    idx=row[5].find('-')
                    points.append(row[5][idx+1:])
                    point += int(row[5][idx+1:])
                    #print("away: "+row[6]+": "+row[5]+", "+row[5][:idx])
    print(team+": "+str(point)+": ", end='')
    print(points)
cur.close()
conn.close()