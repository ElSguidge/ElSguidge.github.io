'use strict';

function openSlideMenu() {
    document.getElementById('menu').style.width = '250px';
    document.getElementById('content').style.marginLeft = '250px';
    
}
function closeSlideMenu() {
    document.getElementById('menu').style.width = '0';
    document.getElementById('content').style.marginLeft = '0';
    
}
$(document).ready(function () {
		
    var list1 = document.getElementById('firstList');

    list1.options[0] = new Option('Valve Type', '');
    list1.options[1] = new Option('Thread/Solder', 'Thread/Solder');
    list1.options[2] = new Option('Flange/Groove', 'Flange/Groove');
    });
    function getValveSize(){
        var list1 = document.getElementById('firstList');
        var list2 = document.getElementById("secondList");
        var list1SelectedValue = list1.options[list1.selectedIndex].value;
        
        if (list1SelectedValue==='Thread/Solder')
        
        {
            
            list2.options.length=0;
            list2.options[0] = new Option('DN', '');
            list2.options[1] = new Option('10', '10');
            list2.options[2] = new Option('15', '15');
            list2.options[3] = new Option('20', '20');
            list2.options[4] = new Option('25', '25');
            list2.options[5] = new Option('32', '32');
            list2.options[6] = new Option('40', '40');
            list2.options[7] = new Option('50', '50');
            list2.options[8] = new Option('65', '65');
            
        }
        else if (list1SelectedValue==='Flange/Groove')
        
        {
            
            list2.options.length=0;
            list2.options[0] = new Option('DN', '');
            list2.options[1] = new Option('20', '20');
            list2.options[2] = new Option('25', '25');
            list2.options[3] = new Option('32', '32');
            list2.options[4] = new Option('40', '40');
            list2.options[5] = new Option('50', '50');
            list2.options[6] = new Option('65', '65');
            list2.options[7] = new Option('80', '80');
            list2.options[8] = new Option('100', '100');
            list2.options[9] = new Option('125', '125');
            list2.options[10] = new Option('150', '150');
            list2.options[11] = new Option('200', '200');
            list2.options[12] = new Option('250', '250');
            list2.options[13] = new Option('300', '300');
            list2.options[14] = new Option('350', '350');
            list2.options[15] = new Option('400', '400');
        }
    }	
       
