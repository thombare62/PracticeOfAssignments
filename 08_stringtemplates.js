var myName= "Shekhar Bharat "
var myLastName= "Thombare"
var india= "India is my country and all indians are my brothers and sisters."
console.log(myName);
console.log(myLastName);
console.log(india);
console.log(`-----------------------------------------------`);
console.log(`1] charAt`);
var char= myName.charAt(1);
console.log(char);
console.log(`-----------------------------------------------`);
console.log(`2] Concat`);
var char2= myName.concat(myLastName)
console.log(char2);
console.log(`-----------------------------------------------`);
console.log(`3] indexOf`);
var char3= myName.indexOf("k")
console.log(char3);
console.log(`-----------------------------------------------`);
console.log(`4] lastIndexOf`);
var char4= india.lastIndexOf("all")
console.log(char4);
console.log(`-----------------------------------------------`);
console.log(`5] replace`);
var char5= myName.replace("Shekhar", "Chandrashekhar")
console.log(char5);
console.log(`-----------------------------------------------`);
console.log(`6] toUpperCase`);
var char6= myName.toUpperCase("Shekhar")
console.log(char6);
console.log(`-----------------------------------------------`);
console.log(`7] valueOf`);
var char7= myName.valueOf("Shekhar")
console.log(char7);
console.log(`-----------------------------------------------`);
console.log(`8] trim`);
var kapneka= "    Donhi side chi space cut hote    "
var char8= kapneka.trim()
console.log(char8);
console.log(`-----------------------------------------------`);
console.log(`9] toString`);
var kapneka= 15
var char9= kapneka.toString()
console.log(char9);
console.log(`-----------------------------------------------`);
console.log(`11] includes`);
var kapneka= "Beta aapke papa aaye hain"
var char11= kapneka.includes("papa")
console.log(char11);
console.log(`-----------------------------------------------`);
console.log(`12] search`);
var kapneka= "Beta aapke papa aaye hain"
var char12= kapneka.search("papa")
console.log(char12);
console.log(`-----------------------------------------------`);
console.log(`13] slice`);
var kapneka= "Beta aapke papa aaye hain"
var char13= kapneka.slice(4,10)
console.log(char13);
console.log(`-----------------------------------------------`);
console.log(`14] subStr`);
var kapneka= "Beta aapke papa aaye hain"
var char14= kapneka.substr(11,4)
console.log(char14);
console.log(`-----------------------------------------------`);
console.log(`15] subString`);
var kapneka= "Beta aapke papa aaye hain"
var char15= kapneka.substring(16,20)
console.log(char15);
console.log(`-----------------------------------------------`);
console.log(`16] charCodeAt`);
var kapneka= "Beta aapke papa aaye hain"
var char16= kapneka.charCodeAt(16)
console.log(char16);
console.log(`-----------------------------------------------`);
console.log(`17] match`);
var kapneka= "chandu ke chcha ne chandu ke chachi ke chandi ke chamche se chandu ke hi ghar me chatni chatayi"
var char17= kapneka.match(/chandu/g)
console.log(char17);
console.log(`-----------------------------------------------`);
console.log(`18] split`);
var kapneka= "1,3,4,5,6"
var char18= kapneka.split(",")
console.log(char18);
console.log(`-----------------------------------------------`);
console.log(`19] toLowerCase`);
var kapneka= "BETA IDHAR AAO PLEASE."
var char19= kapneka.toLowerCase()
console.log(char19);
console.log(`-----------------------------------------------`);


