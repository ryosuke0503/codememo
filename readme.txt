ファイルを保存して移動した後
npm install
npm start
でサーバーが稼働します。
http://localhost:3000/page1/info
http://localhost:3000/page1/result
にブラウザでアクセスするとくじ情報、くじ結果の(仮)ページよりtoto公式から引用した表が見れます。

views/page1.ejsとviews/page2.ejsがそれぞれのページのひな型になっています。

heroku用

autotest.sh, autotest.batについて
ファイルを使用するにはnode、python、pandasのインストールが必要です。(だいたいpip)
matchresult.sqlite3というファイルもある前提なのでtouchコマンドで生成してください。