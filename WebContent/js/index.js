window.onload = function() {

	var btn = document.getElementById("btn");
	btn.onclick = doClickBtn;

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

function doClickBtn() {

	var empno = document.getElementById("empno");

	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			var emp = JSON.parse(xmlHttp.responseText);

			var ul = document.getElementById("list");
			var clone = ul.cloneNode(false);
			ul.parentNode.replaceChild(clone, ul);

			createList(emp);
		}
	}
	xmlHttp.open("POST", "http://localhost:8080/HelloScript/sample");
	xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlHttp.send("empno=" + empno.value);

}

function createList(obj) {
	var ul = document.getElementById("list");
	var li = document.createElement("li");
	var text = document.createTextNode(obj.ename);
	li.appendChild(text);
	ul.appendChild(li);
}