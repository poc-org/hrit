var json = JSON.parse(conf);

var table = document.getElementById("table");
var html = '';
first = true;
for (var index = 0; index < json.length; ++index){
	if(index % 8 == 0){
		if (first == true){
			first = false;
			html += '<table style="float:left;padding-right:150px;"><tbody><tr style="height: 33px;"><td valign="top" class="tooltip"><span class="tooltiptext">' + json[index].description + '</span><a href="{{url_home}}/learning_guide/pages/{{modeorder(' + index + ')}}/{{modeorder(' + index + ')}}.html" target="_blank"><img src="https://raw.githubusercontent.com/poc-org/hrit/test/learning_guide/res/images/{{modeorder(' + index + ')}}.jpg" class="imgBox" /></a></td></tr>';
		} else {
			html += '</tbody></table><table style="float:left;padding-right:150px;"><tbody><tr style="height: 33px;"><td valign="top"><a href="{{url_home}}/learning_guide/pages/{{modeorder(' + index + ')}}/{{modeorder(' + index + ')}}.html" target="_blank"><img src="https://raw.githubusercontent.com/poc-org/hrit/test/learning_guide/res/images/{{modeorder(' + index + ')}}.jpg" class="imgBox" /></a></td></tr>';
		}
	} else {
		html += '<tr style="height: 33px;"><td valign="top"><a href="{{url_home}}/learning_guide/pages/{{modeorder(' + index + ')}}/{{modeorder(' + index + ')}}.html" target="_blank"><img src="https://raw.githubusercontent.com/poc-org/hrit/test/learning_guide/res/images/{{modeorder(' + index + ')}}.jpg" class="imgBox" /></a></td></tr>';
	}
}
html += '</tbody></table>';
table.innerHTML = html;

