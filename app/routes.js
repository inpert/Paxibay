
var productsData = require('./models/pbproductsFake');
var projectData = require('./models/pbprojectFake');

var fm02_products = require('./models/fm02-productsFake');


module.exports = [
    {
        apiType: 'get',
        path: '/',
        fn: function (req, res) {
            res.render("index");
        }
    }, {
        apiType: 'get',
        path: '/api/fmproducts',
        fn: function (req, res) {
            setTimeout(function () {
                res.send(fm02_products);
            }, 1000);
        }
    }, {
        apiType: 'post',
        path: '/api/fmproducts/:id',
        fn: function (req, res) {
            setTimeout(function () {
                res.send(fm02_products);
            }, 200);
        }
    }, {
        apiType: 'put',
        path: '/api/fmproducts/:id',
        fn: function (req, res) {
            setTimeout(function () {
                res.send(productsData);
            }, 1000);
        }
    }, {
        apiType: 'get',
        path: '/api/products',
        fn: function (req, res) {
            setTimeout(function () {
                res.send(productsData);
            }, 1000);
        }
    }, {
        apiType: 'post',
        path: '/api/dashboard/projectsList',
        fn: function (req, res) {
            setTimeout(function () {
                res.send(pbprojectData);
            }, 200);
        }
    }, {
        apiType: 'post',
        path: '/api/dashboard/myPolicies',
        fn: function (req, res) {
            setTimeout(function () {
                res.send(pbproductsData);
            }, 200);
        }
    }
];


//{
//apiType: 'put',
//    path: '/api/clients/CELA/contacts/:id/cases/:caseId',
//fn: function(req, res) {
//    setTimeout(function() {
//        res.send(myTasksFakeData);
//    }, 1000);
//}
//}, {
//    apiType: 'put',
//    path: '/api/clients/CELA/contacts/:id/cases/:caseId/comments/:commentId',
//    fn: function(req, res) {
//        setTimeout(function() {
//            res.send(myTasksFakeData);
//        }, 1000);
//    }
//}