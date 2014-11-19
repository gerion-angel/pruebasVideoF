var xmlhttp;
function loadXMLDoc(archivoXML, info)
{
    if (window.XMLHttpRequest) {// codigo para IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// para IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            var xml = xmlhttp.responseXML;
            return xml;
        } else {
            return false;
        }
    }
    xmlhttp.open("POST", archivoXML, false);
    xmlhttp.send(info);
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            var xml = xmlhttp.responseXML;
            return xml;
        } else {
            return false;
        }
}