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

let filmekListaja = [];

function torol() {
  let ht = document.getElementById('tabla')
  ht.remove();
}

function ujFilm() {
    torol();

    let nev = document.getElementById("filmNeve").value;
    let rendezo =  document.getElementById("rendezoNev").value;
    let kiadasiEv = document.getElementById("kiadas").value;
}
    

function listazas() {
    
}
      