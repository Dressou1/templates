var result = 0;
function summe(n){
    return (n*10)/2;
}
result = summe(8);
console.log(result);
console.log("this is my result");
var array = [1 , 2, 3, 4];
console.log(array[2]);
var i=0;
var sum=0;
while(i<4){
sum+=array[i];
i++;
}
console.log("this is the somme of array elements" + " : " + sum);
function swtcase(x){
    var result = " ";
    switch(x){
        case 1:
            result="javaScript";
            break;
        case 2:
            result="c, c++, c#";
            break;
        case 3:
            result="assambly";
            break;
        default:
            result="not in the switch";   
    }
    return result;
}
console.log(swtcase(4));
var ar= [ "first", "second"];
console.log(ar[1]);
//objects in js
var animal={
"name":"cat",
"color":"red",
"age":2
};
var mycat={
"name":"matou",
"color": "birry",
"tail":"kiddi"
};
var animalname=animal.name;
console.log(animalname);
var animalAge=animal["age"];
console.log("my cat is about "+ animalAge + " "+ " years old");
mycat.name="matou miye";
delete mycat.age;
function phonetic(val){
    var res="";
    var lookup ={
        "alpha":"aaaaa",
        "bravo":"bbbbb",
        "charlie":"ccccc",
        "delta":"ddddd"
    };
    res=lookup[val];
    return res;
}
console.log(phonetic("delta"));
//check if a function has a propertie
var objet={
    animal: "sheep",
    tree:  "mango",
    planet:" earth"
};
function check(propertie){
if(objet.hasOwnProperty(propertie)){
    return objet[propertie];
}
else {
    return "not found !"
}
}
console.log(check("honey"));
var plants = [
{
    types: "flowers",
    list:[
        "rose",
        "tulip",
        "dandelion"
    ]
},
{
    type: "trees",
    list:[
       "fir",
       "pine",
       "birch"
    ]
}
];
var secondTree=plants[1].list[2];
console.log(secondTree);
//gathering more objects together
var collection = {
    "1987":{
        "name":"thomas",
        "nationality":"burkinabe",
        "function":[
            "minister",
            "president"
        ]
    },
  "1990":{
    "name":"mandela",
    "nationality":"south african",
    "function":[
        "prisionnier",
        "president"
    ]
}
}
//to copy the original collection made like this in js:
var copycollection = JSON.parse(JSON.stringify(collection));
function updatecollection(id, prop, value){
    
}