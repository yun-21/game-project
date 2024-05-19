const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
  if (request.method === "GET") {
    if (request.url === "/") {
      const first = fs.readFileSync("./public/one.html", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(first);
      response.end();
    }
    if (request.url === "/onescript.js") {
      const second = fs.readFileSync("./public/onescript.js", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/javascript; charset=utf-8');
      response.write(second);
      response.end();
    }
    if (request.url === "/onestyle.css") {
      const third = fs.readFileSync("./public/onestyle.css", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/css; charset=utf-8');
      response.write(third);
      response.end();
    } //여기까지 (게임 시작하겠습니까?) 메인 화면
    //게임 시작 누르고 나오는 두 갈래 길 선택지 화면 
    if(request.url === "/gameStart.html"){
      const gameStart = fs.readFileSync("./public/gameStart.html", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(gameStart);
      response.end();
    }
    if(request.url === "/gameStart.js"){
      const gameStart = fs.readFileSync("./public/gameStart.js", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/javascript; charset=utf-8');
      response.write(gameStart);
      response.end();
    }
    //게임을 시작하지 않을 사람들을 위한 화면
    if(request.url === "/gameNoStart.html"){
      const gameNoStart = fs.readFileSync("./public/gameNoStart.html", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(gameNoStart);
      response.end();
    }
    //왼쪽 길 선택했을 때
    if(request.url === "/roadLeft.html"){
      const roadLeft = fs.readFileSync("./public/roadLeft.html", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(roadLeft);
      response.end();
    }
    //왼쪽길 - 소리친다
    if(request.url === "/soundOn.html"){
      const soundOn = fs.readFileSync("./public/soundOn.html", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(soundOn);
      response.end();
    }
    //왼쪽길 - 소리치지않는다.
    if(request.url === "/soundOff.html"){
      const soundOff = fs.readFileSync("./public/soundOff.html", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(soundOff);
      response.end();
    }
    //왼쪽길 - 집안에 들어간다
    if(request.url === "/homeIn.html"){
      const homeIn = fs.readFileSync("./public/homeIn.html", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(homeIn);
      response.end();
    }
    //왼쪽길 - 집안/ 꿈 엔딩
    if(request.url === "/ggumendingBefore.html"){
      const ggumendingBefore = fs.readFileSync("./public/ggumendingBefore.html", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(ggumendingBefore);
      response.end();
    }
    //왼쪽길 - 집안에 들어가지 않는다.
    if(request.url === "/homeOut.html"){
      const homeOut = fs.readFileSync("./public/homeOut.html", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(homeOut);
      response.end();
    }
    //왼쪽길 - 집 안들어감 -> 도로 차 기다린다.
    if(request.url === "/waitOk.html"){
      const waitOk = fs.readFileSync("./public/waitOk.html", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(waitOk);
      response.end();
    }
    //왼쪽길 - 집 안들어감 -> 도로 차 기다리지 않는다. 편의점 발견!
    if(request.url === "/waitNo.html"){
      const waitNo = fs.readFileSync("./public/waitNo.html", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(waitNo);
      response.end();
    }
    //왼쪽길 - 도로 차 기다리지 않는다. -> 편의점 발견 
    if(request.url === "/martEnd.html"){
      const martEnd = fs.readFileSync("./public/martEnd.html", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(martEnd);
      response.end();
    }
    //오른쪽 길 선택했을 때
    if(request.url === "/roadRight.html"){
      const roadRight = fs.readFileSync("./public/roadRight.html", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(roadRight);
      response.end();
    }
    //오른쪽 길 -> 왼쪽으로 가지 않는다. 숲엔딩
    if(request.url === "/forestEnd.html"){
      const forestEnd = fs.readFileSync("./public/forestEnd.html", "utf8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(forestEnd);
      response.end();
    }
  }
});
server.listen(8080);