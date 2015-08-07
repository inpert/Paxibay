
var productsData = require('./models/pbproductsFake');
var projectData = require('./models/pbprojectFake');

module.exports = [
    {
        apiType: 'get',
        path: '/',
        fn: function (req, res) {
            res.render("index");
        }
    }, {
        apiType: 'get',
        path: '/api/project',
        fn: function (req, res) {
            setTimeout(function () {
                res.send(projectData);
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
