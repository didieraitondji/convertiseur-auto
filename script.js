//récupération des valeurs
var cfaAuto = document.querySelector(".cfaAuto");
var nairaAuto = document.querySelector(".nairaAuto");
var euroAuto = document.querySelector(".euroAuto");

function cfaAutoToOther(){
    var montant = cfaAuto.value;
    var euroValue = 0.0015 * montant;
    var nairaValue = 1.83 * montant;
    euroAuto.value = euroValue;
    nairaAuto.value = nairaValue;
}
function euroAutoToOther(){
    var montant = euroAuto.value;
    var cfaValue = 656.25 * montant;
    var nairaValue = 1198.60 * montant;
    cfaAuto.value = cfaValue;
    nairaAuto.value = nairaValue;
}
function nairaAutoToOther(){
    var montant = nairaAuto.value;
    var cfaValue = 0.54 * montant;
    var euroValue = 0.00082 * montant;
    cfaAuto.value = cfaValue;
    euroAuto.value = euroValue;
}

cfaAutoToOther();