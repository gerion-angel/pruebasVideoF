function cargaAssets() {
   var path = "http://gestorcontenido.azurewebsites.net/getFiles.php";
    $.get("http://gestorcontenido.azurewebsites.net/getFiles.php", function (data) {
    }).done(function (data) {
        var asset = $(data).find("asset");
        var acumulador = ""
        for (var i = 0; i < asset.length; i++) {
            try {
                var nombreAuxiliar = $(asset[i]).find("nombreAuxiliar")[0].innerHTML
                var locator = $(asset[i]).find("locator")[0].innerHTML
                acumulador += "<li onclick='lanzaVideo(\"" + locator + "\")'>";
                acumulador += nombreAuxiliar;
                acumulador += "</li>";
            } catch (e) {
            }//elementos sin locator
        }
        $("#listadoAssets").html(acumulador);
        $("#listadoAssets").listview("refresh");
    })
}

function lanzaVideo(locator) {
    $.mobile.changePage('#visor');
    var acumulador = "<video width='320' height='240' controls>" +
            "<source src='" + locator + "' type='video/mp4'>El reproductor no acepta este formato"
            + "</video>"
    $("#visorContenido").html(acumulador)
}