const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  await next();
});

app.use(bodyParser());

const tasks = {
  1: {task:'Drink', done: false, show: true, day: 0, id:1},
  2: {task:'Eat', done: false, show: true, day: 2, id:2},
  3: {task:'Coffee', done: true, show: true, day: 3, id:3},
  4: {task:'Coffee3', done: true, show: true, day: 4, id:4},
  5: {task:'Coffee2', done: false, show: true, day: 5, id:5} ,
  6: {task:'Coffee1', done: true, show: true, day: 6, id:6},
  8: {task:'CoffeeSun', done: true, show: true, day: 1, id:8},
  9: {task:'CoffeeSun', done: false, show: true, day: 2, id:9},
  10: {task:'CoffeeSun', done: true, show: true, day: 3, id:10},
  11: {task:'CoffeeSun', done: false, show: true, day: 3, id:11},
  12: {task:'CoffeeSun', done: false, show: true, day: 3, id:12},
  13: {task:'CoffeeSun', done: false, show: true, day: 4, id:13},
  14: {task:'CoffeeSun', done: false, show: true, day: 5, id:14},
  15: {task:'CoffeeSun', done: false, show: true, day: 5, id:15},
  16: {task:'CoffeeSun', done: true, show: true, day: 6, id:16},
  17: {task:'CoffeeSun', done: true, show: true, day: 6, id:17},
};


router.get('/tasks', async (ctx, next) => {
  ctx.body = tasks;
  await next
});

router.get('/task/:id', async (ctx, next) => {
  const { id } = ctx.params;
  ctx.body = tasks[id];
  await next
});

router.post('/task/update/:id', async (ctx, next) => {
  const { id } = ctx.params;
  const { body } = ctx.request;
  tasks[id] = {
    ...tasks[id],
    ...body,
  };
  ctx.body = tasks[id];
  await next
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3001);
