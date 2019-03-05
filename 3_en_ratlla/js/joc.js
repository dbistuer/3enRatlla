function jugadors() {
    /*Jugador 1*/
    document.getElementById("p1nom").innerHTML = sessionStorage.getItem("j1nom");
    document.getElementById("p1cognom").innerHTML = sessionStorage.getItem("j1cognom");
    document.getElementById("p1edat").innerHTML = sessionStorage.getItem("j1edat");
    document.getElementById("p1nif").innerHTML = sessionStorage.getItem("j1nif");
    document.getElementById("p1email").innerHTML = sessionStorage.getItem("j1email");

    /*Jugador 2*/
    document.getElementById("p2nom").innerHTML = sessionStorage.getItem("j2nom");
    document.getElementById("p2cognom").innerHTML = sessionStorage.getItem("j2cognom");
    document.getElementById("p2edat").innerHTML = sessionStorage.getItem("j2edat");
    document.getElementById("p2nif").innerHTML = sessionStorage.getItem("j2nif");
    document.getElementById("p2email").innerHTML = sessionStorage.getItem("j2email");
}

var x = "<b>X</b>";
var o = "<b>O</b>";
var id = 0;
var sid = ".1";
var contadorJugador = 0;
var taulell = [[0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]];
var posicioTemp = 0;

function quiGuanya(j1, j2) {
    if (j1 < j2) {
        document.getElementById("guanyaj1").style.color = 'red';
        document.getElementById("guanyaj2").style.color = 'green';
    } else if (j2 < j1) {
        document.getElementById("guanyaj1").style.color = 'green';
        document.getElementById("guanyaj2").style.color = 'red';
    } else if (j1 == j2) {
        document.getElementById("guanyaj1").style.color = 'blue';
        document.getElementById("guanyaj2").style.color = 'blue';
    }
}

if (sessionStorage.getItem("guanyaj1") != null) {
    document.getElementById("guanyaj1").innerHTML = sessionStorage.getItem("guanyaj1");
    quiGuanya(sessionStorage.getItem("guanyaj1"), sessionStorage.getItem("guanyaj2"));
} else {
    document.getElementById("guanyaj1").innerHTML = '0';
}
if (sessionStorage.getItem("guanyaj2") != null) {
    document.getElementById("guanyaj2").innerHTML = sessionStorage.getItem("guanyaj2");
    quiGuanya(sessionStorage.getItem("guanyaj1"), sessionStorage.getItem("guanyaj2"));
} else {
    document.getElementById("guanyaj2").innerHTML = '0';
}

function tictac(id) {
    if (llocVuid(id)) {
        if ((contadorJugador % 2) == 0)
            document.getElementById(id + sid).innerHTML = x;
        else {
            document.getElementById(id + sid).innerHTML = o;
            document.getElementById(id + sid).style.color = 'green';
        }
        posicionament(id);
        comprovarGuanyador();
        comprovarTaulellPle();
        contadorJugador++;
    } else {
        alert("Aquest lloc no es vuid, torna a provar.");
    }
}

function posicionament(cella) {
    if (cella < 4) {
        switch (cella) {
            case '1':
                posicioTemp = 0;
                break;
            case '2':
                posicioTemp = 1;
                break;
            case '3':
                posicioTemp = 2;
                break;
        }
        quinJugador(contadorJugador, posicioTemp, 0);
    } else if (cella < 7) {
        switch (cella) {
            case '4':
                posicioTemp = 0;
                break;
            case '5':
                posicioTemp = 1;
                break;
            case '6':
                posicioTemp = 2;
                break;
        }
        quinJugador(contadorJugador, posicioTemp, 1)
    } else {
        switch (cella) {
            case '7':
                posicioTemp = 0;
                break;
            case '8':
                posicioTemp = 1;
                break;
            case '9':
                posicioTemp = 2;
                break;
        }
        quinJugador(contadorJugador, posicioTemp, 2)
    }
}

/*si es el jugador 1 = 1 si el 2 = 2*/
function quinJugador(contadorJugador, posicioTemp, index) {
    if ((contadorJugador % 2) == 0)
        taulell[index][posicioTemp] = 1;
    else
        taulell[index][posicioTemp] = 2;
}

