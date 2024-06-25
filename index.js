// import syntax (recommended)
import yahooFinance from 'yahoo-finance2';

const queryOptions = { lang: 'en-US', formatted: false, region: 'US'};
let tickers = ['TSLA','NVDA'];

tickers.forEach(async ticker => {
    console.log(`Ticker: ${ticker}`)

    const allOptions = await yahooFinance.options(ticker, queryOptions);
    const expirationDates = allOptions.expirationDates;
    
    expirationDates.forEach(async expirationDate => {
        let opts = { lang: 'en-US', formatted: false, region: 'US', date: expirationDate};
        const optionsData = await yahooFinance.options(ticker, opts);
        console.log(`Option expiry Date: ${expirationDate}`)
        //console.log(optionsData.options[0].calls);
        //console.log(optionsData.options[0].puts);
        console.log("===========================================");
    });
    
});


