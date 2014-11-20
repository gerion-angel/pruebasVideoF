function cargaAssets() {
   var path = "http://gestorcontenido.azurewebsites.net/getFiles.php";
    $.get("http://gestorcontenido.azurewebsites.net/getFiles.php", function (data) {
    }).done(function (data) {
        var asset = $(data).find("asset");
        var acumulador = ""
        var assetList = [];
        for (var i = 0; i < asset.length; i++) {
            assetList.push(createAsset (
                    $(asset[i]).find("nombre")[0].innerHTML,
                    $(asset[i]).find("nombreAuxiliar")[0].innerHTML,
                    $(asset[i]).find("size")[0].innerHTML,
                    $(asset[i]).find("locator")[0].innerHTML,
                    $(asset[i]).find("assetId")[0].innerHTML,
                    $(asset[i]).find("type")[0].innerHTML))
        }
        assetList = asignaTumbnail(assetList)
        for (var i = 0; i < assetList.length; i++) {
            try {                
                acumulador+=getTileAsset(assetList[i])
            } catch (e) {
            }//elementos sin locator
        }
        $("#listadoAssets").html(acumulador);
        $("#listadoAssets").listview("refresh");
    })
}

function lanzaVideo(locator, thumb) {
    $.mobile.changePage('#visor');
    var acumulador = "<video width='320' height='240' controls poster='"+thumb+"'>" +
            "<source src='" + locator + "' type='video/mp4'>El reproductor no acepta este formato"
            + "</video>"
    $("#visorContenido").html(acumulador)
}