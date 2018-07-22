app.controller("HomeController", ["$scope", "$rootScope", "$http", "$location","$uibModal","$log","$document", "CommonService","CharacterService", function (s, r, h, l,um, lg,d, cs,chs) {
    s.title = "Prueba  Web Api Marvel";

    s.message = "";
    
    s.characterList = [];

    chs.getCharacters().then(function(data){
        s.characterList = data;
    },function(error){
        s.message = error;
        console.log(s.message);
    });
}]);
