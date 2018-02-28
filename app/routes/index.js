const eth_route = require('./eth_route');
const btc_route = require('./btc_route');

module.exports = function(app) {
  eth_route(app);
  btc_route(app);
};
