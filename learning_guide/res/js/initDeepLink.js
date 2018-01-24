window.onload = function replaceLink() {
	var links = document.querySelectorAll('a');
	for (var i = 0; i < links.length; i++) {	
		links[i].href = links[i].href.replace('https://dxc.sabacloud.com',"https://dxc-itg.sabacloud.com"); //applicable in ITG only
		links[i].setAttribute('target', '_blank');
	}
}
