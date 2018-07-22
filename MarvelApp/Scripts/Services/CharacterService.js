app.factory("CharacterService", ["$resource","$q", "$location", "$http","CommonService", function (r,q, l, h, cs,chs) {
    var characterServiceResource = [];

    var constants = cs.getConstants();

    characterServiceResource.getCharacters = function(){
        return h.get(constants.domain + "/" + constants.apiVersion + "/public/characters?ts="+constants.timeStamp+"&apikey="+constants.publicKey+"&hash="+constants.hash).then(function (response) {
            if (typeof response.data === "object")
                return response.data;
            else
                return q.reject(response.data);

        }, function (response) {
            return q.reject(response.data);
        });
    };

    return characterServiceResource;
}]);