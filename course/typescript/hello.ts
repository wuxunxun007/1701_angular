/**
 * 
 * @param {Number} a
 * @param {Number} b
 */
//function test1(a,b){
//	return a+b;
//}

interface Num {
	a:number;
	b:number;
}

function test(num:Num){
	return num.a+num.b;
}
/*
 * java写法
public int test(int a,int b){
	return a+b;
}*/
alert("hello world")