const eth_route = require('./eth_route');
const btc_route = require('./btc_route');
const xrp_route = require('./xrp_route');


module.exports = function(app) {
  eth_route(app);
  btc_route(app);
  xrp_route(app);
};
