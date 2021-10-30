window.onload = function() {

	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			var list = JSON.parse(xmlHttp.responseText);
			for (var i = 0; i < list.length; i++) {
				createList(list[i]);
			}
		}
	}
	xmlHttp.open("GET", "http://localhost:8080/HelloScript/sample");
	xmlHttp.send(null);

}

function createList(obj) {
	var ul = document.getElementById("list");
	var li = document.createElement("li");
	var text = document.createTextNode(obj.ename);
	li.appendChild(text);
	ul.appendChild(li);
}