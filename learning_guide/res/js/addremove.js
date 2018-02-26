/**!
 * Dynamic table Creation and Add Remove Columns
 * @author	shekh shakeel ahmad
 
 */

// ARRAY FOR HEADER.
var arrHead = new Array();
arrHead = ['Logo', 'Page Name', 'Description', 'Mode', 'Configure', ''];      // SIMPLY ADD OR REMOVE VALUES IN THE ARRAY FOR TABLE HEADERS.

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
        var varURL = json[index].url;

        //alert(varDiscription);
        appendRow(varName, varDiscription, varMode, varURL, index+1);

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
    
   // tr = empTab.insertRow(rowCnt);

    for (var c = 0; c < arrHead.length ; c++) {
        var td = document.createElement('td');          // TABLE DEFINITION.
        td = tr.insertCell(c);
        
        if (c == 5) {           // FIRST COLUMN.
            // ADD  A BUTTON.
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
        else if (c == 1) {
            // CREATE AND ADD TEXTBOX IN EACH CELL.
            var ele = document.createElement('input');
            ele.setAttribute('id', 'textBoxPage' + rowCnt);
            ele.setAttribute('type', 'text');
            ele.setAttribute('value', '');
            td.appendChild(ele);
        }
        else if (c == 2) {
            // CREATE AND ADD TEXTBOX IN EACH CELL.
            var ele = document.createElement('input');
            ele.setAttribute('type', 'text');
            ele.setAttribute('value', '');
            td.appendChild(ele);;
        }
        else if (c == 3) {

            // CREATE AND ADD Drop Down IN EACH CELL.
            var ele = document.createElement('select');
            ele.setAttribute('onchange', 'onChange(this)');
            dropDown(ele);

            td.appendChild(ele);


        }
        else if (c == 4) {

            // Created and ADD Button to configure the page
            var buttonPage = document.createElement('input');
            // SET INPUT ATTRIBUTE.
            buttonPage.setAttribute('id', 'butPageConfig' + rowCnt);
            buttonPage.setAttribute('type', 'button');
            buttonPage.setAttribute('value', 'PageSetup');
            buttonPage.setAttribute('class', 'inputbutton2');            
            // ADD THE BUTTON's 'onclick' EVENT.
            buttonPage.setAttribute('onclick', 'genPageConfi(this)');
            td.appendChild(buttonPage);

            // Created and ADD Button to configure the tree 
            var button = document.createElement('input');
            // SET INPUT ATTRIBUTE.
            button.setAttribute('id', 'butURLConfig' + rowCnt);
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Configur');
            button.setAttribute('class', 'inputbutton2');
            button.setAttribute("hidden", true);
            // ADD THE BUTTON's 'onclick' EVENT.
            button.setAttribute('onclick', 'genMode2URL(this)');
            td.appendChild(button);

            // CREATE AND ADD TEXTBOX IN EACH CELL.
            var ele = document.createElement('input');
            ele.setAttribute('type', 'text');
            ele.setAttribute('id', 'textBox' + rowCnt);
            ele.setAttribute('value', 'http://');
            ele.setAttribute("hidden", true);
            td.appendChild(ele);


        }
        else {
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
    for (row = 1; row < myTab.rows.length ; row++) {
        for (c = 1; c < myTab.rows[row].cells.length; c++) {   // EACH CELL IN A ROW.
            //alert(c);
            var element = myTab.rows.item(row).cells[c];
            if (c == 1) {
                values.push("{\"name\":\"" + element.childNodes[0].value + "\"");
            }
            else if (c == 2) {
                values.push("\"description\":\"" + element.childNodes[0].value + "\"");
            }
            else if (c == 3) {
                
                values.push("\"mode\":\"" + element.childNodes[0].value + "\"");
            }
            else if (c == 4) {
                values.push("\"url\":\"" + element.childNodes[2].value + "\"}");
                
            }
            
        }
        //alert(values);
    }
    varJSONData = "conf = '[" + values + "]';"
    //alert(varJSONData);
    //console.log(values);

    var textToSaveAsBlob = new Blob([varJSONData], { type: "text/html" });
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    //var fileNameToSaveAs = 'conf.js'
    var fileNameToSaveAs = varConf + '.js'

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
function appendRow(name, discription, mode, url,ID) {
    var empTab = document.getElementById('empTable');

    var rowCnt = empTab.rows.length;        // GET TABLE ROW COUNT.
    var tr = empTab.insertRow(rowCnt);      // TABLE ROW.
   // tr = empTab.insertRow(rowCnt);

    for (var c = 0; c < arrHead.length; c++) {
        var td = document.createElement('td');          // TABLE DEFINITION.
        td = tr.insertCell(c);

        if (c == 5) {           // FIRST COLUMN.
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
            ele.setAttribute('id', 'textBoxPage' + ID);
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

        else if (c == 3) {
            // CREATE AND ADD TEXTBOX IN EACH CELL.
            var ele = document.createElement('select');
            ele.setAttribute('id', 'dropList');
            //var option = new Option('1', '1', false, false);
            ele.setAttribute('onchange', 'onChange(this)');
            dropDownSelected(mode, ele);

            //options.push(option.outerHTML);
            //ele.appendChild(option);
            td.appendChild(ele);

            //ele.options[ele.selectedIndex].value = "2";
            //$("#dropList").get(0).selectedValue = "2";
            //alert(mode);


        }
        else if (c == 4) {


            // Created and ADD Button to configure the page
            var buttonPage = document.createElement('input');
            // SET INPUT ATTRIBUTE.
            buttonPage.setAttribute('id', 'butPageConfig' + rowCnt);
            buttonPage.setAttribute('type', 'button');
            buttonPage.setAttribute('value', 'PageSetup');
            buttonPage.setAttribute('class', 'inputbutton2');
            // ADD THE BUTTON's 'onclick' EVENT.
            buttonPage.setAttribute('onclick', 'genPageConfi(this)');
            if ((mode == 2) || (mode == 3)) {
                buttonPage.setAttribute("hidden", true);
            }
            td.appendChild(buttonPage);
            var button = document.createElement('input');
            // SET INPUT ATTRIBUTE.
            button.setAttribute('id', 'butURLConfig'+ ID);
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Configur');
            button.setAttribute('class', 'inputbutton2');

            if ((mode == 1) || (mode == 3)) {

                button.setAttribute("hidden", true);
            }
            // ADD THE BUTTON's 'onclick' EVENT.
            button.setAttribute('onclick', 'genMode2URL(this)');
            td.appendChild(button);


            // CREATE AND ADD TEXTBOX IN EACH CELL.
            var ele = document.createElement('input');
            ele.setAttribute('id', 'textBox' + ID);
            ele.setAttribute('type', 'text');
            ele.setAttribute('value', url);
            if ((mode == 1) || (mode == 2)) {
                ele.setAttribute("hidden", true);
            }

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
// DropDown change need to enable and disable the button and text filed start
function onChange(oDropDown) {var varValue = oDropDown.value;    
    var strRowIndex = oDropDown.parentNode.parentNode.rowIndex;
    var myTab = document.getElementById('empTable');
    
    var element = myTab.rows.item(strRowIndex).cells[4];
    if (varValue == 1) {
        
        element.childNodes[0].style.display = "block";
        element.childNodes[1].style.display = "none";
        element.childNodes[2].style.display = "none";
     }
    else if (varValue == 2) {

        element.childNodes[0].style.display = "none";
        element.childNodes[1].style.display = "block";
        element.childNodes[2].style.display = "none";
     }
    else if (varValue == 3) {
        element.childNodes[0].style.display = "none";
        element.childNodes[1].style.display = "none";
        element.childNodes[2].style.display = "block";

    }
}

// DropDown change need to enable and disable the button and text filed END
//On Click send to configuration mode 2 page start //
function genMode2URL(urlObject) {
    

    var strRowIndex = urlObject.parentNode.parentNode.rowIndex;
    var strValue = $("#textBoxPage" + strRowIndex).val();
    if (jQuery.trim(strValue).length > 0) {
        var url = '../tools/modepageaddedit.html?page=' + strValue;
        window.open(url, '_blank');
    }
    else {
        alert("Please provide the page name first");

    }
  

}

//On Click send to configuration mode 2 page END//
//On Click send to create page tool start //
function genPageConfi(urlObject) {
    

    var strRowIndex = urlObject.parentNode.parentNode.rowIndex;
    var strValue = $("#textBoxPage" + strRowIndex).val();
    if (jQuery.trim(strValue).length > 0) {
        var url = '../tools/LearningGuideGenerator.html?page=' + strValue;
        window.open(url, '_blank');
    }
    else {
        alert("Please provide the page name first");

    } 


}


//On Click send to create page tool END //
//Fucnation to add values in the drop down start 
function dropDown(element) {

    var array = ["1", "2", "3"];
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];     
        element.appendChild(option);
    }

}

//Fucnation to add values in the drop down start 
function dropDownSelected(selected, element) {

    var option = document.createElement("option");
    option.value = 1;
    option.text = 1;

    if (selected == 1) {
        
        option.selected = selected;
    }

    element.appendChild(option);
    var option = document.createElement("option");
    option.value = 2;
    option.text = 2;
    if (selected == 2) {
        
        option.selected = selected;
    }
    element.appendChild(option);
    var option = document.createElement("option");
    option.value = 3;
    option.text = 3;
    if (selected == 3) {
        
        option.selected = selected;
    }
    element.appendChild(option);

}
//Fucnation to add values in the drop down END
// Get Query String Values Start 

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }

    return vars;

}
// Get Query String Values END
