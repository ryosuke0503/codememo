const puppeteer = require('puppeteer');

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250,
    defaultViewport: null
  });

  const page = await browser.newPage();
  await page.goto("https://store.toto-dream.com/dcs/subos/screen/pi01/spin000/PGSPIN00001DisptotoLotInfo.form?holdCntId=1232");

  //tdタグの要素を抽出
  const h1s = await page.$$('td');
  var h1 = h1s[1];
  var title = await page.evaluate(el => el.innerText, h1);

  var output = "";

  //結構強引にcsvファイルの形を形成
  for(i=6; i<109; i++){
    h1 = h1s[i];
    title = await page.evaluate(el => el.innerText, h1);

    if((i-6)%8==0 || (i-6)%8==5 || (i-6)%8==7){
      continue;
    }
    output += title;
    if((i-6)%8!=6){
      output += ",";
    }
    
    if((i-6)%8==6){
      console.log(output);
      output = "";
    }
  }

  browser.close();
}

main();