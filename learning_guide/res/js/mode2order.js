var json = JSON.parse(order);

var table = document.getElementById("table");
var html = '<table><tbody>';
for (var index = 0; index < json.length; ++index){
 html += '<tr style="height: 33px;"><td valign="top"><a href="{{url_home}}/learning_guide/pages/{{modeorder(' + index + ')}}/{{modeorder(' + index + ')}}.html" target="_blank"><img src="https://raw.githubusercontent.com/poc-org/hrit/test/learning_guide/res/images/{{modeorder(' + index + ')}}.jpg" class="imgBox" /></a></td></tr>';
}
html += '</tbody></table>';
table.innerHTML = html;

