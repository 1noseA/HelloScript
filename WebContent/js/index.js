/* 変数宣言 */
var msg = "Hello,JavaScript";
var num = 10;

/* 配列はちょっと違う */
/*var array = new Array(5);
array[0] = "A";
array[1] = "B";
array[2] = "C";*/

/* 変数宣言と初期化 */
var array = ["A", "B", "C"];

/*document.writeln(msg);
document.writeln(num + 1);*/
document.writeln(array[2]);

/* lengthも同じ */
document.writeln(array.length);

/* deleteで要素を消せる */
delete array[1];
/* 宣言されていないので「undefined」と表示される */
document.writeln(array[1]);

/* pushメソッドで要素を追加できる */
array.push("D");
document.writeln(array[3]);

/* 連想配列が使える（Mapみたい） */
/*var week = new Array(5);
week["Mon"] = "Monday";
week["Tue"] = "Tuesday";
document.writeln(week["Mon"]);*/
/* この書き方でもできる */
/*document.writeln(week.Tue);*/

var week = {
	Mon: "Mondey",
	Tue: "Tuesday"
};
document.writeln(week.Mon);
