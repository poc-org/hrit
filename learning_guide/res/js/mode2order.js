var conf = JSON.parse(conf);

var table = document.getElementById("table");
table.innerHTML = '<table><tbody>';
for (var index = 0; index < conf.length; ++index){
 table.innerHTML += '<tr style="height: 33px;"><td valign="top"><a href="{{url_home}}/learning_guide/pages/{{modeorder(index)}}/{{modeorder(index)}}.html" target="_blank"><img src="https://raw.githubusercontent.com/poc-org/hrit/test/learning_guide/res/images/{{modeorder(index)}}.jpg" class="imgBox" /></a></td></tr>'
}
table.innerHTML += '</tbody></table>'

