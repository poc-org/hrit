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


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return 'conf';
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// Get Query String Values END
//Load Dynamically JS file in page start 
function loadScript(url, callback) {

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState) {  //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                    script.readyState == "complete") {
                script.onreadystatechange = null;
                // callback();
            }
        };
    } else {  //Others
        script.onload = function () {
            //callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

    //loadjscssfile(varConf)
        function loadjscssfile(filename, filetype) {           
                var fileref = document.createElement('script')
                fileref.setAttribute("type", "text/javascript")
                fileref.setAttribute("src", varConf)
                
            if (typeof fileref != "undefined")
                document.getElementsByTagName("head")[0].appendChild(fileref)
        }
//Load Dynamically JS file in page END

//Load Dynamically JS file in page Start 


   

//Load Dynamically JS file in page Start 
