//alert("hello java");
//alert()

//function name

//var list = ["tiger", "cat", "bear", "bird"];
//console.log(list[0]);


//var list = ["tiger", "cat", "bear", "bird"];

/*var user = {
	name: "Khalil",
	age: "57",
	sex: "Married",
	hobby: "skydiving",
	likes: ["cat", "dog", "sheep"]
};

var account = [
	{
		username: "Tes",
		password: "456",
	},

	{
		username: "Shawn",
		password: "789",
	}
]
var score =prompt("What's your grade?");
score = parseInt(score) + 10; 
if (score == 0 || score <= 44){
	alert("you failed, try next year");
}else if(score == 45 || score <=59){
	alert("you tried")
}else if(score == 60 || score <=75){
	alert("weldone sir!")
}else if (score == 76 || score <=100){
	alert("very good, but you cheated")
}else if (score > 100){
	alert("see me in my office ASAP!")
}*/

var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var hrs = today.getHours();

var greet;

if (hrs < 12)

        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

alert(date  + " " +  greet + " Mr Mohammmad");







 