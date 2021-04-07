matchresult.sqlite3というデータベースに
create table info(date text, time text, stadium text, home text, away text);
create table result(date text, stadium text, No text, home text, points text, away text, result text);
の二つのテーブルを用意します。それぞれ「くじ情報」「くじ結果」のページの表を想定しています。

使い方:
1, totoinfoforcsv.js, totoresultforcsv.jsを実行することでinfo.csv, result.csvが生成されます。

2, updateinfo.py, updateresult.pyを実行することで生成したcsvファイルをデータベースに反映することが出来ます。

***URLやパスの指定がかなり静的に記述されているので使用時には変更をお願いします。