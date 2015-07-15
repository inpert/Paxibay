module.exports = [coreConfiguration];
//var config = require('./modules/core/core.config.js')();
// before every path, put configs.path() + yourPath;

function coreConfiguration() {

    var production = false;
// 
    // var currentClient = 'CELA';
    var currentClient = 'BMS';
    var _landingPage = '/welcome';

    return {
        path: path,
        urlPath: urlPath,
        getClient: getClient,
        setClient: setClient,
        isProduction: isProduction,
        widgetPath: widgetPath,
        setCurrentEnviroment: setCurrentEnviroment,
        landingPage: landingPage
    };

    function landingPage(){
        return _landingPage;
    }

    //TODO: get from Carlos and Leo's API
    function setCurrentEnviroment(value) {
        currentClient = value;
        //Based on agentCode
    }

    function isProduction() {
        return production;
    }

    function path() {
        return production ? '/Tools/CMAdmin/adminPortal' : '.';
    }

    function widgetPath() {
        return production ? 'http://HRIWidget/' : 'api';
    }

    function urlPath() {
        return production ? 'http://CaseManagerAdminWidget' : '';
        // return production ? 'http://dev-sts01:9020' : '';
    }

    function getClient() {
        return currentClient;
    }

    function setClient(newClient) {
        currentClient = newClient;
    }
}
