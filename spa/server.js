const fs = require("fs");
const path = require("path");

const fastify = require("fastify")({logger: false});
fastify.register(require("fastify-static"), {root: path.join(__dirname, "public"),prefix: "/"});


fastify.get("*" , async (req, reply) => {  
  const stream = fs.readFileSync(__dirname+'/index.html');
  reply.type('text/html').send(stream)
});


fastify.listen(process.env.PORT, '0.0.0.0', function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Your app is listening on ${address}`);
  fastify.log.info(`server listening on ${address}`);
});
