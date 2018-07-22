app.config(["$stateProvider","$urlRouterProvider",function(sp,rp){
    rp.when("/","Home");

    rp.when("","Home");

    var home = {
        name:"Home",
        url:"/Home",
        templateUrl:"/Scripts/Views/Home.html",
        controller:"HomeController"
    };

    sp.state(home);
}]);