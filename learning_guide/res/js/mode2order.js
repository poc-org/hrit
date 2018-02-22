  var varConf = getUrlVars()["page"];
         //alert(varConf);
         var varJsPage = '../res/json/' + varConf + '.js'
         loadScript(varJsPage, function () { //initialization code
         });

var json = JSON.parse(conf);
var table = document.getElementById("table");
var html = '';
first = true;
for (var index = 0; index < json.length; ++index) {
    if (index % 8 == 0) {
        if (first == true) {
            first = false;
            html += '<table style="float:left;padding-right:150px;"><tbody><tr style="height: 33px;"><td valign="top" class="tooltip"><span class="tooltiptext">' + json[index].description + '</span><a href="{{url_home}}/learning_guide/pages/' + json[index].name + '/' + json[index].name + '.html" target="_blank"><img src="{{url_image}}' + json[index].name + '.jpg" class="imgBox" /></a></td></tr>';
        } else {
            html += '</tbody></table><table style="float:left;padding-right:150px;"><tbody><tr style="height: 33px;"><td valign="top" class="tooltip"><span class="tooltiptext">' + json[index].description + '</span><a href="{{url_home}}/learning_guide/pages/' + json[index].name + '/' + json[index].name + '.html" target="_blank"><img src="{{url_image}}' + json[index].name + '.jpg" class="imgBox" /></a></td></tr>';
        }
    } else {
        html += '<tr style="height: 33px;"><td valign="top" class="tooltip"><span class="tooltiptext">' + json[index].description + '</span><a href="{{url_home}}/learning_guide/pages/' + json[index].name + '/' + json[index].name + '.html" target="_blank"><img src="{{url_image}}' + json[index].name + '.jpg" class="imgBox" /></a></td></tr>';
    }
}
html += '</tbody></table>';
table.innerHTML = html;

