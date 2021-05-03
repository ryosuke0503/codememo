rem noに結果を取り寄せたい開催回数、dbに使用したいデータベースのファイルを入力してください。
set no=%1
set db="./matchresult.sqlite3"

node .\totoresultforcsv.js %no%>result%no%.csv
python updateresult.py %db% %no%
