const express = require('express');
const app = express();
const { port } = require('./config');
const bodyParser = require('body-parser');
app.use(require('cors')())
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static('./public'));

app.use(require('./routers/index'));

app.listen(port, () => {
    console.log('sever run to http://127.0.0.1:' + port);
})