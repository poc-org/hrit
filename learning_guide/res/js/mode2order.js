var json = JSON.parse(conf);
var table = document.getElementById("table");
var html = '';
var varURLPage
first = true;
for (var index = 0; index < json.length; ++index) {
    if ((json[index].mode) == 2) {
        
        varURLPage =  '<a href="' + url_mode2 + json[index].name + '" target="_blank">';

    }
    else if ((json[index].mode) == 3) {
        
        varURLPage = '<a href="' + json[index].url + '" target="_blank">';
    }
    else {
                
        varURLPage = '<a href="' + url_home + '/learning_guide/pages/' + json[index].name + '/' + json[index].name + '.html" target="_blank">';

    }

    if (index % 8 == 0) {
        if (first == true) {
            first = false;
            html += '<table style="float:left;padding-right:150px;"><tbody><tr style="height: 33px;"><td valign="top" class="tooltip"><span class="tooltiptext">' + json[index].description + '</span>';
            html += varURLPage;
            html += '<img src="' + url_image + json[index].name + '.jpg" class="imgBox" /></a></td></tr>';
        } else {
            html += '</tbody></table><table style="float:left;padding-right:150px;"><tbody><tr style="height: 33px;"><td valign="top" class="tooltip"><span class="tooltiptext">' + json[index].description + '</span>';
            html += varURLPage;
            html += '<img src="' + url_image + json[index].name + '.jpg" class="imgBox" /></a></td></tr>';
        }
    } else {
        html += '<tr style="height: 33px;"><td valign="top" class="tooltip"><span class="tooltiptext">' + json[index].description + '</span>';
        html += varURLPage;
        html += '<img src="' + url_image + json[index].name + '.jpg" class="imgBox" /></a></td></tr>';
    }
}
html += '</tbody></table>';
table.innerHTML = html;


