const Koa = require('koa');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-oai-router');
const middleware = require('koa-oai-router-middleware');

const app = new Koa();

const router = new Router({
  apiDoc: './pet-store/api',
  options: {
    middleware: './pet-store/controllers'
  }
});

router.mount(middleware());

app.use(logger());
app.use(bodyParser());
app.use(router.routes());

app.listen(3000);
