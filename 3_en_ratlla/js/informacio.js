document.write('<h3><b>Nom del navegador: </b>'+bowser.name+'</h3>');
document.write('<h3><b>Versio del navegador: </b><i>'+bowser.version+'</i></h3>');
var OSName="Desconocido";
if (navigator.appVersion.indexOf("Win")!=-1){
    OSName="Windows";
}else if (navigator.appVersion.indexOf("Mac")!=-1){
    OSName="MacOS";
}else if (navigator.appVersion.indexOf("X11")!=-1){
    OSName="UNIX";
}else if (navigator.appVersion.indexOf("Linux")!=-1){
    OSName="Linux";
}else if (navigator.appVersion.indexOf("Android")!=-1){
    OSName="Android";
}
document.write('<h3><b>El teu sistema operatiu es: </b>'+OSName+'</h3>');
document.write('<h3><b>El teu idioma es: </b>'+window.navigator.language+'</h3>');
document.write('<h3><b>El teu hostname es: </b>'+window.location.href+'</h3>');
document.write('<h3><b>La darrera modificacio del document es va produir: </b><i>'+document.lastModified+'</i></h3>');
document.writeln('<h3><b>Resolucio de la pantalla: </b><i>'+screen.width + "</i> x <i>" + screen.height+'</i></h3>');