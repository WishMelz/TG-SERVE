# TG-SERVE

> ​	TG机器人,自动推送消息短信,最简单的应用DEMO.

### 安装指南	

* Clone 仓库

```
git clone https://github.com/WishMelz/TG-SERVE.git
cd TG-SERVE
```

* 安装依赖

```
npm i
```

* 启动

```
node index.js
or
pm2 start index.js
```

* 修改配置文件 `config.js`

```
  port: "51783",   // 端口
    db: {					 // 数据库连接
        host: '',
        port: '',
        user: '',
        password: '.',
        database: '',
        multipleStatements: true
    },
    TG_ROBOT_TOKEN: "",   // TG机器人的TOKEN
    md5_key:""						// 加密字符串(随便,越乱越长越好)
```

