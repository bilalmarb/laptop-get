
let mImg = document.getElementById('img');
let title = document.getElementById('title');
let ram = document.getElementById('ram');
let storage = document.getElementById('storage');
let gel = document.getElementById('gel');
let processeur = document.getElementById('processeur');
function imgM(laptop){
    mImg.src = laptop


}
function content(title1 , ram2 , storage3 , gel4 ,processeur5 ){

    title.innerHTML = title1;
    ram.innerHTML = ram2;
    storage.innerHTML = storage3;
    gel.innerHTML = gel4;
    processeur.innerHTML = processeur5;

}
