var primerCop = 0;

var intents = document.cookie;
if(intents == "" || intents === NaN || intents == "intents=" || intents == "intents=NaN"){
    intents = 0;
}else{
  alert("Intent nº"+Number(intents.slice((intents.length-1),intents.length))+".");
}

function desarDades(){
   if(validacions){ 
  if(confirm("Vols desar?")){
      /*Posar en sessió*/

      //Jugador 1
      //Recollir de pantalla
      var j1n = document.getElementById("j1nom").value;
      var j1c = document.getElementById("j1cognom").value;
      var j1e = Number(document.getElementById("j1edat").value)
      var j1ni = document.getElementById("j1nif").value;
      var j1em = document.getElementById("j1email").value;
      //Enviar a sessio
      sessionStorage.setItem( "j1nom" , j1n );
      sessionStorage.setItem( "j1cognom" , j1c );
      sessionStorage.setItem( "j1edat" , j1e );
      sessionStorage.setItem( "j1nif" , j1ni );
      sessionStorage.setItem( "j1email" , j1em );

      //Jugador 2
      //Recollir de pantalla
      var j2nom = document.getElementById("j2nom").value;
      var j2cognom = document.getElementById("j2cognom").value;
      var j2edat = Number(document.getElementById("j2edat").value)
      var j2nif = document.getElementById("j2nif").value;
      var j2email = document.getElementById("j2email").value;
      //Enviar a sessio
      sessionStorage.setItem( "j2nom" , j2nom );
      sessionStorage.setItem( "j2cognom" , j2cognom );
      sessionStorage.setItem( "j2edat" , j2edat );
      sessionStorage.setItem( "j2nif" , j2nif );
      sessionStorage.setItem( "j2email" , j2email );
      alert("Tot correcte s'han desat els jugadors correctament.");
      window.location.href = 'joc.html';

  }
       }else{
           if(primerCop == 0){
            intents = Number(document.cookie.slice(document.cookie.length-1,document.cookie.length));    
            intents++;
            document.cookie = "intents="+intents;
            alert("Intent nº"+intents+".");
          }
       }
}

function majuscules(id) {
  document.getElementById(id).style.textTransform = 'uppercase';     
}

function validacio(id){

  switch (id){
      case "j2cognom":
          if (document.getElementById("j2cognom").value != "")
            majuscules(id);
          break;
      case "j1cognom":
          if (document.getElementById("j1cognom").value != "")
            majuscules(id);
          break;
      case "j2nom":
          if (document.getElementById("j2nom").value != "")
            majuscules(id);
          break;
      case "j1nom":
          if (document.getElementById("j1nom").value != "")
            majuscules(id);
          break;
  }
}

function focoPerId(id){
  if(primerCop == 0){
    document.getElementById(id).focus();
    intents = Number(document.cookie.slice(document.cookie.length-1,document.cookie.length));    
    intents++;
    document.cookie = "intents="+intents;
    alert("Intent nº"+intents+".");
  }
  primerCop++;

}

// Missatges d'error customitzats de les validacions del formulari

