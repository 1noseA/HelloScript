window.onload = function() {
	var createLink = document.getElementById("create");
	var list = document.getElementById("list");
	createLink.onclick = function() {
		var text = document.createTextNode("hoge");
		var li = document.createElement("li");
		li.appendChild(text);
		list.appendChild(li);
	}
}