window.onload = function() {
	var btn = document.getElementById("btn");
	btn.onclick = function() {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
				var obj = JSON.parse(xmlHttp.responseText);
				alert(obj.address);
			}
		}
		xmlHttp.open("GET", "http://localhost:8080/HelloScript/sample");
		xmlHttp.send(null);
	}
}