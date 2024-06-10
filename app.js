
document.getElementById("btnSubmit").addEventListener("click", function(){
    let code1 = document.getElementById("code1").value
    let code2 = document.getElementById("code2").value || ""
    let code3 = document.getElementById("code3").value || ""
    let amount2 =  document.getElementById("montant2").value || ""
    let amount3 =  document.getElementById("montant3").value || ""
 
    if(code1 == code2){
        alert("ERREUR\nVos recharges sont identiques")
    }else if(code2 == code3){
        alert("ERREUR\nVos recharges sont identiques")
    }else if (code2 != "" && amount2 == ""){
        alert("ERREUR\n Montant de la seconde recharge requise")
    }else if (code3 != "" && amount3 == ""){
        alert("ERREUR\n Montant de la troisieme recharge requise")
    }
})
