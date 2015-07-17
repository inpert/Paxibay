module.exports = ['$http', '$routeParams', '$scope', 'loginService', '$timeout', '$location', 'storage', '$rootScope', 'coreConfig', 'userService', '_', '$window', 'apCache', 'anchorSmoothScroll', 'loggingService', '$route', CoreController];

function CoreController($http, $routeParams, $scope, loginService, $timeout, $location, storage, $rootScope, coreConfig, userService, _, $window, apCache, anchorSmoothScroll, loggingService, $route) {
    // Controller variables.
    var coreVm = this,
        context = '';
    // endCall(null, null, {
    //     endCall: true
    // });
    // ng-include urls
    // coreVm.header = coreConfig.path() + '/modules/br-header/br.header.tmpl.html';
    coreVm.menuUrl = coreConfig.path() + '/modules/core/menu.tmpl.html';
    coreVm.brLoginUrl = coreConfig.path() + '/modules/br-login/br.login.tmpl.html';
    coreVm.headerUrl = coreConfig.path() + '/modules/br-header/br.header.tmpl.html';
    coreVm.footerUrl = coreConfig.path() + '/modules/br-footer/br.footer.tmpl.html';
    // coreVm.headerUrl = coreConfig.path() + '/modules/core/header.tmpl.html';

    //attributes
    coreVm.elapsed = null;
    coreVm.focusOn = '';
    coreVm.isAuthenticated = false;
    coreVm.isLoading = 0;

    // coreVm.TitleUserName = resourcesService.resource({
    //     classKey: 'Menu',
    //     resourceKey: 'Text_Member'
    // });

    // functions
    coreVm.changeContext = changeContext;
    // coreVm.createCase = createCase;
    // coreVm.createCaseName = createCaseName;
    // coreVm.currentUserDisplay = currentUserDisplay;
    // coreVm.editLead = editLead;
    coreVm.location = $location;
    // coreVm.getCurrentCaseId = getCurrentCaseId;
    // coreVm.newLead = newLead;
    // coreVm.resetSubMembers = resetSubMembers;
    coreVm.reduceName = reduceName;
    // coreVm.resource = resourcesService.resource;
    // coreVm.endCall = endCall;
    coreVm.signout = signout;
    // coreVm.currentMemberNumber = currentMemberNumber;
    // coreVm.tryEndCall = tryEndCall;
    coreVm.scrollTop = scrollTop;

    $scope.$watch(onUrlChange, checksecurity);
    $scope.$watch(onPathChange, checkAndRedirectToMemberSearch);
    // $scope.$watch(memberAccountService.getMembers, displaySubMembersMenu);

    // Event listeners
    $scope.$on('isAuthenticated', authenticate);
    // $scope.$on('retrieveCurrentUser', retrieveCurrentUser);
    $scope.$on('signout', signout);
    $scope.$on('systemIsLoaded', removeCounterFromThrobber);
    $scope.$on('systemIsLoading', addCounterForThrobber);
    $scope.$on('scrollTop', scrollTop);
    $scope.$on('userLogedIn', userLogedIn);
    // $scope.$on('persistContext', persistContext);
    $scope.$on('$locationChangeStart', locationChanged);

    // apCoreService.loadMetaData();

    function locationChanged() {
        // apCoreService.setPrevRoute($location.path());
    }

    function reduceName(bigName) {
        var names = bigName.split(' ');
        var resultName = '';

        // Max of two names.
        if (names.length > 2) {
            names = names.slice(0, 2);
        }

        // Max of 9 letters per name.
        var lettersPerName = 9;
        _.each(names, function(name) {
            if (name.length > lettersPerName) {
                name = name.substring(0, lettersPerName);
            }
            resultName = resultName + name + ' ';
        });

        // Remove last empty space.
        return resultName.substring(0, resultName.length - 1);
    }

    function handleErrorMessage(event, data) {
        loggingService.logWarning(data);
        coreVm.ErrorMessages.push(data);
    }

    if (!userisset || $location.path().indexOf('login') >= 0) {
        $location.path('/login');
    } else {
        // if (coreConfig.isProduction()) {
        // $rootScope.$broadcast('systemIsLoading');
        // loginService.reloadProfile(loadContextFromServer);
        // }
    }

    function reloadCurrentControllerWithServerInfo() {
        $timeout(function() {
            $route.reload();
            console.log('The page was fully reloaded at ' + currentTime());
            // $rootScope.$broadcast('refreshController');
            $rootScope.$broadcast('systemIsLoaded');
            tick();
        }, 100);
    }

    function currentTime(){
        var _currentTime = new Date(Date.now());
        return _currentTime.toString();
    }

    function signout() {
        loginService.logOut();
    }

    function authenticate() {
        coreVm.isAuthenticated = true;
    }

    function displaySubMembersMenu(subMembers) {
        coreVm.subMembers = subMembers;
    }

    function changeContext(_context, code) {
        coreVm.currentContext = _context;
        // apCoreService.changeContext(code);
        tryEndCall();
    }

    function userLogedIn() {
        userService.getCurrentUser(continueWithLoading, failToGetUser);
        persistContext();
    }

    function retrieveCurrentUser(event, data) {
        coreVm.userName = data.userName;
    }

    function scrollTop() {
        anchorSmoothScroll.scrollTo('top');
    }

    function addCounterForThrobber() {
        coreVm.isLoading = coreVm.isLoading + 1;
        checkIsLoadingThrobber();
    }

    function removeCounterFromThrobber() {
        coreVm.isLoading = coreVm.isLoading === 0 ? coreVm.isLoading : coreVm.isLoading - 1;
        checkIsLoadingThrobber();
    }

    function checkIsLoadingThrobber() {
        try{
            if (coreVm.isLoading > 0) {
                $.blockUI({
                    baseZ: 1000000000,
                    message: $('#blocker-page-box'),
                    css: {
                        backgroundColor: 'none',
                        border: 'none'
                    },
                    overlayCSS: {
                        backgroundColor: '#eee',
                        opacity: 0.5,
                    }
                });
                $.blockUI.html();
            } else {
                $.unblockUI();
            }
        }catch(e){
            // scape trying to block same UI twice.
        }
    }

    function onPathChange() {
        return $location.path();
    }

    function checkAndRedirectToMemberSearch() {

        if (coreVm.location.path() === '/' && !coreVm.inCall) {
            coreVm.location.path(coreConfig && coreConfig.landingPage ? coreConfig.landingPage() : '/');
        }
    }

    function onUrlChange() {
        return $location.path();
    }


    function checksecurity() {
        scrollTop();
        var containsToken = localStorage.storage;
        if (!containsToken && !$location.path('/login')) {

            $location.path('/login');

        }
        coreVm.ErrorMessages = [];
    }


    function informUserId() {
        $rootScope.$broadcast('MemberIdFound', memberService.getCurrentMemberLwId());
    }

    function tick() {
        updateViewTime();

        $timeout(function() {
            if (coreVm.inCall) {
                tick();
            }
        }, 500);
    }

    function updateViewTime() {
        if (coreVm.inCall) {
            //var e = Date.now() - coreVm.inCallStartedAt;

            //coreVm.elapsed = dateTimeConverter(Math.floor(e / 1000));

            //try {
            //    $scope.$apply();
            //} catch (e) {
            //    // scope already being applyed, not need for a second apply at this time.
            //}
        }
    }

    function dateTimeConverter(secondsValue) {
        var dt, seconds, hours, minutes;

        dt = new Date(1, 1, 1, 0, 0, 0);
        dt.setSeconds(secondsValue);
        hours = formatTwoDigits(dt.getHours());
        minutes = formatTwoDigits(dt.getMinutes());
        seconds = formatTwoDigits(dt.getSeconds());

        if (hours > 0) {
            return hours + ':' + minutes + ':' + seconds;
        } else {
            return minutes + ':' + seconds;
        }
    }

    function formatTwoDigits(n) {
        return n < 10 ? '0' + n : n;
    }

    function scrooledAfterHeaderAndNotMobile() {
        return this.pageYOffset && this.pageYOffset >= 90 && window.innerWidth >= 768;
    }

}
