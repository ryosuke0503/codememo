const puppeteer = require('puppeteer');

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250,
    defaultViewport: null
  });

  //testNo:1232
  var url = "https://store.toto-dream.com/dcs/subos/screen/pi01/spin000/PGSPIN00001DisptotoLotInfo.form?holdCntId="+process.argv[2].toString()

  const page = await browser.newPage();
  await page.goto(url);

  //tdタグの要素を抽出
  const h1s = await page.$$('td');
  var h1 = h1s[1];
  var title = await page.evaluate(el => el.innerText, h1);

  var output = "";

  //結構強引にcsvファイルの形を形成
  for(i=6; i<102; i++){
    h1 = h1s[i];
    title = await page.evaluate(el => el.innerText, h1);

    if((i-6)%7==5){
      continue;
    }
    output += title;
    if((i-6)%7!=6){
      output += ",";
    }
    
    if((i-6)%7==6){
      console.log(output);
      output = "";
    }
  }

  browser.close();
}

main();