//this is the options JSON implementation

function getYPrice2(symbol) {
    symbol = symbol || "VWRA.L";
    symbol = encodeURI(symbol);
    Utilities.sleep(Math.floor(Math.random() * 5000))
    var url = 'https://query2.finance.yahoo.com/v7/finance/options/'+ symbol; // last one day history
    Logger.log(url);  
    var response = UrlFetchApp.fetch(url, {muteHttpExceptions: true});
    var responseCode = response.getResponseCode();
    if (responseCode === 200) {
      var chain = JSON.parse(response.getContentText());
      Logger.log(parseFloat(chain.optionChain.result[0].quote.regularMarketPrice));
      return parseFloat(chain.optionChain.result[0].quote.regularMarketPrice);
    }else{
       return -1; 
    }
  }
  
  
  //this is the stock JSON implementation
  // guide 1: https://stackoverflow.com/questions/44030983/yahoo-finance-url-not-working
  // guide 2:
  
  function getYPrice3(symbol) {
    symbol = symbol || "VWRA.L";
    symbol = encodeURI(symbol);
    Utilities.sleep(Math.floor(Math.random() * 5000))
    var url = 'https://query2.finance.yahoo.com/v10/finance/quoteSummary/'+symbol+'?modules=price'; // last one day history
    Logger.log(url);  
    var response = UrlFetchApp.fetch(url, {muteHttpExceptions: true});
    var responseCode = response.getResponseCode();
    if (responseCode === 200) {
      var quote = JSON.parse(response.getContentText());
      Logger.log(parseFloat(quote.quoteSummary.result[0].price.regularMarketPrice.raw));
      return parseFloat(quote.quoteSummary.result[0].price.regularMarketPrice.raw);
    }else{
       return -1; 
    }
  }