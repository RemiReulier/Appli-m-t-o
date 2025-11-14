header('Access-Control-Allow-Origin: *');

var unitesPossibles = {
  temp : ["C", "F", "K"],
  vent : ["km/h", "m/s"],
}

var unitesChoisies = {
  temp : 0,
  vent : 1
}

var valeursCourantes = {
  temp : -42,
  vent : 100
}

function cacheTout(){
    const ele = document.getElementsByClassName("contenant")
    for(let i = 0;i < ele.length;i++){
        ele[i].style.display="none";
    };
}

function montre(str){
    if (typeof(str)=="string"){
        len=0;
    }
    else{
        len=str.length;
    };
    for(let i = 0;i < len;i++){
        const ele = document.getElementById(str[i]);
        ele.style.display="block";
    };
    if (str != "none" && len == 0){
        const ele = document.getElementById(str);
        ele.style.display="block";
    };
}

function afficher(){
    let str = document.querySelectorAll('*[id]:not([id=""])');
    for( let i=0; i<str.length; i++){
        let ID = str[i].attributes[1].value
        const ele = document.getElementById(ID);
        try{
            if (ID == "temp"){
                switch (unitesChoisies[ID]) {
                    case 0:
                        ele.getElementsByClassName("contenu")[0].innerHTML = valeursCourantes[ID];
                        break;
                    case 1:
                        ele.getElementsByClassName("contenu")[0].textContent = valeursCourantes[ID] * 9 / 5 + 32;
                        break;
                    case 2:
                        ele.getElementsByClassName("contenu")[0].textContent = valeursCourantes[ID] + 273.15;
                        break;
                    default:
                        break;
                }
            }
            else{
                ele.getElementsByClassName("contenu")[0].innerHTML = valeursCourantes[ID];
            }
            ele.getElementsByClassName("unite")[0].textContent = unitesPossibles[ID][unitesChoisies[ID]];
        }
        catch{}
    }
}

async function litConfig() {
    fetch("test.json")
    .then(response => response.json())
    .then(data => console.log(data));
}

cacheTout();

valeursCourantes.temp = 46;
valeursCourantes.vent = 12;
unitesChoisies.vent = 1;
unitesChoisies.temp = 0;

montre(["temp","vent"]);

afficher();

//litConfig();

console.log(fetch("https://github.com/RemiReulier/Appli-m-t-o/blob/main/pref.json"))
