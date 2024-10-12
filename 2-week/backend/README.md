1. Node.JS 설치

2. express 다운으로
    ```js
    1. npm init
    2. npm install express
    ```

3. 실행 파일 만들기
    ```js
    const express = require("express");
    const app = express();
    const port = 3000;
    app.get("/", (req, res) => {
      res.send("Hello World!");
    });
    
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
    ```

4. package.json 에 실행 명령어 추가
    ```js
    {
        "name": "server",
        "version": "1.0.0",
        "description": "```js     1. npm init     2. npm install express --save ```",
        "main": "index.js",
        "scripts": {
            "start": "node index.js", // 추가를 해준다.
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
            "license": "ISC",
            "dependencies": {
            "express": "^4.21.1"
        }
    }
    ```

5. 서버 실행
    ```js
    npm run start
    ```
   
6. url 경로 추가해서 다른 response 받기
7. html 문서를 response 받기
8. css 파일을 전달 받아 html 색상 변경하기
    ```js
    const express = require("express");
    const path = require("path");
    
    const app = express();
    const port = 3000;
    
    app.use(express.static(path.join(__dirname, "./public")));
    
    app.get("/", (req, res) => {
        res.send("Hello World!");
    });
    
    app.get("/study/:page", (req, res) => {
        console.log(req.params);
        console.log(req.query);
        res.send("study");
    });
    
    app.get("/html", (req, res) => {
        res.sendFile(`${__dirname}/public/index.html`);
    });
    
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
    ```
