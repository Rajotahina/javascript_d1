// var color = "red";
// let name = "rasoa";
// const vitesse="10Km/h";
// color= "bleu";
// name= "rabe";
/*function preparing() {
 //console.log("eating");
 return("eating");
}
function  addition  (a, b)  {
    return a+b;
}
function soustraction  (d ,f)  {
    return d-f;
}
function division  (d ,f)  {
    return d/f;
}
function multiplication  (d ,f)  {
    return d*f;
}
console.log(multiplication(6,3));
console.log(division(6,3));
console.log(soustraction(6,3));
console.log(addition(6,3));
console.log(preparing());
console.log(color ,name,vitesse);
// if ,while ,(swicth case)*/
// if ("blue "== "red") {
//  console.log()
// }
// function calculatrice (signe, a, b) {
//     if(signe == "addition") {
//      return a +b ;
//     }
//     if(signe == "soustration") {
//         return a -b ;
//     }
//      if(signe == "multiplication") {
//         return a *b ;
//         } 
    
//     if (signe == "division") {
//         return a /b ;
//     } 
//     console.log(calculatrice());
// }
/*let i = 1;
let n = 5;
do {
    console.log(i);
    i++;
} while(i <= n);*/
/*var legumes=["ovy,anana,carotte"];
for(let pointer=0; pointer < legumes.length ;pointer++){
    console.log(pointer);
    console.log(legumes[pointer]);
}*/
var object =["clavier", "souris", "ecran"];
for( let pointer = object.length-1; pointer >= 0; pointer--){
    console.log(pointer);
    console.log(object[pointer]);
}
object.push('cable');
// console.log(object.join('_'));
// console.log(object.pop());
console.log(object);
console.table(object);
console.log(object.includes('omby'));
