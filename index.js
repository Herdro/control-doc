const express = require('express');
const config = require('./config/config');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handler');

const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`ControlDoc app listening on port ${port}!`);
});

