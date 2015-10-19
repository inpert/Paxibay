module.exports = {
    atomicData: {
        vat: {
            income: {
                type: Number,
                default: 17
            },
            outcome: {
                type: Number,
                default: 13
            },
            isInternal: Boolean
        },
        salesTaxAndSurtax: [
           { taxName: String, rate: Number, unit: String, dependence: String },
           { taxName: String, rate: Number, unit: String, dependence: String },
           { taxName: String, rate: Number, unit: String, dependence: String },
           { taxName: String, rate: Number, unit: String, dependence: String },
           { taxName: String, rate: Number, unit: String, dependence: String },
           { taxName: String, rate: Number, unit: String, dependence: String },
           { taxName: String, rate: Number, unit: String, dependence: String },
           { taxName: String, rate: Number, unit: String, dependence: String },
           { taxName: String, rate: Number, unit: String, dependence: String }
        ]
    },
    valueObject: {
        // 增值税(=value added tax): vat
        // Sales 销售额
        // 城市维护建设税: city maintenance construction tax
        // 教育费附加税: education surtax
        taxNames: {
            type: String,
            enum: ['cityTax', 'eduSurtax']
        },
        units: {
            type: String,
            enum: ['%', '$/unit']
        },
        salesTaxAndSurtaxLib: [
            { taxName: String, rate: Number, unit: String, dependence: String },
            { taxName: String, rate: Number, unit: String, dependence: String },
            { taxName: String, rate: Number, unit: String, dependence: String },
            { taxName: String, rate: Number, unit: String, dependence: String },
            { taxName: String, rate: Number, unit: String, dependence: String },
            { taxName: String, rate: Number, unit: String, dependence: String },
            { taxName: String, rate: Number, unit: String, dependence: String },
            { taxName: String, rate: Number, unit: String, dependence: String },
            { taxName: String, rate: Number, unit: String, dependence: String }
        ],
        salesTaxAndSurtaxRef: [
            {
                salesTaxAndSurtax01: [
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String }
                ]
            },
            {
                salesTaxAndSurtax01: [
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String }
                ]
            },
            {
                salesTaxAndSurtax01: [
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String }
                ]
            },
            {
                salesTaxAndSurtax01: [
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String }
                ]
            },
            {
                salesTaxAndSurtax01: [
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String }
                ]
            },
            {
                salesTaxAndSurtax01: [
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String },
                    { taxName: String, rate: Number, unit: String, dependence: String }
                ]
            }
        ]
    }
}