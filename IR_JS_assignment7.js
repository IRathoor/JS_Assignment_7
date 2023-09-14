//Q1
var name1 = prompt("Enter your first name ")
var name2 = prompt("Enter your last name ")
console.log("Hello "+name1+" "+name2)


//Q2
var favoriteMobile = prompt(" Enter  your favorite mobile phone model.")
var count = favoriteMobile.length;
console.log("My favorite phone is: "+favoriteMobile+"\n"+"Length of string: "+count)


//Q3
var string = "Pakistani"
var word = prompt("Enter your World")
var output = string.indexOf(word);
console.log ("Index of "+ word+": "+ output)


//Q4
var string = "Hello World"
var word = prompt("Enter your World")
var output = string.lastIndexOf(word);
console.log ("Last Index of "+ word+": "+ output)


//Q5
var string = "Pakistani"
var word = prompt("Enter your World")
var output = string[word];
console.log ("character at Index "+ word+": "+ output)

//Q6
var name1 = prompt(" Enter your first name");
var name2 = prompt(" Enter your last name");
var merge = name1.concat(name2);
console.log (merge)


//Q7
var city = "Hyderabad"
city = city.replace("Hyder", "Islam")
console.log(city)

//Q8
var message = "Ali and Sami are best friends. They play cricket and football together."
message = message.replace(/and/g, "&")
console.log(message)


//Q9
var str = 70
var a = str.toString()
console.log (a)

var str = "473"
var a = str.valueOf()
console.log(a)


//Q10
var url = prompt("Enter your url")
var num = url.slice(4, );
console.log("Url: "+url+"\n"+"Domain: "+ num);

//Q11
var user = prompt("Enter your text")
var upper = user.toUpperCase()
console.log(upper);


//Q12
var user = prompt("Enter your text")
var lower = user.toLowerCase()
console.log(lower);


//Q13
var str = "javaScript";
var a = str.charAt(0).toUpperCase()+ str.slice(1);
console.log (a)



//Q15
var a = "3";
var b = "3";
var x = a + b
console.log("a is "+ a +"\n"+"b is "+ b +"\n" +"a + b" + " is "+ x);


//Q16
var a = "3";
var b = "3";
var x = a - b
console.log("a is "+ a +"\n"+"b is "+ b +"\n" +"a - b" + " is "+ x);


//Q18
var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var user = prompt("welcome to ABC Bakery. What do you want to order sir/ma'am ?")
 var index = bakery.indexOf(user)
 var show = bakery.splice(index, 1)

if(user == show){
console.log(user+" is available at index "+index+" in our bakery")
} else{
console.log("We are sorry. "+ user +" is not available in our bakery")
}


//Q19
var user1 = prompt("Enter first text")
var user2 = prompt("Enter second text")
for(var i = 0; i < user1.length; i++){
  if(user1 > user2){
    console.log(user1+" is greater then "+user2)
  } else if(user1 < user2){
    console.log(user1+" is less then "+user2)
 } else {
  console.log(user1+" is equal "+user2)
 }
break;
}


//Q21
var university = "University of Karachi";
for(var i = 0; i < university.length; i++){
  console.log(university[i]+"\n")
}



//Q22
var user = prompt("Enter your text")
var a = user.slice(-1);
console.log(a)