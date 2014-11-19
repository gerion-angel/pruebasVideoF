function cargaAssets(){
    var path = "http://gestorcontenido.azurewebsites.net/getFiles.php";
    var xml = loadXMLDoc(path);
    var items = xml.getElementsByTagName('assets');
    var item = items[0].getElementsByTagName('asset');
    var acumulador = ""
    for (var i = 0; i < item.length; i++){
       var nombre = item[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
       var nombreAuxiliar = item[i].getElementsByTagName("nombreAuxiliar")[0].childNodes[0].nodeValue;
       var locator = item[i].getElementsByTagName("locator")[0].childNodes[0].nodeValue;
       var id = item[i].getElementsByTagName("assetId")[0].childNodes[0].nodeValue;
       acumulador += "<li onclick='lanzaVideo(\""+locator+"\")'>";
       acumulador += nombreAuxiliar;
       acumulador += "</li>";
    }  
    $("#listadoAssets").html(acumulador);
    $("#listadoAssets").listview( "refresh" );
    
}

function lanzaVideo(locator){
    $.mobile.changePage('#visor');
    var acumulador = "<video width='320' height='240'>"+
            "<source src='"+locator+"' type='video/mp4'>"
            +"</video>"
}