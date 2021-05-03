no=1231
db="./matchresult.sqlite3"

node totoresultforcsv.js ${no}>result${no}.csv
python3 updateresult.py ${db} ${no}
