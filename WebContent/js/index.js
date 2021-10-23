/* 変数宣言 */
/*var msg = "Hello,JavaScript";
var num = 10;*/

/* 配列はちょっと違う */
/*var array = new Array(5);
array[0] = "A";
array[1] = "B";
array[2] = "C";*/

/* 変数宣言と初期化 */
/*var array = ["A", "B", "C"];*/

/*document.writeln(msg);
document.writeln(num + 1);*/
/*document.writeln(array[2]);*/

/* lengthも同じ */
/*document.writeln(array.length);*/

/* deleteで要素を消せる */
/*delete array[1];*/
/* 宣言されていないので「undefined」と表示される */
/*document.writeln(array[1]);*/

/* pushメソッドで要素を追加できる */
/*array.push("D");
document.writeln(array[3]);*/

/* 連想配列が使える（Mapみたい） */
/*var week = new Array(5);
week["Mon"] = "Monday";
week["Tue"] = "Tuesday";
document.writeln(week["Mon"]);*/
/* この書き方でもできる */
/*document.writeln(week.Tue);*/

/*var week = {
	Mon: "Mondey",
	Tue: "Tuesday"
};
document.writeln(week.Mon);
*/
/*var result = prompt("数字を入力してください", "");*/
/* evalで数値にする */
/*document.writeln(eval(result) + 1);*/

/*if (eval(result) % 2 == 0) {
	document.writeln("偶数");
} else {
	document.writeln("奇数");
}*/

/*var num = [1,2,3,4,5];
for (var i = 0; i < num.length; i++) {
	document.writeln(num[i]);
}
*/
/* 連想配列は別 */
/*var numArray = {
	a: "A",
	b: "B",
	c: "C"
};
for (var key in numArray) {
	document.writeln(numArray[key]);
};*/

/* 関数宣言の前でも後でもよし */
/*sample();*/
/* 関数 */
/*function sample() {
	document.writeln("sample");
}*/

/* 戻り値 */
/*function sample() {
	return "SAMPLE";
}
var result = sample();
document.writeln(result);*/

/* コールバック関数 */
window.onload = function() {
	/* 読み込まれているか確認用 */
	/*alert("hello");*/
	/* そのページの中のidを取り出す */
	/*var btn = document.getElementById("btn");*/
	/* 一意のidつける方がいい */
	var list = document.getElementsByTagName("li");
	/*var btn = document.getElementByTagetElementsByClassName("btn");*/
	/* 「sample()」とすると実行されてしまう。関数の名前だけ書く */
	/*btn.onclick = sample;*/
	/*alert(list.length);*/
	for (var i = 0; i < list.length; i++) {
		/* listの中身がそのまま取れる */
		/*alert(list.item(i).innerHTML);*/
		alert(list.item(i).firstChild.nodeValue);
		/*alert(list.item(i).parentNode.tagName);*/
	}
}
/*function sample() {
	document.writeln("hello.");
}*/