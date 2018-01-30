order = '[{"name" : "01", "mode" : "1"},{"name" : "02", "mode" : "1"},{"name" : "03", "mode" : "1"},{"name" : "04", "mode" : "1"},{"name" : "05", "mode" : "1"},{"name" : "06", "mode" : "1"},{"name" : "07", "mode" : "1"},{"name" : "08", "mode" : "1"},{"name" : "09", "mode" : "1"}]';
var conf = JSON.parse(order);

var table = document.getElementById("table");
table.innerHTML = '<table><tbody>';
for (var index = 0; index < conf.length; ++index){
 table.innerHTML += '<tr style="height: 33px;"><td valign="top"><a href="{{url_home}}/learning_guide/pages/{{modeorder(index)}}/{{modeorder(index)}}.html" target="_blank"><img src="https://raw.githubusercontent.com/poc-org/hrit/test/learning_guide/res/images/{{modeorder(index)}}.jpg" class="imgBox" /></a></td></tr>'
}
table.innerHTML += '</tbody></table>'

