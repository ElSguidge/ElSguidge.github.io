'use strict';


function lsCalculate(){
    var field1 = document.getElementById("vsd-a").value;
    var field2 = document.getElementById("vsd-b").value;
    var field3 = document.getElementById("vsd-c").value;
    
    var result = parseFloat(field2) / parseFloat(field1) * 1.05 * parseFloat(field3);
    var resultRound = result.toFixed(2)

    if (!isNaN(result)) {
        document.getElementById("answer").innerHTML = `Set VSD speed to ${resultRound} Hz`;

    }
}
function paCalculate(){
    var field1 = document.getElementById("ls-a").value;
    var field2 = document.getElementById("ls-b").value;
    var field3 = document.getElementById("static-a").value;
    
    var result = parseFloat(field2) / parseFloat(field1);
    var squared = Math.pow(result,2) * 1.05 * parseFloat(field3);
    var resultSquaredRound = squared.toFixed(2);

    if (!isNaN(squared)) {
        document.getElementById("answer-1").innerHTML = `Pressure setpoint = ${resultSquaredRound} Pa`;

    }
}
function msCalculate() {
    var field1 = document.getElementById("msec").value;
    var field2 = document.getElementById("length").value;
    var field3 = document.getElementById("width").value;
    
    var area = parseFloat(field2) * parseFloat(field3) * 1000;
    var msCalc = area * parseFloat(field1);
    var finalCalc = msCalc.toFixed(2);

    if (!isNaN(finalCalc)) {
        document.getElementById("answer-2").innerHTML = finalCalc + ' l/sec';

    }
}
function vavCalculate(){
    var field1 = document.getElementById("vavlength").value;
    var field2 = document.getElementById("vavwidth").value;
    
    var result = parseFloat(field1) * parseFloat(field2) * 1.3;
    var squared = Math.sqrt(result).toFixed(2);

    if (!isNaN(squared)) {
        document.getElementById("answer-3").innerHTML = `Box size = ${squared} cm`;

    }
}
function roundDuctCalculate() {
    var field1 = document.getElementById("diameter").value;
    
    var initialResult = parseFloat(field1) / 2 / 1000;
    var multiplyResult = initialResult * initialResult;
    var pieResult = multiplyResult * Math.PI;
    var finalResult = pieResult * 1000;
    var roundFinalResult = finalResult.toFixed(2);

    if (!isNaN(finalResult)) {
        document.getElementById("answer-4").innerHTML = `Ak = ${roundFinalResult}`;

    }
}

function ductPitotHoleCalculate() {
    var ductSize = document.getElementById("duct-size").value;
    var insulation = document.getElementById("insulation").value;
    var amountOfHoles = document.getElementById("number-of-holes").value;

    //It should multiply insulation by 2 and subtract from ductsize
    var subtractInsulation = parseFloat(ductSize) - parseFloat(insulation) * 2;

    //It should find the measurement between holes by dividing numberofHoles and subtractInsulation.
    var spacingOfHoles = subtractInsulation / parseFloat(amountOfHoles);
    //It should use the spacingOfHoles number and divide by 2 and add insulation for first hole and show on DOM 
    var firstHoleSpacing = spacingOfHoles.toFixed(2) / 2 + parseFloat(insulation);
    var i = 0;
    var strHoles = parseFloat(amountOfHoles);
    var myArray = '';
        while (i < strHoles) {
            myArray += firstHoleSpacing + (i * spacingOfHoles) + ' mm, ' + '<br />';
            i++;
        }
    document.getElementById("answer-5").innerHTML = `Hole spacing = ${spacingOfHoles} mm    ` + '<br />'  + myArray;
    
}
function electricalVaCalculate() {
    var voltage = document.getElementById("voltage").value;
    var va = document.getElementById("va").value;
    
    var result = parseFloat(va) / parseFloat(voltage);
    var roundFinalResult = result.toFixed(2);

    if (!isNaN(roundFinalResult)) {
        document.getElementById("answer-6").innerHTML = `Amps = ${roundFinalResult}`;

    }
}