matchresult.sqlite3というデータベースに
create table info(date text, time text, stadium text, home text, away text);
create table result(date text, stadium text, No text, home text, points text, away text, result text);
の二つのテーブルを用意します。それぞれ「くじ情報」「くじ結果」のページの表を想定しています。

使い方:
autotest.sh <開催回> またはautotest.bat <開催回>として使用します。
(例: autotest.sh 1232)
result<開催回>.csvが生成され、matchresult.sqlite3に反映されます。

calctables.pyでmatchresult.sqlite3内のデータから各チームの得点を抜き出します。
(現状ではまだデータベースに反映されません。)