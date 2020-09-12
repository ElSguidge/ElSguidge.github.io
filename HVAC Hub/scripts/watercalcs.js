'use strict';

function kvCalculate(){
    var flow = document.getElementById("kva").value;
    var pressure = document.getElementById("kvb").value;
    
    
    var result = parseFloat(flow) / Math.sqrt(parseFloat(pressure)) * 36;
    var resultRound = result.toFixed(2)

    if (!isNaN(result)) {
        document.getElementById("answer").innerHTML = `Valve Kv = ${resultRound}`;
      }
}
function ls_Calculate(){
    var kv = document.getElementById("kv").value;
    var pressure = document.getElementById("press").value;
    
    var pressureInBar = parseFloat(pressure) / 100;
    var result = parseFloat(kv) * Math.sqrt(parseFloat(pressureInBar)) / 3.6;
    var resultRound = result.toFixed(2)

    if (!isNaN(result)) {
        document.getElementById("answer-1").innerHTML = `Flow = ${resultRound} l/s`;
      }
}
function ls_ConvertCalculate(){
    var mCubedPerhour = document.getElementById("m3h").value;
    
    var litresPerSecondConverted = parseFloat(mCubedPerhour) / 3.6;
    var resultRound = litresPerSecondConverted.toFixed(4)

    if (!isNaN(litresPerSecondConverted)) {
        document.getElementById("answer-2").innerHTML = `${resultRound} l/s`;
      }
}
function psi_ConvertCalculate() {
    var kPa = document.getElementById("kPa").value;
    
    var kPaConverted = parseFloat(kPa) / 6.895;
    var resultRound = kPaConverted.toFixed(4)

    if (!isNaN(kPaConverted)) {
        document.getElementById("answer-3").innerHTML = `${resultRound} psi`;
      }
}
function dn_ConvertCalculate() {
    var dn = document.getElementById("dn").value;
    
    var dnConverted = parseFloat(dn) / 25.4;
    var resultRound = dnConverted.toFixed(2);
    
    
        if (!isNaN(dnConverted)) {
        document.getElementById("answer-4").innerHTML = `${resultRound} inches`;
      }
}
function gpmUs_ConvertCalculate() {
    var gpmUs = document.getElementById("gpmUs").value;
    
    var gpmConverted = parseFloat(gpmUs) * 0.0630;
    var resultRound = gpmConverted.toFixed(4)

    if (!isNaN(gpmConverted)) {
        document.getElementById("answer-5").innerHTML = `${resultRound} l/s`;
      }
}
function impGpm_ConvertCalculate() {
    var impGpm = document.getElementById("impgpm").value;
    
    var impGpmConverted = parseFloat(impGpm) * 0.0757682;
    var resultRound = impGpmConverted.toFixed(4)

    if (!isNaN(impGpmConverted)) {
        document.getElementById("answer-6").innerHTML = `${resultRound} l/s`;
      }
}
function cfm_ConvertCalculate() {
    var cfm = document.getElementById("cfm").value;
    
    var cfmConverted = parseFloat(cfm) * 0.472;
    var resultRound = cfmConverted.toFixed(2)

    if (!isNaN(cfmConverted)) {
        document.getElementById("answer-7").innerHTML = `${resultRound} l/s`;
      }
}