module.exports = [
    {
        "settings": {
            "methods": { "composite": true, "separate": false, "simple": false },
            "benifitscale": 14,
            "adjusfixedoperatingcost": { "lessthan50%": 50, "lessthan75%": 75, "morethan75%": 100 },
            "adjusvariableoperatingcost": { "firstyear": 0.5, "secondyear": 0.75, "thirdyear": 1 }
        },
        "input": {
            "operatingcosts": {
                "rawmaterialpurchasing": 5,
                "fuelspower": 0,
                "wage": 0,
                "repairingcost": 0,
                "salesfee": 0,
                "other": 0
            },
            "othercosts": {
                "other01": 4,
                "other02": 0
            }
        }
    }
]