function comprovarGuanyador() {
    var guanyador = 0;

    /*Comprovar si ha guanyat el j1*/
    if (taulell[0][0] == 1 && taulell[0][1] == 1 && taulell[0][2] == 1) {
        guanyador = 1;
    } else if (taulell[1][0] == 1 && taulell[1][1] == 1 && taulell[1][2] == 1) {
        guanyador = 1;
    } else if (taulell[2][0] == 1 && taulell[2][1] == 1 && taulell[2][2] == 1) {
        guanyador = 1;
    } else if (taulell[0][0] == 1 && taulell[1][0] == 1 && taulell[2][0] == 1) {
        guanyador = 1;
    } else if (taulell[0][1] == 1 && taulell[1][1] == 1 && taulell[2][1] == 1) {
        guanyador = 1;
    } else if (taulell[0][2] == 1 && taulell[1][2] == 1 && taulell[2][2] == 1) {
        guanyador = 1;
    } else if (taulell[0][0] == 1 && taulell[1][1] == 1 && taulell[2][2] == 1) {
        guanyador = 1;
    } else if (taulell[0][2] == 1 && taulell[1][1] == 1 && taulell[2][0] == 1) {
        guanyador = 1;
    }

    /*Comprovar si ha guanyat el j2*/
    if (taulell[0][0] == 2 && taulell[0][1] == 2 && taulell[0][2] == 1) {
        guanyador = 2;
    } else if (taulell[1][0] == 2 && taulell[1][1] == 2 && taulell[1][2] == 2) {
        guanyador = 2;
    } else if (taulell[2][0] == 2 && taulell[2][1] == 2 && taulell[2][2] == 2) {
        guanyador = 2;
    } else if (taulell[0][0] == 2 && taulell[1][0] == 2 && taulell[2][0] == 2) {
        guanyador = 2;
    } else if (taulell[0][1] == 2 && taulell[1][1] == 2 && taulell[2][1] == 2) {
        guanyador = 2;
    } else if (taulell[0][2] == 2 && taulell[1][2] == 2 && taulell[2][2] == 2) {
        guanyador = 2;
    } else if (taulell[0][0] == 2 && taulell[1][1] == 2 && taulell[2][2] == 2) {
        guanyador = 2;
    } else if (taulell[0][2] == 2 && taulell[1][1] == 2 && taulell[2][0] == 2) {
        guanyador = 2;
    }

    if (guanyador == 1) {
        alert("Ha guanyat el Jugador 1");
        if (sessionStorage.getItem('guanyaj1') != null) {
            var guany = Number(sessionStorage.getItem('guanyaj1'));
            guany++;
            sessionStorage.setItem('guanyaj1', guany);
        } else {
            sessionStorage.setItem('guanyaj1', 1);
        }
        if (confirm('Voleu tornar a jugar?')) {
            window.location.reload(true);
        } else {
            window.location.href = 'main.html';
        }
    } else if (guanyador == 2) {
        alert("Ha guanyat el Jugador 2");
        if (sessionStorage.getItem('guanyaj2') != null) {
            var guany = Number(sessionStorage.getItem('guanyaj2'));
            guany++;
            sessionStorage.setItem('guanyaj2', guany);
        } else {
            sessionStorage.setItem('guanyaj2', 1);
        }
        if (confirm('Voleu tornar a jugar?')) {
            window.location.reload(true);
        } else {
            window.location.href = 'main.html';
        }
    }
    guanyador = 0;
}

function llocVuid(cella) {
    if (cella < 4) {
        switch (cella) {
            case '1':
                posicioTemp = 0;
                index = 0;
                break;
            case '2':
                posicioTemp = 1;
                index = 0;
                break;
            case '3':
                posicioTemp = 2;
                index = 0;
                break;
        };
    } else if (cella < 7) {
        switch (cella) {
            case '4':
                posicioTemp = 0;
                index = 1;
                break;
            case '5':
                posicioTemp = 1;
                index = 1;
                break;
            case '6':
                posicioTemp = 2;
                index = 1;
                break;
        };
    } else {
        switch (cella) {
            case '7':
                posicioTemp = 0;
                index = 2;
                break;
            case '8':
                posicioTemp = 1;
                index = 2;
                break;
            case '9':
                posicioTemp = 2;
                index = 2;
                break;
        };
    }
    if (taulell[index][posicioTemp] == 0) return true;
    else return false;
}

function comprovarTaulellPle() {
    /*Si el 0 no existeix torna -1*/
    if (taulell[0].indexOf(0) == -1) {
        if (taulell[1].indexOf(0) == -1) {
            if (taulell[2].indexOf(0) == -1) {
                //taulell ple
                if (confirm('El taulell esta ple. Sembla que hi ha un empat. Voleu repetir?')) {
                    window.location.reload(true);
                } else {
                    window.location.href = 'main.html';
                }
            }
        }
    }
}
