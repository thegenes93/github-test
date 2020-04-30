const app = require('./app')
const PORT = 3000;
const HOST = '0.0.0.0'
app.listen(process.env.PORT || PORT, HOST);