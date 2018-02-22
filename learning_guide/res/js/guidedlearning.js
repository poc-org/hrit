var json = JSON.parse(conf);
var table = document.getElementById("tblGuidedLearning");
var html = '';
//alert(url_home);
first = true;
var lengthofLoop;
if (json.length > 9) {
    lengthofLoop = 9
}
else {
    lengthofLoop = json.length
}
var html = '<table><tr>';
for (var index = 0; index < lengthofLoop; ++index) {
    if ((index == 5) || (index == 10)) { // Start of next row
        html += '</tr><tr>'; // Add row separator
    }
    if ((json[index].mode) == 2){
        html += '<td valign="top"><a href="{{url_mode2}}' + json[index].name + '" target="_blank"><img src="{{url_image}}' + json[index].name + '.jpg" class="imgBox" /></a></td>';
    }
    else if ((json[index].mode) == 3) {
        html += '<td valign="top"><a href="' + json[index].url + '" target="_blank"><img src="{{url_image}}' + json[index].name + '.jpg" class="imgBox" /></a></td>';
    }
    else {
        html += '<td valign="top"><a href="{{url_home}}/learning_guide/pages/' + json[index].name + '/' + json[index].name + '.html" target="_blank"><img src="{{url_image}}' + json[index].name + '.jpg" class="imgBox" /></a></td>';
    }
}

//Added for the fixed cell for more 
if (lengthofLoop > 8) {
    
    html += '<td valign="top"><a href="{{url_mode2}}conf" target="_blank"><img src="{{url_image}}{{mode2conf()}}.jpg" class="imgBox" /></a></td>';
}
html += '</tr></table>';
console.log(html);
table.innerHTML = html;

