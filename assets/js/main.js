// il programma vuole sapere i chilomentri e l'età

const viaggio = parseFloat(prompt("Quanti chilomentri devi percorrere?"))
const eta =parseFloat(prompt("Quanti anni hai?"))

const tassoChilometri = 0.21;

const totale = viaggio * tassoChilometri;




if( eta < 18 ){
    //calcolo in percentuale del 20%
  document.writeln(( totale * 0.8 ).toFixed(2))
  
} else if ( eta > 64){
    //calcolo in percentuale del 40%
  document.writeln((totale * 0.6).toFixed(2))

}else{
    document.writeln((totale).toFixed(2))
}



