class Film {
     nev = "";
     rendezo = "";
     kiadasiEv = 0;

     constructor(nev,rendezo,kiadasiEv ) {
        this.nev = nev;
        this.rendezo = rendezo;
        this.kiadasiEv = kiadasiEv;
     }

     toString() {
         return this.nev + this.rendezo + this.kiadasiEv;
     }
}

function torol() {

}

function ujFilm() {
    torol();
    var test = document.body,
     tablazat = document.createElement('table');
    tablazat.style.width = '100%';
    tablazat.setAttribute('border', '3');
    var tbltest = document.createElement('tbody');
    for (let i = 0; i < 4; i++) {
        var sor = document.createElement('tr');
        for(let j = 0; j < 2; j++) {
            if(i == 3 && j == 1) {
                break;
            }else {      var cella = document.createElement('td');
        cella.appendChild(document.createTextNode('\u0020'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
        sor.appendChild(cella)
      }
    }
    tbltest.appendChild(sor);
  }
  tablazat.appendChild(tbltest);
  test.appendChild(tablazat)
}
ujFilm();

function listazas() {

}
      