function validacions(){
    var correcte = true;
    var j1n = document.getElementById("j1nom");
    var j1c = document.getElementById("j1cognom");
    var j1e = document.getElementById("j1edat");
    var j1ni = document.getElementById("j1nif");
    var j1em = document.getElementById("j1email");

    var j2n = document.getElementById("j2nom");
    var j2c = document.getElementById("j2cognom");
    var j2e = document.getElementById("j2edat");
    var j2ni = document.getElementById("j2nif");
    var j2em = document.getElementById("j2email");


    j1n.addEventListener('invalid', function(e) {
        if(j1n.validity.valueMissing){
            e.target.setCustomValidity("El nom no pot ser vuit");
            focoPerId("j1nom");
            correcte = false;
        } else if(!j1n.validity.valid) {
            e.target.setCustomValidity(""); 
        } 
    }, false);

    j1c.addEventListener('invalid', function(e) {
        if(j1c.validity.valueMissing){
            e.target.setCustomValidity("El cognom no pot ser vuit");
            focoPerId("j1cognom");
            correcte = false;
        } else if(!j1c.validity.valid) {
            e.target.setCustomValidity(""); 
        } 
    }, false);

    j1e.addEventListener('invalid', function(e) {
        if(j1e.validity.valueMissing){
            e.target.setCustomValidity("L'edat no pot ser vuida");
            focoPerId("j1edat");
            correcte = false;
        }else if(!j1e.validity.valueMissing) {
            e.target.setCustomValidity("");   
        } else if(j1e.validity.rangeOverflow) {
            e.target.setCustomValidity("L'edat no pot ser major de 105 ni menor que 0");
            focoPerId("j1edat");
            correcte = false;
        } else if(j1e.validity.rangeUnderflow) {
            e.target.setCustomValidity("L'edat no pot ser major de 105 ni menor que 0");
            focoPerId("j1edat");
            correcte = false;
        }
    }, false);

    j1ni.addEventListener('invalid', function(e) {
        if(j1ni.validity.valueMissing){
            e.target.setCustomValidity("El nif no pot ser vuit");
            focoPerId("j1nif");
            correcte = false;
        } else 
            e.target.setCustomValidity("");
        if(j1ni.validity.patternMismatch) {
            e.target.setCustomValidity("El nif ha de contindre 8 numeros un '-' i una lletra en majuscules (00000000-A)");
            focoPerId("j1nif");
            correcte = false;
        } 
    }, false);

    j1em.addEventListener('invalid', function(e){
        if(j1em.validity.valueMissing){
           e.target.setCustomValidity("L'email no pot ser vuit");
           focoPerId("j1email");
            correcte = false;
        } else 
            e.target.setCustomValidity("");    
        if(j1em.validity.typeMismatch){
            focoPerId("j1email");
            correcte = false;
        }
    }, false);



    j2n.addEventListener('invalid', function(e) {
        if(j2n.validity.valueMissing){
            e.target.setCustomValidity("El nom no pot ser vuit"); 
            focoPerId("j2nom");
            correcte = false;
        } else if(!j2n.validity.valid) {
            e.target.setCustomValidity(""); 
        } 
    }, false);

    j2c.addEventListener('invalid', function(e) {
        if(j2c.validity.valueMissing){
            e.target.setCustomValidity("El cognom no pot ser vuit");
            focoPerId("j2cognom");
            correcte = false;
        } else if(!j2c.validity.valid) {
            e.target.setCustomValidity(""); 
        } 
    }, false); 

    j2e.addEventListener ('invalid', function(e) {
        if(j2e.validity.valueMissing){
            e.target.setCustomValidity("L'edat no pot ser vuida");
            focoPerId("j2edat");
            correcte = false;
        }else 
            e.target.setCustomValidity("");   
        if(j2e.validity.rangeOverflow) {
            e.target.setCustomValidity("L'edat no pot ser major de 105 ni menor que 0");
            focoPerId("j2edat");
            correcte = false;
        } else if(j2e.validity.rangeUnderflow) {
            e.target.setCustomValidity("L'edat no pot ser major de 105 ni menor que 0");
            focoPerId("j2edat");
            correcte = false;
        }
    }, false);

    j2ni.addEventListener('invalid', function(e) {
        if(j2ni.validity.valueMissing){
            e.target.setCustomValidity("El nif no pot ser vuit");
            focoPerId("j2nif");
            correcte = false;
        } else 
            e.target.setCustomValidity("");    
        if(j2ni.validity.patternMismatch) {
            e.target.setCustomValidity("El nif ha de contindre 8 numeros un '-' i una lletra en majuscules (00000000-A)");
            focoPerId("j2nif");
            correcte = false;
        } 
    }, false);

    j2em.addEventListener('invalid', function(e){
        if(j2em.validity.valueMissing){
           e.target.setCustomValidity("L'email no pot ser vuit");
           focoPerId("j2email");
            correcte = false;
        } else 
            e.target.setCustomValidity("");
        if(j1em.validity.typeMismatch){
            focoPerId("j1email");
            correcte = false;
        }
    }, false);
    return correcte;
}

primerCop = 0;

             