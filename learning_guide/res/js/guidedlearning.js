var json = JSON.parse(conf);
var table = document.getElementById("tblGuidedLearning");
var htmlData = '';
//alert(url_home);
first = true;
var lengthofLoop;
if (json.length > 9) {
    lengthofLoop = 9
}
else {
    lengthofLoop = json.length
}
var htmlData = '<table><tr>';
for (var index = 0; index < lengthofLoop; ++index) {
    if ((index == 5) || (index == 10)) { // Start of next row
        htmlData += '</tr><tr>'; // Add row separator
    }
    if ((json[index].mode) == 2){
        htmlData += '<td valign="top"><a href="' + json[index].name + '" target="_blank"><img src="https://raw.githubusercontent.com/poc-org/hrit/test/learning_guide/res/images/04.jpg" class="imgBox" /></a></td>';
    }
    else if ((json[index].mode) == 3) {
        htmlData += '<td valign="top"><a href="' + json[index].url + '" target="_blank"><img src="https://raw.githubusercontent.com/poc-org/hrit/test/learning_guide/res/images/03.jpg" class="imgBox" /></a></td>';
    }
    else {
        htmlData += '<td valign="top"><a href="' + json[index].name + '/' + json[index].name + '.html" target="_blank"><img src="https://raw.githubusercontent.com/poc-org/hrit/test/learning_guide/res/images/02.jpg" class="imgBox" /></a></td>';
    }
}

//Added for the fixed cell for more 
if (lengthofLoop > 8) {
    
    htmlData += '<td valign="top"><a href="conf" target="_blank"><img src="https://raw.githubusercontent.com/poc-org/hrit/test/learning_guide/res/images/01.jpg" class="imgBox" /></a></td>';
}
htmlData += '</tr></table>';
console.log(htmlData);
//table.innerHTML = html;
$("#tblGuidedLearning").html(htmlData);

