const puppeteer = require('puppeteer');

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250,
    defaultViewport: null
  });

  const page = await browser.newPage();
  await page.goto("https://toto-yosou.com/archives/71155");

  const h1s = await page.$$('td');
  var h1 = h1s[1];
  var title = await page.evaluate(el => el.innerText, h1);

  var date = []; //開催日
  var home = []; //ホームチーム
  var away = []; //アウェイチーム
  var pred = []; //予想

  for(i=0; i<h1s.length-3; i++){
    h1 = h1s[i];
    title = await page.evaluate(el => el.innerText, h1);
    if(i%5==0){
        date.push(title);
    }else if(i%5==1){
        home.push(title);
    }else if(i%5==3){
        away.push(title);
    }else if(i%5==4){
        pred.push(title);
    }
    //console.log(i+" : "+title);
  }

  console.log(date);
  console.log(home);
  console.log(away);
  console.log(pred);

  browser.close();
}

main();