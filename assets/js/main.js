// il programma vuole sapere i chilomentri e l'età

// const viaggio = parseFloat(prompt("Quanti chilomentri devi percorrere?"))
//  const eta =parseFloat(prompt("Quanti anni hai?"))

//  const tassoChilometri = 0.21;

//  const totale = viaggio * tassoChilometri;




//  if( eta < 18 ){
// //     //calcolo in percentuale del 20%
//    document.writeln(( totale * 0.8 ).toFixed(2))

//  } else if ( eta > 64){
//     //calcolo in percentuale del 40%
//    document.writeln((totale * 0.6).toFixed(2))

//  }else{
//      document.writeln((totale).toFixed(2))
//  }




const form = document.getElementById("form-biglietto") 



form.addEventListener("submit", (e) => {
    e.preventDefault();

    const viaggio = parseFloat(document.getElementById("viaggio").value)
    const eta = parseInt(document.getElementById("eta").value)
    const totaleInput = document.getElementById("totale")
    const warning = document.getElementById("warning")

    const tassoChilometri = 0.21

    const totale = viaggio * tassoChilometri;



    if (eta < 18) {

         //calcolo in percentuale del 20%
         totaleInput.textContent =`${(( totale * 0.8 ).toFixed(2))}€`

         warning.classList.remove("d-none")
         warning.classList.add("d-block")

    } else if (eta > 64) {
        //calcolo in percentuale del 40%
        totaleInput.textContent =`${(( totale * 0.6 ).toFixed(2))}€`
         warning.classList.remove("d-none")
         warning.classList.add("d-block")

    } else{
        totaleInput.textContent =`${(( totale).toFixed(2))}€`
        warning.classList.remove("d-none")
         warning.classList.add("d-block")
    }
});
  


