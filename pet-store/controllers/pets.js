const database = [];

async function get(ctx, next) {
  const { tags = '', limit = 999 } = ctx.request.query;
  const tagsArray = tags.split(',');
  const docs = [];

  database.forEach((item, idx) => {
    if (tagsArray.indexOf(item.tag) !== -1 && docs.length < limit) {
      item.id = idx + 1;
      docs.push(item);
    }
  });

  ctx.response.body = docs;
}

async function post(ctx, next) {
  const body = ctx.request.body;

  database.push(body);

  ctx.response.body = {
    id: database.length,
    name: body.name,
    tag: body.tag,
  };
}

module.exports = {
  get,
  post,
};