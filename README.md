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

* 修改配置文件将`config-stencil.js`更名为  `config.js`

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

* 启动运行

```
node index.js
or
pm2 start index.js
```

###  命令详情

* `/help` 帮助
* `/bind` 绑定
* `/untie` 解除绑定
* `/select` 查看SCKEY

### 发送消息

```
/send/:SCKEY
```

* 字段说明

| 字段  | 说明                                            |
| ----- | ----------------------------------------------- |
| SCKEY | `/bind` 绑定后机器人返回的KEY                   |
| text  | 要发送的内容                                    |
| type  | 可选类型 : `text`,`HTML`,`Markdown`。默认`text` |

```
举例:

GET: http://127.0.0.1:51783/send/SK7a7780ba6836b5ce76c0dc8b62f940efs?text=测试消息&type=HTML 

POST: http://127.0.0.1:51783/send/SK7a7780ba6836b5ce76c0dc8b62f940efs
另外的字段放在 body 中
```

