(function (employeeController) {
    //By using employeeController as a parameter in the anonymous function
    // we are replacing it with module.exports so that we can start adding functions to it.
    // So we have a function named init which accepts an application parameter.
    // This application parameter will be passed from the server.js file, yes
    // the application object that we created using express library.
    employeeController.init = function (application) {

        // Mongoose connection - Start
        // Add mongoose library
        var mongoose = require('mongoose');

        // Connect to empdb database, if not exists, mongodb will create. mongo mongodb://ds029187.mongolab.com:29187/paxibay

        //mongoose.connect('mongodb://localhost/empdb');
        mongoose.connect('mongodb://localhost/paxibay');
        //mongoose.connect('mongodb://paxiadmin:admin@ds029187.mongolab.com:29187/paxibay');

        // define connection
        var db = mongoose.connection;
        db.on('error', console.error);
        db.once('open', function callback() {
            console.log('mongodb connection opened.');
        });

        // define schema and model
        var empSchema = mongoose.Schema({ name: String });
        var Employee = mongoose.model('Employee', empSchema);

        //==============================================
        var metadata = {
            settings: {},
            projects: {},
            taxing: {},
            costing: {},
            investing: {},
            lending: {},
            depreciation: {}
        };

        var valuatorSchema = mongoose.Schema({
            valuator: String,
            user_id: String,
            metadata: metadata
        });

        var paxiValuator = mongoose.model('paxiValuator', valuatorSchema);
        //============================================


        application.get("/api/valuator", function (req, res) {
            // Set response headers, content type to json
            res.set("Content-Type", "application/json");
            // Retrieve employees
            paxiValuator.find(function (err, paxiValuators) {
                if (err) return console.error(err);
                // Send a json collection object back. 
                res.send(paxiValuators);
            });
        });
        // Handle POST request to create employee
        application.post("/api/valuator", function (req, res) {
            // Create an employee
            // Get the employee name from the HTTP request body using req.body.empName

            var paxivaluator = {
                "valuator": "00000001",
                "user_id": "000002",
                "metadata": {
                    "settings": { "period": 20},
                    "projects": {},
                    "taxing": {},
                    "costing": {},
                    "investing": {},
                    "lending": {},
                    "depreciation": {}
                }
            };
            var valuator = new paxiValuator(paxivaluator);
            valuator.save(function (err, valuator) {
                if (err) return console.error(err);
                console.log(valuator);
            });
            // Set response headers, content type to json
            res.set("Content-Type", "application/json");
            // Send the inserted employee name back to angular for databind to the collection employees.
            res.send(paxivaluator);
        });

        //================================================
        
        // Mongoose connection - End

        //Here we are doing the very same thing that we did in server.js 
        // routing a GET request to the root of the site "/" and returning the index.vash view
        application.get("/", function (req, res) {
            res.render("index");
        })

        application.get("/api/employee", function (req, res) {
            // Set response headers, content type to json
            res.set("Content-Type", "application/json");
            // Retrieve employees
            Employee.find(function (err, employees) {
                if (err) return console.error(err);
                // Send a json collection object back. 
                res.send(employees);
            });
        });
        // Handle POST request to create employee
        application.post("/api/employee", function (req, res) {
            // Create an employee
            // Get the employee name from the HTTP request body using req.body.empName
            var emp = new Employee({ name: req.body.empName });
            emp.save(function (err, emp) {
                if (err) return console.error(err);
                console.log(emp);
            });
            // Set response headers, content type to json
            res.set("Content-Type", "application/json");
            // Send the inserted employee name back to angular for databind to the collection employees.
            res.send({ name: req.body.empName });

        });
    }
})(module.exports);


//===========================================================================
//(function (employeeController) {
//    //By using employeeController as a parameter in the anonymous function
//    // we are replacing it with module.exports so that we can start adding functions to it.
//    // So we have a function named init which accepts an application parameter.
//    // This application parameter will be passed from the server.js file, yes
//    // the application object that we created using express library.
//    employeeController.init = function (application) {
//        //Here we are doing the very same thing that we did in server.js 
//        // routing a GET request to the root of the site "/" and returning the index.vash view
//        application.get("/", function (req, res) {
//            //res.render("index", { firstname: "John", lastname: "Brosnan" });
//            res.render("index");
//        })
//    }
//})(module.exports);


////(function (employeeController) {
////    //By using employeeController as a parameter in the anonymous function
////    // we are replacing it with module.exports so that we can start adding functions to it.
////    // So we have a function named init which accepts an application parameter.
////    // This application parameter will be passed from the server.js file, yes
////    // the application object that we created using express library.
////    employeeController.init = function (application) {
////        //Here we are doing the very same thing that we did in server.js 
////        // routing a GET request to the root of the site "/" and returning the index.vash view
////        application.get("/", function (req, res) {
////            res.render("index", { firstname: "John", lastname: "Brosnan" });
////        })
////    }
////})(module.exports);




