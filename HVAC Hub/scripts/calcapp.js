'use strict';

var quotes = [
'"Intelligence is the ability to adapt to change." —Stephen Hawking',
'"Do or do not. There is no try." —Yoda, The Empire Strikes Back',
'"If something is wrong, fix it now. But train yourself not to worry, worry fixes nothing." — Ernest Hemingway',
'“First they ignore you, then they ridicule you, then they fight you, and then you win.” —Mahatma Gandhi',
' “The man who moves a mountain begins by carrying away small stones.“ —Confucius',
'“Whether you think you can or think you can\’t, you\’re right.” —Henry Ford',
'“My attitude is that if you push me towards something that you think is a weakness, then I will turn that perceived weakness into a strength.” —Michael Jordan',
'“Things may come to those who wait, but only the things left by those who hustle.”  —Abraham Lincoln',
'“Opportunity is missed by most people because it is dressed in overalls and looks like work.” —Thomas Edison',
'“It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.” —Charles Darwin',
'“Learn the rules like a pro, so you can break them like an artist.“ —Pablo Picasso',
'“Success consists of going from failure to failure without loss of enthusiasm.” —Winston Churchill',
'“We may encounter many defeats but we must not be defeated.” —Maya Angelou',
'“I didn\’t fail the test. I just found 100 ways to do it wrong.” —Benjamin Franklin',
'“Failure is the condiment that gives success its flavor.” —Truman Capote',
'“Life is a shipwreck but we must not forget to sing in the lifeboats.” —Voltaire',
'“Out of clutter, find simplicity. From discord, find harmony. In the middle of difficulty lies opportunity.” —Albert Einstein',
'"I can take it. The tougher it gets, the cooler I get." -Richard Nixon.',
'“That which does not kill us makes us stronger.” –Friedrich Nietzsche',
'“Do what you can, with what you have, where you are.” –Theodore Roosevelt',
'“Be yourself; everyone else is already taken.” –Oscar Wilde',
'“If opportunity doesn\’t knock, build a door.” –Milton Berle',
'“Strive not to be a success, but rather to be of value.” –Albert Einstein'

]
function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}
document.addEventListener("load", newQuote());

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
    var squared = Math.pow(result,2) * 1.02 * parseFloat(field3);
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
