app.factory("CommonService", ["$resource", "$location","$http","$q", function (r, l,h,q) {

    var commonServiceResource = [];



    commonServiceResource.domain = "https://gateway.marvel.com";

    commonServiceResource.publicKey = "146dbc10228a77978e94070cd8d8dabc";

    commonServiceResource.privateKey = "c2b38a54f0b55696656cd84383514496fc626ef5";

    commonServiceResource.apiVersion = "v1";

    commonServiceResource.timeStamp = Date.now();

    commonServiceResource.hash =CryptoJS.MD5(commonServiceResource.timeStamp + commonServiceResource.privateKey+ commonServiceResource.publicKey).toString();


    commonServiceResource.getDomain = function(){
        return commonServiceResource.domain;
    };

    commonServiceResource.getPublicKey = function(){
        return commonServiceResource.publicKey;
    };

    commonServiceResource.getPrivateKey = function(){
        return commonServiceResource.privateKey;
    };

    commonServiceResource.getApiVersion = function(){
        return commonServiceResource.apiVersion;
    };

    commonServiceResource.getTimeStamp = function(){
        return commonServiceResource.timeStamp;
    }

    commonServiceResource.getHash = function(){
        return commonServiceResource.hash;
    }

    commonServiceResource.getConstants = function(){
        return {
            "domain": commonServiceResource.domain,
            "publicKey": commonServiceResource.publicKey,
            "privateKey": commonServiceResource.privateKey,
            "apiVersion": commonServiceResource.apiVersion,
            "timeStamp": commonServiceResource.timeStamp,
            "hash":commonServiceResource.hash
         }
    };

    return commonServiceResource;
}]);