let request_number = 0;
const pino = require("pino");
const logger = pino({
  transport: {
    target: "pino-pretty",
    options: { translateTime: true },
  },
});

const indexHandler = (req, res) => {
  var current_time = new Date();
  request_number += 1;
  logger.info("The index page has been visited");
  res.send(`Hello! The current server time in is ${current_time}. The server has responded to ${request_number} requests since it started.`)
}

const sayHelloHandler = (req, res) => {
  const name = req.params.name || "Friend";
logger.info(`The /hello/${name} endpont has been visited`)
  res.send(`Hello ${name}!`);
}

module.exports = { indexHandler, sayHelloHandler };