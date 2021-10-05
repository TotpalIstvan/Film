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
         return this.nev + " ," +  this.rendezo + " ," +  this.kiadasiEv +".";
     }

    }
let filmekListaja = [];

function torol() {
  let ht = document.getElementById('tabla')
  ht.remove();
}

function ujFilm() {
    torol();

    let Filmnev = document.getElementById("filmNeve").value;
    let Filmrendezo =  document.getElementById("rendezoNev").value;
    let FilmkiadasiEv = document.getElementById("kiadas").value;
}
    

function listazas() {
    
}
      