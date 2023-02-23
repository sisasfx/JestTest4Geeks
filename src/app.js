// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


function fromEuroToDollar(euro){
    let conversionToDollar = euro * 1.2;
    return conversionToDollar;
}

function fromDollarToYen(dollar){
    let euros = dollar / 1.2
    let resultToYen = euros * 127.9
    return resultToYen;
}

function fromYenToPound(yen){
    let euros = yen / 127.9;
    let resultEuroToPound = euros * 0.8;
    return resultEuroToPound
}


module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}