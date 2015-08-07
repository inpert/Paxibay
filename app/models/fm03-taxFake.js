module.exports = [
    {
        "valueaddedtax": { "isinternaltax": true, "incometax": 17, "outputtax": 13 },
        "salestaxplus": {
            "citymaintain": { "qty": 5, "unit": "%", "based": "valueaddedtax" },
            "education": { "qty": 3, "unit": "%", "based": "valueaddedtax" },
            "resourcetax": { "qty": 1.2, "unit": "%", "based": "valueaddedtax" }
        }
    }
]