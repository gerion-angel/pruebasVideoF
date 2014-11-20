/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function createAsset(nombre, nombreAuxiliar, size, locator, assetId, type) {
    if (type.indexOf("image") == -1) {
        return {
            nombre: nombre,
            nombreAuxiliar: nombreAuxiliar,
            size: size,
            locator: locator,
            assetId: assetId,
            thumb: ""
        }
    } else {
        return {
            nombre: nombre,
            nombreAuxiliar: nombreAuxiliar,
            size: size,
            locator: "",
            assetId: assetId,
            thumb: locator
        }
    }

}

function asignaTumbnail (listado){
    var videos = [];
    var thumbnails = [];
    for (var i =0; i<listado.length; i++){
        if(listado[i].locator == ""){
            thumbnails.push(listado[i])
        }else{
            videos.push(listado[i])
        }
    }
    for (var i = 0; i < videos.length; i++){
        for (var j = 0; j< thumbnails.length; j++){
            if(videos[i].nombre == thumbnails[j].nombre){
                videos[i].thumb = thumbnails[j].thumb;
                j = thumbnails.length
            }
        }
    }
    return videos;
}

function getTileAsset (asset){
    var acumulador = "<div class='tileAsset' onclick='lanzaVideo(\""+asset.locator+"\",\""+asset.thumb+"\")'>";
    acumulador += "<span style='background-image:url(\""+asset.thumb+"\")'> </span>"
    acumulador += "<span>"+asset.nombre+"</span>"
    acumulador += "</div>"
    return acumulador;
}