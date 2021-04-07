const puppeteer = require('puppeteer');

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250,
    defaultViewport: null
  });

  const page = await browser.newPage();
  await page.goto("https://store.toto-dream.com/dcs/subos/screen/pi04/spin011/PGSPIN01101LnkHoldCntLotResultLsttoto.form?holdCntId=1231");

  const h1s = await page.$$('td');
  var h1 = h1s[1];
  var title = await page.evaluate(el => el.innerText, h1);

  var output = "";

  for(i=3; i<94; i++){
    h1 = h1s[i];
    title = await page.evaluate(el => el.innerText, h1);

    output += title;
    if((i-3)%7!=6){
      output += ",";
    }else{
      console.log(output);
      output = "";
    }
  }

  browser.close();
}

main();