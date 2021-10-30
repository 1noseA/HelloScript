window.onload = function() {
	var updateLink = document.getElementById("update");
	var target = document.getElementById("data1");
	updateLink.onclick = function() {
		var text = target.innerHTML;
		var textBox = document.createElement("input");
		textBox.setAttribute("type", "text");
		textBox.setAttribute("value", text);

		var parent = target.parentNode;
		parent.replaceChild(textBox, target);
	}
}