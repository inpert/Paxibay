
module.exports = {
    settings: {
        duration: {
            period: {
                type: Number,
                default: 20
            },
            beginning: {
                type: String,
                default: Date.now.toString()
            },
            startyear: Number,
            imcomeyear: Number,
            normalyear: Number,
            hasprepare: Boolean,
            baseprice: Boolean,
            currency: {
                enca: {
                    type: String,
                    enum: ['Admin', 'Owner', 'User']
                },
                zhcn: {
                    type: String,
                    enum: ['万', '千', '百', '十']
                }
            }
        },
        evaluatingIndicator: {
            baseIRR: Number,
            incometax: Number,
            surplusreserve: Number,
            Statutorywelfarereserve: Number,
            extractsurplusreserve: String,
            Profitpayable: Number,
            surplusreservescale: Number
        }
    },
    priceIndex: {
        baseYear: {
            type: String,
            default: '2000'
        },
        ppi: {
            type: Number,
            default: 0
        },
        cpi: {
            type: Number,
            default: 0
        },
        preScales: [
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String }
        ],
        scales: [
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String },
            { year: String, ppi: Number, cpi: Number, edge: String }
        ]
    },
};