import { copyCodeButton } from "./../components/copy-btn.js";

function $(e) {
	return document.getElementById(e)
}

function generatelink() {
	const cde = document.getElementById("cde");
	var e = $("cde").value,
		n = e.indexOf("google.com"),
		t = e.indexOf("dropbox.com/s"),
		l = e.indexOf("onedrive.live.com");
	if (-1 != n) {
		var i = e.indexOf("d/"),
			d = e.indexOf("/edit"),
			o = e.slice(i + 2, d),
			a = "https://docs.google.com/$type/d/" + o + "/export?format=pdf"; - 1 !== e.indexOf("document") ? a = a.replace("$type", "document") : -1 !== e.indexOf("spreadsheet") ? a = a.replace("$type", "spreadsheets") : -1 !== e.indexOf("presentation") ? a = a.replace("$type", "presentation") : (d = e.indexOf("/view"), a = "https://drive.google.com/uc?export=download&id=" + (o = e.slice(i + 2, d))), $("linkpaste").value = a, $("linkpaste").select()
	} else if (-1 != t) {
		a = e.replace("?dl=0", "?dl=1");
		$("linkpaste").value = a, $("linkpaste").select()
	} else if (-1 != l) {
		a = e.replace("redir", "download");
		$("linkpaste").value = a, $("linkpaste").select()
	} else $("linkpaste").value = "THE URL IS INVALID"

	cde.value = "";
}
window.onload = function() {
	$("cde").focus(), $("but").onclick = generatelink
};


// copy code 
let result = document.getElementById("linkpaste");
copyCodeButton(result);