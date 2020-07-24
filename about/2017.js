//对象字面量法
//该语法要求的代码量少，而且能给人封装数据的感觉，实际上对象字面量法也是向函数传递 大量可选参数的首选方法。
function displayInfo(args){
	var output="";
	if(typeof args.name="string"){
		output+="Name: "+args.name +"\n";
	}
	if(typeof args.age="number"){
		putput+="age:"+args.age+"\n";
	}
	alert(output);
}
displayInfo({
	name:"fanson",
	age:21
})
displayInfo({
	name:"janson"
})
alert(person.name)
alert(person["name"])   
//Array数组
var colors=["red","biue","green"]
alert(colors[2]);
colors[1]="green";
colors[3]="red";

var colors=["red","green","blue"]
colors.length=4;
alert(colors[3]);    //undefined