function getTurns(){
    var list1 = document.getElementById('firstList');
    var list2 = document.getElementById('secondList');
    var list3 = document.getElementById('thirdList');
    var list1SelectedValue = list1.options[list1.selectedIndex].value;
    var list2SelectedValue = list2.options[list2.selectedIndex].value;

    
    if (list1SelectedValue == 'Flange/Groove' && $.inArray(list2SelectedValue, ['20', '25']) >= 0) {
        list3.options.length = 0;
        list3.options[0] = new Option('1', '1');
        list3.options[1] = new Option('1.1', '1.1');
        list3.options[2] = new Option('1.2', '1.2');
        list3.options[3] = new Option('1.3', '1.3');
        list3.options[4] = new Option('1.4', '1.4');
        list3.options[5] = new Option('1.5', '1.5');
        list3.options[6] = new Option('1.6', '1.6');
        list3.options[7] = new Option('1.7', '1.7');
        list3.options[8] = new Option('1.8', '1.8');
        list3.options[8] = new Option('1.9', '1.9');
        list3.options[9] = new Option('2', '2');
        list3.options[10] = new Option('2.1', '2.1');
        list3.options[11] = new Option('2.2', '2.2');
        list3.options[12] = new Option('2.3', '2.3');
        list3.options[13] = new Option('2.4', '2.4');
        list3.options[14] = new Option('2.5', '2.5');
        list3.options[15] = new Option('2.6', '2.6');
        list3.options[16] = new Option('2.7', '2.7');
        list3.options[17] = new Option('2.8', '2.8');
        list3.options[18] = new Option('2.9', '2.9');
        list3.options[19] = new Option('3', '3');
        list3.options[20] = new Option('3.1', '3.1');
        list3.options[21] = new Option('3.2', '3.2');
        list3.options[22] = new Option('3.3', '3.3');
        list3.options[23] = new Option('3.4', '3.4');
        list3.options[24] = new Option('3.5', '3.5');
        list3.options[25] = new Option('3.6', '3.6');
        list3.options[26] = new Option('3.7', '3.7');
        list3.options[27] = new Option('3.8', '3.8');
        list3.options[28] = new Option('3.9', '3.9');
        list3.options[29] = new Option('4', '4');
        list3.options[30] = new Option('4.1', '4.1');
        list3.options[31] = new Option('4.2', '4.2');
        list3.options[32] = new Option('4.3', '4.3');
        list3.options[33] = new Option('4.4', '4.4');
        list3.options[34] = new Option('4.5', '4.5');
        list3.options[35] = new Option('4.6', '4.6');
        list3.options[36] = new Option('4.7', '4.7');
        list3.options[37] = new Option('4.8', '4.8');
        list3.options[38] = new Option('4.9', '4.9');
        list3.options[39] = new Option('5', '5');
        list3.options[40] = new Option('5.1', '5.1');
        list3.options[41] = new Option('5.2', '5.2');
        list3.options[42] = new Option('5.3', '5.3');
        list3.options[43] = new Option('5.4', '5.4');
        list3.options[44] = new Option('5.5', '5.5');
        list3.options[45] = new Option('5.6', '5.6');
        list3.options[46] = new Option('5.7', '5.7');
        list3.options[47] = new Option('5.8', '5.8');
        list3.options[48] = new Option('5.9', '5.9');
        list3.options[49] = new Option('6', '6');
        list3.options[50] = new Option('6.1', '6.1');
        list3.options[51] = new Option('6.2', '6.2');
        list3.options[52] = new Option('6.3', '6.3');
        list3.options[53] = new Option('6.4', '6.4');
        list3.options[54] = new Option('6.5', '6.5');
        list3.options[55] = new Option('6.6', '6.6');
        list3.options[56] = new Option('6.7', '6.7');
        list3.options[57] = new Option('6.8', '6.8');
        list3.options[58] = new Option('6.9', '6.9');
        list3.options[59] = new Option('7', '7');
    } else if (list1SelectedValue == 'Flange/Groove' && $.inArray(list2SelectedValue, ['32', '40', '50']) >= 0){
        list3.options.length=0;
      list3.options[0] = new Option('1', '1');
      list3.options[1] = new Option('1.1', '1.1');
      list3.options[2] = new Option('1.2', '1.2');
      list3.options[3] = new Option('1.3', '1.3');
      list3.options[4] = new Option('1.4', '1.4');
      list3.options[5] = new Option('1.5', '1.5');
      list3.options[6] = new Option('1.6', '1.6');
      list3.options[7] = new Option('1.7', '1.7');
      list3.options[8] = new Option('1.8', '1.8');
      list3.options[8] = new Option('1.9', '1.9');
      list3.options[9] = new Option('2', '2');
      list3.options[10] = new Option('2.1', '2.1');
      list3.options[11] = new Option('2.2', '2.2');
      list3.options[12] = new Option('2.3', '2.3');
      list3.options[13] = new Option('2.4', '2.4');
      list3.options[14] = new Option('2.5', '2.5');
      list3.options[15] = new Option('2.6', '2.6');
      list3.options[16] = new Option('2.7', '2.7');
      list3.options[17] = new Option('2.8', '2.8');
      list3.options[18] = new Option('2.9', '2.9');
      list3.options[19] = new Option('3', '3');
      list3.options[20] = new Option('3.1', '3.1');
      list3.options[21] = new Option('3.2', '3.2');
      list3.options[22] = new Option('3.3', '3.3');
      list3.options[23] = new Option('3.4', '3.4');
      list3.options[24] = new Option('3.5', '3.5');
      list3.options[25] = new Option('3.6', '3.6');
      list3.options[26] = new Option('3.7', '3.7');
      list3.options[27] = new Option('3.8', '3.8');
      list3.options[28] = new Option('3.9', '3.9');
      list3.options[29] = new Option('4', '4');
      list3.options[30] = new Option('4.1', '4.1');
      list3.options[31] = new Option('4.2', '4.2');
      list3.options[32] = new Option('4.3', '4.3');
      list3.options[33] = new Option('4.4', '4.4');
      list3.options[34] = new Option('4.5', '4.5');
      list3.options[35] = new Option('4.6', '4.6');
      list3.options[36] = new Option('4.7', '4.7');
      list3.options[37] = new Option('4.8', '4.8');
      list3.options[38] = new Option('4.9', '4.9');
      list3.options[39] = new Option('5', '5');
      list3.options[40] = new Option('5.1', '5.1');
      list3.options[41] = new Option('5.2', '5.2');
      list3.options[42] = new Option('5.3', '5.3');
      list3.options[43] = new Option('5.4', '5.4');
      list3.options[44] = new Option('5.5', '5.5');
      list3.options[45] = new Option('5.6', '5.6');
      list3.options[46] = new Option('5.7', '5.7');
      list3.options[47] = new Option('5.8', '5.8');
      list3.options[48] = new Option('5.9', '5.9');
      list3.options[49] = new Option('6', '6');
      list3.options[50] = new Option('6.1', '6.1');
      list3.options[51] = new Option('6.2', '6.2');
      list3.options[52] = new Option('6.3', '6.3');
      list3.options[53] = new Option('6.4', '6.4');
      list3.options[54] = new Option('6.5', '6.5');
      list3.options[55] = new Option('6.6', '6.6');
      list3.options[56] = new Option('6.7', '6.7');
      list3.options[57] = new Option('6.8', '6.8');
      list3.options[58] = new Option('6.9', '6.9');
      list3.options[59] = new Option('7', '7');
      list3.options[60] = new Option('7.1', '7.1');
      list3.options[61] = new Option('7.2', '7.2');
      list3.options[62] = new Option('7.3', '7.3');
      list3.options[63] = new Option('7.4', '7.4');
      list3.options[64] = new Option('7.5', '7.5');
      list3.options[65] = new Option('7.6', '7.6');
      list3.options[66] = new Option('7.7', '7.7');
      list3.options[67] = new Option('7.8', '7.8');
      list3.options[68] = new Option('7.9', '7.9');
      list3.options[69] = new Option('8', '8');
      list3.options[70] = new Option('8.1', '8.1');
      list3.options[71] = new Option('8.2', '8.2');
      list3.options[72] = new Option('8.3', '8.3');
      list3.options[73] = new Option('8.4', '8.4');
      list3.options[74] = new Option('8.5', '8.5');
      list3.options[75] = new Option('8.6', '8.6');
      list3.options[76] = new Option('8.7', '8.7');
      list3.options[77] = new Option('8.8', '8.8');
      list3.options[78] = new Option('8.9', '8.9');
      list3.options[79] = new Option('9', '9');
      list3.options[80] = new Option('9.1','9.1');
      list3.options[81] = new Option('9.2', '9.2');
      list3.options[82] = new Option('9.3', '9.3');
      list3.options[83] = new Option('9.4', '9.4');
      list3.options[84] = new Option('9.5', '9.5');
      list3.options[85] = new Option('9.6', '9.6');
      list3.options[86] = new Option('9.7', '9.7');
      list3.options[87] = new Option('9.8', '9.8');
      list3.options[88] = new Option('9.9', '9.9');
      list3.options[89] = new Option('10', '10');
    }else if
    (list1SelectedValue == 'Flange/Groove' && $.inArray(list2SelectedValue, ['65']) >= 0) {
   
        list3.options.length=0;
        list3.options[0] = new Option('1', '1');
        list3.options[1] = new Option('1.1', '1.1');
        list3.options[2] = new Option('1.2', '1.2');
        list3.options[3] = new Option('1.3', '1.3');
        list3.options[4] = new Option('1.4', '1.4');
        list3.options[5] = new Option('1.5', '1.5');
        list3.options[6] = new Option('1.6', '1.6');
        list3.options[7] = new Option('1.7', '1.7');
        list3.options[8] = new Option('1.8', '1.8');
        list3.options[8] = new Option('1.9', '1.9');
        list3.options[9] = new Option('2', '2');
        list3.options[10] = new Option('2.1', '2.1');
        list3.options[11] = new Option('2.2', '2.2');
        list3.options[12] = new Option('2.3', '2.3');
        list3.options[13] = new Option('2.4', '2.4');
        list3.options[14] = new Option('2.5', '2.5');
        list3.options[15] = new Option('2.6', '2.6');
        list3.options[16] = new Option('2.7', '2.7');
        list3.options[17] = new Option('2.8', '2.8');
        list3.options[18] = new Option('2.9', '2.9');
        list3.options[19] = new Option('3', '3');
        list3.options[20] = new Option('3.1', '3.1');
        list3.options[21] = new Option('3.2', '3.2');
        list3.options[22] = new Option('3.3', '3.3');
        list3.options[23] = new Option('3.4', '3.4');
        list3.options[24] = new Option('3.5', '3.5');
        list3.options[25] = new Option('3.6', '3.6');
        list3.options[26] = new Option('3.7', '3.7');
        list3.options[27] = new Option('3.8', '3.8');
        list3.options[28] = new Option('3.9', '3.9');
        list3.options[29] = new Option('4', '4');
        list3.options[30] = new Option('4.1', '4.1');
        list3.options[31] = new Option('4.2', '4.2');
        list3.options[32] = new Option('4.3', '4.3');
        list3.options[33] = new Option('4.4', '4.4');
        list3.options[34] = new Option('4.5', '4.5');
        list3.options[35] = new Option('4.6', '4.6');
        list3.options[36] = new Option('4.7', '4.7');
        list3.options[37] = new Option('4.8', '4.8');
        list3.options[38] = new Option('4.9', '4.9');
        list3.options[39] = new Option('5', '5');
        list3.options[40] = new Option('5.1', '5.1');
        list3.options[41] = new Option('5.2', '5.2');
        list3.options[42] = new Option('5.3', '5.3');
        list3.options[43] = new Option('5.4', '5.4');
        list3.options[44] = new Option('5.5', '5.5');
        list3.options[45] = new Option('5.6', '5.6');
        list3.options[46] = new Option('5.7', '5.7');
        list3.options[47] = new Option('5.8', '5.8');
        list3.options[48] = new Option('5.9', '5.9');
        list3.options[49] = new Option('6', '6');
        list3.options[50] = new Option('6.1', '6.1');
        list3.options[51] = new Option('6.2', '6.2');
        list3.options[52] = new Option('6.3', '6.3');
        list3.options[53] = new Option('6.4', '6.4');
        list3.options[54] = new Option('6.5', '6.5');
        list3.options[55] = new Option('6.6', '6.6');
        list3.options[56] = new Option('6.7', '6.7');
        list3.options[57] = new Option('6.8', '6.8');
        list3.options[58] = new Option('6.9', '6.9');
        list3.options[59] = new Option('7', '7');
        list3.options[60] = new Option('7.1', '7.1');
        list3.options[61] = new Option('7.2', '7.2');
        list3.options[62] = new Option('7.3', '7.3');
        list3.options[63] = new Option('7.4', '7.4');
        list3.options[64] = new Option('7.5', '7.5');
        list3.options[65] = new Option('7.6', '7.6');
        list3.options[66] = new Option('7.7', '7.7');
        list3.options[67] = new Option('7.8', '7.8');
        list3.options[68] = new Option('7.9', '7.9');
        list3.options[69] = new Option('8', '8');   
      } else if ($.inArray(list2SelectedValue, ['32', '40', '50']) >= 0) {
        list3.options.length = 0;
        list3.options[0] = new Option('Turns', '');
        list3.options[1] = new Option('0.25', '0.25');
        list3.options[2] = new Option('0.5', '0.5');
        list3.options[3] = new Option('0.75', '0.75');
        list3.options[4] = new Option('1', '1');
        list3.options[5] = new Option('1.1', '1.1');
        list3.options[6] = new Option('1.2', '1.2');
        list3.options[7] = new Option('1.3', '1.3');
        list3.options[8] = new Option('1.4', '1.4');
        list3.options[9] = new Option('1.5', '1.5');
        list3.options[10] = new Option('1.6', '1.6');
        list3.options[11] = new Option('1.7', '1.7');
        list3.options[12] = new Option('1.8', '1.8');
        list3.options[13] = new Option('1.9', '1.9');
        list3.options[14] = new Option('2', '2');
        list3.options[15] = new Option('2.1', '2.1');
        list3.options[16] = new Option('2.2', '2.2');
        list3.options[17] = new Option('2.3', '2.3');
        list3.options[18] = new Option('2.4', '2.4');
        list3.options[19] = new Option('2.5', '2.5');
        list3.options[20] = new Option('2.6', '2.6');
        list3.options[21] = new Option('2.7', '2.7');
        list3.options[22] = new Option('2.8', '2.8');
        list3.options[23] = new Option('2.9', '2.9');
        list3.options[24] = new Option('3', '3');
        list3.options[25] = new Option('3.1', '3.1');
        list3.options[26] = new Option('3.2', '3.2');
        list3.options[27] = new Option('3.3', '3.3');
        list3.options[28] = new Option('3.4', '3.4');
        list3.options[29] = new Option('3.5', '3.5');
        list3.options[30] = new Option('3.6', '3.6');
        list3.options[31] = new Option('3.7', '3.7');
        list3.options[32] = new Option('3.8', '3.8');
        list3.options[33] = new Option('3.9', '3.9');
        list3.options[34] = new Option('4', '4');
        list3.options[35] = new Option('4.1', '4.1');
        list3.options[36] = new Option('4.2', '4.2');
        list3.options[37] = new Option('4.3', '4.3');
        list3.options[38] = new Option('4.4', '4.4');
        list3.options[39] = new Option('4.5', '4.5');
        list3.options[40] = new Option('4.6', '4.6');
        list3.options[41] = new Option('4.7', '4.7');
        list3.options[42] = new Option('4.8', '4.8');
        list3.options[43] = new Option('4.9', '4.9');
        list3.options[44] = new Option('5', '5');
        list3.options[45] = new Option('5.1', '5.1');
        list3.options[46] = new Option('5.2', '5.2');
        list3.options[47] = new Option('5.3', '5.3');
        list3.options[48] = new Option('5.4', '5.4');
        list3.options[49] = new Option('5.5', '5.5');
        list3.options[50] = new Option('5.6', '5.6');
        list3.options[51] = new Option('5.7', '5.7');
        list3.options[52] = new Option('5.8', '5.8');
        list3.options[53] = new Option('5.9', '5.9');
        list3.options[54] = new Option('6', '6');
        list3.options[55] = new Option('6.1', '6.1');
        list3.options[56] = new Option('6.2', '6.2');
        list3.options[57] = new Option('6.3', '6.3');
        list3.options[58] = new Option('6.4', '6.4');
        list3.options[59] = new Option('6.5', '6.5');
        list3.options[60] = new Option('6.6', '6.6');
        list3.options[61] = new Option('6.7', '6.7');
        list3.options[62] = new Option('6.8', '6.8');
        list3.options[63] = new Option('6.9', '6.9');
        list3.options[64] = new Option('7', '7');
        list3.options[65] = new Option('7.1', '7.1');
        list3.options[66] = new Option('7.2', '7.2');
        list3.options[67] = new Option('7.3', '7.3');
        list3.options[68] = new Option('7.4', '7.4');
        list3.options[69] = new Option('7.5', '7.5');
        list3.options[70] = new Option('7.6', '7.6');
        list3.options[71] = new Option('7.7', '7.7');
        list3.options[72] = new Option('7.8', '7.8');
        list3.options[73] = new Option('7.9', '7.9');
        list3.options[74] = new Option('8', '8');
        list3.options[75] = new Option('8.1', '8.1');
        list3.options[76] = new Option('8.2', '8.2');
        list3.options[77] = new Option('8.3', '8.3');
        list3.options[78] = new Option('8.4', '8.4');
        list3.options[79] = new Option('8.5', '8.5');
        list3.options[80] = new Option('8.6', '8.6');
        list3.options[81] = new Option('8.7', '8.7');
        list3.options[82] = new Option('8.8', '8.8');
        list3.options[83] = new Option('8.9', '8.9');
        list3.options[84] = new Option('9', '9');
        list3.options[85] = new Option('9.1', '9.1');
        list3.options[86] = new Option('9.2', '9.2');
        list3.options[87] = new Option('9.3', '9.3');
        list3.options[88] = new Option('9.4', '9.4');
        list3.options[89] = new Option('9.5', '9.5');
        list3.options[90] = new Option('9.6', '9.6');
        list3.options[91] = new Option('9.7', '9.7');
        list3.options[92] = new Option('9.8', '9.8');
        list3.options[93] = new Option('9.9', '9.9');
        list3.options[94] = new Option('10', '10');
      } else if ($.inArray(list2SelectedValue, ['65']) >= 0) {
        list3.options.length = 0;
        list3.options[0] = new Option('1', '1');
        list3.options[1] = new Option('1.1', '1.1');
        list3.options[2] = new Option('1.2', '1.2');
        list3.options[3] = new Option('1.3', '1.3');
        list3.options[4] = new Option('1.4', '1.4');
        list3.options[5] = new Option('1.5', '1.5');
        list3.options[6] = new Option('1.6', '1.6');
        list3.options[7] = new Option('1.7', '1.7');
        list3.options[8] = new Option('1.8', '1.8');
        list3.options[9] = new Option('1.9', '1.9');
        list3.options[10] = new Option('2', '2');
        list3.options[11] = new Option('2.1', '2.1');
        list3.options[12] = new Option('2.2', '2.2');
        list3.options[13] = new Option('2.3', '2.3');
        list3.options[14] = new Option('2.4', '2.4');
        list3.options[15] = new Option('2.5', '2.5');
        list3.options[16] = new Option('2.6', '2.6');
        list3.options[17] = new Option('2.7', '2.7');
        list3.options[18] = new Option('2.8', '2.8');
        list3.options[19] = new Option('2.9', '2.9');
        list3.options[20] = new Option('3', '3');
        list3.options[21] = new Option('3.1', '3.1');
        list3.options[22] = new Option('3.2', '3.2');
        list3.options[23] = new Option('3.3', '3.3');
        list3.options[24] = new Option('3.4', '3.4');
        list3.options[25] = new Option('3.5', '3.5');
        list3.options[26] = new Option('3.6', '3.6');
        list3.options[27] = new Option('3.7', '3.7');
        list3.options[28] = new Option('3.8', '3.8');
        list3.options[29] = new Option('3.9', '3.9');
        list3.options[30] = new Option('4', '4');
        list3.options[31] = new Option('4.1', '4.1');
        list3.options[32] = new Option('4.2', '4.2');
        list3.options[33] = new Option('4.3', '4.3');
        list3.options[34] = new Option('4.4', '4.4');
        list3.options[35] = new Option('4.5', '4.5');
        list3.options[36] = new Option('4.6', '4.6');
        list3.options[37] = new Option('4.7', '4.7');
        list3.options[38] = new Option('4.8', '4.8');
        list3.options[39] = new Option('4.9', '4.9');
        list3.options[40] = new Option('5', '5');
        list3.options[41] = new Option('5.1', '5.1');
        list3.options[42] = new Option('5.2', '5.2');
        list3.options[43] = new Option('5.3', '5.3');
        list3.options[44] = new Option('5.4', '5.4');
        list3.options[45] = new Option('5.5', '5.5');
        list3.options[46] = new Option('5.6', '5.6');
        list3.options[47] = new Option('5.7', '5.7');
        list3.options[48] = new Option('5.8', '5.8');
        list3.options[49] = new Option('5.9', '5.9');
        list3.options[50] = new Option('6', '6');
        list3.options[51] = new Option('6.1', '6.1');
        list3.options[52] = new Option('6.2', '6.2');
        list3.options[53] = new Option('6.3', '6.3');
        list3.options[54] = new Option('6.4', '6.4');
        list3.options[55] = new Option('6.5', '6.5');
        list3.options[56] = new Option('6.6', '6.6');
        list3.options[57] = new Option('6.7', '6.7');
        list3.options[58] = new Option('6.8', '6.8');
        list3.options[59] = new Option('6.9', '6.9');
        list3.options[60] = new Option('7', '7');
        list3.options[61] = new Option('7.1', '7.1');
        list3.options[62] = new Option('7.2', '7.2');
        list3.options[63] = new Option('7.3', '7.3');
        list3.options[64] = new Option('7.4', '7.4');
        list3.options[65] = new Option('7.5', '7.5');
        list3.options[66] = new Option('7.6', '7.6');
        list3.options[67] = new Option('7.7', '7.7');
        list3.options[68] = new Option('7.8', '7.8');
        list3.options[69] = new Option('7.9', '7.9');
        list3.options[70] = new Option('8', '8');
        list3.options[71] = new Option('8.1', '8.1');
        list3.options[72] = new Option('8.2', '8.2');
        list3.options[73] = new Option('8.3', '8.3');
        list3.options[74] = new Option('8.4', '8.4');
        list3.options[75] = new Option('8.5', '8.5');
        list3.options[76] = new Option('8.6', '8.6');
        list3.options[77] = new Option('8.7', '8.7');
        list3.options[78] = new Option('8.8', '8.8');
        list3.options[79] = new Option('8.9', '8.9');
        list3.options[80] = new Option('9', '9');
        list3.options[81] = new Option('9.1', '9.1');
        list3.options[82] = new Option('9.2', '9.2');
        list3.options[83] = new Option('9.3', '9.3');
        list3.options[84] = new Option('9.4', '9.4');
        list3.options[85] = new Option('9.5', '9.5');
        list3.options[86] = new Option('9.6', '9.6');
        list3.options[87] = new Option('9.7', '9.7');
        list3.options[88] = new Option('9.8', '9.8');
        list3.options[89] = new Option('9.9', '9.9');
        list3.options[90] = new Option('10', '10');
        list3.options[91] = new Option('10.1', '10.1');
        list3.options[92] = new Option('10.2', '10.2');
        list3.options[93] = new Option('10.3', '10.3');
        list3.options[94] = new Option('10.4', '10.4');
        list3.options[95] = new Option('10.5', '10.5');
        list3.options[96] = new Option('10.6', '10.6');
        list3.options[97] = new Option('10.7', '10.7');
        list3.options[98] = new Option('10.8', '10.8');
        list3.options[99] = new Option('10.9', '10.9');
        list3.options[100] = new Option('11', '11');
        list3.options[101] = new Option('11.1', '11.1');
        list3.options[102] = new Option('11.2', '11.2');
        list3.options[103] = new Option('11.3', '11.3');
        list3.options[104] = new Option('11.4', '11.4');
        list3.options[105] = new Option('11.5', '11.5');
        list3.options[106] = new Option('11.6', '11.6');
        list3.options[107] = new Option('11.7', '11.7');
        list3.options[108] = new Option('11.8', '11.8');
        list3.options[109] = new Option('11.9', '11.9');
        list3.options[110] = new Option('12', '12');
      } else if ($.inArray(list2SelectedValue, ['10', '15', '20', '25']) >= 0) {
        list3.options.length = 0;
        list3.options[0] = new Option('Turns', '');
        list3.options[1] = new Option('0.25', '0.25');
        list3.options[2] = new Option('0.5', '0.5');
        list3.options[3] = new Option('0.75', '0.75');
        list3.options[4] = new Option('1', '1');
        list3.options[5] = new Option('1.1', '1.1');
        list3.options[6] = new Option('1.2', '1.2');
        list3.options[7] = new Option('1.3', '1.3');
        list3.options[8] = new Option('1.4', '1.4');
        list3.options[9] = new Option('1.5', '1.5');
        list3.options[10] = new Option('1.6', '1.6');
        list3.options[11] = new Option('1.7', '1.7');
        list3.options[12] = new Option('1.8', '1.8');
        list3.options[13] = new Option('1.9', '1.9');
        list3.options[14] = new Option('2', '2');
        list3.options[15] = new Option('2.1', '2.1');
        list3.options[16] = new Option('2.2', '2.2');
        list3.options[17] = new Option('2.3', '2.3');
        list3.options[18] = new Option('2.4', '2.4');
        list3.options[19] = new Option('2.5', '2.5');
        list3.options[20] = new Option('2.6', '2.6');
        list3.options[21] = new Option('2.7', '2.7');
        list3.options[22] = new Option('2.8', '2.8');
        list3.options[23] = new Option('2.9', '2.9');
        list3.options[24] = new Option('3', '3');
        list3.options[25] = new Option('3.1', '3.1');
        list3.options[26] = new Option('3.2', '3.2');
        list3.options[27] = new Option('3.3', '3.3');
        list3.options[28] = new Option('3.4', '3.4');
        list3.options[29] = new Option('3.5', '3.5');
        list3.options[30] = new Option('3.6', '3.6');
        list3.options[31] = new Option('3.7', '3.7');
        list3.options[32] = new Option('3.8', '3.8');
        list3.options[33] = new Option('3.9', '3.9');
        list3.options[34] = new Option('4', '4');
        list3.options[35] = new Option('4.1', '4.1');
        list3.options[36] = new Option('4.2', '4.2');
        list3.options[37] = new Option('4.3', '4.3');
        list3.options[38] = new Option('4.4', '4.4');
        list3.options[39] = new Option('4.5', '4.5');
        list3.options[40] = new Option("4.6", "4.6");
        list3.options[41] = new Option("4.7", "4.7");
        list3.options[42] = new Option("4.8", "4.8");
        list3.options[43] = new Option("4.9", "4.9");
        list3.options[44] = new Option("5", "5");
        list3.options[45] = new Option("5.1", "5.1");
        list3.options[46] = new Option("5.2", "5.2");
        list3.options[47] = new Option("5.3", "5.3");
        list3.options[48] = new Option("5.4", "5.4");
        list3.options[49] = new Option("5.5", "5.5");
        list3.options[50] = new Option("5.6", "5.6");
        list3.options[51] = new Option("5.7", "5.7");
        list3.options[52] = new Option("5.8", "5.8");
        list3.options[53] = new Option("5.9", "5.9");
        list3.options[54] = new Option("6", "6");
        list3.options[55] = new Option("6.1", "6.1");
        list3.options[56] = new Option("6.2", "6.2");
        list3.options[57] = new Option("6.3", "6.3");
        list3.options[58] = new Option("6.4", "6.4");
        list3.options[59] = new Option("6.5", "6.5");
        list3.options[60] = new Option("6.6", "6.6");
        list3.options[61] = new Option("6.7", "6.7");
        list3.options[62] = new Option("6.8", "6.8");
        list3.options[63] = new Option("6.9", "6.9");
        list3.options[64] = new Option("7", "7");
      }
      else if
($.inArray(list2SelectedValue, ['80','100', '125', '150']) >= 0) {

    list3.options.length=0;
    list3.options[0] = new Option('1', '1');
    list3.options[1] = new Option('1.1', '1.1');
    list3.options[2] = new Option('1.2', '1.2');
    list3.options[3] = new Option('1.3', '1.3');
    list3.options[4] = new Option('1.4', '1.4');
    list3.options[5] = new Option('1.5', '1.5');
    list3.options[6] = new Option('1.6', '1.6');
    list3.options[7] = new Option('1.7', '1.7');
    list3.options[8] = new Option('1.8', '1.8');
    list3.options[8] = new Option('1.9', '1.9');
    list3.options[9] = new Option('2', '2');
    list3.options[10] = new Option('2.1', '2.1');
    list3.options[11] = new Option('2.2', '2.2');
    list3.options[12] = new Option('2.3', '2.3');
    list3.options[13] = new Option('2.4', '2.4');
    list3.options[14] = new Option('2.5', '2.5');
    list3.options[15] = new Option('2.6', '2.6');
    list3.options[16] = new Option('2.7', '2.7');
    list3.options[17] = new Option('2.8', '2.8');
    list3.options[18] = new Option('2.9', '2.9');
    list3.options[19] = new Option('3', '3');
    list3.options[20] = new Option('3.1', '3.1');
    list3.options[21] = new Option('3.2', '3.2');
    list3.options[22] = new Option('3.3', '3.3');
    list3.options[23] = new Option('3.4', '3.4');
    list3.options[24] = new Option('3.5', '3.5');
    list3.options[25] = new Option('3.6', '3.6');
    list3.options[26] = new Option('3.7', '3.7');
    list3.options[27] = new Option('3.8', '3.8');
    list3.options[28] = new Option('3.9', '3.9');
    list3.options[29] = new Option('4', '4');
    list3.options[30] = new Option('4.1', '4.1');
    list3.options[31] = new Option('4.2', '4.2');
    list3.options[32] = new Option('4.3', '4.3');
    list3.options[33] = new Option('4.4', '4.4');
    list3.options[34] = new Option('4.5', '4.5');
    list3.options[35] = new Option('4.6', '4.6');
    list3.options[36] = new Option('4.7', '4.7');
    list3.options[37] = new Option('4.8', '4.8');
    list3.options[38] = new Option('4.9', '4.9');
    list3.options[39] = new Option('5', '5');
    list3.options[40] = new Option('5.1', '5.1');
    list3.options[41] = new Option('5.2', '5.2');
    list3.options[42] = new Option('5.3', '5.3');
    list3.options[43] = new Option('5.4', '5.4');
    list3.options[44] = new Option('5.5', '5.5');
    list3.options[45] = new Option('5.6', '5.6');
    list3.options[46] = new Option('5.7', '5.7');
    list3.options[47] = new Option('5.8', '5.8');
    list3.options[48] = new Option('5.9', '5.9');
    list3.options[49] = new Option('6', '6');
    list3.options[50] = new Option('6.1', '6.1');
    list3.options[51] = new Option('6.2', '6.2');
    list3.options[52] = new Option('6.3', '6.3');
    list3.options[53] = new Option('6.4', '6.4');
    list3.options[54] = new Option('6.5', '6.5');
    list3.options[55] = new Option('6.6', '6.6');
    list3.options[56] = new Option('6.7', '6.7');
    list3.options[57] = new Option('6.8', '6.8');
    list3.options[58] = new Option('6.9', '6.9');
    list3.options[59] = new Option('7', '7');
    list3.options[60] = new Option('7.1', '7.1');
    list3.options[61] = new Option('7.2', '7.2');
    list3.options[62] = new Option('7.3', '7.3');
    list3.options[63] = new Option('7.4', '7.4');
    list3.options[64] = new Option('7.5', '7.5');
    list3.options[65] = new Option('7.6', '7.6');
    list3.options[66] = new Option('7.7', '7.7');
    list3.options[67] = new Option('7.8', '7.8');
    list3.options[68] = new Option('7.9', '7.9');
    list3.options[69] = new Option('8', '8');
}
    else if ($.inArray(list2SelectedValue, ['200', '250','300']) >= 0) { 

    list3.options.length=0;    
    list3.options[0] = new Option('2', '2');
    list3.options[1] = new Option('2.1', '2.1');
    list3.options[2] = new Option('2.2', '2.2');
    list3.options[3] = new Option('2.3', '2.3');
    list3.options[4] = new Option('2.4', '2.4');
    list3.options[5] = new Option('2.5', '2.5');
    list3.options[6] = new Option('2.6', '2.6');
    list3.options[7] = new Option('2.7', '2.7');
    list3.options[8] = new Option('2.8', '2.8');
    list3.options[9] = new Option('2.9', '2.9');
    list3.options[10] = new Option('3', '3');
    list3.options[11] = new Option('3.1', '3.1');
    list3.options[12] = new Option('3.2', '3.2');
    list3.options[13] = new Option('3.3', '3.3');
    list3.options[14] = new Option('3.4', '3.4');
    list3.options[15] = new Option('3.5', '3.5');
    list3.options[16] = new Option('3.6', '3.6');
    list3.options[17] = new Option('3.7', '3.7');
    list3.options[18] = new Option('3.8', '3.8');
    list3.options[19] = new Option('3.9', '3.9');
    list3.options[20] = new Option('4', '4');
    list3.options[21] = new Option('4.1', '4.1');
    list3.options[22] = new Option('4.2', '4.2');
    list3.options[23] = new Option('4.3', '4.3');
    list3.options[24] = new Option('4.4', '4.4');
    list3.options[25] = new Option('4.5', '4.5');
    list3.options[26] = new Option('4.6', '4.6');
    list3.options[27] = new Option('4.7', '4.7');
    list3.options[28] = new Option('4.8', '4.8');
    list3.options[29] = new Option('4.9', '4.9');
    list3.options[30] = new Option('5', '5');
    list3.options[31] = new Option('5.1', '5.1');
    list3.options[32] = new Option('5.2', '5.2');
    list3.options[33] = new Option('5.3', '5.3');
    list3.options[34] = new Option('5.4', '5.4');
    list3.options[35] = new Option('5.5', '5.5');
    list3.options[36] = new Option('5.6', '5.6');
    list3.options[37] = new Option('5.7', '5.7');
    list3.options[38] = new Option('5.8', '5.8');
    list3.options[39] = new Option('5.9', '5.9');
    list3.options[40] = new Option('6', '6');
    list3.options[41] = new Option('6.1', '6.1');
    list3.options[42] = new Option('6.2', '6.2');
    list3.options[43] = new Option('6.3', '6.3');
    list3.options[44] = new Option('6.4', '6.4');
    list3.options[45] = new Option('6.5', '6.5');
    list3.options[46] = new Option('6.6', '6.6');
    list3.options[47] = new Option('6.7', '6.7');
    list3.options[48] = new Option('6.8', '6.8');
    list3.options[49] = new Option('6.9', '6.9');
    list3.options[50] = new Option('7', '7');
    list3.options[51] = new Option('7.1', '7.1');
    list3.options[52] = new Option('7.2', '7.2');
    list3.options[53] = new Option('7.3', '7.3');
    list3.options[54] = new Option('7.4', '7.4');
    list3.options[55] = new Option('7.5', '7.5');
    list3.options[56] = new Option('7.6', '7.6');
    list3.options[57] = new Option('7.7', '7.7');
    list3.options[58] = new Option('7.8', '7.8');
    list3.options[59] = new Option('7.9', '7.9');
    list3.options[60] = new Option('8', '8');
    list3.options[61] = new Option('8.1', '8.1');
    list3.options[62] = new Option('8.2', '8.2');
    list3.options[63] = new Option('8.3', '8.3');
    list3.options[64] = new Option('8.4', '8.4');
    list3.options[65] = new Option('8.5', '8.5');
    list3.options[66] = new Option('8.6', '8.6');
    list3.options[67] = new Option('8.7', '8.7');
    list3.options[68] = new Option('8.8', '8.8');
    list3.options[69] = new Option('8.9', '8.9');
    list3.options[70] = new Option('9', '9');
    list3.options[71] = new Option('9.1','9.1');
    list3.options[72] = new Option('9.2', '9.2');
    list3.options[73] = new Option('9.3', '9.3');
    list3.options[74] = new Option('9.4', '9.4');
    list3.options[75] = new Option('9.5', '9.5');
    list3.options[76] = new Option('9.6', '9.6');
    list3.options[77] = new Option('9.7', '9.7');
    list3.options[78] = new Option('9.8', '9.8');
    list3.options[79] = new Option('9.9', '9.9');
    list3.options[80] = new Option('10', '10');
    list3.options[81] = new Option('10.1', '10.1');
    list3.options[82] = new Option('10.2', '10.2');
    list3.options[83] = new Option('10.3', '10.3');
    list3.options[84] = new Option('10.4', '10.4');
    list3.options[85] = new Option('10.5', '10.5');
    list3.options[86] = new Option('10.6', '10.6');
    list3.options[87] = new Option('10.7', '10.7');
    list3.options[88] = new Option('10.8', '10.8');
    list3.options[89] = new Option('10.9', '10.9');
    list3.options[90] = new Option('11', '11');
    list3.options[91] = new Option('11.1', '11.1');
    list3.options[92] = new Option('11.2', '11.2');
    list3.options[93] = new Option('11.3', '11.3');
    list3.options[94] = new Option('11.4', '11.4');
    list3.options[95] = new Option('11.5', '11.5');
    list3.options[96] = new Option('11.6', '11.6');
    list3.options[97] = new Option('11.7', '11.7');
    list3.options[98] = new Option('11.8', '11.8');
    list3.options[99] = new Option('11.9', '11.9');
    list3.options[100] = new Option('12', '12');

    }else if ($.inArray(list2SelectedValue, ['350']) >= 0) {
    list3.options.length=0;    
    list3.options[0] = new Option('3', '3');
    list3.options[1] = new Option('3.1', '3.1');
    list3.options[2] = new Option('3.2', '3.2');
    list3.options[3] = new Option('3.3', '3.3');
    list3.options[4] = new Option('3.4', '3.4');
    list3.options[5] = new Option('3.5', '3.5');
    list3.options[6] = new Option('3.6', '3.6');
    list3.options[7] = new Option('3.7', '3.7');
    list3.options[8] = new Option('3.8', '3.8');
    list3.options[9] = new Option('3.9', '3.9');
    list3.options[10] = new Option('4', '4');
    list3.options[11] = new Option('4.1', '4.1');
    list3.options[12] = new Option('4.2', '4.2');
    list3.options[13] = new Option('4.3', '4.3');
    list3.options[14] = new Option('4.4', '4.4');
    list3.options[15] = new Option('4.5', '4.5');
    list3.options[16] = new Option('4.6', '4.6');
    list3.options[17] = new Option('4.7', '4.7');
    list3.options[18] = new Option('4.8', '4.8');
    list3.options[19] = new Option('4.9', '4.9');
    list3.options[10] = new Option('5', '5');
    list3.options[11] = new Option('5.1', '5.1');
    list3.options[12] = new Option('5.2', '5.2');
    list3.options[13] = new Option('5.3', '5.3');
    list3.options[14] = new Option('5.4', '5.4');
    list3.options[15] = new Option('5.5', '5.5');
    list3.options[16] = new Option('5.6', '5.6');
    list3.options[17] = new Option('5.7', '5.7');
    list3.options[18] = new Option('5.8', '5.8');
    list3.options[19] = new Option('5.9', '5.9');
    list3.options[20] = new Option('6', '6');
    list3.options[21] = new Option('6.1', '6.1');
    list3.options[22] = new Option('6.2', '6.2');
    list3.options[23] = new Option('6.3', '6.3');
    list3.options[24] = new Option('6.4', '6.4');
    list3.options[25] = new Option('6.5', '6.5');
    list3.options[26] = new Option('6.6', '6.6');
    list3.options[27] = new Option('6.7', '6.7');
    list3.options[28] = new Option('6.8', '6.8');
    list3.options[29] = new Option('6.9', '6.9');
    list3.options[30] = new Option('7', '7');
    list3.options[31] = new Option('7.1', '7.1');
    list3.options[32] = new Option('7.2', '7.2');
    list3.options[33] = new Option('7.3', '7.3');
    list3.options[34] = new Option('7.4', '7.4');
    list3.options[35] = new Option('7.5', '7.5');
    list3.options[36] = new Option('7.6', '7.6');
    list3.options[37] = new Option('7.7', '7.7');
    list3.options[38] = new Option('7.8', '7.8');
    list3.options[39] = new Option('7.9', '7.9');
    list3.options[40] = new Option('8', '8');
    list3.options[41] = new Option('8.1', '8.1');
    list3.options[42] = new Option('8.2', '8.2');
    list3.options[43] = new Option('8.3', '8.3');
    list3.options[44] = new Option('8.4', '8.4');
    list3.options[45] = new Option('8.5', '8.5');
    list3.options[46] = new Option('8.6', '8.6');
    list3.options[47] = new Option('8.7', '8.7');
    list3.options[48] = new Option('8.8', '8.8');
    list3.options[49] = new Option('8.9', '8.9');
    list3.options[50] = new Option('9', '9');
    list3.options[51] = new Option('9.1','9.1');
    list3.options[52] = new Option('9.2', '9.2');
    list3.options[53] = new Option('9.3', '9.3');
    list3.options[54] = new Option('9.4', '9.4');
    list3.options[55] = new Option('9.5', '9.5');
    list3.options[56] = new Option('9.6', '9.6');
    list3.options[57] = new Option('9.7', '9.7');
    list3.options[58] = new Option('9.8', '9.8');
    list3.options[59] = new Option('9.9', '9.9');
    list3.options[60] = new Option('10', '10');
    list3.options[61] = new Option('10.1', '10.1');
    list3.options[62] = new Option('10.2', '10.2');
    list3.options[63] = new Option('10.3', '10.3');
    list3.options[64] = new Option('10.4', '10.4');
    list3.options[65] = new Option('10.5', '10.5');
    list3.options[66] = new Option('10.6', '10.6');
    list3.options[67] = new Option('10.7', '10.7');
    list3.options[68] = new Option('10.8', '10.8');
    list3.options[69] = new Option('10.9', '10.9');
    list3.options[70] = new Option('11', '11');
    list3.options[71] = new Option('11.1', '11.1');
    list3.options[72] = new Option('11.2', '11.2');
    list3.options[73] = new Option('11.3', '11.3');
    list3.options[74] = new Option('11.4', '11.4');
    list3.options[75] = new Option('11.5', '11.5');
    list3.options[76] = new Option('11.6', '11.6');
    list3.options[77] = new Option('11.7', '11.7');
    list3.options[78] = new Option('11.8', '11.8');
    list3.options[79] = new Option('11.9', '11.9');
    list3.options[80] = new Option('12', '12');
    list3.options[81] = new Option('12.1', '12.1');
    list3.options[82] = new Option('12.2', '12.2');
    list3.options[83] = new Option('12.3', '12.3');
    list3.options[84] = new Option('12.4', '12.4');
    list3.options[85] = new Option('12.5', '12.5');
    list3.options[86] = new Option('12.6', '12.6');
    list3.options[87] = new Option('12.7', '12.7');
    list3.options[88] = new Option('12.8', '12.8');
    list3.options[89] = new Option('12.9', '12.9');
    list3.options[90] = new Option('13', '13');
    list3.options[91] = new Option('13.1', '13.1');
    list3.options[92] = new Option('13.2', '13.2');
    list3.options[93] = new Option('13.3', '13.3');
    list3.options[94] = new Option('13.4', '13.4');
    list3.options[95] = new Option('13.5', '13.5');
    list3.options[96] = new Option('13.6', '13.6');
    list3.options[97] = new Option('13.7', '13.7');
    list3.options[98] = new Option('13.8', '13.8');
    list3.options[99] = new Option('13.9', '13.9');
    list3.options[100] = new Option('14', '14');
    list3.options[101] = new Option('14.1', '14.1');
    list3.options[102] = new Option('14.2', '14.2');
    list3.options[103] = new Option('14.3', '14.3');
    list3.options[104] = new Option('14.4', '14.4');
    list3.options[105] = new Option('14.5', '14.5');
    list3.options[106] = new Option('14.6', '14.6');
    list3.options[107] = new Option('14.7', '14.7');
    list3.options[108] = new Option('14.8', '14.8');
    list3.options[109] = new Option('14.9', '14.9');
    list3.options[110] = new Option('15', '15');
    list3.options[101] = new Option('15.1', '15.1');
    list3.options[102] = new Option('15.2', '15.2');
    list3.options[103] = new Option('15.3', '15.3');
    list3.options[104] = new Option('15.4', '15.4');
    list3.options[105] = new Option('15.5', '15.5');
    list3.options[106] = new Option('15.6', '15.6');
    list3.options[107] = new Option('15.7', '15.7');
    list3.options[108] = new Option('15.8', '15.8');
    list3.options[109] = new Option('15.9', '15.9');
    list3.options[110] = new Option('16', '16');
    list3.options[101] = new Option('16.1', '16.1');
    list3.options[102] = new Option('16.2', '16.2');
    list3.options[103] = new Option('16.3', '16.3');
    list3.options[104] = new Option('16.4', '16.4');
    list3.options[105] = new Option('16.5', '16.5');
    list3.options[106] = new Option('16.6', '16.6');
    list3.options[107] = new Option('16.7', '16.7');
    list3.options[108] = new Option('16.8', '16.8');
    list3.options[109] = new Option('16.9', '16.9');
    list3.options[110] = new Option('17', '17');
    list3.options[111] = new Option('17.1', '17.1');
    list3.options[112] = new Option('17.2', '17.2');
    list3.options[113] = new Option('17.3', '17.3');
    list3.options[114] = new Option('17.4', '17.4');
    list3.options[115] = new Option('17.5', '17.5');
    list3.options[116] = new Option('17.6', '17.6');
    list3.options[117] = new Option('17.7', '17.7');
    list3.options[118] = new Option('17.8', '17.8');
    list3.options[119] = new Option('17.9', '17.9');
    list3.options[120] = new Option('18', '18');   
}
else if ($.inArray(list2SelectedValue, ['400']) >= 0) {
    list3.options.length=0;    
    list3.options[0] = new Option('3', '3');
    list3.options[1] = new Option('3.1', '3.1');
    list3.options[2] = new Option('3.2', '3.2');
    list3.options[3] = new Option('3.3', '3.3');
    list3.options[4] = new Option('3.4', '3.4');
    list3.options[5] = new Option('3.5', '3.5');
    list3.options[6] = new Option('3.6', '3.6');
    list3.options[7] = new Option('3.7', '3.7');
    list3.options[8] = new Option('3.8', '3.8');
    list3.options[9] = new Option('3.9', '3.9');
    list3.options[10] = new Option('4', '4');
    list3.options[11] = new Option('4.1', '4.1');
    list3.options[12] = new Option('4.2', '4.2');
    list3.options[13] = new Option('4.3', '4.3');
    list3.options[14] = new Option('4.4', '4.4');
    list3.options[15] = new Option('4.5', '4.5');
    list3.options[16] = new Option('4.6', '4.6');
    list3.options[17] = new Option('4.7', '4.7');
    list3.options[18] = new Option('4.8', '4.8');
    list3.options[19] = new Option('4.9', '4.9');
    list3.options[10] = new Option('5', '5');
    list3.options[11] = new Option('5.1', '5.1');
    list3.options[12] = new Option('5.2', '5.2');
    list3.options[13] = new Option('5.3', '5.3');
    list3.options[14] = new Option('5.4', '5.4');
    list3.options[15] = new Option('5.5', '5.5');
    list3.options[16] = new Option('5.6', '5.6');
    list3.options[17] = new Option('5.7', '5.7');
    list3.options[18] = new Option('5.8', '5.8');
    list3.options[19] = new Option('5.9', '5.9');
    list3.options[20] = new Option('6', '6');
    list3.options[21] = new Option('6.1', '6.1');
    list3.options[22] = new Option('6.2', '6.2');
    list3.options[23] = new Option('6.3', '6.3');
    list3.options[24] = new Option('6.4', '6.4');
    list3.options[25] = new Option('6.5', '6.5');
    list3.options[26] = new Option('6.6', '6.6');
    list3.options[27] = new Option('6.7', '6.7');
    list3.options[28] = new Option('6.8', '6.8');
    list3.options[29] = new Option('6.9', '6.9');
    list3.options[30] = new Option('7', '7');
    list3.options[31] = new Option('7.1', '7.1');
    list3.options[32] = new Option('7.2', '7.2');
    list3.options[33] = new Option('7.3', '7.3');
    list3.options[34] = new Option('7.4', '7.4');
    list3.options[35] = new Option('7.5', '7.5');
    list3.options[36] = new Option('7.6', '7.6');
    list3.options[37] = new Option('7.7', '7.7');
    list3.options[38] = new Option('7.8', '7.8');
    list3.options[39] = new Option('7.9', '7.9');
    list3.options[40] = new Option('8', '8');
    list3.options[41] = new Option('8.1', '8.1');
    list3.options[42] = new Option('8.2', '8.2');
    list3.options[43] = new Option('8.3', '8.3');
    list3.options[44] = new Option('8.4', '8.4');
    list3.options[45] = new Option('8.5', '8.5');
    list3.options[46] = new Option('8.6', '8.6');
    list3.options[47] = new Option('8.7', '8.7');
    list3.options[48] = new Option('8.8', '8.8');
    list3.options[49] = new Option('8.9', '8.9');
    list3.options[50] = new Option('9', '9');
    list3.options[51] = new Option('9.1','9.1');
    list3.options[52] = new Option('9.2', '9.2');
    list3.options[53] = new Option('9.3', '9.3');
    list3.options[54] = new Option('9.4', '9.4');
    list3.options[55] = new Option('9.5', '9.5');
    list3.options[56] = new Option('9.6', '9.6');
    list3.options[57] = new Option('9.7', '9.7');
    list3.options[58] = new Option('9.8', '9.8');
    list3.options[59] = new Option('9.9', '9.9');
    list3.options[60] = new Option('10', '10');
    list3.options[61] = new Option('10.1', '10.1');
    list3.options[62] = new Option('10.2', '10.2');
    list3.options[63] = new Option('10.3', '10.3');
    list3.options[64] = new Option('10.4', '10.4');
    list3.options[65] = new Option('10.5', '10.5');
    list3.options[66] = new Option('10.6', '10.6');
    list3.options[67] = new Option('10.7', '10.7');
    list3.options[68] = new Option('10.8', '10.8');
    list3.options[69] = new Option('10.9', '10.9');
    list3.options[70] = new Option('11', '11');
    list3.options[71] = new Option('11.1', '11.1');
    list3.options[72] = new Option('11.2', '11.2');
    list3.options[73] = new Option('11.3', '11.3');
    list3.options[74] = new Option('11.4', '11.4');
    list3.options[75] = new Option('11.5', '11.5');
    list3.options[76] = new Option('11.6', '11.6');
    list3.options[77] = new Option('11.7', '11.7');
    list3.options[78] = new Option('11.8', '11.8');
    list3.options[79] = new Option('11.9', '11.9');
    list3.options[80] = new Option('12', '12');
    list3.options[81] = new Option('12.1', '12.1');
    list3.options[82] = new Option('12.2', '12.2');
    list3.options[83] = new Option('12.3', '12.3');
    list3.options[84] = new Option('12.4', '12.4');
    list3.options[85] = new Option('12.5', '12.5');
    list3.options[86] = new Option('12.6', '12.6');
    list3.options[87] = new Option('12.7', '12.7');
    list3.options[88] = new Option('12.8', '12.8');
    list3.options[89] = new Option('12.9', '12.9');
    list3.options[90] = new Option('13', '13');
    list3.options[91] = new Option('13.1', '13.1');
    list3.options[92] = new Option('13.2', '13.2');
    list3.options[93] = new Option('13.3', '13.3');
    list3.options[94] = new Option('13.4', '13.4');
    list3.options[95] = new Option('13.5', '13.5');
    list3.options[96] = new Option('13.6', '13.6');
    list3.options[97] = new Option('13.7', '13.7');
    list3.options[98] = new Option('13.8', '13.8');
    list3.options[99] = new Option('13.9', '13.9');
    list3.options[100] = new Option('14', '14');
    list3.options[101] = new Option('14.1', '14.1');
    list3.options[102] = new Option('14.2', '14.2');
    list3.options[103] = new Option('14.3', '14.3');
    list3.options[104] = new Option('14.4', '14.4');
    list3.options[105] = new Option('14.5', '14.5');
    list3.options[106] = new Option('14.6', '14.6');
    list3.options[107] = new Option('14.7', '14.7');
    list3.options[108] = new Option('14.8', '14.8');
    list3.options[109] = new Option('14.9', '14.9');
    list3.options[110] = new Option('15', '15');
    list3.options[101] = new Option('15.1', '15.1');
    list3.options[102] = new Option('15.2', '15.2');
    list3.options[103] = new Option('15.3', '15.3');
    list3.options[104] = new Option('15.4', '15.4');
    list3.options[105] = new Option('15.5', '15.5');
    list3.options[106] = new Option('15.6', '15.6');
    list3.options[107] = new Option('15.7', '15.7');
    list3.options[108] = new Option('15.8', '15.8');
    list3.options[109] = new Option('15.9', '15.9');
    list3.options[110] = new Option('16', '16');
    list3.options[101] = new Option('16.1', '16.1');
    list3.options[102] = new Option('16.2', '16.2');
    list3.options[103] = new Option('16.3', '16.3');
    list3.options[104] = new Option('16.4', '16.4');
    list3.options[105] = new Option('16.5', '16.5');
    list3.options[106] = new Option('16.6', '16.6');
    list3.options[107] = new Option('16.7', '16.7');
    list3.options[108] = new Option('16.8', '16.8');
    list3.options[109] = new Option('16.9', '16.9');
    list3.options[110] = new Option('17', '17');
    list3.options[111] = new Option('17.1', '17.1');
    list3.options[112] = new Option('17.2', '17.2');
    list3.options[113] = new Option('17.3', '17.3');
    list3.options[114] = new Option('17.4', '17.4');
    list3.options[115] = new Option('17.5', '17.5');
    list3.options[116] = new Option('17.6', '17.6');
    list3.options[117] = new Option('17.7', '17.7');
    list3.options[118] = new Option('17.8', '17.8');
    list3.options[119] = new Option('17.9', '17.9');
    list3.options[120] = new Option('18', '18');
    list3.options[121] = new Option('18.1', '18.1');
    list3.options[122] = new Option('18.2', '18.2');
    list3.options[123] = new Option('18.3', '18.3');
    list3.options[124] = new Option('18.4', '18.4');
    list3.options[125] = new Option('18.5', '18.5');
    list3.options[126] = new Option('18.6', '18.6');
    list3.options[127] = new Option('18.7', '18.7');
    list3.options[128] = new Option('18.8', '18.8');
    list3.options[129] = new Option('18.9', '18.9');
    list3.options[130] = new Option('19', '19');
    list3.options[131] = new Option('19.1', '19.1');
    list3.options[132] = new Option('19.2', '19.2');
    list3.options[133] = new Option('19.3', '19.3');
    list3.options[134] = new Option('19.4', '19.4');
    list3.options[135] = new Option('19.5', '19.5');
    list3.options[136] = new Option('19.6', '19.6');
    list3.options[137] = new Option('19.7', '19.7');
    list3.options[138] = new Option('19.8', '19.8');
    list3.options[139] = new Option('19.9', '19.9');
    list3.options[140] = new Option('20', '20');
    list3.options[141] = new Option('20.1', '20.1');
    list3.options[142] = new Option('20.2', '20.2');
    list3.options[143] = new Option('20.3', '20.3');
    list3.options[144] = new Option('20.4', '20.4');
    list3.options[145] = new Option('20.5', '20.5');
    list3.options[146] = new Option('20.6', '20.6');
    list3.options[147] = new Option('20.7', '20.7');
    list3.options[148] = new Option('20.8', '20.8');
    list3.options[149] = new Option('20.9', '20.9');
    list3.options[150] = new Option('21', '21');
    list3.options[151] = new Option('21.1', '21.1');
    list3.options[152] = new Option('21.2', '21.2');
    list3.options[153] = new Option('21.3', '21.3');
    list3.options[154] = new Option('21.4', '21.4');
    list3.options[155] = new Option('21.5', '21.5');
    list3.options[156] = new Option('21.6', '21.6');
    list3.options[157] = new Option('21.7', '21.7');
    list3.options[158] = new Option('21.8', '21.8');
    list3.options[159] = new Option('21.9', '21.9');
    list3.options[160] = new Option('22', '22');
    list3.options[161] = new Option('22.1', '22.1');
    list3.options[162] = new Option('22.2', '22.2');
    list3.options[163] = new Option('22.3', '22.3');
    list3.options[164] = new Option('22.4', '22.4');
    list3.options[165] = new Option('22.5', '22.5');
    list3.options[166] = new Option('22.6', '22.6');
    list3.options[167] = new Option('22.7', '22.7');
    list3.options[168] = new Option('22.8', '22.8');
    list3.options[169] = new Option('22.9', '22.9');
    list3.options[170] = new Option('23', '23');
    list3.options[171] = new Option('23.1', '23.1');
    list3.options[172] = new Option('23.2', '23.2');
    list3.options[173] = new Option('23.3', '23.3');
    list3.options[174] = new Option('23.4', '23.4');
    list3.options[175] = new Option('23.5', '23.5');
    list3.options[176] = new Option('23.6', '23.6');
    list3.options[177] = new Option('23.7', '23.7');
    list3.options[178] = new Option('23.8', '23.8');
    list3.options[179] = new Option('23.9', '23.9');
    list3.options[180] = new Option('24', '24');
}
$('#thirdList').append(list3);
}     

    

