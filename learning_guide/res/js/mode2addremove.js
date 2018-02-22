/**!
 * Dynamic table Creation and Add Removed Coluamns
 * @author	shekh shakeel ahmad
 
 */


// ARRAY FOR HEADER.
var arrHead = new Array();
arrHead = ['Logo', 'Page Name', 'Description', ''];      // SIMPLY ADD OR REMOVE VALUES IN THE ARRAY FOR TABLE HEADERS.

// FIRST CREATE A TABLE STRUCTURE BY ADDING A FEW HEADERS AND
// ADD THE TABLE TO YOUR WEB PAGE.
function createTable() {
    var empTable = document.createElement('table');
    empTable.setAttribute('id', 'empTable1');            // SET THE TABLE ID.

    var tableBody = document.createElement('tbody')
    tableBody.setAttribute('id', 'empTable');
    empTable.appendChild(tableBody);

    var tr = empTable.insertRow(-1);

    for (var h = 0; h < arrHead.length; h++) {
        var th = document.createElement('th');          // TABLE HEADER.
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }
    var div = document.getElementById('cont');
    div.appendChild(empTable);    // ADD THE TABLE TO YOUR WEB PAGE.
    var json = JSON.parse(conf);
    for (var index = 0; index < json.length; ++index) {
        var varDiscription = json[index].description;
        var varName = json[index].name;
        var varMode = json[index].mode;
        //alert(varDiscription);
        appendRow(varName, varDiscription, varMode);
    }

    $(document).ready(function () {

        Sortable.create(
            $('#empTable')[0], {
                animation: 150,
                scroll: true,
                handle: '.imagebox',
                onEnd: function () {
                    console.log('More see in log');
                }
            }
        );
    });
    
}

// ADD A NEW ROW TO THE TABLE.s
function addRow() {
    var empTab = document.getElementById('empTable');

    var rowCnt = empTab.rows.length;        // GET TABLE ROW COUNT.
    var tr = empTab.insertRow(rowCnt);      // TABLE ROW.
    tr = empTab.insertRow(rowCnt);

    for (var c = 0; c < arrHead.length ; c++) {
        var td = document.createElement('td');          // TABLE DEFINITION.
        td = tr.insertCell(c);

        if (c == 3) {           // FIRST COLUMN.
            // ADD A BUTTON.
            var button = document.createElement('input');

            // SET INPUT ATTRIBUTE.
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Remove');
            button.setAttribute('class', 'inputbutton2');

            // ADD THE BUTTON's 'onclick' EVENT.
            button.setAttribute('onclick', 'removeRow(this)');

            td.appendChild(button);
        }
        else if (c == 0) {
            // CREATE AND ADD TEXTBOX IN EACH CELL.
            var ele = document.createElement('IMG');
            ele.setAttribute('class', 'imagebox');
            ele.setAttribute('src', '../res/images/upload.png');
            ele.setAttribute('title', 'uplaod image')
            ele.setAttribute('alt', 'Upload Image');

            td.appendChild(ele);
           
        }
        else  {
            // CREATE AND ADD TEXTBOX IN EACH CELL.
            var ele = document.createElement('input');
            ele.setAttribute('type', 'text');
            ele.setAttribute('value', '');
            td.appendChild(ele);
        }
    }
}

// DELETE TABLE ROW.
function removeRow(oButton) {
    var empTab = document.getElementById('empTable');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);       // BUTTON -> TD -> TR.
}

// EXTRACT AND SUBMIT TABLE DATA.
function sumbit() {
    var myTab = document.getElementById('empTable');
    var values = [];
    var varJSONData;
    
    //alert("Hio ");
    // LOOP THROUGH EACH ROW OF THE TABLE.
    for (row = 1; row < myTab.rows.length - 1; row++) {
        for (c = 1; c < myTab.rows[row].cells.length; c++) {   // EACH CELL IN A ROW.
            //alert(c);
            var element = myTab.rows.item(row).cells[c];
            if (c == 1){
            values.push("{\"name\":\"" + element.childNodes[0].value + "\"");
            }
            else if (c == 2) {
                values.push("\"description\":\"" + element.childNodes[0].value + "\"");                
            }
            else {
            values.push("\"mode\":\"1\"}");
            }
                  
        }
        //alert(values);
    }
    varJSONData = "conf = '[" + values + "]';"
    //alert(varJSONData);
    //console.log(values);

    var textToSaveAsBlob = new Blob([varJSONData], { type: "text/html" });
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = varConf+'.js'

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(textToSaveAsBlob, fileNameToSaveAs);
    } else {
        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        downloadLink.href = textToSaveAsURL;
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        // downloadLink.onclick();
    }


}
function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

// add rowes from json file start 
function appendRow(name, discription, mode) {
    var empTab = document.getElementById('empTable');

    var rowCnt = empTab.rows.length;        // GET TABLE ROW COUNT.
    var tr = empTab.insertRow(rowCnt);      // TABLE ROW.
    tr = empTab.insertRow(rowCnt);

    for (var c = 0; c < arrHead.length; c++) {
        var td = document.createElement('td');          // TABLE DEFINITION.
        td = tr.insertCell(c);

        if (c == 3) {           // FIRST COLUMN.
            // ADD A BUTTON.
            var button = document.createElement('input');

            // SET INPUT ATTRIBUTE.
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Remove');
            button.setAttribute('class', 'inputbutton2');

            // ADD THE BUTTON's 'onclick' EVENT.
            button.setAttribute('onclick', 'removeRow(this)');

            td.appendChild(button);
        }
        else if (c == 0) {
            // CREATE AND ADD TEXTBOX IN EACH CELL.
            var ele = document.createElement('IMG');            
            ele.setAttribute('class', 'imagebox');
            ele.setAttribute('src', 'https://raw.githubusercontent.com/poc-org/hrit/test/learning_guide/res/images/' + name + '.jpg');

            td.appendChild(ele);
        }
        else if (c == 1) {
            // CREATE AND ADD TEXTBOX IN EACH CELL.
            var ele = document.createElement('input');
            ele.setAttribute('type', 'text');
            ele.setAttribute('value', name);

            td.appendChild(ele);
        }
        else if (c == 2) {
            // CREATE AND ADD TEXTBOX IN EACH CELL.
            var ele = document.createElement('input');
            ele.setAttribute('type', 'text');
            ele.setAttribute('value', discription);

            td.appendChild(ele);
        }
     
        else {
            // CREATE AND ADD TEXTBOX IN EACH CELL.
            var ele = document.createElement('input');
            ele.setAttribute('type', 'text');
            ele.setAttribute('value', mode);

            td.appendChild(ele);
        }


    }
}
// add rowes from json file end 
