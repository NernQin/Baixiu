const express = require('express');
const app = express();
//测试一下服务器是否成功，如果成功这块代码删掉
app.get('/', (req, res) => {
  res.send('秦楠我爱你');
})
app.listen(3000);
console.log('正在监听端口3000,http://127.0.0.1:3000')