var threaded = {

    '10': {
      '0.25': 0.21,'0.5': 0.34,'0.75': 0.40,'1': 0.46,'1.1': 0.48,'1.2':0.50, '1.3': 0.52, '1.4': 0.54,   
      '1.5': 0.56,  '5.5': 2.60, '1.6': 0.58,  '5.6' :2.63,'1.7': 0.60,  '5.7' :2.66 ,'1.8': 0.63,   '5.8' :2.69, '1.9': 0.65,  '5.9' :2.72 ,'2': 0.67,   '6' :2.75, '2.1': 0.70,   '6.1': 2.77, '2.2': 0.73,   '6.2' :2.79, '2.3':0.76,  '6.3' :2.81, '2.4': 0.79,   '6.4' :2.83, '2.5': 0.83,   '6.5' :2.84,'2.6': 0.87,   '6.6' :2.85, '2.7': 0.91,   '6.7' :2.86, '2.8': 0.96,   '6.8' :2.87, '2.9': 1.03,   '6.9': 2.87, 
      '3': 1.10,  '7': 2.88,'3.1': 1.16, '3.2': 1.23, '3.3' :1.29, '3.4' :1.36, '3.5' :1.42, '3.6' :1.49, '3.7' :1.56, '3.8' :1.62, '3.9' :1.69, '4' :1.76, '4.1' :1.82,'4.2' :1.88, 
      '4.3' :1.94, '4.4' :2.00, '4.5' :2.06, '4.6' :2.12, '4.7' :2.19, '4.8' :2.25, '4.9': 2.31,'5':2.37, '5.1': 2.42,'5.2':2.47,'5.3': 2.52,'5.4': 2.56  
    },
    '15': {
        0.25: 0.23, 0.5:  0.34, 0.75: 0.40, 1: 0.46, 5 :2.70, 
1.1: 0.48, 5.1 :2.77, 1.2: 0.50, 5.2 :2.84, 1.3: 0.52, 5.3: 2.92, 1.4: 0.55, 5.4: 2.99 , 1.5: 0.57, 5.5: 3.06, 
1.6: 0.60, 5.6 :3.13, 1.7: 0.63, 5.7: 3.20, 1.8: 0.66, 5.8: 3.27, 1.9: 0.69,  5.9: 3.34, 2: 0.72, 6: 3.40, 2.1: 0.76, 6.1: 3.47, 2.2: 0.80, 6.2: 3.54, 2.3: 0.85, 6.3: 3.61, 2.4: 0.91 , 6.4: 3.67, 2.5: 0.98, 6.5: 3.72,   
2.6: 1.05, 6.6: 3.76, 2.7: 1.12 , 6.7: 3.79 , 2.8: 1.20 , 6.8: 3.82, 2.9: 1.27,  6.9: 3.85, 3: 1.34 , 7: 3.88, 
3.1: 1.41, 3.2: 1.48,3.3: 1.55, 3.4: 1.62, 3.5: 1.70, 3.6: 1.77, 3.7: 1.84, 3.8: 1.91, 3.9: 1.98,  4: 2.05, 4.1: 2.12,4.2: 2.18, 4.3: 2.24, 4.4: 2.31, 4.5: 2.38,4.6 :2.44, 4.7 :2.51, 4.8 :2.57,4.9: 2.63   
    },
    '20': {
        0.25: 0.35, 0.5: 0.50, 0.75: 0.63, 1: 0.72, 5: 3.65, 1.1: 0.76 , 5.1: 3.78, 1.2: 0.81,   5.2: 3.90, 1.3: 0.85, 5.3: 4.02, 1.4: 0.89, 5.4: 4.15, 
1.5: 0.93, 5.5: 4.27, 1.6: 0.97, 5.6: 4.40, 1.7: 1.01, 5.7: 4.52, 1.8: 1.05, 5.8: 4.65, 1.9: 1.10, 5.9: 4.77, 
2: 1.14, 6: 4.89, 2.1: 1.18, 6.1: 5.02, 2.2: 1.22, 6.2: 5.15, 2.3: 1.26, 6.3: 5.28, 2.4: 1.30, 6.4: 5.36, 2.5: 1.35,  6.5: 5.44, 2.6: 1.40,  6.6: 5.50, 
2.7: 1.45, 6.7: 5.56, 2.8: 1.50, 6.8: 5.61, 2.9: 1.55, 6.9: 5.66, 3: 1.60,  7: 5.71, 
3.1: 1.66, 3.2:1.74, 3.3: 1.82, 3.4: 1.93, 3.5: 2.04, 3.6: 2.15, 3.7: 2.25, 3.8: 2.36, 3.9: 2.47, 4: 2.58, 4.1: 2.69, 4.2: 2.80, 4.3: 2.91, 4.4: 3.01,
4.5: 3.12, 4.6: 3.23, 4.7: 3.34, 4.8: 3.44, 4.9: 3.55
    },
    '25': {
    0.25: 0.57, 0.5: 0.93, 0.75: 1.22, 1: 1.52, 5: 6.72, 1.1: 1.64, 5.1: 6.84, 1.2: 1.76, 5.2: 6.96, 1.3: 1.87, 5.3: 7.08,
1.4: 1.98, 5.4: 7.20, 1.5: 2.08, 5.5: 7.32, 1.6: 2.18, 5.6: 7.44, 1.7: 2.28, 5.7: 7.56, 1.8: 2.38, 5.8: 7.68, 
1.9: 2.48, 5.9: 7.80, 2: 2.58,  6: 7.91, 2.1: 2.67, 6.1: 8.02, 2.2: 2.77, 6.2: 8.12, 2.3: 2.87, 6.3: 8.22,
2.4: 2.98,  6.4: 8.31, 2.5: 3.09, 6.5: 8.41, 2.6: 3.20, 6.6: 8.51, 2.7: 3.31, 6.7: 8.61, 2.8: 3.43, 6.8: 8.71, 
2.9: 3.56,  6.9: 8.80, 3: 3.69,  7: 8.89, 3.1: 3.82, 3.2: 3.96, 3.3: 4.11, 3.4: 4.26, 3.5: 4.42, 
3.6: 4.57, 3.8: 4.87, 3.7: 4.72, 3.9: 5.02, 4: 5.16, 4.1: 5.32, 4.2: 5.47, 4.3: 5.63, 4.4: 5.79, 4.5: 5.95, 4.6: 6.10, 4.7: 6.26, 4.8: 6.42, 4.9: 6.57   
    },
    '32': {
0.25: 0.57, 0.5: 1.03, 0.75: 1.53, 1: 2.06, 5: 9.69, 9: 18.18, 1.1: 2.20, 5.1: 9.90, 9.1: 18.35, 
1.2:2.35, 5.2: 10.10,  9.2: 18.50, 1.3: 2.52, 5.3: 10.30, 9.3: 18.65, 1.4: 2.70, 5.4: 10.50, 9.4: 18.80,
1.5: 2.90, 5.5: 10.70, 9.5: 18.93, 1.6: 3.10, 5.6: 10.90, 9.6: 19.05, 1.7: 3.32, 5.7: 11.10, 9.7: 19.15,
1.8: 3.55, 5.8: 11.30, 9.8: 19.25, 1.9: 3.78, 5.9: 11.50, 9.9: 19.35, 2: 4.02, 6: 11.70, 10: 19.45,
2: 4.25, 6.1: 11.90, 2.2: 4.48, 6.2: 12.12, 2.3: 4.68, 6.3: 12.35, 2.4: 4.88, 6.4: 12.57, 2.5: 5.08, 6.5: 12.80,
2.6: 5.25, 6.6: 13.00, 2.7: 5.45, 6.7: 13.22, 2.8: 5.65, 6.8: 13.45, 2.9: 5.83, 6.9: 13.68, 3: 6.00, 7: 13.91,
3.1: 6.17, 7.1: 14.13, 3.2: 6.35, 7.2: 14.35, 3.3: 6.52, 7.3: 14.57, 3.4: 6.70, 7.4: 14.80, 3.5: 6.85, 7.5: 15.02,
3.6: 7.00, 7.6: 15.24, 3.7: 7.16, 7.7: 15.46, 3.8: 7.33, 7.8: 15.68, 3.9: 7.49, 7.9: 15.90, 4: 7.64, 8: 16.11,
4.1: 7.85, 8.1: 16.33, 4.2: 8.05, 8.2: 16.55, 4.3: 8.25, 8.3: 16.77, 4.4: 8.45, 8.4: 16.98, 4.5: 8.65, 8.5: 17.17,
4.6: 8.85, 8.6: 17.36, 4.7: 9.05, 8.7: 17.57, 4.8: 9.25, 8.8: 17.78, 4.9: 9.47, 8.9: 17.98 
    },
    '40': {
0.25:  1.20, 0.5:  2.66, 0.75: 3.54, 1: 4.13, 5: 15.26, 9: 26.09, 1.1: 4.46, 5.1: 15.65, 9.1: 26.24, 
1.2: 4.78, 5.2: 16.10, 9.2: 26.38, 1.3:  5.10, 5.3: 16.55, 9.3: 26.52, 1.4:  5.42, 5.4: 16.95, 9.4: 26.66,
1.5: 5.74, 5.5: 17.35, 9.5: 26.80, 1.6:  6.06, 5.6: 17.80, 9.6: 26.94, 1.7:  6.38, 5.7: 18.20, 9.7: 27.08, 
1.8: 6.70, 5.8: 18.65, 9.8: 27.22, 
1.9: 7.02, 5.9: 19.05,9.9: 27.37, 2:  7.34, 6: 19.45, 10: 27.51, 2.1:  7.62, 6.1: 19.75, 
2.2: 7.89, 6.2: 20.05, 2.3:  8.16, 6.3: 20.35, 2.4:  8.43, 6.4: 20.65, 2.5:  8.70, 6.5: 20.95, 2.6:  8.97, 
6.6: 21.25, 
2.7:  9.24, 6.7: 21.55, 2.8:  9.51,  6.8: 21.85, 2.9:  9.77, 6.9: 22.15, 3: 10.02,  7: 22.45, 3.1: 10.25, 7.1: 22.70, 3.2: 10.50, 7.2: 22.95,
3.3: 10.73, 7.3: 23.15, 3.4: 10.97,  7.4: 23.35, 3.5: 11.20,  7.5: 23.62, 3.6: 11.43,  7.6: 23.87,
3.7: 11.66, 7.7: 24.10, 3.8: 11.90,  7.8: 24.35, 3.9: 12.13, 7.9: 24.58,
4: 12.36, 8: 24.82, 4.1: 12.65, 8.1: 24.95, 4.2: 12.95, 8.2: 25.07,4.3: 13.25, 8.3: 25.20,
4.4: 13.52, 8.4: 25.32, 4.5: 13.80, 8.5: 25.45, 4.6: 14.10, 8.6: 25.57, 4.7: 14.40, 8.7: 25.70, 
4.8: 14.70, 8.8: 25.83, 4.9: 14.98, 8.9: 25.96  
    },
    '50':{
0.5: 2.69,
0.75: 4.17,  
1: 5.06, 5: 22.93,  9: 36.68, 
1.1: 5.50, 5.1: 23.25,  9.1: 37.00, 
1.2: 5.95, 5.2: 23.57,  9.2: 37.25, 
1.3: 6.35, 5.3: 23.90,  9.3: 37.50, 
1.4: 6.75, 5.4: 24.20,  9.4: 37.75, 
1.5: 7.15, 5.5: 24.50,  9.5: 37.95, 
1.6: 7.55, 5.6: 24.80,  9.6: 38.15, 
1.7: 7.95, 5.7: 25.15,  9.7: 38.35, 
1.8: 8.40, 5.8: 25.45,  9.8: 38.50, 
1.9: 8.80, 5.9: 25.80,  9.9: 38.65, 
2:  9.17,  6: 26.09, 10: 38.78,
2.1:  9.65, 6.1: 26.45,
2.2: 10.15, 2.3: 10.65,   
2.4: 11.15, 6.4: 27.45, 
2.5: 11.65, 6.5: 27.75, 
2.6: 12.15, 6.6: 28.05,
2.7: 12.65, 6.7: 28.40, 
2.8: 13.20, 6.8: 28.75, 
2.9: 13.70, 6.9: 29.10, 
3: 14.23,   7: 29.41,
3.1: 14.65, 7.1: 29.75, 
3.2: 15.10, 7.2: 30.10, 
3.3: 15.50, 7.3: 30.40, 
3.4: 15.95, 7.4: 30.75, 
3.5: 16.35, 7.5: 31.10, 
3.6: 16.80, 7.6: 31.45, 
3.7: 17.25, 7.7: 31.80, 
3.8: 17.65, 7.8: 32.10, 
3.9: 18.10, 7.9: 32.45, 
4: 18.50,   8: 32.73, 
4.1: 19.00, 8.1: 33.15, 
4.2: 19.45, 8.2: 33.55, 
4.3: 19.85, 8.3: 33.90, 
4.4: 20.30, 8.4: 34.30, 
4.5: 20.70, 8.5: 34.70, 
4.6: 21.15, 8.6: 35.10, 
4.7: 21.60, 8.7: 35.50, 
4.8: 22.05, 8.8: 35.90,  
4.9: 22.50, 8.9: 36.30 
    },
    '65': {
1: 7.00, 5: 22.00, 9: 35.00,
1.1: 7.30, 5.1: 22.40,  9.1: 35.50, 
1.2: 7.60, 5.2: 22.80,  9.2: 36.00, 
1.3: 7.90, 5.3: 23.20,  9.3: 36.50, 
1.4: 8.20, 5.4: 23.60,  9.4: 37.00, 
1.5: 8.50, 5.5: 24.00,  9.5: 37.50, 
1.6: 8.8,  5.6: 24.40,  9.6: 38.00, 
1.7: 9.10, 5.7: 24.80,  9.7: 38.50, 
1.8: 9.4, 5.8: 25.20,    9.8: 39.00,
1.9: 9.70,  5.9: 25.60,  9.9: 39.50, 
2: 10.00,   6: 26.00, 10: 40.00, 
2.1: 10.40, 6.1: 26.30, 10.1: 40.50, 
2.2: 10.80, 6.2: 26.60, 10.2: 41.00, 
2.3: 11.20, 6.3: 26.90, 10.3: 41.50, 
2.4: 11.60, 6.4: 27.20, 10.4: 42.00, 
2.5: 12.00, 6.5: 27.50, 10.5: 42.50, 
2.6: 12.40, 6.6: 27.70, 10.6: 43.00, 
2.7: 12.80, 6.7: 27.90, 10.7: 43.50, 
2.8: 13.20, 6.8: 28.10, 10.8: 44.00,
2.9: 13.60, 6.9: 28.30,  10.9: 44.50, 
3: 14.00,   7: 28.50,  11: 45.00, 
3.1: 14.30, 7.1: 28.50,  11.1: 45.50, 
3.2: 14.60, 7.2: 29.10,  11.2: 46.00, 
3.3: 14.90, 7.3: 29.40,  11.3: 46.50, 
3.4: 15.20, 7.4: 29.70,  11.4: 47.00, 
3.5: 15.50, 7.5: 30.00,  11.5: 47.50, 
3.6: 15.80, 7.6: 30.40,  11.6: 48.00, 
3.7: 16.10, 7.7: 30.80,  11.7: 48.50, 
3.8: 16.40, 7.8: 31.20,  11.8: 49.00, 
3.9: 16.70, 7.9: 31.60,  11.9: 49.50, 
4: 17.00,   8: 32.00,    12: 50.00, 
4.1: 17.50, 8.1: 32.30, 
4.2: 18.00, 8.2: 32.60, 
4.3: 18.50, 8.3: 32.90, 
4.4: 19.00, 8.4: 33.20, 
4.5: 19.50, 8.5: 33.50, 
4.6: 20.00, 8.6: 33.80, 
4.7: 20.50, 8.7: 34.10, 
4.7: 21.00, 8.8: 34.40, 
4.9: 21.50, 8.9: 34.70 
    }
  };
