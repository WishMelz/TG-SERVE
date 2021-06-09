const express = require("express");
const router = express.Router();
const BOT = require('../unit/BOT');
const conn = require('../unit/db');
const randomKey = require('../unit/randomKey');
//帮助
BOT.onText(/\/help/, (msg) => {
    let str = `1. /help 帮助 \n2. /bind 绑定 \n3. /untie 解除绑定 \n4. /select 查看SCKEY`
    BOT.sendMessage(msg.chat.id, str);
});
// 绑定
BOT.onText(/\/bind/, (msg) => {
    let userId = msg.chat.id;
    let first_name = msg.chat.first_name;
    let username = msg.chat.username;
    conn.query('select * from data where userId = ?', [userId], (err, data) => {
        if (err) {
            BOT.sendMessage(msg.chat.id, '系统异常');
            return
        }
        if (data.length == 0) {
            let key = randomKey();
            let inData = {
                userId,
                first_name,
                username,
                key
            }
            conn.query('insert into data set ?', inData, (err, data) => {
                if (err) {
                    BOT.sendMessage(msg.chat.id, '系统异常');
                    return
                }
                BOT.sendMessage(msg.chat.id, `您已绑定,SCKEY为: ${key}`);
            })
        } else {
            BOT.sendMessage(msg.chat.id, `您已绑定,SCKEY为: ${data[0].key}`);
        }
    })
});
//解除绑定
BOT.onText(/\/untie/, (msg) => {
    let userId = msg.chat.id;
    conn.query('delete from data where userId = ?', [userId], (err, data) => {
        if (err) {
            BOT.sendMessage(msg.chat.id, '系统异常');
            return
        }
        BOT.sendMessage(msg.chat.id, `您已解除绑定`);
    })
});
// 查看SCKEY
BOT.onText(/\/select/, (msg) => {
    let userId = msg.chat.id;
    conn.query('select * from data where userId = ?', [userId], (err, data) => {
        if (err) {
            BOT.sendMessage(msg.chat.id, '系统异常');
            return
        }
        if (data.length == 0) {
            BOT.sendMessage(msg.chat.id, `您还没有绑定!`);
        } else {
            BOT.sendMessage(msg.chat.id, `您的SCKEY为: ${data[0].key}`);
        }
    })
});
// 发送短信
router.get('/send/:key', (req, res) => {
    let key = req.params.key || '';
    let text = req.query.text || '';
    let type = req.query.type || 'text';
    conn.query('select * from data where `key` = ?', [key], (err, data) => {
        if (err) {
            console.log(err);
            res.json({
                code: "4000",
                message: "系统异常"
            })
            return;
        }
        if (data.length == 0) {
            res.json({
                code: "4004",
                message: "用户不存在"
            })
        } else {
            let userId = data[0].userId;
            switch (type) {
                case 'text':
                    BOT.sendMessage(userId, text);
                    break;
                case 'HTML':
                    BOT.sendMessage(userId, text, { parse_mode: "HTML" });
                    break;
                case 'Markdown':
                    BOT.sendMessage(userId, text, { parse_mode: "Markdown" });
                    break;
                default:
                    BOT.sendMessage(userId, text);
                    break;
            }
            res.json({
                code: "2000",
                message: "发送成功"
            })
        }
    })
})
router.post('/send/:key', (req, res) => {
    let key = req.params.key || '';
    let text = req.body.text || '';
    let type = req.body.type || 'text';
    conn.query('select * from data where `key` = ?', [key], (err, data) => {
        if (err) {
            console.log(err);
            res.json({
                code: "4000",
                message: "系统异常"
            })
            return;
        }
        if (data.length == 0) {
            res.json({
                code: "4004",
                message: "用户不存在"
            })
        } else {
            let userId = data[0].userId;
            switch (type) {
                case 'text':
                    BOT.sendMessage(userId, text);
                    break;
                case 'HTML':
                    BOT.sendMessage(userId, text, { parse_mode: "HTML" });
                    break;
                case 'Markdown':
                    BOT.sendMessage(userId, text, { parse_mode: "Markdown" });
                    break;
                default:
                    BOT.sendMessage(userId, text);
                    break;
            }
            res.json({
                code: "2000",
                message: "发送成功"
            })
        }
    })
})

module.exports = router;