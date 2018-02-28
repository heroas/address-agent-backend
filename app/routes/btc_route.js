module.exports = function(app) {

  var priceFetcher = require('./price_fetcher');
  var blockexplorer = require('blockexplorer')

  app.post('/getBtcAmtFromAddress', (req, res) => {
    var balance = blockexplorer.balance(req.body.address)
    balance.then(data => {
      var satsToBTC = data / 1e8;

      priceFetcher.fetchCoinPrice(req.body.coinName)
        .then(response => {
          var totalAmt = (response * satsToBTC).toFixed(2);
          var result = {"worth": totalAmt, "balance": satsToBTC.toFixed(2)}

          res.json(totalAmt)
        })
    })
  })

};