var flange = {
    '20': {
1.0: 0.42, 5.0: 3.09, 
1.1: 0.48, 5.1: 3.19, 
1.2: 0.52, 5.2: 3.30, 
1.3: 0.55, 5.3: 3.41, 
1.4: 0.59, 5.4: 3.52, 
1.5: 0.63, 5.5: 3.63, 
1.6: 0.67, 5.6: 3.74, 
1.7: 0.70, 5.7: 3.84, 
1.8: 0.75, 5.8: 3.95, 
1.9: 0.79, 5.9: 4.06, 
2.0: 0.83, 6.0: 4.17, 
2.1: 0.87, 6.1: 4.27, 
2.2: 0.91, 6.2: 4.35, 
2.3: 0.95, 6.3: 4.43, 
2.4: 0.99, 6.4: 4.50, 
2.5: 1.04, 6.5: 4.56, 
2.6: 1.08, 6.6: 4.61,2.7: 1.12, 6.7: 4.66, 2.8: 1.16, 6.8: 4.70, 2.9: 1.20, 6.9: 4.74, 3.0: 1.25, 7.0: 4.77, 
3.1: 1.30, 3.2: 1.35, 3.3: 1.41, 3.4: 1.47, 3.5: 1.54, 3.6: 1.61, 3.7: 1.70, 3.8: 1.79, 3.9: 1.89, 4.0: 2.00,
4.1: 2.11, 4.2: 2.22, 4.3: 2.33, 4.4: 2.43, 4.5: 2.54, 4.6: 2.65, 4.7: 2.76, 4.8: 2.67, 4.9: 2.98 
    },
    '25': {
1.0: 1.33, 5.0: 6.64, 
1.1: 1.43, 5.1: 6.85, 
1.2: 1.53, 5.2: 7.03, 
1.3: 1.63, 5.3: 7.18, 
1.4: 1.73, 5.4: 7.32, 
1.5: 1.83, 5.5: 7.44, 
1.6: 1.94, 5.6: 7.55, 
1.7: 2.04, 5.7: 7.65, 
1.8: 2.14, 5.8: 7.74, 
1.9: 2.24, 5.9: 7.82, 
2.0: 2.34, 6.0: 7.90, 
2.1: 2.44, 6.1: 7.97, 
2.2: 2.53, 6.2: 8.03, 
2.3: 2.63, 6.3: 8.09,
2.4: 2.73, 6.4: 8.15, 
2.5: 2.83, 6.5: 8.20, 
2.6: 2.93, 6.6: 8.24, 
2.7: 3.03, 6.7: 8.28, 
2.8: 3.12, 6.8: 8.32, 
2.9: 3.22, 6.9: 8.35, 
3.0: 3.32, 7.0: 8.38, 
3.1: 3.45, 3.2: 3.58, 
3.3: 3.70, 3.4: 3.84, 
3.5: 3.98, 3.6: 4.13, 
3.7: 4.27, 3.8: 4.42, 
3.9: 4.58, 4.0: 4.74, 
4.1: 4.90, 4.2: 5.07, 
4.3: 5.24, 4.4: 5.42, 
4.5: 5.60, 4.6: 5.80,
4.7: 6.00, 4.8: 6.20, 
4.9: 6.42 
    },
    '32': {
1.0: 1.73, 6.0: 11.70, 1.1: 1.92, 6.1: 11.96, 1.2: 2.11, 6.2: 12.20, 1.3: 2.30, 6.3: 12.41, 1.4: 2.49, 6.4: 12.62, 1.5: 2.68, 6.5: 12.81, 1.6: 2.87, 6.6: 13.00, 1.7: 3.06, 6.7: 13.17, 1.8: 3.25, 6.8: 13.33, 1.9: 3.44, 6.9: 13.49,
2.0: 3.63, 7.0: 13.65, 2.1: 3.82, 7.1: 13.78, 2.2: 4.01, 7.2: 13.92, 2.3: 4.20, 7.3: 14.06, 2.4: 4.39, 7.4: 14.18, 2.5: 4.58, 7.5: 14.30, 2.6: 4.77, 7.6: 14.42, 2.7: 4.96, 7.7: 14.54, 2.8: 5.15, 7.8: 14.65, 2.9: 5.34, 7.9: 14.76, 
3.0: 5.53, 8.0: 14.86, 3.1: 5.73, 8.1: 14.97, 3.2: 5.92, 8.2: 15.10, 3.3: 6.12, 8.3: 15.20, 3.4: 6.31, 8.4: 15.31, 3.5: 6.51, 8.5: 15.42, 3.6: 6.71, 8.6: 15.53, 3.7: 6.90, 8.7: 15.64, 3.8: 7.10, 8.8: 15.75, 3.9: 7.30, 8.9: 15.86, 
4.0: 7.46, 9.0: 15.97, 4.1: 7.69, 9.1: 16.08, 4.2: 7.88, 9.2: 16.20, 4.3: 8.08, 9.3: 16.30, 4.4: 8.27, 9.4: 16.41, 4.5: 8.47, 9.5: 16.53, 4.6: 8.6 , 9.6: 16.64, 4.7: 8.86, 9.7: 16.75, 4.8: 9.06, 9.8: 16.86, 4.9: 9.25, 9.9: 16.97,
5.0: 9.45, 10.0: 17.08, 5.1: 9.68, 5.2: 9.92, 5.3: 10.15, 5.4: 10.35, 5.5: 10.60, 5.6: 10.83, 5.7: 11.05, 5.8: 11.27, 5.9: 11.48 
    },
    '40': {
1.0: 3.27, 6.0: 19.13, 1.1: 3.58, 6.1: 19.53, 1.2: 3.85,  6.2: 19.90, 1.3: 4.18, 6.3: 20.25, 1.4: 4.48, 6.4: 20.59, 1.5: 4.77, 6.5: 20.90, 1.6: 5.06, 6.6: 21.21, 1.7: 5.35, 6.7: 21.50, 1.8: 5.64, 6.8: 21.74, 1.9: 5.92, 6.9: 22.04,
2.0: 6.20, 7.0: 22.30, 2.1: 6.43, 7.1: 22.55, 2.2: 6.67,  7.2: 22.79, 2.3: 6.90, 7.3: 23.03, 2.4: 7.15, 7.4: 23.26, 2.5: 7.39, 7.5: 23.47, 2.6: 7.64, 7.6: 23.70, 2.7: 7.89, 7.7: 23.91, 2.8: 8.14, 7.8: 24.11, 2.9: 8.39, 7.9: 24.31, 
3.0: 8.69, 8.0: 24.51, 3.1: 8.91, 8.1: 24.64, 3.2: 9.17,  8.2: 24.78, 3.3: 9.43, 8.3: 24.90, 3.4: 9.69, 8.4: 25.03, 3.5: 9.97, 8.5: 25.16, 3.6: 10.25, 8.6: 25.29, 3.7: 10.52, 8.7: 25.41, 3.8: 10.80, 8.8: 25.53, 3.9: 11.09, 8.9: 25.65, 
4.0: 11.38, 9.0: 25.77, 4.1: 11.67, 9.1: 25.89, 4.2: 11.97,  9.2: 26.00, 4.3: 12.27, 9.3: 26.12, 4.4: 12.58, 9.4: 26.23, 4.5: 12.89, 9.5: 26.34, 4.6: 13.20, 9.6: 26.45, 4.7: 13.52, 9.7: 26.56, 4.8: 13.84, 9.8: 26.67, 4.9: 14.17, 9.9: 26.77,
5.0: 14.51, 10.0: 26.88, 5.1: 14.91, 5.2: 15.32, 5.3: 15.75, 5.4: 16.14, 5.5: 16.62, 5.6: 17.10, 5.7: 17.58, 5.8: 18.07, 5.9: 18.59
    },
    '50': {
1.0: 5.76, 6.0: 26.88, 1.1: 6.10, 6.1: 27.18, 1.2: 6.41, 6.2: 27.48, 1.3: 6.70, 6.3: 27.75, 1.4: 6.96, 6.4: 28.06, 1.5: 7.24, 6.5: 28.31, 1.6: 7.66, 6.6: 28.61, 1.7: 8.20, 6.7: 28.88, 1.8: 8.66, 6.8: 29.15, 1.9: 9.10, 6.9: 29.41, 
2.0: 9.55, 7.0: 29.68, 2.1: 9.96, 7.1: 29.91, 2.2: 10.36, 7.2: 30.15, 2.3: 10.78, 7.3: 30.40, 2.4: 11.18, 7.4: 30.64, 2.5: 11.57, 7.5: 30.88, 2.6: 11.95, 7.6: 31.11, 2.7: 12.33, 7.7: 31.33, 2.8: 12.69, 7.8: 31.57, 2.9: 13.06, 7.9: 31.79, 
3.0: 13.41, 8.0: 32.00, 3.1: 13.87, 8.1: 32.22, 3.2: 14.32, 8.2: 32.44, 3.3: 14.78, 8.3: 32.65, 3.4: 15.25, 8.4: 32.86, 3.5: 15.56, 8.5: 33.06, 3.6: 16.20, 8.6: 33.27, 3.7: 16.67, 8.7: 33.47, 3.8: 17.14, 8.8: 33.67, 3.9: 17.60, 8.9: 33.87,
4.0: 18.34, 9.0: 34.06, 4.1: 18.52, 9.1: 34.25, 4.2: 19.01, 9.2: 34.44, 4.3: 19.48, 9.3: 34.69, 4.4: 19.95, 9.4: 34.82, 4.5: 20.55, 9.5: 35.00, 4.6: 20.89, 9.6: 35.20, 4.7: 21.36, 9.7: 35.40, 4.8: 21.83, 9.8: 35.60, 4.9: 22.30, 9.9: 35.80, 
5.0: 22.70, 10.0: 36.00, 5.1: 23.12, 5.2: 23.54, 5.3: 23.95, 5.4: 24.37, 5.5: 24.80, 5.6: 25.21, 5.7: 25.63, 5.8: 26.04, 5.9: 26.46
    },
    '65': {
1.0: 3.60, 5.0: 61.00, 1.1: 4.12, 5.1: 63.21, 1.2: 4.49, 5.2: 64.93, 1.3: 4.86, 5.3: 66.63, 1.4: 5.23, 
5.4: 68.32, 1.5: 5.60, 5.5: 70.00, 1.6: 6.43, 5.6: 71.69, 1.7: 7.29, 5.7: 73.33, 1.8: 8.17, 5.8: 74.93, 
1.9: 9.07, 5.9: 76.48, 2.0: 10.00, 6.0: 78.00, 2.1: 10.95, 6.1: 79.48, 2.2: 11.91, 6.2: 80.91, 2.3: 12.92, 
6.3: 82.31, 2.4: 13.94, 6.4: 83.67, 2.5: 15.00, 6.5: 85.00, 2.6: 16.66, 6.6: 86.12, 2.7: 18.38, 6.7: 87.20, 
2.8: 20.14, 6.8: 88.23, 2.9: 21.95, 6.9: 89.23, 3.0: 24.00, 7.0: 90.00, 3.1: 25.73, 7.1: 91.13, 3.2: 27.70, 
7.2: 92.02, 3.3: 29.74, 7.3: 92.89, 3.4: 31.84, 7.4: 93.71, 3.5: 34.00, 7.5: 94.50, 3.6: 35.93, 7.6: 95.27,  
3.7: 37.84, 7.7: 96.00, 3.8: 39.74, 7.8: 96.70, 3.9: 41.63, 7.9: 97.36, 4.0: 43.50, 8.0: 98.00, 4.1: 45.36, 
4.2: 47.20, 4.3: 49.03, 4.4: 50.85, 4.5: 52.00, 4.6: 54.45, 4.7: 56.23, 4.8: 58.00, 4.9: 59.74
    },
    '80': {
1.0: 4.40, 5.0: 64.60, 1.1: 4.74, 5.1: 66.98, 1.2: 5.17, 5.2: 69.32, 1.3: 5.67, 5.3: 71.63,
1.4: 6.28, 5.4: 73.90, 1.5: 7.00, 5.5: 75.45, 1.6: 7.89, 5.6: 78.37, 1.7: 8.82, 5.7: 80.56, 
1.8: 9.78, 5.8: 82.72, 1.9: 10.79, 5.9: 84.85, 2.0: 11.85, 6.0: 87.00, 2.1: 12.95, 6.1: 89.04, 2.2: 14.11, 
6.2: 91.00, 2.3: 15.33, 6.3: 93.13, 2.4: 16.61, 6.4: 95.14, 2.5: 18.65, 6.5: 97.55, 2.6: 19.39, 6.6: 99.10, 
2.7: 20.90, 6.7: 101.04, 2.8: 22.51, 6.8: 102.96, 2.9: 24.24, 6.9: 104.87, 3.0: 26.10, 7.0: 106.75, 3.1: 27.85,
7.1: 108.39, 3.2: 29.61, 7.2: 110.00, 3.3: 31.39, 7.3: 111.60, 3.4: 33.19, 7.4: 113.00, 3.5: 35.00, 7.5: 114.50,
3.6: 36.83, 7.6: 116.13, 3.7: 38.68, 7.7: 117.78, 3.8: 40.55, 7.8: 119.27, 3.9: 42.43, 7.9: 120.74,
4.0: 44.75, 8.0: 122.20, 4.1: 46.27, 4.2: 48.21, 4.3: 50.19, 4.4: 52.18, 4.5: 55.20, 4.6: 56.22, 4.7: 58.28, 
4.8: 60.36, 4.9: 62.47 
    },
    '100': {
1.0: 8.55, 5.0: 112.00, 1.1: 9.58, 5.1: 117.46, 1.2: 10.61, 5.2: 121.17, 1.3: 11.64, 5.3: 124.79, 1.4: 12.67, 
5.4: 127.52, 1.5: 14.00, 5.5: 132.00, 1.6: 14.73, 5.6: 135.16, 1.7: 15.76, 5.7: 138.47, 1.8: 16.79, 5.8: 141.71, 
1.9: 17.82, 5.9: 144.89, 2.0: 18.50, 6.0: 148.00, 2.1: 19.88, 6.1: 151.94, 2.2: 20.91, 6.2: 155.63, 2.3: 21.94, 
6.3: 159.10, 2.4: 22.97, 6.4: 162.38, 2.5: 24.00, 6.5: 164.03, 2.6: 26.00, 6.6: 168.44, 2.7: 28.13, 6.7: 171.26,
2.8: 30.40, 6.8: 173.95, 2.9: 32.81, 6.9: 176.53, 3.0: 35.40, 7.0: 179.01, 3.1: 38.18, 7.1: 181.37, 3.2: 41.17, 
7.2: 183.65, 3.3: 44.44, 7.3: 185.85, 3.4: 48.02, 7.4: 187.96, 3.5: 52.00, 7.5: 190.04, 3.6: 55.93, 7.6: 192.37, 
3.7: 59.89, 7.7: 194.66, 3.8: 63.89, 7.8: 196.85, 3.9: 67.92, 7.9: 198.96, 4.0: 72.00, 8.0: 201.00, 4.1: 76.11, 
4.2: 80.27, 4.3: 84.47, 4.4: 88.71, 4.5: 93.00, 4.6: 97.37, 4.7: 101.62, 4.8: 105.74, 4.9: 109.75
    },
    '125': {
1.0: 12.45, 5.0: 128.25, 1.1: 13.84, 5.1: 133.77, 1.2: 15.23, 5.2: 139.54, 1.3: 16.62, 5.3: 145.60, 1.4: 18.01,
5.4: 151.96, 1.5: 19.40, 5.5: 158.70, 1.6: 20.94, 5.6: 164.10, 1.7: 22.47, 5.7: 169.60, 1.8: 24.01, 5.8: 175.21,
1.9: 25.54, 5.9: 180.94, 2.0: 26.60, 6.0: 185.30, 2.1: 28.61, 6.1: 192.75, 2.2: 30.15, 6.2: 198.85, 2.3: 31.36, 
6.3: 205.10,2.4: 33.22, 6.4: 211.50, 2.5: 34.75, 6.5: 218.05, 2.6: 37.18, 6.6: 223.37, 2.7: 39.69, 6.7: 228.64, 
2.8: 42.29, 6.8: 233.89, 2.9: 44.97, 6.9: 239.03, 3.0: 47.75, 7.0: 244.15, 3.1: 50.63, 7.1: 249.23, 3.2: 53.62, 
7.2: 254.26, 3.3: 56.73, 7.3: 259.25, 3.4: 60.00, 7.4: 264.19, 3.5: 63.35, 7.5: 268.15, 3.6: 66.62, 7.6: 273.95,
3.7: 70.00, 7.7: 278.77, 3.8: 73.53, 7.8: 283.55, 3.9: 77.21, 7.9: 287.96, 4.0: 81.05, 8.0: 293.00, 4.1: 85.05, 
4.2: 89.30, 4.3: 93.77, 4.4: 98.50, 4.5: 103.55, 4.6: 108.16, 4.7: 112.92, 4.8: 117.84, 4.9: 122.95
    },
    '150': {
1.0: 15.22, 5.0: 238.91, 1.1: 17.22, 5.1: 244.72, 1.2: 19.23, 5.2: 251.20, 1.3: 21.23, 5.3: 257.60, 1.4: 23.24, 
5.4: 263.90, 1.5: 25.26, 5.5: 272.40, 1.6: 27.24, 5.6: 276.24, 1.7: 29.50, 5.7: 282.30, 1.8: 31.25, 5.8: 288.27,
1.9: 33.26, 5.9: 294.17, 2.0: 35.26, 6.0: 300.40, 2.1: 37.13, 6.1: 305.76, 2.2: 39.41, 6.2: 311.45, 2.3: 42.30, 
6.3: 317.08, 2.4: 46.25, 6.4: 322.07, 2.5: 53.92, 6.5: 326.70, 2.6: 81.00, 6.6: 333.58, 2.7: 68.55, 6.7: 338.34, 
2.8: 76.64, 6.8: 344.29, 2.9: 85.40, 6.9: 349.56, 3.0: 95.02, 7.0: 355.60, 3.1: 105.51, 7.1: 360.00, 3.2: 114.45, 
7.2: 365.06, 3.3: 122.36, 7.3: 370.13, 3.4: 129.52, 7.4: 375.15, 3.5: 135.45, 7.5: 382.00, 3.6: 142.21, 7.6: 385.04, 3.7: 147.41, 7.7: 389.33, 3.8: 153.33, 7.8: 394.20, 3.9: 160.00, 7.9: 399.54, 4.0: 167.12, 8.0: 404.30, 4.1: 174.48, 4.2: 181.76, 4.3: 189.05, 4.4: 196.34, 4.5: 203.65, 4.6: 210.78, 4.7: 217.79, 4.8: 224.14, 4.9: 231.46
    },
    '200': {
2.0: 45.9, 7.0: 509.5, 2.1: 51.6, 7.1: 519.4, 2.2: 54.2, 7.2: 529.3, 2.3: 55.8, 7.3: 539.2, 2.4: 59.4, 7.4: 549.1, 
2.5: 62.0, 7.5: 559.0, 2.6: 66.4, 7.6: 571.0, 2.7: 70.8, 7.7: 582.5, 2.8: 75.2, 7.8: 594.2, 2.9: 79.8, 7.9: 606.0, 
3.0: 84.0, 8.0: 618.0, 3.1: 90.0, 8.1: 626.8, 3.2: 96.0, 8.2: 634.8, 3.3: 102.0, 8.3: 643.2, 3.4: 108.0, 8.4: 651.6,
3.5: 114.0, 8.5: 660.0, 3.6: 121.0, 8.6: 672.8, 3.7: 128.6, 8.7: 665.2, 3.8: 136.2, 8.8: 693.7, 3.9: 143.6, 
8.9: 711.6, 4.0: 151.0, 9.0: 724.5, 4.1: 162.0, 9.1: 731.4, 4.2: 173.0, 9.2: 738.2, 4.3: 184.0, 9.3: 744.9, 
4.4: 195.0, 9.4: 751.7, 4.5: 206.0, 9.5: 758.5, 4.6: 216.8, 9.6: 760.6, 4.7: 227.6, 9.7: 762.7, 4.8: 238.4, 
9.8: 764.8, 4.9: 249.2, 9.9: 766.9, 5.0: 260.3, 10.0: 769.0, 5.1: 271.9, 10.1: 771.2, 5.2: 283.8, 10.2: 773.4, 
5.3: 295.6, 10.3: 775.6, 5.4: 307.5, 10.4: 778.0, 5.5: 320.0, 10.5: 780.0, 5.6: 332.0, 10.6: 782.0, 5.7: 344.8, 
10.7: 784.0, 5.8: 357.6, 10.8: 786.0, 5.9: 370.3, 10.9: 788.0, 6.0: 383.0, 11.0: 790.0, 6.1: 396.0, 11.1: 792.2, 
6.2: 409.0, 11.2: 794.6, 6.3: 422.0, 11.3: 796.8, 6.4: 435.0, 11.4: 799.1, 6.5: 447.8, 11.5: 801.4, 6.6: 460.0, 
11.6: 804.0, 6.7: 472.6, 11.7: 806.6, 6.8: 484.8, 11.8: 809.2, 6.9: 497.2, 11.9: 812.0, 12.0: 814.5        
    },
    '250': {
2.0: 70.0, 7.0: 682.0, 
2.1: 72.5, 7.1: 698.0, 
2.2: 75.5, 7.2: 714.0, 
2.3: 79.0, 7.3: 729.0, 
2.4: 82.0, 7.4: 745.0, 
2.5: 85.0, 7.5: 760.0, 
2.6: 89.5, 7.6: 778.0, 
2.7: 94.0, 7.7: 795.0, 
2.8: 99.0, 7.8: 811.0, 
2.9: 104.5, 7.9: 826.0,
3.0: 110.0, 8.0: 840.0,
3.1: 117.0, 8.1: 850.0, 
3.2: 123.5, 8.2: 860.0,
3.3: 130.5, 8.3: 870.0, 
3.4: 139.0, 8.5: 890.0, 
3.6: 155.0, 8.6: 899.0,
3.7: 164.0, 8.7: 907.0, 
3.8: 174.0, 8.8: 916.0, 
3.9: 184.0, 8.9: 925.0, 
4.0: 195.0, 9.0: 933.0, 
4.1: 208.0, 9.1: 942.0,
4.2: 221.0, 9.2: 952.0, 
4.3: 236.0, 9.3: 961.0, 
4.4: 252.0, 9.4: 970.0, 
4.5: 270.0, 9.5: 980.0, 
4.6: 287.0, 9.6: 989.0, 
4.7: 304.0, 9.7: 998.0, 
4.8: 321.0, 9.8: 1008.0, 
4.9: 338.0, 9.9: 1018.0, 
5.0: 356.0, 10.0: 1028.0, 
5.1: 373.0, 10.1: 1038.0, 
5.2: 390.0, 10.2: 1048.0, 
5.3: 407.0, 10.3: 1059.0, 
5.4: 423.0, 10.4: 1071.0, 
5.5: 440.0, 10.5: 1080.0, 
5.6: 457.0, 10.6: 1088.0, 
5.7: 473.0, 10.7: 1096.0, 
5.8: 490.0, 10.8: 1104.0, 
5.9: 506.0, 10.9: 1112.0, 
6.0: 522.0, 11.0: 1120.0, 
6.1: 539.0, 11.1: 1128.0, 
6.2: 555.0, 11.2: 1136.0, 
6.3: 571.0, 11.3: 1144.0, 
6.4: 587.0, 11.4: 1152.0, 
6.5: 607.0, 11.5: 1160.0, 
6.6: 619.0, 11.6: 1168.0, 
6.7: 635.0, 11.7: 1176.0, 
6.8: 651.0, 11.8: 1184.0, 
6.9: 666.0, 11.9: 1192.0, 
12.0: 1200.0 
    },
    '300': {
2.0: 200.0, 7.0: 990.0, 
2.1: 210.0,  7.1: 1005.0, 
2.2: 220.0,  7.2: 1020.0, 
2.3: 230.0,  7.3: 1036.0, 
2.4: 240.0,  7.4: 1053.0, 
2.5: 250.0,  7.5: 1070.0, 
2.6: 261.0,  7.6: 1084.0, 
2.7: 273.0,  7.7: 1098.0, 
2.8: 285.0,  7.8: 1112.0, 
2.9: 297.0,  7.9: 1126.0, 
3.0: 310.0,  8.0: 1140.0, 
3.1: 323.0,  8.1: 1154.0, 
3.2: 336.0,  8.2: 1168.0, 
3.3: 350.0,  8.3: 1182.0, 
3.4: 365.0,  8.4: 1196.0, 
3.5: 380.0,  8.5: 1210.0, 
3.6: 401.0,  8.6: 1228.0, 
3.7: 421.0,  8.7: 1245.0, 
3.8: 441.0,  8.8: 1261.0, 
3.9: 461.0,  8.9: 1276.0, 
4.0: 480.0,  9.0: 1290.0, 
4.1: 499.0,  9.1: 1303.0, 
4.2: 517.0,  9.2: 1316.0, 
4.3: 535.0,  9.3: 1328.0, 
4.4: 553.0,  9.4: 1339.0, 
4.5: 570.0,  9.5: 1350.0, 
4.6: 588.0,  9.6: 1365.0, 
4.7: 606.0,  9.7: 1379.0, 
4.8: 624.0,  9.8: 1393.0, 
4.9: 642.0,  9.9: 1407.0, 
5.0: 660.0,  10.0: 1420.0, 
5.1: 678.0,  10.1: 1433.0, 
5.2: 696.0,  10.2: 1446.0, 
5.3: 714.0,  10.3: 1457.0, 
5.4: 732.0,  10.4:1468.0, 
5.5: 750.0,  10.5: 1480.0, 
5.6: 771.0,  10.6: 1490.0,
5.7: 791.0,  10.7: 1500.0, 
5.8: 810.0,  10.8: 1510.0, 
5.9: 828.0,  10.9: 1520.0, 
6.0: 845.0,  11.0: 1530.0, 
6.1: 861.0,  11.1: 1539.0, 
6.2: 877.0,  11.2: 1547.0, 
6.3: 892.0,  11.3: 1555.0, 
6.4: 906.0,  11.4: 1563.0, 
6.5: 920.0,  11.5: 1570.0, 
6.6: 933.0,  11.6: 1577.0, 
6.7: 947.0,  11.7: 1583.0, 
6.8: 961.0,  11.8: 1589.0, 
6.9: 975.0,  11.9: 1595.0, 
12.0: 1600.0 
    },
    '350': {
3.0: 290, 11.0: 1560, 3.1: 299, 11.1: 1571, 3.2: 308, 11.2: 1582, 3.3: 318, 11.3: 1593, 3.4: 328, 11.4: 1604, 
3.5: 340, 11.5: 1615, 3.6: 350, 11.6: 1626, 3.7: 361, 11.7: 1637, 3.8: 374, 11.8: 1648, 3.9: 387, 11.9: 1659, 
4.0: 400, 12.0: 1670, 4.1: 414, 12.1: 1682, 4.2: 429, 12.2: 1694, 4.3: 445, 12.3: 1706, 4.4: 462, 12.4: 1718, 
4.5: 480, 12.5: 1730, 4.6: 499, 12.6: 1742, 4.7: 518, 12.7: 1754, 4.8: 537, 12.8: 1766, 4.9: 556, 12.9: 1778,
5.0: 575, 13.0: 1790, 5.1: 588, 13.1: 1802, 5.2: 615, 13.2: 1814, 5.3: 635, 13.3: 1826, 5.4: 655, 13.4: 1838,  
5.5: 675, 13.5: 1850, 5.6: 696, 13.6: 1862, 5.7: 716, 13.7: 1874, 5.8: 737, 13.8: 1886, 5.9: 758, 13.9: 1898, 
6.0: 800, 14.0: 1910, 6.1: 818, 14.1: 1920, 6.2: 836, 14.2: 1930, 6.3: 854, 14.3: 1940, 6.4: 872, 14.4: 1950, 
6.5: 890, 14.5: 1960, 6.6: 912, 14.6: 1970, 6.7: 934, 14.7: 1980, 6.8: 956, 14.8: 1990, 6.9: 978, 14.9: 2000, 
7.0: 1000, 15.0: 2010, 7.1: 1018, 15.1: 2019, 7.2: 1036, 15.2: 2028, 7.3: 1054, 15.3: 2037, 7.4: 1072, 15.4: 2046, 
7.5: 1090, 15.5: 2055, 7.6: 1108, 15.6: 2064, 7.7: 1126, 15.7: 2073, 7.8: 1144, 15.8: 2082, 7.9: 1162, 15.9: 2091,
8.0: 1180, 16.0: 2100, 8.1: 1192, 16.1: 2108, 8.2: 1204, 16.2: 2116, 8.3: 1216, 16.3: 2124, 8.4: 1228, 16.4: 2132, 
8.5: 1240, 16.5: 2140, 8.6: 1252, 16.6: 2148, 8.7: 1264, 16.7: 2156, 8.8: 1276, 16.8: 2164, 8.9: 1288, 16.9: 2172, 
9.0: 1300, 17.0: 2180, 9.1: 1312, 17.1: 2187, 9.2: 1324, 17.2: 2194, 9.3: 1336, 17.3: 2201, 9.4: 1348, 17.4: 2208, 
9.5: 1360, 17.5: 2215, 9.6: 1372, 17.6: 2222, 9.7: 1384, 17.7: 2229, 9.8: 1396, 17.8: 2236, 9.9: 1408, 17.9: 2243, 
10.0: 1420, 18.0: 2250, 10.1: 1434, 10.2: 1448, 10.3: 1462, 10.4: 1476, 10.5: 1490, 10.6: 1504, 10.7: 1518, 
10.8: 1532, 10.9: 1546
    },
    '400': {
3.0: 338, 14.0: 2712, 
3.1: 352, 14.1: 2729, 
3.2: 365, 14.2: 2746, 
3.3: 379, 14.3: 2762, 
3.4: 392, 14.4: 2779, 
3.5: 406, 14.5: 2796, 
3.6: 420, 14.6: 2813, 
3.7: 433, 14.7: 2830, 
3.8: 447, 14.8: 2846, 
3.9: 460, 14.9: 2863, 
4.0: 474, 15.0: 2880, 
4.1: 497, 15.1: 2891, 
4.2: 520, 15.2: 2901, 
4.3: 544, 15.3: 2912, 
4.4: 567, 15.4: 2922, 
4.5: 590, 15.5: 2933,
4.6: 611, 15.6: 2944,
4.7: 632, 15.7: 2954,
4.8: 653, 15.8: 2965,
4.9: 674, 15.9: 2975,
5.0: 695, 16.0: 2986,
5.1: 720, 16.1: 2999,
5.2: 745, 16.2: 3012,
5.3: 770, 16.3: 3025,
5.4: 795, 16.4: 3038,
5.5: 820, 16.5: 3051,
5.6: 845, 16.6: 3064,
5.7: 870, 16.7: 3076,
5.8: 895, 16.8: 3089,
5.9: 920, 16.9: 3102,
6.0: 945, 17.0: 3115,
6.1: 972, 17.1: 3126,
6.2: 998, 17.2: 3137,
6.3: 1025, 17.3: 3148, 
6.4: 1051, 17.4: 3159, 
6.5: 1078, 17.5: 3170, 
6.6: 1104, 17.6: 3182, 
6.7: 1131, 17.7: 3193, 
6.8: 1157, 17.8: 3204, 
6.9: 1184, 17.9: 3215, 
7.0: 1210, 18.0: 3226, 
7.1: 1235, 18.1: 3235, 
7.2: 1261, 18.2: 3245, 
7.3: 1286, 18.3: 3254, 
7.4: 1312, 18.4: 3264, 
7.5: 1337, 18.5: 3273, 
7.6: 1362, 18.6: 3282, 
7.7: 1387, 18.7: 3292, 
7.8: 1413, 18.8: 3301, 
7.9: 1438, 18.9: 3311, 
8.0: 1463, 19.0: 3320, 
8.1: 1489, 19.1: 3329, 
8.2: 1515, 19.2: 3338, 
8.3: 1540, 19.3: 3347, 
8.4: 1566, 19.4: 3356, 
8.5: 1592, 19.5: 3365, 
8.6: 1617, 19.6: 3374, 
8.7: 1645, 19.7: 3383, 
8.8: 1672, 19.8: 3392, 
8.9: 1698, 19.9: 3401, 
9.0: 1725, 20.0: 3410, 
9.1: 1746, 20.1: 3418, 
9.2: 1767, 20.2: 3426, 
9.3: 1788, 20.3: 3434, 
9.4: 1809, 20.4: 3442, 
9.5: 1830, 20.5: 3450, 
9.6: 1852, 20.6: 3458, 
9.7: 1873, 20.7: 3466, 
9.8: 1894, 20.8: 3474, 9.9: 1915, 20.9: 3482, 
10.0: 1936, 21.0: 3490, 10.1: 1954, 21.1: 3500, 10.2: 1972, 21.2: 3510, 10.3: 1990, 21.3: 3520, 10.4: 2008,21.4: 3530, 10.5: 2026, 21.5: 3540, 10.6: 2044, 21.6: 3550, 10.7: 2062, 21.7: 3560, 10.8: 2080, 21.8: 3570, 10.9: 2098, 21.9: 3580,
    11.0: 2116,  22.0: 3590, 11.1: 2137, 22.1: 3599, 11.2: 2158, 22.2: 3608, 11.3: 2180, 22.3: 3617, 11.4: 2201,     22.4: 3626,  11.5: 2222, 22.5: 3635, 11.6: 2243, 22.6: 3644, 11.7: 2264, 22.7: 3653, 11.8: 2286, 22.8: 3662,     11.9: 2307,  22.9: 3671,
    12.0: 2328,  23.0: 3680, 12.1: 2348, 23.1: 3687, 12.2: 2368, 23.2: 3694, 12.3: 2388, 23.3: 3701, 12.4: 2408,     23.4: 3708,  12.5: 2428, 23.5: 3715, 12.6: 2449, 23.6: 3722, 12.7: 2469, 23.7: 3729, 12.8: 2489, 23.8: 3736,     12.9: 2509,  23.9: 3743,
    13.0: 2529,  24.0: 3750, 13.1: 2547, 13.2: 2566, 13.3: 2584, 13.4: 2602, 13.5: 2621, 13.6: 2639, 13.7: 2657,     13.8: 2675,  13.9: 2694 
    }
};
function findInArray() {
    var valveType = document.getElementById('firstList').value;
    var selectedThread = document.getElementById('secondList').value;
    var selectedTurn = document.getElementById('thirdList').value;
        if (valveType === 'Thread/Solder') {
            document.getElementById('kvanswer').innerHTML = `Kv = ${threaded[selectedThread][selectedTurn]}`;
        } else if (valveType === 'Flange/Groove') {
            document.getElementById('kvanswer').innerHTML = `Kv = ${flange[selectedThread][selectedTurn]}`;  
            }
          }
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