var a_side=prompt('Enter please 1st side');
var b_side=prompt('Enter please 2nd side');
var c_side=prompt('Enter please 3rd side');
var TypeOfTriangle=['Equilateral','Right triangle','Scalene','Isosceles'];

var square;
var type;

if(a_side>=0 && b_side>=0 && c_side>=0){
	if(c_side*c_side===(a_side*a_side)+(b_side*b_side)){
	   type=TypeOfTriangle[1];
		square=(a_side*b_side)/2;
	   }
   	else if(a_side===b_side && b_side===c_side){
		type=TypeOfTriangle[0];
	   square=((a_side*a_side)*Math.sqrt(3))/4;
	   }
	else if(a_side!=b_side && b_side!=c_side && a_side!=c_side){
			type=TypeOfTriangle[2];
		var half_p=(a_side+b_side+c_side)/2;
		square=Math.sqrt(half_p*(half_p-a_side)*(half_p-b_side)*(half_p-c_side));
			}
	else if(a_side===b_side && a_side!=c_side || a_side===c_side && a_side!=b_side || b_side===c_side && b_side!=a_side){
		type=TypeOfTriangle[3];
			if(a_side===b_side){
			   		square=(c_side*4)*Math.sqrt((4*(a_side*a_side)-(c_side*c_side)));
			   }
			if(a_side===c_side){
			   square=(b_side/4)*Math.sqrt((4*(a_side*a_side)-(b_side*b_side)));
			   }
			if(b_side===c_side){
			   square=(a_side/4)*Math.sqrt((4*(b_side*b_side)-(a_side*a_side)));
			   }
			}
   }
else{
	console.log('Incorrect data');
}
console.log("Type of triangle is " + type + " and square is " + square.toFixed(2));